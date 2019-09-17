import React from "react";
import { Link, withRouter } from "react-router-dom";
import { headerMenuConfig } from "@/config/menu.js";
import { Balloon, Button, Nav, Message, Icon, MenuButton } from "@alifd/next";
import FoundationSymbol from "@icedesign/foundation-symbol";
//import stores from "@/stores/index";

import Logo from "../Logo";
//import './index.scss';
import styles from "./index.module.scss";

 
const Header = withRouter(props => {  
  // const userProfile = stores.useStore("userProfile");
  // const { userinfo, fetchData } = userProfile;
  const name = '测试账号';
  // 登录
  async function handleLogin() {
    
    props.history.push("/account/login");
    // try {
    //   await request();
    //   Message.success("登录");
    //   props.history.push("/account/login");
    // } catch (err) {
    //   console.error(err);
    // }
  }

  // 注册
  async function handleRegister() {
    
    props.history.push("/account/register");
    // try {
    //   await request();
    //   Message.success("注册");
    //   props.history.push("/account/register");
    // } catch (err) {
    //   console.error(err);
    // }
  }

  // 设置
  function handleSetting() {
    props.history.push("/setting");
  }

  // 退出
  async function handleLogout() {
    
    props.history.push("/account/login");
    // try {
    //   await request();
    //   Message.success("已登出");
    //   props.history.push("/account/login");
    // } catch (err) {
    //   console.error(err);
    // }
  }

  return (
    <div className={styles.iceDesignLayoutHeader}>
      <div className="headerLeft">
        <Logo isDark />
      </div>
      <div className="headerRight">
       
        <Button className="btnHeaderMenuItem" style={{ marginRight: "10px",borderWidth: 0 }}>
            <a href="https://www.baidu.com/" target="_blank" style={{ color: "#fff" }}>百度一下</a>
        </Button>
        <Balloon
          popupClassName="popupHeaderMenu"
          trigger={
            <Button className="btnHeaderMenuItem" style={{ marginRight: "10px" }}>
              登录
            </Button>
          }
          closable={false}
          offset={[18, 0]}
        >
          <ul className="next-menu">
            <li className="next-menu-item" onClick={handleLogin}>
              <div className="next-menu-item-inner">个人</div>
            </li>
            <li className="next-menu-item" onClick={handleLogin}>
              <div className="next-menu-item-inner">企业</div>
            </li>
            <li className="next-menu-item" onClick={handleLogin}>
              <div className="next-menu-item-inner">平台</div>
            </li>
          </ul>
        </Balloon>
        <Balloon
          popupClassName="popupHeaderMenu"
          trigger={
            <Button className="btnHeaderMenuItem" style={{ marginRight: "10px" }}>
              注册
            </Button>
          }
          closable={false}
          offset={[18, 0]}
        >
          <ul className="next-menu">
            <li className="next-menu-item" onClick={handleRegister}>
              <div className="next-menu-item-inner">个人</div>
            </li>
            <li className="next-menu-item" onClick={handleRegister}>
              <div className="next-menu-item-inner">企业</div>
            </li>
            <li className="next-menu-item" onClick={handleRegister}>
              <div className="next-menu-item-inner">平台</div>
            </li>
          </ul>
        </Balloon>
        <Balloon
          popupClassName="popupHeaderMenu"
          trigger={
            <Button className="btnHeaderMenuItem">
              <FoundationSymbol type="yonghu" size="small" />
              <span className={styles.userName}>{name}</span>
            </Button>
          }
          closable={false}
          offset={[18, 0]}
        >
          <ul className="next-menu">
            <li className="next-menu-item" onClick={handleSetting}>
              <div className="next-menu-item-inner">设置</div>
            </li>
            <li className="next-menu-item" onClick={handleLogout}>
              <div className="next-menu-item-inner">退出</div>
            </li>
          </ul>
        </Balloon>
      </div>
    </div>
  );
});

export default Header;
