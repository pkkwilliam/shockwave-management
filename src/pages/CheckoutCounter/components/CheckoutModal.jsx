import ProFormPaymentChannelRadio from '@/commons/proForm/ProFormPaymentChannelRadio';
import { ORDER_PLACE_CHANNEL_DIRECT_SALES_IN_SHOP } from '@/enum/orderPlaceChannel';
import { ORDER_STATUS_PAYMENT_PENDING } from '@/enum/orderStatus';
import OrderItemInfoList from '@/pages/shopManager/order/components/OrderItemInfoList';
import { BEDROCK_CREATE_SERVICE_REQEUST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_ORDER_SERVICE_CONFIG } from '@/services/hive/orderService';
import { calculateTotalCost } from '@/util/orderUtil';
import ProForm, { ModalForm } from '@ant-design/pro-form';
import { Button, Col, Divider, Form, InputNumber, Modal, Row, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';

const CheckoutModal = (props) => {
  const [form] = Form.useForm();
  const [cashValue, setCashValue] = useState(0);
  const [orderRequest, setOrderRequest] = useState();
  const { onChangeVisible, order, visible } = props;
  form.setFieldsValue(order);

  const onClickCancel = () => {
    onChangeVisible(false);
  };

  const createOrder = async (request) => {
    const requestBody = {
      ...order,
      ...request,
      orderPlaceChannel: ORDER_PLACE_CHANNEL_DIRECT_SALES_IN_SHOP.key,
      orderStatus: ORDER_STATUS_PAYMENT_PENDING.key,
    };
    const response = await BEDROCK_CREATE_SERVICE_REQEUST(
      COMPANY_ORDER_SERVICE_CONFIG,
      requestBody,
    );
    onChangeVisible(false);
  };

  return (
    <ModalForm
      closable={false}
      footer={[]}
      form={form}
      maskClosable={false}
      onFinish={createOrder}
      onChangeVisible={onChangeVisible}
      submitter={{
        resetButtonProps: {
          style: {
            // 隐藏重置按钮
            display: 'none',
          },
        },
        searchConfig: {
          submitText: '完成結賬',
        },
        submitButtonProps: {
          block: true,
          size: 'large',
        },
      }}
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
              F2 會員
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
            <ProFormPaymentChannelRadio name={['hivePaymentChannel']} />
          </Space>
        </Space>
        <Space direction="vertical">
          <Space>
            <Text type="secondary">商品合計</Text>
            <Title level={5}>${calculateTotalCost(order.orderItemInfos)}</Title>
          </Space>
          <Space>
            <Text type="danger">商品優惠</Text>
            <Title level={5} type="danger">
              $0.00
            </Title>
          </Space>
          <Space>
            <Text type="danger">整單優惠</Text>
            <Title level={5} type="danger">
              $0.00
            </Title>
          </Space>
          <Space>
            <Text size={80} style={{ size: 30 }}>
              應收
            </Text>
            <Title level={3}>${calculateTotalCost(order.orderItemInfos)}</Title>
          </Space>
          <Divider />
          <InputNumber onChange={setCashValue} placeholder="現金" />
          <Divider />
          <Text>{cashValue - calculateTotalCost(order.orderItemInfos)}</Text>
        </Space>
      </Space>
    </ModalForm>
  );
};

export default CheckoutModal;
