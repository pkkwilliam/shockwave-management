import React, { useRef, useState } from 'react';
import { COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG } from '@/services/hive/itemSpecificationService';
import { Button, Card, Form, Modal, Table, Upload } from 'antd';
import { EditableProTable } from '@ant-design/pro-table';
import ShopItemSpecificationList from '../../ShopItemSpecificationStock/components/ShopItemSpecificationList';
import {
  BEDROCK_CREATE_SERVICE_REQEUST,
  BEDROCK_DEACTIVATE_SERVICE_REQUEST,
  BEDROCK_QUERY_LIST_SERVICE_REQUEST,
  BEDROCK_UPDATE_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { ITEM_SPECIFICATION_STATUSES } from '@/enum/itemSpecificationStatus';
import { getValueEnum } from '@/enum/enumUtil';

const ItemSpecificationDetailModal = (props) => {
  const tableRef = useRef();
  const [form] = Form.useForm();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const { item, onCancel, visible } = props;

  const createItemSpecification = async (request) => {
    const response = await BEDROCK_CREATE_SERVICE_REQEUST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      { ...request, item },
    );
    tableRef.current.reload();
  };

  const deleteItemSpecification = async (record) => {
    await BEDROCK_DEACTIVATE_SERVICE_REQUEST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      record.id,
    );
    tableRef.current.reload();
  };

  const queryItemSpecification = async () => {
    return BEDROCK_QUERY_LIST_SERVICE_REQUEST(COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG, {
      active: true,
      'item.id': item?.id,
    });
  };

  const updateItemSpecification = async (record) => {
    const response = await BEDROCK_UPDATE_SERVICE_REQUEST(
      COMPANY_MANAGER_ITEM_SPECIFICATION_SERVICE_CONFIG,
      record,
    );
    tableRef.current.reload();
  };

  const COLUMNS = [
    {
      title: '圖片',
      dataIndex: ['imageUrl'],
      search: false,
      valueType: 'image',
      renderFormItem: () => <Upload action={'hello'} />,
    },
    { title: '規格名稱', dataIndex: 'name' },
    {
      title: '狀態',
      dataIndex: 'itemSpecificationStatus',
      valueEnum: getValueEnum(ITEM_SPECIFICATION_STATUSES),
    },
    { title: '庫存', dataIndex: ['stockResponse', 'stock'], editable: false },
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
    <Modal destroyOnClose onCancel={onCancel} title={item?.name} visible={visible} width={1800}>
      <EditableProTable
        actionRef={tableRef}
        form={form}
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
        expandable={{
          expandedRowRender: (record) => {
            console.log(record);
            return (
              <Card>
                <ShopItemSpecificationList itemSpecification={record} />
              </Card>
            );
          },
          rowExpandable: (record) => record.name !== 'Not Expandable',
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
