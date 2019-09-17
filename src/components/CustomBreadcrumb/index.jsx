import React from "react";
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Breadcrumb } from "@alifd/next";

import styles from './index.module.scss';


export default function CustomBreadcrumb({ items, title }){
  return (
    <IceContainer className={styles.container} style={{padding:'16px'}}>
       <Breadcrumb separator=" / " className={styles.breadcrumb}>
         {
           items.map((item,index)=>{
             const link = item.link ? {link: item.link} : {};
             return (
              <Breadcrumb.Item key={index} {...link}>{item.text}</Breadcrumb.Item>
             )
           })
         }
      </Breadcrumb>
      <h3 className={styles.title}>{title}</h3>
    </IceContainer>
  );
};

CustomBreadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
