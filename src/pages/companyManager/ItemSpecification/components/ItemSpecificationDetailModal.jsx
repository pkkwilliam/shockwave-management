import React, { useRef, useState } from 'react';
import {
  COMPANY_MANAGER_CREATE_ITEM_SPECIFICATION,
  COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION,
  COMPANY_MANAGER_GET_ITEM_SPECIFICATION_BY_ITEM_ID,
  COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATION,
} from '@/services/hive/itemSpecificationService';
import { Button, Modal, Table } from 'antd';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';
import { EditableProTable } from '@ant-design/pro-table';
import { CodeSandboxSquareFilled, PlusOutlined } from '@ant-design/icons';

const ItemSpecificationDetailModal = (props) => {
  const tableRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const { item, onCancel, visible } = props;

  const createItemSpecification = async (request) => {
    const response = await COMPANY_MANAGER_CREATE_ITEM_SPECIFICATION({ ...request, item });
    tableRef.current.reload();
  };

  const deleteItemSpecification = async (record) => {
    await COMPANY_MANAGER_DELETE_ITEM_SPECIFICATION(record.id);
    tableRef.current.reload();
  };

  const queryItemSpecification = async () => {
    const response = await COMPANY_MANAGER_GET_ITEM_SPECIFICATION_BY_ITEM_ID(item?.id);
    return { data: response, total: response.length, success: true };
  };

  const updateItemSpecification = async (record) => {
    const response = await COMPANY_MANAGER_UPDATE_ITEM_SPECIFICATION(record);
    tableRef.current.reload();
  };

  const COLUMNS = [
    { title: '規格名稱', dataIndex: 'name' },
    { title: 'SKU', dataIndex: 'sku' },
    { title: '條碼', dataIndex: 'barcode' },
    { title: '價格', dataIndex: 'price', search: false, valueType: 'money', width: 100 },
    {
      title: '折扣價格',
      dataIndex: 'discountPrice',
      search: false,
      valueType: 'money',
      width: 100,
    },
    {
      title: '長',
      dataIndex: 'length',
      search: false,
      width: 80,
    },
    {
      title: '寬',
      dataIndex: 'width',
      search: false,
      width: 80,
    },
    {
      title: '高',
      dataIndex: 'height',
      search: false,
      width: 80,
    },
    {
      title: '重量',
      dataIndex: 'weight',
      search: false,
      width: 80,
    },
    {
      title: '備註',
      dataIndex: 'remark',
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a key="edit" onClick={() => action?.startEditable(record?.id)}>
          修改
        </a>,
      ],
    },
  ];

  return (
    <Modal destroyOnClose onCancel={onCancel} title={item?.name} visible={visible} width={1500}>
      <EditableProTable
        actionRef={tableRef}
        columns={COLUMNS}
        editable={{
          type: 'multiple',
          editableKeys,
          onChange: setEditableRowKeys,
          onDelete: async (rowKey, data, row) => deleteItemSpecification(data),
          onSave: async (rowKey, data, row) => {
            data.id ? updateItemSpecification(data) : createItemSpecification(data);
          },
        }}
        recordCreatorProps={{ position: 'bottom', creatorButtonText: '新增一行' }}
        request={queryItemSpecification}
        rowKey="id"
        search={false}
      />
    </Modal>
  );
};

export default ItemSpecificationDetailModal;
