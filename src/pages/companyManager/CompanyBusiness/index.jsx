import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {
  COMPANY_MANAGER_CREATE_COMPANY_BUSINESS,
  COMPANY_MANAGER_DELETE_COMPANY_BUSINESS,
  COMPANY_MANAGER_QUERY_COMPANY_BUSINESS,
  COMPANY_MANAGER_UPDATE_COMPANY_BUSINESS,
} from '@/services/hive/companyBusinessService';
import CompanyBusinessModalForm from './components/CompanyBusinessModalForm';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';
import { COMPANY_BUSINESS_PAYMENT_TYPES } from '@/enum/companyBusinessPaymentType';
import { getValueEnum } from '@/enum/enumUtil';

const CompanyBusiness = () => {
  const tableRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [modalFormVisible, setModalFormVisible] = useState(false);

  const createCompanyBusinessService = async (request) => {
    await COMPANY_MANAGER_CREATE_COMPANY_BUSINESS(request);
    tableRef.current.reload();
    return true;
  };

  const deleteCompanyBusinessService = async (record) => {
    const response = await COMPANY_MANAGER_DELETE_COMPANY_BUSINESS(record.id);
    tableRef.current.reload();
  };

  const modalFormVisibleChange = (visible) => {
    if (!visible) {
      setCurrentRow(undefined);
    }
    setModalFormVisible(visible);
  };

  const queryCompanyBusinessService = async (params, sort, filter) => {
    return await COMPANY_MANAGER_QUERY_COMPANY_BUSINESS({ ...params, active: true }, sort, filter);
  };

  const updateCompanyBusinessService = async (request) => {
    const response = await COMPANY_MANAGER_UPDATE_COMPANY_BUSINESS(request);
    tableRef.current.reload();
    return true;
  };

  const COLUMNS = [
    { title: '企業名稱', dataIndex: 'name' },
    { title: '外部下單用戶', dataIndex: ['businessUser', 'smsNumber'], search: false },
    { title: '價格模版', dataIndex: ['itemSpecificationPriceTemplate', 'name'] },
    {
      title: '支款方式',
      dataIndex: 'companyBusinessPaymentType',
      valueEnum: getValueEnum(COMPANY_BUSINESS_PAYMENT_TYPES),
    },
    { title: '備註', dataIndex: 'remark', search: false },
    ProTableOperationColumnButtons((record) => {
      setCurrentRow(record);
      setModalFormVisible(true);
    }, deleteCompanyBusinessService),
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={tableRef}
        columns={COLUMNS}
        request={queryCompanyBusinessService}
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
      <CompanyBusinessModalForm
        compananyBusiness={currentRow}
        onFinish={currentRow ? updateCompanyBusinessService : createCompanyBusinessService}
        onVisibleChange={modalFormVisibleChange}
        visible={modalFormVisible}
      />
    </PageContainer>
  );
};

export default CompanyBusiness;
