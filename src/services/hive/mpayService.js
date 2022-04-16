import { constructBasicRequest } from './config';

export const COMPANY_MPAY_SERVICE_URL = '/company/mpay/v1';

export async function COMPANY_ORDER_MPAY_BARDCODE(barcode, orderId) {
  const request = {
    authenticated: true,
    method: 'POST',
    params: { barcode, orderId },
    requestUrl: COMPANY_MPAY_SERVICE_URL + '/order/barcode',
  };
  return constructBasicRequest(request);
}

export async function COMPANY_ORDER_MPAY_QR_CODE(orderId) {
  const request = {
    authenticated: true,
    method: 'POST',
    params: { orderId },
    requestUrl: COMPANY_MPAY_SERVICE_URL + '/order/qrcode',
  };
  return constructBasicRequest(request);
}
