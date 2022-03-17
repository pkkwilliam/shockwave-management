import { constructBasicRequest, contructPaginationRequest } from './config';

const COMPANY_MANAGER_SHOP_SERVICE_URL = '/company_manager/shop/v1';

export async function COMPANY_MANAGER_CREATE_SHOP(shop) {
  const request = {
    authenticated: true,
    body: shop,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_SHOP_SERVICE_URL,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_DELETE_SHOP(shopId) {
  const request = {
    authenticated: true,
    method: 'DELETE',
    requestUrl: COMPANY_MANAGER_SHOP_SERVICE_URL + `/${shopId}`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_QUERY_SHOP(params = {}, sort, filter) {
  const request = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
    },
    requestUrl: COMPANY_MANAGER_SHOP_SERVICE_URL + '/query_pagination',
  };
  return contructPaginationRequest(request);
}

export async function COMPANY_MANAGER_UPDATE_SHOP(shop) {
  const request = {
    authenticated: true,
    body: shop,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_SHOP_SERVICE_URL,
  };
  return constructBasicRequest(request);
}
