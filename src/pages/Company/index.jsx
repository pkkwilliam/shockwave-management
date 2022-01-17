import React, { useRef, useState } from 'react';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import Modal from 'antd/lib/modal/Modal';
import AddCompanyModalForm from './components/addCompanyModalForm';
import { useModel } from 'umi';
import { ADMIN_PAGINATION_WITH_PARAM, COMPANY_QUERY } from '@/services/hive/company';

const COLUMNS = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '企業',
    dataIndex: 'name',
    copyable: true,
    ellipsis: true,
    tip: '企業名過長會自動收縮',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '企業名為必填',
        },
      ],
    },
  },
  {
    title: '到期日',
    dataIndex: 'expireDate',
    search: false,
    valueType: 'date',
    copyable: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '到期日名為必填',
        },
      ],
    },
  },
  {
    title: '允許用戶數',
    dataIndex: 'allowedUserNumber',
    search: false,
    valueType: 'number',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '允許用戶數為必填',
        },
      ],
    },
  },
];

const Compamy = () => {
  const actionRef = useRef();
  const [createFormVisible, setCreateFormVisible] = useState(false);
  console.log(ADMIN_PAGINATION_WITH_PARAM);
  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        columns={COLUMNS}
        request={async (params = {}, sort, filter) => {
          return COMPANY_QUERY(params);
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            icon={<PlusOutlined />}
            key="button"
            type="primary"
            onClick={() => setCreateFormVisible(true)}
          >
            新建
          </Button>,
        ]}
      />
      <AddCompanyModalForm setModalVisible={setCreateFormVisible} visible={createFormVisible} />
    </PageContainer>
  );
};

export default Compamy;
