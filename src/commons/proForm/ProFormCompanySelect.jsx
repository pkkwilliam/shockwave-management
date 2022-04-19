import { BEDROCK_QUERY_LIST_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { ADMIN_COMPANY_SERVICE_CONFIG } from '@/services/hive/companyService';
import { ProFormSelect } from '@ant-design/pro-form';
import React from 'react';

const ProFormCompanySelect = (props) => {
  const query = async (params) => {
    const response = await BEDROCK_QUERY_LIST_SERVICE_REQUEST(ADMIN_COMPANY_SERVICE_CONFIG, {});
    return response.data.map((company) => ({ value: company.id, label: company.chineseName }));
  };

  return <ProFormSelect request={query} {...props} />;
};

export default ProFormCompanySelect;
