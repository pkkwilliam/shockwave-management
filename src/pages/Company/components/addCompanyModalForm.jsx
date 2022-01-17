import React from 'react';
import ProForm, {
  ModalForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-form';

const AddCompanyModalForm = (props) => {
  const { setModalVisible, visible } = props;
  return (
    <ModalForm
      onFinish={(values) => console.log(values)}
      onVisibleChange={setModalVisible}
      title="增加企業"
      visible={visible}
    >
      <ProFormText label="企業名稱" placeholder="請輸入企業名稱" required name="name" />
      <ProFormDigit
        label="允許用戶數量"
        placeholder="允許用戶數量"
        required
        name="allowedUserNumber"
      />
      <ProFormDatePicker label="到期日" placeholder="請輸入企業到期日" required name="expireDate" />
    </ModalForm>
  );
};

export default AddCompanyModalForm;
