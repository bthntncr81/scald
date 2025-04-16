import ToolBar from '@/components/Admin/ToolBar';
import Layout from '@/components/common/Layout';
import useTableData from '@/data/use_table_data';
import useDebounce from '@/hooks/useDebounce';

import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteTable from '@/components/Admin/Tables/DeleteTable';
import EditTable from '@/components/Admin/Tables/EditTable';
import NewTable from '@/components/Admin/Tables/NewTable';
import ActiveOrdersDrawer from '@/components/Admin/Tables/Orders';
import { convertToCurrencyFormat } from '@/utils/currency_formatter';
import { IconButton } from '@chakra-ui/react';
import { Add, ElementPlus } from 'iconsax-react';

export default function Tables() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(500);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchedText = useDebounce(searchQuery, 300);
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);
  const [selectedTableArea, setSelectedTableArea] = useState<string | null>(null);

  const { items, meta, isLoading, refresh, isValidating } = useTableData('/api/tables', {
    search: searchedText,
    page,
    limit,
  });

  const {
    props: { auth },
  } = usePage() as { props: PageProps };
  const handleTableClick = (tableId: number, tableNumber: number, tableAreaName: string) => {
    window.location.href = `/admin/table-pos?id=${tableId}&number=${tableNumber}&name=${tableAreaName}`; // Navigate directly to the TablePOS page
  };

  useEffect(() => {
    if (!isValidating && !items.length) {
      setSelectedRows([]);
    }
  }, [isValidating]);

  // Table Area filtreleri için unique alanlar
  const uniqueTableAreas = Array.from(new Set(items.map((item: any) => item.tableAreaName)));

  // Filtrelenmiş tablo verisi
  const filteredItems = selectedTableArea
    ? items.filter((table: any) => table.tableAreaName === selectedTableArea)
    : items;

  return (
    <Layout title={t('Tables')}>
      <div className="p-6">
        <ToolBar
          bulkAction={{
            isBulkAction: !!selectedRows.length,
            BulkUpdateBar: () => <></>, // Optional: add bulk actions
          }}
          filter={null} // Optional: add filters
          AddNew={() => <NewTable refresh={refresh} />}
          setSearchQuery={setSearchQuery}
        />

        {/* Table Area Filter */}
        <div className="mb-6">
          <label className="block font-medium mb-2">{t('Filter by Table Area')}:</label>
          <div className="flex flex-wrap gap-3">
            <label>
              <input
                type="radio"
                name="tableArea"
                value=""
                checked={selectedTableArea === null}
                onChange={() => setSelectedTableArea(null)}
                className="hidden"
              />
              <div
                className={`px-4 py-2 rounded-md border cursor-pointer transition-all ${
                  selectedTableArea === null
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {t('All')}
              </div>
            </label>
            {uniqueTableAreas.map((area: any) => (
              <label key={area}>
                <input
                  type="radio"
                  name="tableArea"
                  value={area}
                  checked={selectedTableArea === area}
                  onChange={() => setSelectedTableArea(area)}
                  className="hidden"
                />
                <div
                  className={`px-4 py-2 rounded-md border cursor-pointer transition-all ${
                    selectedTableArea === area
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {area}
                </div>
              </label>
            ))}
          </div>
        </div>
        {/* Grid Layout for Displaying Tables as Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredItems.map((table: any) => (
            <div
              key={table.id}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
            >
              <div
                onClick={() => handleTableClick(table.id, table.number, table.tableAreaName)} // Navigate on click
                className="flex justify-between items-center"
              >
                <span className="text-lg ">{table.tableAreaName}</span>

                <h3 className="text-lg font-semibold">#{table.number}</h3>

                <IconButton
                  onClick={() => handleTableClick(table.id, table.number, table.tableAreaName)}
                  aria-label="Delete"
                  icon={<Add size="18" />}
                  colorScheme="green"
                  className="hover:bg-red-100"
                  variant="outline"
                />
              </div>
              <div className="text-center mt-4" style={{ fontSize: 24 }}>
                {t('Total')} :&nbsp;{convertToCurrencyFormat(table.totalPrice)}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <DeleteTable id={table.id} refresh={refresh} />
                <ActiveOrdersDrawer tableId={table.id} refresh={refresh} />
                <EditTable table={table} refresh={refresh} />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* {meta && (
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-primary-500 text-white rounded-md"
            >
              {t('Previous')}
            </button>
            <button
              onClick={() => setPage((prevPage) => Math.min(prevPage + 1, meta.lastPage))}
              disabled={page === meta.lastPage}
              className="px-4 py-2 bg-primary-500 text-white rounded-md"
            >
              {t('Next')}
            </button>
          </div>
        )} */}
      </div>
    </Layout>
  );
}
