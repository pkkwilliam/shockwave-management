import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Typography } from 'antd';
import { useIntl } from 'umi';
import styles from './Welcome.less';
import Onboard from '@/components/Onboard';
import Title from 'antd/lib/typography/Title';
import ProCard from '@ant-design/pro-card';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome = () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Onboard />
    </PageContainer>
  );
};

export default Welcome;
