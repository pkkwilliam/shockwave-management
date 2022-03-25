import { getValueEnum } from '@/enum/enumUtil';
import { PAYMENT_CHANNELS } from '@/enum/paymentChannel';
import { ProFormRadio } from '@ant-design/pro-form';
import React from 'react';

const ProFormPaymentChannelRadio = (props) => {
  return <ProFormRadio.Group valueEnum={getValueEnum(PAYMENT_CHANNELS)} {...props} />;
};

export default ProFormPaymentChannelRadio;
