import { constructBasicRequest } from './config';

const COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL = '/company_manager/item_specification/v1';

const ITEM_SPECIFICATION_SERVICE_URL = '/company/item_specification/v1';

export const COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG = {
  requireAuth: true,
  serviceUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL,
};

export const ITEM_SPECIFICATION_SERVICE_CONFIG = {
  requireAuth: true,
  serviceUrl: ITEM_SPECIFICATION_SERVICE_URL,
};

export async function COMPANY_MANAGER_CREATE_ITEM_SPECIFICATIONS(itemSpecifications) {
  const request = {
    authenticated: true,
    body: itemSpecifications,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_URL + '/batch',
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
