import { constructBasicRequest } from './config';

const USER_PROFILE_SERVICE_URL = '/user_profile/v1';

export async function GET_USER_PROFILE() {
  const requestInfo = {
    authenticated: true,
    method: 'GET',
    requestUrl: USER_PROFILE_SERVICE_URL,
  };
  return constructBasicRequest(requestInfo);
}
