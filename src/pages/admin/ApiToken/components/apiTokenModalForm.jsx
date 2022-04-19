import React from 'react';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Form } from 'antd';
import ProFormCompanySelect from '@/commons/proForm/ProFormCompanySelect';

const ApiTokenModalForm = (props) => {
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
      <ProFormCompanySelect
        label="企業"
        placeholder="請選擇企業"
        required
        name={['company', 'id']}
      />
      <ProFormText label="應用名稱" placeholder="請輸入應用名稱" required name="applicationName" />
    </ModalForm>
  );
};

export default ApiTokenModalForm;
