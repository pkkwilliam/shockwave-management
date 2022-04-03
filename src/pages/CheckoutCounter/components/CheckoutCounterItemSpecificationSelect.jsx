import {
  BEDROCK_QUERY_LIST_SERVICE_REQUEST,
  BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG } from '@/services/hive/itemSpecificationService';
import React from 'react';
import { ProFormSelect } from '@ant-design/pro-form';
import { Table } from 'antd';

const CheckoutCounterItemSpecificationSelect = (props) => {
  const query = async (params) => {
    const response = await BEDROCK_QUERY_LIST_SERVICE_REQUEST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      { active: true },
    );
    return response.data.map((itemSpecification) => ({
      value: itemSpecification.id,
      label: `${itemSpecification.item.name} | ${itemSpecification.name} | ${itemSpecification.sku} | $${itemSpecification.price}`,
      data: itemSpecification,
    }));
  };
  return <ProFormSelect request={query} fieldProps={{ onSelect: props.onSelect }} {...props} />;
};

export default CheckoutCounterItemSpecificationSelect;
