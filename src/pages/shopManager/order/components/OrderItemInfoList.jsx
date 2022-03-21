import React, { useState } from 'react';
import ProFormItemAndItemSpecificationLinkageSelect from '@/commons/proForm/ProFormItemAndItemSpecificationLinkageSelect';
import { COMPANY_STAFF_GET_TEMPLATE_PRICE } from '@/services/hive/itemSpecificationPriceTemplate';

import {
  ProFormDependency,
  ProFormDigit,
  ProFormGroup,
  ProFormList,
  ProFormMoney,
} from '@ant-design/pro-form';

const OrderItemInfoList = (props) => {
  const [priceTemplates, setPriceTemplates] = useState([]);
  const queryItemSpecificationPrice = async (companyBusiness, itemSpecification, index) => {
    console.log(companyBusiness, itemSpecification);
    if (!companyBusiness?.id || !itemSpecification?.id) {
      return;
    }
    const response = await COMPANY_STAFF_GET_TEMPLATE_PRICE(
      companyBusiness.id,
      itemSpecification.id,
    );
    let updatePriceTemplate = [...priceTemplates];
    updatePriceTemplate[index] = response;
    setPriceTemplates(updatePriceTemplate);
  };

  return (
    <ProFormList {...props}>
      {(field) => {
        return (
          <ProFormGroup>
            <ProFormItemAndItemSpecificationLinkageSelect {...props} />
            <ProFormDependency name={['companyBusiness']} ignoreFormListField>
              {({ companyBusiness }) => {
                return (
                  <ProFormDependency name={['itemSpecification']}>
                    {({ itemSpecification }) => {
                      queryItemSpecificationPrice(companyBusiness, itemSpecification, field.key);
                      return (
                        <ProFormMoney
                          disabled
                          label="價格"
                          value={priceTemplates[field.key]?.price}
                        />
                      );
                    }}
                  </ProFormDependency>
                );
              }}
            </ProFormDependency>

            <ProFormDigit label="數量" name="quantity" />
          </ProFormGroup>
        );
      }}
    </ProFormList>
  );
};

export default OrderItemInfoList;
