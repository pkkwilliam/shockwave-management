import { constructBasicRequest } from './config';

const COMPANY_MANAGER_MEDIA_SERVICE_URL = '/company_manager/media/v1';

export async function COMPANY_MANAGER_GET_MEDIA_UPLOAD_TOKEN() {
  const request = {
    authenticated: true,
    method: 'GET',
    requestUrl: COMPANY_MANAGER_MEDIA_SERVICE_URL,
  };
  return constructBasicRequest(request);
}
