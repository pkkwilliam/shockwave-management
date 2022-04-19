import React, { useRef, useState } from 'react';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { ADMIN_COMPANY_SERVICE_CONFIG } from '@/services/hive/companyService';
import {
  BEDROCK_CREATE_SERVICE_REQEUST,
  BEDROCK_DEACTIVATE_SERVICE_REQUEST,
  BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST,
  BEDROCK_UPDATE_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { getValueEnum } from '@/enum/enumUtil';
import { COMPANY_ACCOUNT_TYPES } from '@/enum/companyAccountType';
import { ADMIN_API_TOKEN_SERVICE_CONFIG } from '@/services/hive/apiTokenService';
import ApiTokenModalForm from './components/apiTokenModalForm';

const ApiToken = () => {
  const actionRef = useRef();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const createCompanyServiceRequest = async (company) => {
    await BEDROCK_CREATE_SERVICE_REQEUST(ADMIN_API_TOKEN_SERVICE_CONFIG, company);
    setCreateModalVisible(false);
    onDataChanged();
  };

  const deleteCompanyServiceRequest = async (company) => {
    await BEDROCK_DEACTIVATE_SERVICE_REQUEST(ADMIN_API_TOKEN_SERVICE_CONFIG, company.id);
    onDataChanged();
  };

  const updateCompanyServiceRequest = async (company) => {
    await BEDROCK_UPDATE_SERVICE_REQUEST(ADMIN_API_TOKEN_SERVICE_CONFIG, company);
    setUpdateModalVisible(false);
    onDataChanged();
  };

  const onDataChanged = () => {
    actionRef.current.reload();
  };

  const COLUMNS = [
    {
      title: '企業',
      dataIndex: ['company', 'chineseName'],
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
      title: '應用名稱',
      dataIndex: 'applicationName',
      copyable: true,
      ellipsis: true,
      tip: '應用名稱過長會自動收縮',
    },
    {
      title: 'API Key',
      dataIndex: 'apiKey',
      copyable: true,
      tip: 'API Key過長會自動收縮',
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
        <Popconfirm
          cancelText="取消"
          key="delete"
          onConfirm={() => deleteCompanyServiceRequest(record)}
          okText="確定"
          title="確認刪除公司?"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        columns={COLUMNS}
        request={async (params = {}, sort, filter) => {
          return BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(ADMIN_API_TOKEN_SERVICE_CONFIG, {
            ...params,
            active: true,
          });
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
      <ApiTokenModalForm
        onClickSubmit={createCompanyServiceRequest}
        setModalVisible={setCreateModalVisible}
        visible={createModalVisible}
      />
    </PageContainer>
  );
};

export default ApiToken;
