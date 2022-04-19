import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { useParams } from 'umi';
import { H5_PAYMENT } from '@/services/hive/paymentService';

const MpayHelper = () => {
  const { transactionId } = useParams();
  const [h5PaymentRequest, setH5PaymentRequest] = useState();

  const getH5PaymentRequest = async () => {
    const response = await H5_PAYMENT(transactionId);
    setH5PaymentRequest(response);
  };

  useEffect(() => {
    if (h5PaymentRequest) {
      document.forms['payment_auto_submit_form'].submit();
    }
  }, [h5PaymentRequest]);

  useEffect(() => {
    getH5PaymentRequest();
  }, [transactionId]);

  return (
    <div className={styles.container}>
      <form id="payment_auto_submit_form" action={h5PaymentRequest?.requestUrl ?? ''} method="get">
        {Object.keys(h5PaymentRequest?.paymentRequest ?? []).map((key) => (
          <input hidden name={key} value={h5PaymentRequest.paymentRequest[key]} key="formPay" />
        ))}
      </form>
    </div>
  );
};

export default MpayHelper;
