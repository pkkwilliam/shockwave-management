import React from 'react';
import { COMPANY_MANAGER_QUERY_CATEGORY } from '@/services/hive/category';
import { ProFormSelect } from '@ant-design/pro-form';

const ProFormCategorySelect = (props) => {
  const queryCateory = async (keyword) => {
    const response = await COMPANY_MANAGER_QUERY_CATEGORY({ current: 1, pageSize: 20 });
    return response.content.map((category) => ({ value: category.id, label: category.name }));
  };

  return (
    <ProFormSelect
      request={queryCateory}
      transform={(values) => ({ categories: values.map((value) => ({ id: value })) })}
      {...props}
    />
  );
};

export default ProFormCategorySelect;
