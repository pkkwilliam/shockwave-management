import React from 'react';
import { ProFormSelect } from '@ant-design/pro-form';
import { COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG } from '@/services/hive/itemSpecificationService';
import { getEnumOjbectsWithValueAsKey } from '@/enum/enumUtil';
import { getValueFromObject } from '../utils/ProComponentsUtil';
import { BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';

const ProFormItemSpecificationSelect = (props) => {
  const queryItemSpecification = async (param) => {
    const response = await BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      {
        active: true,
        current: 1,
        pageSize: 20,
        'item.id': param.item.id,
        name: param.keyWords,
      },
    );
    const transformedResponse = getEnumOjbectsWithValueAsKey(response.content).map(
      (itemSpecification) => ({
        label: `${itemSpecification.name} 基本價格: $${itemSpecification.price} 拆扣價格: ${
          itemSpecification?.discountPrice ?? '-'
        }`,
        value: itemSpecification.id,
      }),
    );
    return transformedResponse;
  };

  return (
    <ProFormSelect
      disabled={!props?.item?.id}
      request={queryItemSpecification}
      showSearch
      {...props}
    />
  );
};

export default ProFormItemSpecificationSelect;
