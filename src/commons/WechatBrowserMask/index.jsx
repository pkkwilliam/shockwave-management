import { EllipsisOutlined, GlobalOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';

const WechatBrowserMask = () => {
  return (
    <Modal closable={false} footer={null} visible>
      <Space direction="vertical">
        <Space>
          <Text>1. 點擊右上角</Text>
          <EllipsisOutlined style={{ fontSize: 38 }} />
        </Space>

        <Space>
          <Text>2. 在菜單中點擊</Text>
          <Text>瀏覽器</Text>
          <GlobalOutlined style={{ fontSize: 38 }} />
          <Text>中開啟</Text>
        </Space>
      </Space>
    </Modal>
  );
};

export function isWechatBrowser() {
  let ua = navigator.userAgent.toLowerCase();
  let isWechatBrowser = ua.includes('weixin') ? true : false;
  return isWechatBrowser;
}

export default WechatBrowserMask;
