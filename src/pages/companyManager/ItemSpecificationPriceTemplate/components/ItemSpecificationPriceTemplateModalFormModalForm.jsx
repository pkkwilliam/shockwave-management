import React from 'react';
import { ModalForm, ProFormDigit, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import ProFormPriceTemplateList from './ProFormTemplatePriceList';
import { onModalFormVisibleChange } from '@/commons/proForm/proformUtil';

const ItemSpecificationPriceTemplateModalForm = (props) => {
  const { itemSpecificationPriceTemplate, onFinish, onVisibleChange, visible } = props;
  const [form] = Form.useForm();
  form.setFieldsValue(itemSpecificationPriceTemplate);

  return (
    <ModalForm
      destroyOnClose
      form={form}
      onFinish={onFinish}
      onVisibleChange={(visible) => onModalFormVisibleChange(onVisibleChange, form, visible)}
      title={itemSpecificationPriceTemplate ? '修改模版' : '創建模版'}
      visible={visible}
      width={1500}
    >
      <ProFormDigit disabled hidden lable="ID" name="id" />
      <ProFormText
        label="模版名稱"
        name="name"
        rules={[{ required: true, message: '請輸入模版名稱' }]}
      />
      <ProFormPriceTemplateList label="價格" name="priceTemplates" />
      <ProFormText label="備註" name="remark" />
    </ModalForm>
  );
};

export default ItemSpecificationPriceTemplateModalForm;
