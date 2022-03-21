import React, { useState } from 'react';
import { BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_CONFIG } from '@/services/hive/companyBusinessService';
import { ProFormSelect } from '@ant-design/pro-form';

const ProFormCompanyBusinessSelect = (props) => {
  const [data, setData] = useState([]);
  const [selectedCompanyBusiness, setSelectedCompanyBusiness] = useState(undefined);

  const query = async (params) => {
    const response = await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_CONFIG,
      { active: true, current: 1, name: params.keyWords, pageSize: 20 },
    );
    setData(response.data);
    return response.data.map((business) => ({ value: business.id, label: business.name }));
  };

  const onSelectCompanyBusiness = (value) => {
    const selectedCompanyBusiness = data.filter((companyBusiness) => companyBusiness.id === value);
    setSelectedCompanyBusiness(selectedCompanyBusiness);
  };

  const addressesOption = () => {
    if (!selectedCompanyBusiness.deliveryAddress) {
      console.log('return enpty');
      return Promise.resolve([]);
    } else {
      console.log('hererer', selectedCompanyBusiness);
      const transformedAddress = selectedCompanyBusiness?.deliveryAddress.map((address) => ({
        value: address.id,
        label: address.street,
      }));
      return Promise.resolve(transformedAddress);
    }
  };

  return (
    <>
      <ProFormSelect request={query} {...props} />
      {/* <ProFormSelect request={} /> */}
    </>
  );
};

export default ProFormCompanyBusinessSelect;
