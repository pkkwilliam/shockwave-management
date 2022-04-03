import { BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_CATEGORY_SERVICE_CONFIG } from '@/services/hive/categoryService';
import { ProFormSelect } from '@ant-design/pro-form';
import React from 'react';

const ProFormCategorySelect = (props) => {
  const query = async (params) => {
    const response = await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      COMPANY_CATEGORY_SERVICE_CONFIG,
      {
        ...params,
        active: true,
        current: 1,
        pageSize: 50,
      },
    );
    return response.data.map((category) => ({ value: category.id, label: category.name }));
  };
  return <ProFormSelect request={query} {...props} />;
};

export default ProFormCategorySelect;
