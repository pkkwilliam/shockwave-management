import { constructBasicRequest, contructPaginationRequest } from './config';

const COMPANY_MANAGER_CATEGORY_SERVICE_URL = '/company_manager/category/v1';

export async function COMPANY_MANAGER_CREATE_CATEGORY(category) {
  const requestBody = {
    authenticated: true,
    body: category,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_CATEGORY_SERVICE_URL,
  };
  return constructBasicRequest(requestBody);
}

export async function COMPANY_MANAGER_DELETE_CATEGORY(companyId) {
  const requestBody = {
    authenticated: true,
    method: 'DELETE',
    requestUrl: COMPANY_MANAGER_CATEGORY_SERVICE_URL + `/${companyId}`,
  };
  return constructBasicRequest(requestBody);
}

export async function COMPANY_MANAGER_QUERY_CATEGORY(params = {}, sort, filter) {
  const requestBody = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
      direction: 'DESC',
    },
    requestUrl: COMPANY_MANAGER_CATEGORY_SERVICE_URL + '/query_pagination',
  };
  return contructPaginationRequest(requestBody);
}

export async function COMPANY_MANAGER_UPDATE_CATEGORY(category) {
  const requestBody = {
    authenticated: true,
    body: category,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_CATEGORY_SERVICE_URL,
  };
  return constructBasicRequest(requestBody);
}
