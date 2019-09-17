import React from 'react';

import Card from '../Card';
import CustomMap from '@/components/CustomMap';

const getData = () => {
  return Array.from({ length: 5 }).map((item, index) => {
    return {
      name: `${index + 1}. 云栖大会`,
      num: parseInt(Math.random() * 10000, 10),
    };
  });
};

export default function LatestActivity() {
  const dataSource = getData();
  const columns = [
    {
      title: '地址',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '电话',
      dataIndex: 'num',
      key: 'num',
    },
  ];

  return (
    <Card
      title="办事服务点"
      subTitle="办事网点"
      link={{ text: '新增用户明细', to: '/user/statistics' }}
      dataSource={dataSource}
      columns={columns}
      content={<CustomMap />}
    />
  );
}
