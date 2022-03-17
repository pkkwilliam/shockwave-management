import React from 'react';
import { ModalForm, ProFormDatePicker, ProFormDigit, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';

const CompanyModalForm = (props) => {
  const [form] = Form.useForm();
  const { company, onClickSubmit, setModalVisible, visible } = props;
  form.setFieldsValue(company);
  return (
    <ModalForm
      destroyOnClose
      form={form}
      onFinish={(values) => onClickSubmit({ ...values, id: company?.id })}
      onVisibleChange={setModalVisible}
      title={company ? '修改企業' : '新增企業'}
      visible={visible}
    >
      <ProFormText
        label="企業中文名稱"
        placeholder="請輸入企業中文名稱"
        required
        name="chineseName"
      />
      <ProFormText
        label="企業英文名稱"
        placeholder="請輸入企業英文名稱"
        required
        name="englishName"
      />
      <ProFormText label="公司前序" placeholder="請輸入企業英文前序" required name="prefix" />
      <ProFormDigit
        label="允許用戶數量"
        placeholder="允許用戶數量"
        required
        name="allowedUserNumber"
      />
      <ProFormDatePicker label="到期日" placeholder="請輸入企業到期日" required name="expiryDate" />
    </ModalForm>
  );
};

export default CompanyModalForm;
