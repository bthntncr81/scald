import ToolBar from '@/components/Admin/ToolBar';
import DataTable from '@/components/common/DataTable';
import Layout from '@/components/common/Layout';
import useTableData from '@/data/use_table_data';
import useDebounce from '@/hooks/useDebounce';

import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Updater, SortingState } from '@tanstack/react-table';
import DeleteMenuItemRecipe from '@/components/Admin/Recipes/DeleteMenuItemRecipe';
import EditMenuItemRecipe from '@/components/Admin/Recipes/EditMenuItemRecipe';
import NewMenuItemRecipe from '@/components/Admin/Recipes/NewMenuItemRecipe';

export default function MenuItemRecipes() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchedText = useDebounce(searchQuery, 300);
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);

  const { items, meta, isLoading, refresh, isValidating } = useTableData('/api/menu-item-recipes', {
    search: searchedText,
    page,
    limit,
  });

  const {
    props: { auth },
  } = usePage() as { props: PageProps };

  useEffect(() => {
    if (!isValidating && !items.length) {
      setSelectedRows([]);
    }
  }, [isValidating]);

  return (
    <Layout title={t('Menu Item Recipes')}>
      <div className="p-6">
        <ToolBar
          bulkAction={{
            isBulkAction: !!selectedRows.length,
            BulkUpdateBar: () => <></>,
          }}
          filter={null}
          AddNew={() => <NewMenuItemRecipe refresh={refresh} />}
          setSearchQuery={setSearchQuery}
        />

        <DataTable
          data={items}
          isLoading={isLoading}
          getRowId={(row: any) => row.id}
          enableMultiRowSelection
          onRowSelection={setSelectedRows}
          pagination={{
            total: meta?.total,
            page,
            setPage,
            limit,
            setLimit,
          }}
          structure={[
            {
              accessorKey: 'checkbox',
              enableSorting: false,
              header: ({ table }) => (
                <input
                  type="checkbox"
                  checked={table?.getIsAllRowsSelected()}
                  onChange={table?.getToggleAllRowsSelectedHandler()}
                  className="accent-primary-500 cursor-pointer scale-110"
                />
              ),
              cell: ({ row }) => (
                <input
                  type="checkbox"
                  checked={row?.getIsSelected()}
                  onChange={row?.getToggleSelectedHandler()}
                  className="accent-primary-500 cursor-pointer scale-110"
                />
              ),
            },
            {
              accessorKey: 'id',
              header: () => t('SL'),
              cell: (info) => info.row.index + 1,
            },
            {
              accessorKey: 'menu_item_name',
              header: () => t('Menu Item'),
            },
            {
              accessorKey: 'stock_item_name',
              header: () => t('Stock Item'),
            },
            {
              accessorKey: 'unit',
              header: () => t('Unit'),
            },
            {
              accessorKey: 'amount',
              header: () => t('Amount'),
            },
            {
              accessorKey: 'actions',
              header: () => t('Actions'),
              cell: ({ row }) => (
                <div className="flex gap-2">
                  <DeleteMenuItemRecipe id={row.original.id} refresh={refresh} />
                  <EditMenuItemRecipe recipe={row.original} refresh={refresh} />
                </div>
              ),
            },
          ]}
          sorting={[]}
          setSorting={function (updaterOrValue: Updater<SortingState>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </Layout>
  );
}
