import React from 'react';
import { ProFormSelect } from '@ant-design/pro-form';
import { COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION } from '@/services/hive/itemSpecificationService';
import { getEnumOjbectsWithValueAsKey } from '@/enum/enumUtil';
import { getValueFromObject } from '../utils/ProComponentsUtil';

const ProFormItemSpecificationSelect = (props) => {
  const queryItemSpecification = async (param) => {
    const response = await COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION({
      current: 1,
      pageSize: 20,
      itemId: getValueFromObject(param, props.dependencies),
      name: param.keyWords,
    });
    const transformedResponse = getEnumOjbectsWithValueAsKey(response.content).map(
      (itemSpecification) => ({
        label: `規格: ${itemSpecification.name} 基本價格: $${itemSpecification.price} 拆扣價格: ${
          itemSpecification?.discountPrice ?? '-'
        }`,
        value: itemSpecification.id,
      }),
    );
    return transformedResponse;
  };

  return <ProFormSelect request={queryItemSpecification} showSearch {...props} />;
};

export default ProFormItemSpecificationSelect;
