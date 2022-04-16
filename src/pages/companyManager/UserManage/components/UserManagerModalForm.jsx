import React, { useEffect, useState } from 'react';
import { ModalForm, ProFormCheckbox, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import {
  USER_ROLE_COMPANY_ADMIN,
  USER_ROLE_COMPANY_MANAGER,
  USER_ROLE_SHOP_MANAGER,
  USER_ROLE_WAREHOUSE_MANAGER,
  USER_ROLE_STAFF,
  USER_ROLE_BUYER,
} from '@/enum/userRole';
import ProFormUserRoleCheckbox from '@/commons/proForm/ProFormUserRoleCheckbox';

const UserModalForm = (props) => {
  const [form] = Form.useForm();
  const { onChangeModalFormVisible, onFinish, user, visible } = props;
  form.setFieldsValue(user);

  const onVisibleChange = (visible) => {
    if (!visible) {
      form.resetFields();
    }
    onChangeModalFormVisible(visible);
  };

  return (
    <ModalForm
      destroyOnClose
      form={form}
      modalProps={{
        maskClosable: false,
      }}
      onFinish={onFinish}
      onVisibleChange={onVisibleChange}
      title={user ? '修改用戶' : '新增用戶'}
      visible={visible}
    >
      <ProFormText hidden label="SID" name={['sid']} />
      <ProFormText label="名字" placeholder="請輸入名字" required name="name" />
      <ProFormText label="用戶名(英文無空格)" placeholder="請輸入用戶名" required name="username" />
      <ProFormUserRoleCheckbox
        name="grantedRoles"
        label="權限"
        userRoles={[
          USER_ROLE_COMPANY_ADMIN,
          USER_ROLE_COMPANY_MANAGER,
          USER_ROLE_SHOP_MANAGER,
          USER_ROLE_WAREHOUSE_MANAGER,
          USER_ROLE_STAFF,
          USER_ROLE_BUYER,
        ]}
      />
    </ModalForm>
  );
};

export default UserModalForm;
