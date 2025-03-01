import { BaseMenuItem } from '@/types/customer_type';
import { IconButton } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'iconsax-react';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import ProductItem from './ProductItem';

export default function Latest({ items }: any) {
  const { t } = useTranslation();
  const sliderRef = useRef<SwiperRef | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = useCallback(() => {
    if (!sliderRef.current) return;
    setIsBeginning(sliderRef.current.swiper.isBeginning);
    setIsEnd(sliderRef.current.swiper.isEnd);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setIsBeginning(sliderRef.current.swiper.isBeginning);
      setIsEnd(sliderRef.current.swiper.isEnd);
    }
  }, [items]);

  return (
    <div className="container relative">
      <div className="flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl py-6 px-4 sm:px-6">{t('Latest additions')}</h3>
        <div className="flex items-center gap-2">
          <IconButton
            aria-label={t('left arrow')}
            onClick={handlePrev}
            isDisabled={isBeginning}
            className="rounded-full sm:min-w-14 sm:min-h-14 bg-primary-400 hover:bg-primary-500 text-white disabled:hover:bg-primary-400 sm:hidden"
          >
            <ArrowLeft />
          </IconButton>

          <IconButton
            aria-label={t('right arrow')}
            onClick={handleNext}
            isDisabled={isEnd}
            className="rounded-full sm:min-w-14 sm:min-h-14 bg-primary-400 hover:bg-primary-500 text-white disabled:hover:bg-primary-400 sm:hidden"
          >
            <ArrowRight />
          </IconButton>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 mb-8">
        <IconButton
          aria-label={t('left arrow')}
          onClick={handlePrev}
          isDisabled={isBeginning}
          className="rounded-full sm:min-w-14 sm:min-h-14 bg-primary-400 hover:bg-primary-500 text-white disabled:hover:bg-primary-400 hidden sm:flex"
        >
          <ArrowLeft />
        </IconButton>
        <Swiper
          slidesPerView={items.length > 1 ? 1 : items.length}
          spaceBetween={4}
          ref={sliderRef}
          onSlideChange={handleSlideChange}
          breakpoints={{
            384: {
              slidesPerView: items.length > 2 ? 2 : items.length,
            },
            640: {
              slidesPerView: items.length > 2 ? 2 : items.length,
            },
            992: {
              slidesPerView: items.length > 3 ? 3 : items.length,
            },
            1200: {
              slidesPerView: items.length > 4 ? 4 : items.length,
            },
          }}
        >
          {items?.map((item: BaseMenuItem) => (
            <SwiperSlide key={item.id} className="max-w-72 w-full">
              <ProductItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          aria-label={t('right arrow')}
          onClick={handleNext}
          isDisabled={isEnd}
          className="rounded-full sm:min-w-14 sm:min-h-14 bg-primary-400 hover:bg-primary-500 text-white disabled:hover:bg-primary-400 hidden sm:flex"
        >
          <ArrowRight />
        </IconButton>
      </div>
    </div>
  );
}
