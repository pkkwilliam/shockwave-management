import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {
  COMPANY_MANAGER_CREATE_ITEM_SPECIFICATION_PRICE_TEMPLATE,
  COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION_PRICE_TEMPLATE,
  COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION_PRICE_TEMPLATE,
  COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATION_PRICE_TEMPLATE,
} from '@/services/hive/itemSpecificationPriceTemplate';
import ItemSpecificationPriceTemplateModalForm from './components/ItemSpecificationPriceTemplateModalFormModalForm';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';

const ItemSpecificationPriceTemplate = () => {
  const tableRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [modalFormVisible, setModalFormVisible] = useState(false);

  const createItemSpecificationPriceTemplateService = async (request) => {
    const response = await COMPANY_MANAGER_CREATE_ITEM_SPECIFICATION_PRICE_TEMPLATE(request);
    tableRef.current.reload();
    return true;
  };

  const deleteItemSpecificationPriceTemplateService = async (record) => {
    await COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION_PRICE_TEMPLATE(record.id);
    tableRef.current.reload();
  };

  const onVisibleChange = (visible) => {
    if (!visible) {
      setCurrentRow(undefined);
    }
    setModalFormVisible(visible);
  };

  const queryItemSpecificationPriceTemplateService = async (param, sort, filter) => {
    return await COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION_PRICE_TEMPLATE(
      { ...param, active: true },
      sort,
      filter,
    );
  };

  const updateItemSpecificationPriceTemplateService = async (request) => {
    const response = await COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATION_PRICE_TEMPLATE(request);
    tableRef.current.reload();
    return true;
  };

  const COLUMNS = [
    { title: '模版名稱', dataIndex: 'name' },
    { title: '備註', dataIndex: 'remark', search: false },
    ProTableOperationColumnButtons((record) => {
      setCurrentRow(record);
      setModalFormVisible(true);
    }, deleteItemSpecificationPriceTemplateService),
  ];

  return (
    <PageContainer>
      <ProTable
        columns={COLUMNS}
        actionRef={tableRef}
        request={queryItemSpecificationPriceTemplateService}
        toolBarRender={() => [
          <Button
            icon={<PlusOutlined />}
            key="button"
            type="primary"
            onClick={() => setModalFormVisible(true)}
          >
            新建
          </Button>,
        ]}
      />
      <ItemSpecificationPriceTemplateModalForm
        itemSpecificationPriceTemplate={currentRow}
        onFinish={
          currentRow
            ? updateItemSpecificationPriceTemplateService
            : createItemSpecificationPriceTemplateService
        }
        onVisibleChange={onVisibleChange}
        visible={modalFormVisible}
      />
    </PageContainer>
  );
};

export default ItemSpecificationPriceTemplate;
