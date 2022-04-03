import React, { useState } from 'react';
import ProCard from '@ant-design/pro-card';

import CheckoutCounterItemSpecificationSelect from './components/CheckoutCounterItemSpecificationSelect';
import CheckoutCounterItemSpecificationSelectedStatistic from './components/CheckoutCounterItemSpecificationSelectedStatistic';
import CheckoutCounterItemSpecificationTable from './components/CheckoutCounterItemSpecificationTable';

import { Button, Col, Row, Space } from 'antd';
import CheckoutCounterPayment from './components/CheckoutCounterPayment';
import CheckoutModal from './components/CheckoutModal';

const CheckoutCounter = () => {
  const [checkoutModalVisible, setCheckoutModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  const [selectedItemSpecifications, setSelectedItemSpecifications] = useState([]);

  const onClickCheckout = () => {
    setCheckoutModalVisible(true);
  };

  const onSelectItemSpecification = (value, option, quantity = 1) => {
    let containeItem = false;
    let updatedItems = selectedItemSpecifications.map((selectedItemSpecification) => {
      if (selectedItemSpecification.itemSpecification.id === option.data.id) {
        containeItem = true;
        return {
          itemSpecification: selectedItemSpecification.itemSpecification,
          quantity: selectedItemSpecification.quantity + quantity,
        };
      } else {
        return selectedItemSpecification;
      }
    });
    if (!containeItem) {
      updatedItems.push({ itemSpecification: option.data, quantity: 1 });
    }

    setSelectedItemSpecifications(updatedItems);
  };

  return (
    <>
      <ProCard direction="row" ghost gutter={16}>
        <ProCard direction="column" ghost>
          <CheckoutCounterItemSpecificationSelectedStatistic
            selectedItemSpecifications={selectedItemSpecifications}
          />
          <ProCard>
            <ProCard colSpan={20}>
              <CheckoutCounterItemSpecificationSelect
                onSelect={onSelectItemSpecification}
                showSearch
              />
              <CheckoutCounterItemSpecificationTable dataSource={selectedItemSpecifications} />
            </ProCard>
            <ProCard layout="center">
              <Space direction="vertical">
                <Button onClick={onClickCheckout} size="large" type="primary">
                  結賬
                </Button>
                <Button>數量*</Button>
                <Button>删行 Del</Button>
                <Button>掛單F12</Button>
              </Space>
            </ProCard>
          </ProCard>
        </ProCard>
      </ProCard>
      <CheckoutModal
        onChangeVisible={setCheckoutModalVisible}
        selectedItemSpecifications={selectedItemSpecifications}
        visible={checkoutModalVisible}
      />
    </>
  );
};

export default CheckoutCounter;
