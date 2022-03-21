import React from 'react';

import ProTable from '@ant-design/pro-table';
import { BEDROCK_QUERY_LIST_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG } from '@/services/hive/itemSpecificationStockService';
import { SHOP_TYPES } from '@/enum/shopType';
import { getValueEnum } from '@/enum/enumUtil';

const ShopItemSpecificationList = (props) => {
  const queryItemSpecification = async (params, sort, filter) => {
    return await BEDROCK_QUERY_LIST_SERVICE_REQUEST(
      COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG,
      { ...params, active: true, itemSpecificationId: props.itemSpecification?.id },
    );
  };

  const COLUMNS = [
    { title: '地點', dataIndex: ['shop', 'name'] },
    {
      title: '地點類型',
      dataIndex: ['shop', 'shopType'],
      search: false,
      valueEnum: getValueEnum(SHOP_TYPES),
    },
    { title: '地點庫存', dataIndex: ['stock'], search: false },
  ];

  return (
    <ProTable
      columns={COLUMNS}
      pagination={false}
      request={queryItemSpecification}
      options={false}
      search={false}
    />
  );
};

export default ShopItemSpecificationList;
