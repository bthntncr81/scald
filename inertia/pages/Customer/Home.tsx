import CustomerLayout from '@/components/Customer/CustomerLayout';
import Banner from '@/components/Customer/Home/Banner';
import Categories from '@/components/Customer/Home/Categories';
import Latest from '@/components/Customer/Home/Latest';
import Popular from '@/components/Customer/Home/Popular';
import Recommended from '@/components/Customer/Home/Recommended';
import { Button } from '@chakra-ui/react';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home({ slider, categories, popular, latest }: any) {
  const { t } = useTranslation();
  useEffect(() => {
    const url = new URL(window.location.href);
    const tableId = url.searchParams.get('tableId');

    if (tableId) {
      localStorage.setItem('tableId', tableId);
      url.searchParams.delete('tableId');
      window.history.replaceState({}, document.title, url.pathname + url.search);
    }
  }, []);
  return (
    <CustomerLayout>
      <main className="bg-white">
        <Banner data={slider} />
        <Categories data={categories} />
        <Recommended />
        <Popular items={popular} />
        <Latest items={latest} />

        <div className="text-center pb-20">
          <Button
            variant="solid"
            colorScheme="primary"
            className="button-primary"
            onClick={() => router.visit('/foods')}
          >
            {t('View all food items')}
          </Button>
        </div>
      </main>
    </CustomerLayout>
  );
}
