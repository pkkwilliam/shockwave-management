import { GET_COMPANY_ONBOARD } from '@/services/hive/companyOnboardService';
import ProCard from '@ant-design/pro-card';
import { Space } from 'antd';
import React, { useEffect, useState } from 'react';
import CategoryOnboard from './components/CategoryOnboard';
import CompanyBusinessOnboard from './components/CompanyBusinessOnboard';
import ItemOnboard from './components/ItemOnboard';
import PriceTemplateOnboard from './components/PriceTemplateOnboard';
import ShopOnboard from './components/ShopOnboard';
import { Alert } from 'antd';
import Title from 'antd/lib/typography/Title';

export const Onboard = () => {
  const [companyOnboard, setCompanyOnboard] = useState({});

  useEffect(() => {
    getCompanyOnboard();
  }, []);

  const getCompanyOnboard = async () => {
    const response = await GET_COMPANY_ONBOARD();
    setCompanyOnboard(response);
  };

  return (
    <>
      <Title level={4}>使用嚮導</Title>
      <Alert message="使用嚮導助您快速熟悉系統及增加必需要的組件" type="success" showIcon banner />
      <Space direction="vertical" style={{ display: 'flex' }}>
        <ShopOnboard />
        <CategoryOnboard />
        <ItemOnboard />
        <CompanyBusinessOnboard />
        <PriceTemplateOnboard />
      </Space>
    </>
  );
};

export default Onboard;
