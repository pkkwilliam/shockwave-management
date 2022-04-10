import CategoryModalForm from '@/pages/company/Category/components/categoryModalForm';
import ItemSpecificationPriceTemplateModalForm from '@/pages/companyManager/ItemSpecificationPriceTemplate/components/ItemSpecificationPriceTemplateModalFormModalForm';
import { BEDROCK_CREATE_SERVICE_REQEUST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_CATEGORY_SERVICE_CONFIG } from '@/services/hive/categoryService';
import ProCard from '@ant-design/pro-card';
import { Button, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';

const PriceTemplateOnboard = () => {
  const [modalFormVisible, setModalFormVisible] = useState(false);

  const create = async (request) => {
    await BEDROCK_CREATE_SERVICE_REQEUST(COMPANY_CATEGORY_SERVICE_CONFIG, request);
    return true;
  };

  return (
    <>
      <ProCard
        extra={
          <Button onClick={() => setModalFormVisible(true)} type="primary">
            創建價格模版
          </Button>
        }
        headerBordered
        title="進階功能 價格模版 (非必要)"
      >
        <Space>
          <Text>創建價格模版，可對散客及固定客戶提供不同的商品價格</Text>
        </Space>
      </ProCard>
      <ItemSpecificationPriceTemplateModalForm
        onFinish={create}
        onVisibleChange={setModalFormVisible}
        visible={modalFormVisible}
      />
    </>
  );
};

export default PriceTemplateOnboard;
