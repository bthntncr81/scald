import fetcher from '@/lib/fetcher';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import { ArrowDown2 } from 'iconsax-react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useTranslation } from 'react-i18next';

interface Option extends Record<string, any> {
  name: string;
  id: string;
  rate?: string;
}

interface MenuItemTaxAndChargesProps {
  defaultValue?: Option[];
  onSelect: (values: Option[]) => void;
  onTaxIncludedChange?: (included: boolean) => void;
  onTaxRateChange?: (rate: number) => void;
}

export const MenuItemTaxAndCharges = ({
  defaultValue = [],
  onSelect,
  onTaxIncludedChange,
  onTaxRateChange,
}: MenuItemTaxAndChargesProps) => {
  const { t } = useTranslation();
  const { data, isLoading } = useSWR('/api/charges', fetcher);
  const [selected, setSelected] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useBoolean();
  const [isTaxIncluded, setIsTaxIncluded] = useState(false);

  useEffect(() => {
    if (!isLoading && !selected.length && data?.length && defaultValue) {
      const filterData = data.filter((option: any) => defaultValue.includes(option.id));
      setSelected(filterData);
      if (filterData.length === 1) {
        const rate = parseFloat(filterData[0].amount || '0');
        onTaxRateChange?.(rate);
      }
    }
  }, [isLoading, defaultValue, data]);

  useEffect(() => {
    onTaxIncludedChange?.(isTaxIncluded);
  }, [isTaxIncluded, onTaxIncludedChange]);

  const removeItem = (item: Option) => {
    const newSelection = selected.filter((o: Option) => o.id !== item.id);
    setSelected(newSelection);
    onSelect(newSelection);
  };

  const handleOnSelect = (option: Option) => {
    const index = selected.findIndex((o) => o.id === option.id);
    let selectedData: Option[];

    if (index === -1) {
      selectedData = [...selected, option];
    } else {
      selectedData = selected.filter((_, i) => i !== index);
    }

    setSelected(selectedData);
    onSelect(selectedData);
    setIsOpen.off();

    if (selectedData.length === 1) {
      const rate = parseFloat(selectedData[0].amount || '0');
      onTaxRateChange?.(rate);
    }
  };

  return (
    <Flex direction="column" gap={4}>
      <Checkbox
        isChecked={isTaxIncluded}
        onChange={(e) => setIsTaxIncluded(e.target.checked)}
        colorScheme="green"
      >
        {t('Is tax included in price?')}
      </Checkbox>

      <Popover isOpen={isOpen} onOpen={setIsOpen.on} onClose={setIsOpen.off} matchWidth>
        <PopoverTrigger>
          <Flex>
            <PopoverTrigger>
              <Button
                variant="outline"
                roundedRight={0}
                className="justify-start text-black font-normal w-full border-secondary-200 h-auto"
              >
                <Flex wrap="wrap" maxH="200px" overflowY="auto">
                  {selected.length ? (
                    selected.map((s) => (
                      <Tag key={s.id} colorScheme="blue" m={1}>
                        <TagLabel className="line-clamp-1">{s.name}</TagLabel>
                        <TagCloseButton as="div" onClick={() => removeItem(s)} />
                      </Tag>
                    ))
                  ) : (
                    <Text color="secondary.500">{t('Search or add')}</Text>
                  )}
                </Flex>
              </Button>
            </PopoverTrigger>
            <IconButton
              type="button"
              onClick={setIsOpen.toggle}
              aria-label={t('toggleSelectionMenu')}
              border="1px"
              roundedLeft={0}
              borderLeft={0}
              borderColor="secondary.200"
              icon={<ArrowDown2 />}
            />
          </Flex>
        </PopoverTrigger>

        <PopoverContent className="w-full">
          <PopoverBody className="p-1 text-secondary-900 max-h-[400px] overflow-y-auto">
            {isLoading && (
              <HStack justifyContent="center" p="2.5">
                <Spinner size="sm" />
                <span>{t('Loading...')}</span>
              </HStack>
            )}
            {!isLoading && data?.length ? (
              data?.map((option: Option) => (
                <Button
                  type="button"
                  key={option.id}
                  variant="ghost"
                  className="w-full justify-start font-normal text-secondary-900"
                  onClick={() => handleOnSelect(option)}
                >
                  {option.name}
                </Button>
              ))
            ) : (
              <Box color="secondary.500" p="2.5">
                <span>{t('No data available.')}</span>
              </Box>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
