import React, { useState, useEffect } from "react"
import IceContainer from '@icedesign/container'
import styles from './index.module.scss';

export default function CustomMap(){

  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    var map = new BMap.Map("mapContainer"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(119.6540443421, 29.0843844893), 11); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(); //启用滚轮放大缩小
  });
  return (
   <div className={styles.mapContainer} id="mapContainer"></div>
  )
}
