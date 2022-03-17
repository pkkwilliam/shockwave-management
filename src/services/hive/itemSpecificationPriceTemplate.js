import { constructBasicRequest, contructPaginationRequest } from './config';

const COMPANY_MANAGER_ITEM_SPECIFICATION_PRICE_TEMPLATE_SERVICE_URL =
  '/company_manager/item_specification_price_template/v1';

export async function COMPANY_MANAGER_CREATE_ITEM_SPECIFICATION_PRICE_TEMPLATE(
  itemSpecificationPriceTemplate,
) {
  const request = {
    authenticated: true,
    body: itemSpecificationPriceTemplate,
    method: 'POST',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_PRICE_TEMPLATE_SERVICE_URL,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION_PRICE_TEMPLATE(
  itemSpecificationPriceTemplateId,
) {
  const request = {
    authenticated: true,
    method: 'DELETE',
    requestUrl:
      COMPANY_MANAGER_ITEM_SPECIFICATION_PRICE_TEMPLATE_SERVICE_URL +
      `/${itemSpecificationPriceTemplateId}/deactivate`,
  };
  return constructBasicRequest(request);
}

export async function COMPANY_MANAGER_QUERY_ITEM_SPECIFICATION_PRICE_TEMPLATE(
  params = {},
  sort,
  filter,
) {
  const request = {
    authenticated: true,
    method: 'GET',
    params: {
      ...params,
      pageRequest: params.current - 1,
    },
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_PRICE_TEMPLATE_SERVICE_URL + '/query_pagination',
  };
  return contructPaginationRequest(request);
}

export async function COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATION_PRICE_TEMPLATE(
  itemSpecificationPriceTemplate,
) {
  const request = {
    authenticated: true,
    body: itemSpecificationPriceTemplate,
    method: 'PUT',
    requestUrl: COMPANY_MANAGER_ITEM_SPECIFICATION_PRICE_TEMPLATE_SERVICE_URL,
  };
  return constructBasicRequest(request);
}
