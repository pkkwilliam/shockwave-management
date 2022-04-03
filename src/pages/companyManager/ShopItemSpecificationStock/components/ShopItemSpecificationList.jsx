import React, { useRef, useState } from 'react';

import ProTable, { EditableProTable } from '@ant-design/pro-table';
import {
  BEDROCK_QUERY_LIST_SERVICE_REQUEST,
  BEDROCK_UPDATE_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';
import { COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG } from '@/services/hive/itemSpecificationStockService';
import { SHOP_TYPES } from '@/enum/shopType';
import { getValueEnum } from '@/enum/enumUtil';
import ProTableOperationColumnButtons from '@/commons/proTable/ProTableOperationButtons';

const ShopItemSpecificationList = (props) => {
  const tableActionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const queryItemSpecificationStock = async (params, sort, filter) => {
    return await BEDROCK_QUERY_LIST_SERVICE_REQUEST(
      COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG,
      {
        'itemSpecification.id': props.itemSpecification?.id,
      },
    );
  };

  const update = async (request) => {
    await BEDROCK_UPDATE_SERVICE_REQUEST(
      COMPANY_SHOP_MANAGER_ITEM_SPECIFICATION_STOCK_SERVICE_CONFIG,
      request,
    );
    tableActionRef.current.reload();
  };

  const COLUMNS = [
    { title: '地點', dataIndex: ['shop', 'name'], editable: false },
    {
      title: '地點類型',
      dataIndex: ['shop', 'shopType'],
      editable: false,
      search: false,
      valueEnum: getValueEnum(SHOP_TYPES),
    },
    { title: '地點庫存', dataIndex: ['stock'], search: false, valueType: 'number' },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a key="edit" onClick={() => action?.startEditable(record?.id)}>
          增減庫存
        </a>,
      ],
    },
  ];

  return (
    <EditableProTable
      actionRef={tableActionRef}
      columns={COLUMNS}
      editable={{
        type: 'multiple',
        editableKeys,
        onChange: setEditableRowKeys,
        onSave: async (rowKey, data, row) => {
          update(data);
        },
      }}
      recordCreatorProps={{ disabled: true, position: 'bottom', creatorButtonText: '新增一行' }}
      request={queryItemSpecificationStock}
      rowKey="id"
      search={false}
    />
  );
};

export default ShopItemSpecificationList;
