import React, { useState } from 'react';
import {
  ModalForm,
  ProFormGroup,
  ProFormText,
  ProFormTextArea,
  ProFormUploadDragger,
} from '@ant-design/pro-form';
import ProFormCategorySelect from '@/commons/proForm/ProFormCategorySelect';
import { Form } from 'antd';
import { onModalFormVisibleChange } from '@/commons/proForm/proformUtil';
import { COMPANY_MANAGER_GET_MEDIA_UPLOAD_TOKEN } from '@/services/hive/imageService';

const ItemModalForm = (props) => {
  const [form] = Form.useForm();
  const [token, setToken] = useState();
  const { item, onFinish, onVisibleChange, visible } = props;

  const beforeUpload = async () => {
    const response = await COMPANY_MANAGER_GET_MEDIA_UPLOAD_TOKEN();
    setToken(response.token);
  };

  return (
    <ModalForm
      form={form}
      onFinish={onFinish}
      onVisibleChange={(visible) => onModalFormVisibleChange(onVisibleChange, form, visible)}
      title={item ? '修改商品' : '新增商品'}
      visible={visible}
    >
      <ProFormGroup title="物品基本詳情">
        <ProFormUploadDragger
          label="商品圖片"
          name="imageUrls"
          data={{ token }}
          action="https://up-z2.qiniup.com"
        />
        <ProFormText label="品名" name="name" rules={[{ required: true, message: '請輸入品名' }]} />
        <ProFormText label="牌子" name="brand" />
        <ProFormCategorySelect label="標簽" mode="multiple" name={['categories']} />
        <ProFormTextArea label="內容" name="content" />
        <ProFormTextArea label="描述" name="description" />
      </ProFormGroup>
      <ProFormGroup title="其他">
        <ProFormText label="備註" name="remark" />
      </ProFormGroup>
    </ModalForm>
  );
};

export default ItemModalForm;
