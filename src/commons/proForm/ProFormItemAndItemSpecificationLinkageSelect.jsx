import { ProFormDependency, ProFormGroup } from '@ant-design/pro-form';
import React from 'react';
import ProFormItemSelect from './ProFormItemSelect';
import ProFormItemSpecificationSelect from './ProFormItemSpecificationSelect';

const ProFormItemAndItemSpecificationLinkageSelect = (props) => {
  return (
    <ProFormGroup>
      <ProFormDependency name={['item']}>
        {({ item }) => <ProFormItemSelect disabled={item} label="商品" name={['item', 'id']} />}
      </ProFormDependency>
      <ProFormDependency name={['item']}>
        {({ item }, form) => {
          return (
            <ProFormItemSpecificationSelect
              dependencies={['item', 'id']}
              item={item}
              label="規格"
              name={['itemSpecification', 'id']}
            />
          );
        }}
      </ProFormDependency>
    </ProFormGroup>
  );
};

export default ProFormItemAndItemSpecificationLinkageSelect;
