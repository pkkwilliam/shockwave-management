import React, { useEffect, useState } from 'react';
import { MobileTwoTone } from '@ant-design/icons';
import { Avatar, Col, Form, Layout, message, Row, Space } from 'antd';
import ProForm, { ProFormCaptcha, ProFormText, ProFormGroup } from '@ant-design/pro-form';
import { SelectLang } from 'umi';
import styles from './index.less';
import { history, useParams } from 'umi';
import { TRIAL_REQUEST, TRIAL_VERIFY } from '@/services/hive/trialService';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import {
  BEDROCK_GET_BY_ID_SERVICE_REQUEST,
  BEDROCK_QUERY_FIRST_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { PUBLIC_COMAPNY_SERVICE_CONFIG } from '@/services/hive/companyService';
import { PUBLIC_SHOP_SERVICE_CONFIG } from '@/services/hive/shopService';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import CompanyMallItemList from './components/CompanyMallItemList';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Footer from '@/components/Footer';
import CategoryList from './components/CategoryList';

const CompanyMall = () => {
  const { companyId, shopId } = useParams();

  const [company, setCompany] = useState();
  const [shop, setShop] = useState();

  const getCompany = async (params, sort, filter) => {
    const response = await BEDROCK_GET_BY_ID_SERVICE_REQUEST(
      PUBLIC_COMAPNY_SERVICE_CONFIG,
      companyId,
    );
    setCompany(response);
  };

  const getShop = async (params, sort, filter) => {
    const response = await BEDROCK_GET_BY_ID_SERVICE_REQUEST(PUBLIC_SHOP_SERVICE_CONFIG, shopId);
    setShop(response);
  };

  useEffect(() => {
    getCompany();
    getShop();
  }, []);

  const [verifiedCodeRequested, setVerifiedCodeRequested] = useState(false);
  const [form] = Form.useForm();

  const requestTrial = async () => {
    await form.validateFields();
    const response = await TRIAL_REQUEST(form.getFieldsValue());
    setVerifiedCodeRequested(true);
    return true;
  };

  const verifyTrial = async (request) => {
    const response = await TRIAL_VERIFY(request);
    message.success('註冊成功 3秒後跳轉登錄');
    history.replace('/user/login');
  };

  console.log(company?.logoImageUrl);

  return (
    <Layout>
      <Header style={{ backgroundColor: '#ff4200' }}>
        <Space>
          <Avatar src={company?.logoImageUrl} />
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 500 }}>
            {company?.chineseName}
          </Text>
        </Space>
      </Header>
      <CompanyMallItemList />
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default CompanyMall;
