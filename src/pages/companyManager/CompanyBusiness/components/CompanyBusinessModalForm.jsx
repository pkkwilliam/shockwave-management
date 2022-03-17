import React from 'react';
import { ModalForm, ProFormDigit, ProFormGroup, ProFormText } from '@ant-design/pro-form';
import ProFormCompanyBusinessPaymentTypeSelect from '@/commons/proForm/ProFormCompanyBusinessPaymentTypeSelect';
import ProFormCountryCodeSelect from '@/commons/proForm/ProFormCountryCodeSelect';
import { Form } from 'antd';
import ProFormItemSpecificationPriceTemplate from '@/commons/proForm/ProFormItemSpecificationPriceTemplate';
import { onModalFormVisibleChange } from '@/commons/proForm/proformUtil';

const CompanyBusinessModalForm = (props) => {
  const [form] = Form.useForm();
  const { compananyBusiness, onFinish, onVisibleChange, visible } = props;
  form.setFieldsValue(compananyBusiness);

  return (
    <ModalForm
      destroyOnClose
      form={form}
      onFinish={onFinish}
      onVisibleChange={(visible) => onModalFormVisibleChange(onVisibleChange, form, visible)}
      title={compananyBusiness ? '修改客戶' : '創建客戶'}
      visible={visible}
    >
      <ProFormDigit disabled hidden label="ID" name="id" />
      <ProFormText label="企業名稱" name="name" />
      <ProFormItemSpecificationPriceTemplate
        label="價格模版"
        name={['itemSpecificationPriceTemplate', 'id']}
      />
      <ProFormCompanyBusinessPaymentTypeSelect label="支付方式" name="companyBusinessPaymentType" />
      <ProFormGroup title="外部下單用戶">
        <ProFormCountryCodeSelect name={['businessUser', 'countryCode']} />
        <ProFormDigit name={['businessUser', 'smsNumber']} />
      </ProFormGroup>
      <ProFormText label="備註" name="remark" />
    </ModalForm>
  );
};

export default CompanyBusinessModalForm;
