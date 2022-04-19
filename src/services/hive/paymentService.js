import { constructBasicRequest } from './config';

export const PAYMENT_SERVICE_CONFIG = {
  requireAuth: false,
  serviceUrl: '/payment/v1',
};

export async function H5_PAYMENT(paymentId) {
  const request = {
    authenticated: PAYMENT_SERVICE_CONFIG.requireAuth,
    method: 'GET',
    requestUrl: PAYMENT_SERVICE_CONFIG.serviceUrl + `/h5/${paymentId}`,
  };
  return constructBasicRequest(request);
}
