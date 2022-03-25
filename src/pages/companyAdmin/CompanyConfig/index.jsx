import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useModel } from 'umi';
import CompanyOrderConfigForm from './components/CompanyOrderConfigForm';

const CompanyConfig = (props) => {
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
        }}
      >
        <ProCard.TabPane key="tab1" tab="訂單">
          <CompanyOrderConfigForm />
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="微信小程序">
          微信小程序
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default CompanyConfig;
