import { BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { ADMIN_PAYMENT_SERVICE_CONFIG } from '@/services/hive/paymentService';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import React from 'react';

const Payment = () => {
  const query = async (params, sort, filter) => {
    return await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      ADMIN_PAYMENT_SERVICE_CONFIG,
      params,
      sort,
      filter,
    );
  };

  const COLUMNS = [
    {
      title: '交易ID',
      dataIndex: ['transactionId'],
    },
    {
      title: '金額',
      dataIndex: ['value'],
    },
    {
      title: '企業',
      dataIndex: ['companyName'],
    },
    {
      title: '應用名稱',
      dataIndex: ['applicationName'],
    },
    {
      title: '企業應用交易ID',
      dataIndex: ['clientApplicationId'],
    },
    {
      title: '渠道',
      dataIndex: ['clientChannel'],
    },
    {
      title: '幣種',
      dataIndex: ['currency'],
    },
    {
      title: '過期時間',
      dataIndex: ['expireDateTime'],
    },
    {
      title: '支付渠道',
      dataIndex: ['paymentChannel'],
    },
    {
      title: '支付時間',
      dataIndex: ['paymentDateTime'],
    },
    {
      title: '支付狀態',
      dataIndex: ['paymentStatus'],
    },
  ];

  return (
    <PageContainer>
      <ProTable columns={COLUMNS} request={query} />
    </PageContainer>
  );
};

export default Payment;
