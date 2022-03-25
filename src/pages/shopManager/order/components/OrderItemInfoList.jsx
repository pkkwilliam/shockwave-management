import React, { useState } from 'react';
import { ProFormDependency, ProFormDigit, ProFormGroup, ProFormList } from '@ant-design/pro-form';
import ProFormItemSelect from '@/commons/proForm/ProFormItemSelect';
import { values } from 'lodash';
import ProFormPreOrderItemSpecificationSelection from '@/commons/proForm/ProFormPreOrderItemSpecificationSelect';

const OrderItemInfoList = (props) => {
  const [currentRows, setCurrentRows] = useState([]);

  return (
    <ProFormDependency name={['companyBusiness']}>
      {({ companyBusiness }) => {
        return (
          <ProFormList {...props}>
            {({ key, name }) => {
              return (
                <ProFormGroup>
                  <ProFormItemSelect label="商品" name={['item', 'id']} width="sm" />
                  <ProFormDependency name={['item']}>
                    {({ item }, form) => {
                      if (
                        item?.id !== currentRows[key]?.item?.id &&
                        currentRows[key]?.item?.id !== undefined
                      ) {
                        let { orderItemInfos } = form.getFieldsValue();
                        orderItemInfos[key] = {
                          ...orderItemInfos[key],
                          itemSpecification: undefined,
                          quantity: undefined,
                          price: undefined,
                        };
                        values.orderItemInfos = orderItemInfos;
                        form.setFieldsValue(values);
                        setCurrentRows(orderItemInfos);
                      }
                      return (
                        <ProFormPreOrderItemSpecificationSelection
                          companyBusiness={companyBusiness}
                          dependencies={['item']}
                          item={item}
                          includeStock
                          label="規格"
                          name={['itemSpecification', 'id']}
                          showSearch
                          width="lg"
                        />
                      );
                    }}
                  </ProFormDependency>
                  <ProFormDigit label="數量" name="quantity" width="xs" />
                </ProFormGroup>
              );
            }}
          </ProFormList>
        );
      }}
    </ProFormDependency>
  );
};

export default OrderItemInfoList;
