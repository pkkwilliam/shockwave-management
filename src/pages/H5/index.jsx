import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { history, useParams } from 'umi';
import { GET_PAYMENT_BY_TRANSACTION_ID, H5_PAYMENT } from '@/services/hive/paymentService';
import { Button, Card, Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { PAYMENT_STATUS_PENDING } from '@/enum/paymentStatus';
import PaymentDescription from '@/commons/payment/PaymentDescription';
import WechatBrowserMask, { isWechatBrowser } from '@/commons/WechatBrowserMask';

const MpayHelper = () => {
  const { transactionId } = useParams();
  const [h5PaymentRequest, setH5PaymentRequest] = useState();
  const [payment, setPayment] = useState({});

  useEffect(() => {
    getPaymentByTransationId();
  }, [transactionId]);

  const executeH5Payment = async () => {
    const response = await H5_PAYMENT(transactionId);
    setH5PaymentRequest(response);
    document.forms['payment_auto_submit_form'].submit();
  };

  const getPaymentByTransationId = async () => {
    const response = await GET_PAYMENT_BY_TRANSACTION_ID(transactionId);
    setPayment(response);
    if (!isWechatBrowser() && response.paymentStatus === PAYMENT_STATUS_PENDING.key) {
      executeH5Payment();
    }
  };

  const onClickBack = () => {
    history.goBack();
  };

  const onClickPay = () => {
    executeH5Payment();
  };

  if (isWechatBrowser() && payment.paymentStatus === PAYMENT_STATUS_PENDING.key) {
    return <WechatBrowserMask />;
  } else {
    return (
      <div className={styles.container}>
        <form
          id="payment_auto_submit_form"
          action={h5PaymentRequest?.requestUrl ?? ''}
          method="get"
        >
          {Object.keys(h5PaymentRequest?.paymentRequest ?? []).map((key) => (
            <input hidden name={key} value={h5PaymentRequest.paymentRequest[key]} key="formPay" />
          ))}
        </form>
        <Layout>
          <Content
            style={{
              padding: 12,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Card>
              <PaymentDescription payment={payment}>
                <Button
                  block
                  type="primary"
                  onClick={
                    payment.paymentStatus === PAYMENT_STATUS_PENDING.key ? onClickPay : onClickBack
                  }
                >
                  {payment.paymentStatus === PAYMENT_STATUS_PENDING.key ? '支付' : '返回'}
                </Button>
              </PaymentDescription>
            </Card>
          </Content>
        </Layout>
      </div>
    );
  }
};

export default MpayHelper;
