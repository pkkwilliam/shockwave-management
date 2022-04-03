import React, { useState } from 'react';
import {
  ModalForm,
  ProFormDigit,
  ProFormGroup,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import ProFormCategoryListSelect from '@/commons/proForm/ProFormCategoryListSelect';
import { Form, Space } from 'antd';
import { onModalFormVisibleChange } from '@/commons/proForm/proformUtil';
import ProFormMediaUpload from '@/commons/proForm/ProFormMediaUpload';

const ItemModalForm = (props) => {
  const { item, onFinish, onVisibleChange, visible } = props;
  const [form] = Form.useForm();
  form.setFieldsValue(item);

  return (
    <ModalForm
      form={form}
      onFinish={onFinish}
      onVisibleChange={(visible) => onModalFormVisibleChange(onVisibleChange, form, visible)}
      title={item ? '修改商品' : '新增商品'}
      visible={visible}
      width={1200}
    >
      <ProFormDigit hidden title="ID" name={['id']} />
      <Space direction="vertical">
        <ProFormMediaUpload label="圖片" form={form} max={1} name={['imageUrl']} />
        <Space>
          <ProFormText
            label="品名"
            name="name"
            rules={[{ required: true, message: '請輸入品名' }]}
          />
          <ProFormText label="品牌" name="brand" />
        </Space>
      </Space>

      <ProFormCategoryListSelect label="標簽" mode="multiple" name={['categories']} />
      <Space>
        <ProFormTextArea label="內容" name="content" />
        <ProFormTextArea label="描述" name="description" />
      </Space>
      <ProFormText label="備註" name="remark" />
    </ModalForm>
  );
};

export default ItemModalForm;
