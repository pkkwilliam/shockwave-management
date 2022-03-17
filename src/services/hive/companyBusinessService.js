import { constructBasicRequest, contructPaginationRequest } from './config';

const COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_URL = '/company_manager/company_business/v1';

export async function COMPANY_MANAGER_CREATE_COMPANY_BUSINESS(companyBusiness) {
  const request = {
    authenticated: true,
    body: companyBusiness,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_URL,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_DELETE_COMPANY_BUSINESS(companyBusinessId) {
  const request = {
    authenticated: true,
    method: 'DELETE',
    requestUrl: COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_URL + `/${companyBusinessId}/deactivate`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_QUERY_COMPANY_BUSINESS(params = {}, sort, filter) {
  const request = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
    },
    requestUrl: COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_URL + '/query_pagination',
  };
  return contructPaginationRequest(request);
}

export async function COMPANY_MANAGER_UPDATE_COMPANY_BUSINESS(companyBusiness) {
  const request = {
    authenticated: true,
    body: companyBusiness,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_COMPANY_BUSINESS_SERVICE_URL,
  };
  return constructBasicRequest(request);
}
