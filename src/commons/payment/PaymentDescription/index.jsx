import { getEnumLabelByKey } from '@/enum/enumUtil';
import { PAYMENT_CHANNELS } from '@/enum/paymentChannel';
import { PAYMENT_STATUSES, PAYMENT_STATUS_PENDING } from '@/enum/paymentStatus';
import { toDisplayDate } from '@/util/dateUtil';
import { CheckCircleFilled, CheckCircleTwoTone } from '@ant-design/icons';
import { Col, Descriptions, Row, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import React from 'react';

const PaymentDescription = (props) => {
  const { payment } = props;
  return (
    <Space direction="vertical">
      <Title level={2}>助力API</Title>
      {payment.paymentStatus === PAYMENT_STATUS_PENDING.key ? null : (
        <Row align="center">
          <Col>
            <Space align="center" direction="vertical">
              <CheckCircleFilled
                style={{
                  color: '#52c41a',
                  fontSize: 38,
                }}
                size={88}
              />
              <Text strong>支付成功</Text>
            </Space>
          </Col>
        </Row>
      )}
      <Descriptions>
        <Descriptions.Item label="單號">{payment.transactionId}</Descriptions.Item>
        <Descriptions.Item label="客戶端單號">{payment.clientApplicationId}</Descriptions.Item>
        <Descriptions.Item label="企業名稱">{payment.companyName}</Descriptions.Item>
        <Descriptions.Item label="應用名稱">{payment.applicationName}</Descriptions.Item>
        <Descriptions.Item label="幣種">{payment.currency}</Descriptions.Item>
        <Descriptions.Item label="過期時間">
          {toDisplayDate(payment.expireDateTime, 'YYYY-MM-DD HH:MM:SS')}
        </Descriptions.Item>
        <Descriptions.Item label="支付渠道">
          {getEnumLabelByKey(PAYMENT_CHANNELS, payment.paymentChannel)}
        </Descriptions.Item>
        <Descriptions.Item label="支付時間">
          {toDisplayDate(payment.paymentDateTime, 'YYYY-MM-DD HH:MM:SS')}
        </Descriptions.Item>
        <Descriptions.Item label="支付狀態">
          {getEnumLabelByKey(PAYMENT_STATUSES, payment.paymentStatus)}
        </Descriptions.Item>
        <Descriptions.Item label="單價">{payment.value}</Descriptions.Item>
      </Descriptions>
      {props.children}
    </Space>
  );
};

export default PaymentDescription;
