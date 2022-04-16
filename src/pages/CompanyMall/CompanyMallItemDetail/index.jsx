import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from '@umijs/runtime/node_modules/@types/react-router';
import React from 'react';

const CompanyMallItemDetail = (props) => {
  const { itemId } = useParams();

  const queryItemSpecification = () => {};

  return <PageContainer></PageContainer>;
};

export default CompanyMallItemDetail;
