import { PAYMENT_CHANNELS } from '@/enum/paymentChannel';
import { Button } from 'antd';
import React from 'react';

const PaymentChannelSelect = () => {
  return PAYMENT_CHANNELS.map((paymentChannel) => <Button>{paymentChannel.label}</Button>);
};

const CheckoutCounterPayment = (props) => {
  return <PaymentChannelSelect />;
};

export default CheckoutCounterPayment;
