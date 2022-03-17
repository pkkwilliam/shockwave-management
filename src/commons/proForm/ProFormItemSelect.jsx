import React from 'react';
import { getEnumOjbectsWithValueAsKey } from '@/enum/enumUtil';
import { COMPANY_MANAGER_QUERY_ITEM } from '@/services/hive/itemService';
import { ProFormSelect } from '@ant-design/pro-form';

const ProFormItemSelect = (props) => {
  const queryItem = async (param) => {
    const response = await COMPANY_MANAGER_QUERY_ITEM({
      active: true,
      current: 1,
      pageSize: 20,
      name: param.keyWords,
    });
    const transformedResponse = response.content.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return transformedResponse;
  };

  return <ProFormSelect request={queryItem} showSearch {...props} />;
};

export default ProFormItemSelect;
