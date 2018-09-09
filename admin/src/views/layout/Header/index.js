import React, { Component } from 'react';
import { Icon, Avatar, Menu, Dropdown, Badge} from 'antd';
import { NavLink } from 'react-router-dom';
import { bus } from '../../../utils';
import './index.less';
export default class Header extends Component {
    state = {
        isFold: false,
        userName: 'chaos',
        avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    };

    renderIocn = (isFold) => {
        if (!isFold){
            return <Icon type="menu-fold" theme="outlined" />
        } else {
            return <Icon type="menu-unfold" theme="outlined" />
        }
    }

    hanldeClick = e => {
        this.setState({
            isFold: !this.state.isFold
        })
        // console.log('bus emit', bus)
        bus.emit('changeFold', !this.state.isFold);
    }

    

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">
                    <NavLink to={'/admin/profile'}>
                        个人中心
                    </NavLink>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" >
                    <NavLink to={'/login'}>
                        退出登录
                    </NavLink>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="header">
                <div className="header-tools">
                    <div className="tools-fold" onClick={this.hanldeClick}>
                        {this.renderIocn(this.state.isFold)}
                    </div>
                    <div className="tools-right">
                        <span className="tool-item">
                            <Icon type="lock" theme="outlined" style={{ fontSize: '20px' }}/>
                        </span>
                        <span className="tool-item">
                            <Badge dot>
                                <Icon type="bell" theme="outlined"  style={{fontSize:'19px'}}/>
                            </Badge>
                        </span>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <span style={{ cursor:'pointer'}}>
                                {this.state.userName}  <Icon type="down" />
                            </span>
                        </Dropdown>
                        <Avatar src={this.state.avatarSrc} />
                        
                    </div>
                </div>
            </div>
        )
    }
}