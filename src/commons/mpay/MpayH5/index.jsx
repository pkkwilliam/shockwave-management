import { PUBLIC_TEST_GET_MPAY_H5_REQUEST } from '@/services/hive/mpayService';
import { ProFormText } from '@ant-design/pro-form';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const MpayH5Payment = (props) => {
  const [transactionId, setTransactionId] = useState();
  const [h5PaymentRequest, setPaymentRequest] = useState({});
  const getRequest = async () => {
    const response = await PUBLIC_TEST_GET_MPAY_H5_REQUEST(transactionId);
    setPaymentRequest(response);
  };

  const onClickSubmit = async () => {
    await getRequest();
    document.forms['payment_auto_submit_form'].submit();
  };

  return (
    <>
      <ProFormText
        label="transaction id"
        fieldProps={{
          onChange: (event) => setTransactionId(event.target.value),
          value: transactionId,
        }}
      />
      <form id="payment_auto_submit_form" action={h5PaymentRequest?.requestUrl ?? ''} method="get">
        {Object.keys(h5PaymentRequest?.paymentRequest ?? []).map((key) => (
          <input name={key} value={h5PaymentRequest.paymentRequest[key]} key="formPay" />
        ))}
      </form>
      <Button onClick={onClickSubmit}>提交Mpay</Button>
    </>
  );
};

export default MpayH5Payment;
