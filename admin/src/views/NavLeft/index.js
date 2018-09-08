import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


export default class NavLeft extends Component {
    handleClick = (e) => {
        console.log('click ', e);
    }
    componentWillMount() {
        const menuListNode = this.renderMenu(menuList)
        this.setState({
            menuListNode
        })
    }
    // 菜单渲染
    renderMenu = data => {
        return data.map((item, index) => {
            if(item.chilren){
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        {this.renderMenu(item.chilren)}
                    </SubMenu>
                )
            }
            return (<Menu.Item key={item.key} >
                { item.icon && <Icon type={item.icon} /> }
                { item.title }
                </Menu.Item>)

        })

    }
    
    rootSubmenuKeys = menuList.map(item => item.key);

    state = {
        openKeys: []
    };
    // 手风琴效果
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            
            <div>
                <div className="nav-left" id="logo">
                    <img src="assets/imgs/logo.svg" alt="logo" />
                    <h1>eRoad</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    mode="inline"
                    >
                    { this.state.menuListNode }

                </Menu>
            </div>
        )
    }
}