import CategoryModalForm from '@/pages/company/Category/components/categoryModalForm';
import { BEDROCK_CREATE_SERVICE_REQEUST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_CATEGORY_SERVICE_CONFIG } from '@/services/hive/categoryService';
import ProCard from '@ant-design/pro-card';
import { Button, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';

const CategoryOnboard = () => {
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
            創建標籤/分類
          </Button>
        }
        headerBordered
        title="標籤/分類"
      >
        <Space>
          <Text>創建首個標籤/分類，方便您以後對所有商品的集成管理</Text>
        </Space>
      </ProCard>
      <CategoryModalForm
        onClickSubmit={create}
        setModalVisible={setModalFormVisible}
        visible={modalFormVisible}
      />
    </>
  );
};

export default CategoryOnboard;
