import { ProFormCheckbox } from '@ant-design/pro-form';
import { getValueEnum } from '@/enum/enumUtil';

import React from 'react';
import { USER_ROLES } from '@/enum/userRole';

const ProFormUserRoleCheckbox = (props) => {
  return <ProFormCheckbox.Group valueEnum={getValueEnum(USER_ROLES)} {...props} />;
};

export default ProFormUserRoleCheckbox;
