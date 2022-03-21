import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';
import {
  BEDROCK_CREATE_SERVICE_REQEUST,
  BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { COMPANY_STAFF_ORDER_SERVICE_CONFIG } from '@/services/hive/companyStaffService';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InternalOrderModalForm from './components/InternalOrderModalForm';

const InternalOrder = () => {
  const tableRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [modalFormVisible, setShowModalFormVisible] = useState(false);

  const onCreate = async (request) => {
    console.log(request);
    // await BEDROCK_CREATE_SERVICE_REQEUST(COMPANY_STAFF_ORDER_SERVICE_CONFIG, request);
    // tableRef.current.reload();
    // return true;
  };

  const onDelete = async (record) => {};

  const query = async (params, sort, filter) => {
    return await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      COMPANY_STAFF_ORDER_SERVICE_CONFIG,
      {
        ...params,
        active: true,
      },
      sort,
      filter,
    );
  };

  const onChangeModalFormVisible = (visible) => {
    if (!visible) {
      setCurrentRow(undefined);
    }
    setShowModalFormVisible(visible);
  };

  const COLUMNS = [
    ProTableOperationColumnButtons((record) => {
      setCurrentRow(record);
      onChangeModalFormVisible(true);
    }, onDelete),
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={tableRef}
        toolBarRender={() => [
          <Button
            icon={<PlusOutlined />}
            key="button"
            type="primary"
            onClick={() => onChangeModalFormVisible(true)}
          >
            新建
          </Button>,
        ]}
      />
      <InternalOrderModalForm
        onFinish={onCreate}
        onVisibleChange={onChangeModalFormVisible}
        order={currentRow}
        visible={modalFormVisible}
      />
    </PageContainer>
  );
};

export default InternalOrder;
