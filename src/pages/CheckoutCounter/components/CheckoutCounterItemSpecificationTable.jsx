import ProCard from '@ant-design/pro-card';
import ProTable from '@ant-design/pro-table';
import { Row, Table } from 'antd';
import React from 'react';
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

const CheckoutCounterItemSpecificationTable = (props) => {
  const COLUMNS = [
    { title: '行', valueType: 'indexBorder' },
    {
      title: '商品',
      render: (text, record) => (
        <Space direction="vertical">
          <Link>{`${record.itemSpecification.item.name} ${record.itemSpecification.name}`}</Link>
          <Text type="secondary">{record.itemSpecification.sku}</Text>
        </Space>
      ),
    },
    {
      title: '單價',
      dataIndex: ['itemSpecification', 'price'],
    },
    { title: '數量', dataIndex: 'quantity' },
    {
      title: '小計',
      dataIndex: 'cost',
      render: (text, record) => `$${record.itemSpecification.price * record.quantity}`,
    },
  ];
  return (
    <Table
      options={false}
      columns={COLUMNS}
      pagination={false}
      rowSelection={{
        type: 'checkbox',
        onSelect: (a, b) => {
          console.log(a, b);
        },
      }}
      search={false}
      size="small"
      {...props}
    />
  );
};

export default CheckoutCounterItemSpecificationTable;
