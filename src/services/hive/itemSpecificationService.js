import { constructBasicRequest, contructPaginationRequest } from './config';

const COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL = '/company_manager/item_specification/v1';

export async function COMPANY_MANAGER_CREATE_ITEM_SPECIFICATION(itemSpecification) {
  const request = {
    authenticated: true,
    body: itemSpecification,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_CREATE_ITEM_SPECIFICATIONS(itemSpecifications) {
  const request = {
    authenticated: true,
    body: itemSpecifications,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + '/batch',
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION(itemSpecificationId) {
  const request = {
    authenticated: true,
    method: 'DELETE',
    requestUrl:
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + `/${itemSpecificationId}/deactivate`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_GET_ITEM_SPECIFICATION_BY_ITEM_ID(itemId) {
  const request = {
    authenticated: true,
    method: 'GET',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + `/item/${itemId}`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_MODIFY_ITEM_SPECIFICATIONS(itemSpecifications) {
  const request = {
    authenticated: true,
    body: itemSpecifications,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + '/modify',
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION(params = {}, sort, filter) {
  const request = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
    },
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + '/query_pagination',
  };
  return contructPaginationRequest(request);
}

export async function COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATION(itemSpecification) {
  const request = {
    authenticated: true,
    body: itemSpecification,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATIONS(itemSpecifications) {
  const request = {
    authenticated: true,
    body: itemSpecifications,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + '/batch',
  };
  return constructBasicRequest(request);
}
