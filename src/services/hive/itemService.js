import { constructBasicRequest, contructPaginationRequest } from './config';

const COMPANY_MANAGER_ITEM_SERVICE_URL = '/company_manager/item/v1';

export async function COMPANY_MANAGER_CREATE_ITEM(item) {
  const request = {
    authenticated: true,
    body: item,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_ITEM_SERVICE_URL,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_DELETE_ITEM(itemId) {
  const request = {
    authenticated: true,
    method: 'DELETE',
    requestUrl: COMPANY_MANAGER_ITEM_SERVICE_URL + `/${itemId}/deactivate`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_QUERY_ITEM(params = {}, sort, filter) {
  const request = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
    },
    requestUrl: COMPANY_MANAGER_ITEM_SERVICE_URL + '/query_pagination',
  };
  return contructPaginationRequest(request);
}

export async function COMPANY_MANAGER_UPDATE_ITEM(item) {
  const request = {
    authenticated: true,
    body: item,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_ITEM_SERVICE_URL,
  };
  return constructBasicRequest(request);
}
