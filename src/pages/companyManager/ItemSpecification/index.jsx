import React, { useRef, useState } from 'react';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';
import {
  COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION,
  COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION,
} from '@/services/hive/itemSpecificationService';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';

const ItemSpecification = () => {
  const tableRef = useRef();
  const queryItemSpecification = async (params, sort, filter) => {
    return await COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION(
      { ...params, active: true },
      sort,
      filter,
    );
  };

  const deleteItemSpecification = async (record) => {
    await COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION(record.id);
    tableRef.current.reload();
  };

  const COLUMNS = [
    { title: '商品', dataIndex: ['item', 'name'] },
    { title: '規格名稱', dataIndex: 'name' },
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
