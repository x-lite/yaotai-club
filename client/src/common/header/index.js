import React, { Component } from 'react';
import logoSrc from '../../static/logo.png';
import styles from './header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src={logoSrc} alt="logo"/>
        </a>
        <nav className={styles.nav}>
          <span className={`${styles.navItem} ${styles.active} ${styles.left}`}>首页</span>  
          <span className={`${styles.navItem} ${styles.left}`}>下载App</span>  
          <span className={`${styles.navItem} ${styles.right}`}>登录</span>  
          <span className={`${styles.navItem} ${styles.right}`}><i className="iconfont">&#xe636;</i></span>
          <div className={styles.searchWrap}>
            <input placeholder="搜索" className={styles.search}/>
            <i className={`${styles.icon} iconfont`} >&#xe637;</i>
          </div>
        </nav>
        <div className={styles.addition}>
          <div className={`${styles.btn} ${styles.writting}`}><i className="iconfont">&#xe624;</i>写文章</div>
          <div className={`${styles.btn} ${styles.reg}`}>注册</div>
        </div>
      </div>
    );
  }
}
