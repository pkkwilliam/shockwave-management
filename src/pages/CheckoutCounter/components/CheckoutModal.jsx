import { calculateTotalCost } from '@/util/itemSpecificationCostUtil';
import ProCard from '@ant-design/pro-card';
import { ProFormText } from '@ant-design/pro-form';
import { Button, Col, Divider, Modal, Row, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import CheckoutCounterPayment from './CheckoutCounterPayment';

const CheckoutModal = (props) => {
  const { onChangeVisible, selectedItemSpecifications, visible } = props;

  const onClickCancel = () => {
    onChangeVisible(false);
  };

  return (
    <Modal
      closable={false}
      footer={[]}
      maskClosable={false}
      onCancel={() => onChangeVisible(false)}
      visible={visible}
      width={1200}
    >
      <Space direction="horizontal" size={50}>
        <Space direction="vertical">
          <Space direction="horizontal">
            <Button block onClick={onClickCancel} size="large">
              F1 作廢
            </Button>
            <Button block onClick={onClickCancel} size="large">
              F1 作廢
            </Button>
          </Space>
          <Divider>優惠方式</Divider>
          <Space direction="horizontal">
            <Button block size="large">
              優惠券
            </Button>
            <Button block size="large">
              整單拆扣
            </Button>
            <Button block size="large">
              整單改價
            </Button>
          </Space>
          <Divider>零頭處理</Divider>
          <Space direction="horizontal">
            <Button block size="large">
              抹分
            </Button>
            <Button block size="large">
              見角進元
            </Button>
          </Space>
          <Divider>支付方式</Divider>
          <Space direction="horizontal">
            <CheckoutCounterPayment />
          </Space>
        </Space>
        <Space direction="vertical">
          <Space>
            <Text type="secondary">商品合計</Text>
            <Text>${calculateTotalCost(selectedItemSpecifications)}</Text>
          </Space>
          <Text>商品優惠</Text>
          <Text>整單優惠</Text>
          <Text>應收</Text>
          <Divider />
          <ProFormText />
          <Divider />
          <Text>找零</Text>
        </Space>
      </Space>
    </Modal>
  );
};

export default CheckoutModal;
