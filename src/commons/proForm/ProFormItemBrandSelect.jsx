import React from 'react';
import { COMPANY_MANAGER_GET_DISTINCT_ITEM_BRAND_LIST } from '@/services/hive/itemService';
import { ProFormSelect } from '@ant-design/pro-form';

const ProFormItemBrandSelect = (props) => {
  const query = async (params) => {
    const response = await COMPANY_MANAGER_GET_DISTINCT_ITEM_BRAND_LIST({
      active: true,
    });
    return response.map((brand) => ({ value: brand }));
  };
  return <ProFormSelect request={query} showSearch {...props} />;
};

export default ProFormItemBrandSelect;
