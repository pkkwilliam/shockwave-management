import { constructBasicRequest } from './config';

const COMPANY_STAFF_PRINTER_SERVICE_URL = '/company_staff/printer/v1';

export async function COMPANY_STAFF_PRINT_ORDER_BY_ID(orderId) {
  const request = {
    authenticated: true,
    method: 'POST',
    requestUrl: COMPANY_STAFF_PRINTER_SERVICE_URL + `/order/${orderId}`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_STAFF_TEST_SHOP_PRINTER(shopId) {
  const request = {
    authenticated: true,
    method: 'POST',
    requestUrl: COMPANY_STAFF_PRINTER_SERVICE_URL + `/test_printer/shop/${shopId}`,
  };
  return constructBasicRequest(request);
}
