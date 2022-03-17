import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ItemModalForm from './Components/ItemModalForm';
import {
  COMPANY_MANAGER_CREATE_ITEM,
  COMPANY_MANAGER_DELETE_ITEM,
  COMPANY_MANAGER_QUERY_ITEM,
  COMPANY_MANAGER_UPDATE_ITEM,
} from '@/services/hive/itemService';
import ItemSpecificationModalForm from './Components/ItemSpecificationModalForm';
import { COMPANY_MANAGER_MODIFY_ITEM_SPECIFICATIONS } from '@/services/hive/itemSpecificationService';
import ItemSpecificationDetailModal from '@/pages/companyManager/ItemSpecification/components/ItemSpecificationDetailModal';

const ItemPage = () => {
  const tableRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [showItemSpecification, setShowItemSpecification] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showSpecificationModalForm, setShowSpecificationModalForm] = useState(false);

  const createItemService = async (item) => {
    const response = await COMPANY_MANAGER_CREATE_ITEM(item);
    tableRef.current.reload();
    setShowModalForm(false);
    return true;
  };

  const createItemSpecificationsService = async (itemSpecifications) => {
    const response = await COMPANY_MANAGER_MODIFY_ITEM_SPECIFICATIONS(itemSpecifications);
  };

  const deleteItemService = async (record) => {
    const response = await COMPANY_MANAGER_DELETE_ITEM(record.id);
    tableRef.current.reload();
  };

  const onClickItem = (record) => {
    setCurrentRow(record);
    setShowItemSpecification(record);
  };

  const onCloseItemDetailModal = () => {
    setCurrentRow(undefined);
    setShowItemSpecification(false);
  };

  const onClickShowItemSpecificationModalForm = (record) => {
    setCurrentRow(record);
    setShowSpecificationModalForm(true);
  };

  const queryItemService = async (params = {}, sort, filter) => {
    return await COMPANY_MANAGER_QUERY_ITEM({ ...params, active: true }, sort, filter);
  };

  const updateItemService = async (request) => {
    const response = await COMPANY_MANAGER_UPDATE_ITEM(request);
    tableRef.current.reload();
    setCurrentRow();
    setShowModalForm(false);
    return true;
  };

  const COLUMNS = [
    {
      title: '品名',
      dataIndex: 'name',
      render: (text, record) => <a onClick={() => onClickItem(record)}>{text}</a>,
    },
    { title: '品牌', dataIndex: 'brand' },
    {
      title: '標簽',
      dataIndex: 'categories',
      render: (text, record) => {
        return record.categories.map((category) => <Tag color="blue">{category.name}</Tag>);
      },
    },
    { title: '價格', dataIndex: 'price' },
    { title: '備註', dataIndex: 'remark' },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record) => [
        <a key="specification" onClick={() => onClickShowItemSpecificationModalForm(record)}>
          規格
        </a>,
        <a key="edit">修改</a>,
        <Popconfirm
          cancelText="取消"
          key="delete"
          onConfirm={() => deleteItemService(record)}
          okText="確定"
          title="確認刪除?"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={tableRef}
        columns={COLUMNS}
        request={queryItemService}
        toolBarRender={() => [
          <Button
            icon={<PlusOutlined />}
            key="button"
            onClick={() => setShowModalForm(true)}
            type="primary"
          >
            新建
          </Button>,
        ]}
      />
      <ItemModalForm
        item={currentRow}
        onFinish={currentRow ? updateItemService : createItemService}
        onVisibleChange={setShowModalForm}
        visible={showModalForm}
      />
      <ItemSpecificationModalForm
        item={currentRow}
        onFinish={createItemSpecificationsService}
        onVisibleChange={setShowSpecificationModalForm}
        visible={showSpecificationModalForm}
      />
      <ItemSpecificationDetailModal
        item={currentRow}
        visible={showItemSpecification}
        onCancel={onCloseItemDetailModal}
      />
    </PageContainer>
  );
};

export default ItemPage;
