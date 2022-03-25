import { BEDROCK_UPDATE_SERVICE_REQUEST } from '@/services/hive/bedrockTemplateService';
import { COMPANY_ADMIN_COMPANY_CONFIG_SERVICE_CONFIG } from '@/services/hive/companyConfigService';
import ProForm, { ProFormDigit, ProFormGroup, ProFormSwitch } from '@ant-design/pro-form';
import { Form } from 'antd';
import { useModel } from 'umi';
import React from 'react';

const CompanyOrderConfigForm = (props) => {
  const [form] = Form.useForm();
  const { initialState, refresh } = useModel('@@initialState');

  form.setFieldsValue(initialState.companyConfig);

  const onUpdate = async (request) => {
    BEDROCK_UPDATE_SERVICE_REQUEST(COMPANY_ADMIN_COMPANY_CONFIG_SERVICE_CONFIG, request);
    // refresh();
    return true;
  };
  return (
    <ProForm form={form} onFinish={onUpdate}>
      <ProFormGroup title="內部訂單" />
      <ProFormDigit label="ID" name={['id']} />
      <ProFormSwitch
        label="允許制作超過庫存的訂單"
        name={['companyOrderConfig', 'allowStockUnderInternalOrder']}
      />
    </ProForm>
  );
};

export default CompanyOrderConfigForm;
