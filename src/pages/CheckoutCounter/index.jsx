import React from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { ProFormSelect } from '@ant-design/pro-form';

const CheckoutCounter = () => {
  return (
    <ProCard direction="column" ghost gutter={[0, 16]}>
      <ProCard gutter={16} ghost style={{ height: 200 }}>
        <ProCard colSpan={16}>
          <StatisticCard.Group direction={'row'}>
            <StatisticCard
              statistic={{
                title: '件數',
                value: 2,
              }}
            />
            <StatisticCard.Divider type={'vertical'} />
            <StatisticCard
              statistic={{
                title: '($)金額',
                value: 39.8,
              }}
            />
          </StatisticCard.Group>
          <ProFormSelect placeholder={'條碼/SKU/名稱/首字母'} showSearch />
        </ProCard>
        <ProCard colSpan={8}>結賬</ProCard>
      </ProCard>
    </ProCard>
  );
};

export default CheckoutCounter;
