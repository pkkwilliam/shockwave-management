import { getUserToken } from '@/storage/applicationStorage';
import { request } from 'umi';

export function getServiceUrl() {
  return API_URL;
}

export async function constructBasicRequest(requestInfo, options) {
  const { body, method, requestUrl, params } = requestInfo;
  return request(getServiceUrl() + requestUrl, {
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + getUserToken(),
      'Content-Type': 'application/json;charset=UTF-8',
    },
    method,
    params,
    ...(options || {}),
  });
}

export async function contructPaginationRequest(requestInfo, options) {
  return constructBasicRequest(requestInfo, options).then((response) => ({
    ...response,
    success: true,
    data: response.content,
  }));
}
