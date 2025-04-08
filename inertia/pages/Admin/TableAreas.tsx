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
import DeleteTableArea from '@/components/Admin/TableAreas/DeleteTableArea';
import EditTableArea from '@/components/Admin/TableAreas/EditTableArea';
import NewTableArea from '@/components/Admin/TableAreas/NewTableArea';

export default function TableAreas() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchedText = useDebounce(searchQuery, 300);
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);

  const { items, meta, isLoading, refresh, isValidating } = useTableData('/api/table-areas', {
    search: searchedText,
    page,
    limit,
  });

  const {
    props: { auth },
  } = usePage() as { props: PageProps };

  // Reset selected rows when data changes
  useEffect(() => {
    if (!isValidating && !items.length) {
      setSelectedRows([]);
    }
  }, [isValidating]);

  return (
    <Layout title={t('Table Areas')}>
      <div className="p-6">
        <ToolBar
          bulkAction={{
            isBulkAction: !!selectedRows.length,
            BulkUpdateBar: () => <></>, // You can customize bulk actions here
          }}
          filter={null} // Add custom filters if needed
          AddNew={() => <NewTableArea refresh={refresh} />}
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
              accessorKey: 'name',
              header: () => t('Table Area Name'),
            },
            {
              accessorKey: 'actions',
              header: () => t('Actions'),
              cell: ({ row }) => (
                <div className="flex gap-2">
                  <DeleteTableArea id={row.original.id} refresh={refresh} />
                  <EditTableArea tableArea={row.original} refresh={refresh} />
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
