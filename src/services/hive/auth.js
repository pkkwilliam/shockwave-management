import { getServiceUrl } from './config';
import { request } from 'umi';

const AUTH_SERVICE_URL = '/login/v1';

export async function LOGIN(body, options) {
  return request(API_URL + AUTH_SERVICE_URL + '/username_login', {
    getResponse: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
}
