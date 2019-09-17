// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  { name: '首页', path: '/dashboard/monitor', id: 'Menu_j5u1y' },
  { name: '办事网点', path: '/dashboard/offices', id: 'Menu_ohbss' },
  { name: '流量分析', path: '/traffic/statistics', id: 'Menu_6dnxo' },
  { name: '用户分析', path: '/user/statistics', id: 'Menu_7077n' },
  { name: '留存与活跃', path: '/user/activities', id: 'Menu_gtx49' },
  { name: '数据中心', path: '/datacenter', id: 'Menu_9951c' },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice/issues/new',
    external: true,
    newWindow: true,
    id: 'Menu_vle60',
  },
];

export default asideMenuConfig;
