import React from 'react';
import { ProFormGroup, ProFormList, ProFormMoney } from '@ant-design/pro-form';
import ProFormItemSpecificationSelect from '@/commons/proForm/ProFormItemSpecificationSelect';
import ProFormItemSelect from '@/commons/proForm/ProFormItemSelect';

const ProFormPriceTemplateList = (props) => {
  return (
    <ProFormList {...props}>
      <ProFormGroup>
        <ProFormItemSelect label="商品" name={['itemSpecification', 'item', 'id']} />
        <ProFormItemSpecificationSelect
          dependencies={['itemSpecification', 'item', 'id']}
          label="規格"
          name={['itemSpecification', 'id']}
        />
        <ProFormMoney label="模版價格" name="price" />
      </ProFormGroup>
    </ProFormList>
  );
};

export default ProFormPriceTemplateList;
