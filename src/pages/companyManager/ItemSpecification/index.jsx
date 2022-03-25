import React, { useRef, useState } from 'react';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';
import { COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG } from '@/services/hive/itemSpecificationService';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {
  BEDROCK_DEACTIVATE_SERVICE_REQUEST,
  BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { getValueEnum } from '@/enum/enumUtil';
import { ITEM_SPECIFICATION_STATUSES } from '@/enum/itemSpecificationStatus';

const ItemSpecification = () => {
  const tableRef = useRef();
  const queryItemSpecification = async (params, sort, filter) => {
    return await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      { ...params, active: true },
      sort,
      filter,
    );
  };

  const deleteItemSpecification = async (record) => {
    await BEDROCK_DEACTIVATE_SERVICE_REQUEST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      record.id,
    );
    tableRef.current.reload();
  };

  const COLUMNS = [
    { title: '商品', dataIndex: ['item', 'name'] },
    { title: '規格名稱', dataIndex: 'name' },
    {
      title: '狀態',
      dataIndex: 'itemSpecificationStatus',
      valueEnum: getValueEnum(ITEM_SPECIFICATION_STATUSES),
    },
    { title: 'SKU', dataIndex: 'sku' },
    { title: '條碼', dataIndex: 'barcode' },
    { title: '價格', dataIndex: 'price', search: false },
    { title: '折扣價格', dataIndex: 'discountPrice', search: false },
    ProTableOperationColumnButtons((record) => {}, deleteItemSpecification),
  ];

  return (
    <PageContainer>
      <ProTable actionRef={tableRef} columns={COLUMNS} request={queryItemSpecification} />
    </PageContainer>
  );
};

export default ItemSpecification;
