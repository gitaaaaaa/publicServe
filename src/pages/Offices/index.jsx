import React, { Component } from 'react';
import ComplexTabTable from './components/ComplexTabTable';
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

export default function Offices() {
  const breadcrumb = [
    {
      link: '/dashboard/monitor',
      text: '首页',
    },
    {
      link: '',
      text: '办事网点',
    },
  ];
  return (
    <div className="Offices-page">
      {/* 面包屑 */}
      <CustomBreadcrumb items={breadcrumb} title="办事网点"/>
      {/* 附带复杂的 Tab 多级筛选项的表格 */}
      <ComplexTabTable />
    </div>
  );
}
