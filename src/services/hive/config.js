import { getUserToken } from '@/storage/applicationStorage';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { request } from 'umi';
import serviceErrorCode from './serviceErrorCode.json';
import { message } from 'antd';

export function getServiceUrl() {
  return API_URL;
}

export async function constructBasicRequest(requestInfo, options) {
  const { body, method, requestUrl, params, successMessage } = requestInfo;
  return request(getServiceUrl() + requestUrl, {
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + getUserToken(),
      'Content-Type': 'application/json;charset=UTF-8',
    },
    method,
    params,
    ...(options || {}),
    errorHandler: (error) => {
      const { data } = error;
      message.error(getErrorMessage(data));
      return data;
    },
  }).then((response) => {
    if (response.error) {
      return Promise.reject(response);
    }
    if (response && successMessage) {
      message.success(successMessage);
    }
    return response;
  });
}

export async function contructPaginationRequest(requestInfo, options) {
  return constructBasicRequest(requestInfo, options).then((response) => ({
    ...response,
    success: true,
    data: response.content,
    total: response.totalElements,
  }));
}

function getErrorMessage(data) {
  if (data.errorCode && serviceErrorCode[data.errorCode]) {
    return serviceErrorCode[data.errorCode];
  } else if (data.message) {
    return data.message;
  } else {
    return '出錯';
  }
}
