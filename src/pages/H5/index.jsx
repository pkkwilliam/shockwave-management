import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { useParams } from 'umi';
import { PUBLIC_GET_MPAY_H5_ORDER_REQUEST } from '@/services/hive/mpayService';
import { BEDROCK_GET_BY_ID_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { H5_PAYMENT, PAYMENT_SERVICE_CONFIG } from '@/services/hive/paymentService';

const MpayHelper = () => {
  const { paymentId } = useParams();
  const [h5PaymentRequest, setH5PaymentRequest] = useState();

  const getH5PaymentRequest = async () => {
    const response = await H5_PAYMENT(paymentId);
    setH5PaymentRequest(response);
  };

  useEffect(() => {
    if (h5PaymentRequest) {
      document.forms['payment_auto_submit_form'].submit();
    }
  }, [h5PaymentRequest]);

  useEffect(() => {
    getH5PaymentRequest();
  }, [paymentId]);

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
