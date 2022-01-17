import React, { useRef, useState } from 'react';
import ProTable from '@ant-design/pro-table';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';

import CompanyModalForm from './components/companyModalForm';

import { COMPANY_QUERY, CREATE_COMPANY, UPDATE_COMPANY } from '@/services/hive/company';

const Compamy = () => {
  const actionRef = useRef();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const createCompanyServiceRequest = async (company) => {
    await CREATE_COMPANY(company);
    setCreateModalVisible(false);
    onDataChanged();
  };

  const updateCompanyServiceRequest = async (company) => {
    await UPDATE_COMPANY(company);
    setUpdateModalVisible(false);
    onDataChanged();
  };

  const onDataChanged = () => {
    actionRef.current.reload();
  };

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
      title: '狀態',
      dataIndex: 'active',
      search: false,
      valueEnum: {
        true: { text: '正常', status: 'Success' },
        false: {
          text: '停用',
          status: 'Error',
        },
      },
    },
    {
      title: '到期日',
      dataIndex: 'expiryDate',
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
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, aciton) => [
        <a
          key="edit"
          onClick={() => {
            setCurrentRow(record);
            setUpdateModalVisible(true);
          }}
        >
          修改
        </a>,
        <a key="deactive">停用</a>,
      ],
    },
  ];
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
            onClick={() => setCreateModalVisible(true)}
          >
            新建
          </Button>,
        ]}
      />
      <CompanyModalForm
        onClickSubmit={createCompanyServiceRequest}
        setModalVisible={setCreateModalVisible}
        visible={createModalVisible}
      />
      <CompanyModalForm
        company={currentRow || {}}
        onClickSubmit={updateCompanyServiceRequest}
        setModalVisible={setUpdateModalVisible}
        visible={updateModalVisible}
      />
    </PageContainer>
  );
};

export default Compamy;
