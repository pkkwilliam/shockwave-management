import React from 'react';
import ProTable from '@ant-design/pro-table';
import { BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG } from '@/services/hive/itemSpecificationStockService';
import ProFormShopSelect from '@/commons/proForm/ProFormShopSelect';
import { getValueEnum } from '@/enum/enumUtil';
import { SHOP_TYPES } from '@/enum/shopType';
import ProFormItemBrandSelect from '@/commons/proForm/ProFormItemBrandSelect';

const ItemSpecificationStock = () => {
  const query = async (params, sort, filter) => {
    return await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG,
      { ...params, active: true, itemSpecificationActive: true },
      sort,
      filter,
    );
  };

  const COLUMNS = [
    {
      title: '品牌',
      dataIndex: ['itemSpecification', 'item', 'brand'],
      key: 'itemSpecification.item.brand',
      order: 11,
      renderFormItem: (text, record) => <ProFormItemBrandSelect />,
    },
    {
      title: '品名',
      dataIndex: ['itemSpecification', 'item', 'name'],
      key: ['itemSpecification', 'item', 'id'],
    },
    {
      title: '規格',
      dataIndex: ['itemSpecification', 'name'],
      key: ['itemSpecification', 'id'],
    },
    {
      title: 'SKU',
      dataIndex: ['itemSpecification', 'sku'],
      key: 'itemSpecification.sku',
      order: 10,
    },
    {
      title: '地點',
      dataIndex: ['shop', 'name'],
      key: 'shop.id',
      renderFormItem: (text, record) => <ProFormShopSelect />,
    },
    {
      title: '地點類型',
      dataIndex: ['shop', 'shopType'],
      search: false,
      valueEnum: getValueEnum(SHOP_TYPES),
    },
    { title: '地點庫存', dataIndex: 'stock', search: false },
  ];

  return <ProTable columns={COLUMNS} request={query} />;
};

export default ItemSpecificationStock;
