import { BEDROCK_QUERY_LIST_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import {
  COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
  COMPANY_SPECIFICATION_FUZZY_SEARCH,
} from '@/services/hive/itemSpecificationService';
import React, { useEffect, useRef } from 'react';
import { ProFormSelect } from '@ant-design/pro-form';

const CheckoutCounterItemSpecificationSelect = (props) => {
  const selectRef = useRef();

  const { setRef } = props;

  useEffect(() => {
    setRef(selectRef);
  }, [selectRef]);

  const query = async (params) => {
    const response = await COMPANY_SPECIFICATION_FUZZY_SEARCH({ fuzzyString: params.keyWords });
    const options = response.map((itemSpecification) => ({
      value: itemSpecification.id,
      label: `${itemSpecification?.item?.name ?? ''} | ${itemSpecification?.name ?? ''} | ${
        itemSpecification?.sku ?? ''
      } | ${itemSpecification?.barcode ?? ''} | $${itemSpecification?.price}`,
      data: itemSpecification,
    }));
    return options;
  };
  return (
    <ProFormSelect
      debounceTime={500}
      request={query}
      fieldProps={{ autoFocus: true, onSelect: props.onSelect, ref: selectRef }}
      {...props}
    />
  );
};

export default CheckoutCounterItemSpecificationSelect;
