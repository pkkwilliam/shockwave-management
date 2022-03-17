import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import CategoryModalForm from './components/categoryModalForm';
import {
  COMPANY_MANAGER_CREATE_CATEGORY,
  COMPANY_MANAGER_DELETE_CATEGORY,
  COMPANY_MANAGER_QUERY_CATEGORY,
  COMPANY_MANAGER_UPDATE_CATEGORY,
} from '@/services/hive/category';
import { Button, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';

const Category = () => {
  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [modalFormVisible, setModalFormVisible] = useState(false);

  const createCategoryServiceRequest = async (category) => {
    await COMPANY_MANAGER_CREATE_CATEGORY(category);
    onDataChanged();
    return true;
  };

  const deleteCategoryServiceRequest = async (category) => {
    await COMPANY_MANAGER_DELETE_CATEGORY(category.id);
    onDataChanged();
  };

  const updateCategoryServiceRequest = async (category) => {
    await COMPANY_MANAGER_UPDATE_CATEGORY(category);
    onDataChanged();
    return true;
  };

  const onChangeModalFormVisible = (visible) => {
    if (!visible) {
      setCurrentRow(undefined);
    }
    setModalFormVisible(visible);
  };

  const onDataChanged = () => {
    actionRef.current.reload();
  };

  const COLUMNS = [
    { dataIndex: 'index', valueType: 'indexBorder' },
    { title: '標簽', dataIndex: 'name' },
    ProTableOperationColumnButtons((record) => {
      setCurrentRow(record);
      setModalFormVisible(true);
    }, deleteCategoryServiceRequest),
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        columns={COLUMNS}
        request={async (params = {}, sort, filter) => {
          return COMPANY_MANAGER_QUERY_CATEGORY(params);
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            icon={<PlusOutlined />}
            key="button"
            type="primary"
            onClick={() => setModalFormVisible(true)}
          >
            新建
          </Button>,
        ]}
      />

      <CategoryModalForm
        category={currentRow}
        onClickSubmit={currentRow ? updateCategoryServiceRequest : createCategoryServiceRequest}
        setModalVisible={onChangeModalFormVisible}
        visible={modalFormVisible}
      />
    </PageContainer>
  );
};

export default Category;
