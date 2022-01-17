import { constructBasicRequest, contructPaginationRequest } from './config';

const ADMIN_COMPANY_SERVICE_URL = '/admin/company/v1';
export const ADMIN_PAGINATION_WITH_PARAM = API_URL + ADMIN_COMPANY_SERVICE_URL;

export async function COMPANY_QUERY(params = {}, sort, filter) {
  const requestBody = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
    },
    requestUrl: ADMIN_COMPANY_SERVICE_URL + '/query',
  };
  return contructPaginationRequest(requestBody);
}

export async function CREATE_COMPANY(company) {
  const requestBody = {
    authenticated: true,
    body: company,
    method: 'POST',
    requestUrl: ADMIN_COMPANY_SERVICE_URL,
  };
  return constructBasicRequest(requestBody);
}

export async function UPDATE_COMPANY(company) {
  const requestBody = {
    authenticated: true,
    body: company,
    method: 'PUT',
    requestUrl: ADMIN_COMPANY_SERVICE_URL,
  };
  return constructBasicRequest(requestBody);
}
