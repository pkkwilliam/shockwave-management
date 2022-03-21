import React, { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { COMPANY_MANAGER_SHOP_SERVICE_CONFIG } from '@/services/hive/shop';
import { Button, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';

import ShopModalForm from './components/shopModalForm';
import { SHOP_TYPES, SHOP_TYPE_REGULAR } from '@/enum/shopType';
import { convertEnumsToProTableValueEnum } from '@/enum/enumUtil';
import {
  BEDROCK_CREATE_SERVICE_REQEUST,
  BEDROCK_DEACTIVATE_SERVICE_REQUEST,
  BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST,
  BEDROCK_UPDATE_SERVICE_REQUEST,
} from '@/services/hive/bedrockTemplateService';

const Category = () => {
  const actionRef = useRef();
  // const [createModalVisible, setCreateModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  // const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeModalFormVisible = (visible) => {
    if (!visible) {
      setCurrentRow(undefined);
    }
    setModalVisible(visible);
  };

  const createShopServiceRequest = async (shop) => {
    await BEDROCK_CREATE_SERVICE_REQEUST(COMPANY_MANAGER_SHOP_SERVICE_CONFIG, {
      ...shop,
      shopType: SHOP_TYPE_REGULAR.key,
    });
    setModalVisible(false);
    onDataChanged();
    return TextTrackCueList;
  };

  const deleteShopServiceRequest = async (shop) => {
    await BEDROCK_DEACTIVATE_SERVICE_REQUEST(COMPANY_MANAGER_SHOP_SERVICE_CONFIG, shop.id);
    onDataChanged();
  };

  const updateShopServiceRequest = async (shop) => {
    await BEDROCK_UPDATE_SERVICE_REQUEST(COMPANY_MANAGER_SHOP_SERVICE_CONFIG, shop);
    setModalVisible(false);
    onDataChanged();
    return true;
  };

  const onDataChanged = () => {
    actionRef.current.reload();
  };

  const COLUMNS = [
    { title: '店名/倉名', dataIndex: 'name' },
    {
      title: '類型',
      dataIndex: 'shopType',
      valueEnum: convertEnumsToProTableValueEnum(SHOP_TYPES),
    },
    { title: '聯絡人', dataIndex: ['address', 'contactName'], search: false, valueType: 'text' },
    { title: '區號', dataIndex: ['address', 'countryCode'], search: false, valueType: 'number' },
    { title: '電話', dataIndex: ['address', 'phoneNumber'], search: false, valueType: 'number' },
    { title: '街道', dataIndex: ['address', 'street'], search: false, valueType: 'text' },
    { title: '單位', dataIndex: ['address', 'unit'], search: false, valueType: 'text' },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="edit"
          onClick={() => {
            setCurrentRow(record);
            setModalVisible(true);
          }}
        >
          修改
        </a>,
        <Popconfirm
          cancelText="取消"
          key="delete"
          onConfirm={() => deleteShopServiceRequest(record)}
          okText="確定"
          title="確認刪除此門店/倉庫?"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        columns={COLUMNS}
        request={async (params = {}, sort, filter) => {
          return BEDROCK_QUERY_PAGINATION_SERVICE_REQUEST(
            COMPANY_MANAGER_SHOP_SERVICE_CONFIG,
            params,
          );
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
            onClick={() => setModalVisible(true)}
          >
            新建
          </Button>,
        ]}
      />
      <ShopModalForm
        onClickSubmit={currentRow ? updateShopServiceRequest : createShopServiceRequest}
        setModalVisible={onChangeModalFormVisible}
        shop={currentRow}
        visible={modalVisible}
      />
    </PageContainer>
  );
};

export default Category;
