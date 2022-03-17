import React from 'react';
import { COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION_PRICE_TEMPLATE } from '@/services/hive/itemSpecificationPriceTemplate';
import { ProFormSelect } from '@ant-design/pro-form';

const ProFormItemSpecificationPriceTemplate = (props) => {
  const queryItemSpecificationPriceTemplate = async (params) => {
    const response = await COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION_PRICE_TEMPLATE({
      current: 1,
      pageSize: 20,
      name: params.keyWords,
    });
    return response.content.map((priceTemplate) => ({
      label: priceTemplate.name,
      value: priceTemplate.id,
    }));
  };

  return <ProFormSelect request={queryItemSpecificationPriceTemplate} showSearch {...props} />;
};

export default ProFormItemSpecificationPriceTemplate;
