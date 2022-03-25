import React, { useState } from 'react';
import { PUBLIC_PRE_ORDER_ITEM_SPECIFICATION } from '@/services/hive/preOrderService';
import { ProFormDependency, ProFormGroup, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { Select, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import { ITEM_SPECIFICATION_STATUS_SUSPEND } from '@/enum/itemSpecificationStatus';

const ProFormPreOrderItemSpecificationSelection = (props) => {
  const { companyBusiness, item, includeStock } = props;

  const queryPreOrderItemSpecification = async (params) => {
    const { companyBusiness, item, includeStock } = params;
    const response = await PUBLIC_PRE_ORDER_ITEM_SPECIFICATION(companyBusiness, item, includeStock);
    return response.map(({ priceTemplate, itemSpecification, price, stock }) => ({
      value: itemSpecification.id,
      label: (
        <Space direction="horizontal">
          {itemSpecification.itemSpecificationStatus === ITEM_SPECIFICATION_STATUS_SUSPEND.key ? (
            <Text type="danger">暫停銷售</Text>
          ) : null}
          <Text>{itemSpecification.name}</Text>
          <Text type={priceTemplate ? 'success' : 'warning'}>
            {priceTemplate ? '模版價' : '基本價'}
          </Text>
          <Text bold type={priceTemplate ? 'success' : 'warning'}>
            ${price}
          </Text>
        </Space>
      ),
    }));
  };

  return (
    <ProFormSelect
      request={(params) =>
        queryPreOrderItemSpecification({ ...params, companyBusiness, item, includeStock })
      }
      {...props}
    />
  );
};

export default ProFormPreOrderItemSpecificationSelection;
