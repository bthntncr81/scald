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
import NewStockItem from '@/components/Admin/StockItems/NewStockItem';
import EditStockItem from '@/components/Admin/StockItems/EditStockItem';
import DeleteStockItem from '@/components/Admin/StockItems/DeleteStockItem';

export default function StockItems() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchedText = useDebounce(searchQuery, 300);
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);

  const { items, meta, isLoading, refresh, isValidating } = useTableData('/api/stock-items', {
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
    <Layout title={t('Stock Items')}>
      <div className="p-6">
        <ToolBar
          bulkAction={{
            isBulkAction: !!selectedRows.length,
            BulkUpdateBar: () => <></>,
          }}
          filter={null}
          AddNew={() => <NewStockItem refresh={refresh} />}
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
              accessorKey: 'id',
              header: () => t('ID'),
              cell: (info) => info.row.index + 1,
            },
            {
              accessorKey: 'name',
              header: () => t('Stock Name'),
            },
            {
              accessorKey: 'unit',
              header: () => t('Unit'),
            },
            {
              accessorKey: 'quantity',
              header: () => t('Quantity'),
            },
            {
              accessorKey: 'actions',
              header: () => t('Actions'),
              cell: ({ row }) => (
                <div className="flex gap-2">
                  <EditStockItem stockItem={row.original} refresh={refresh} />
                  <DeleteStockItem id={row.original.id} refresh={refresh} />
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
