import { getValueEnum } from '@/enum/enumUtil';
import { PAYMENT_CHANNELS } from '@/enum/paymentChannel';
import { ProFormRadio } from '@ant-design/pro-form';
import React from 'react';

const ProFormPaymentChannelRadio = (props) => {
  const paymentChannels = props.paymentChannels ? props.paymentChannels : PAYMENT_CHANNELS;
  return <ProFormRadio.Group valueEnum={getValueEnum(paymentChannels)} {...props} />;
};

export default ProFormPaymentChannelRadio;
