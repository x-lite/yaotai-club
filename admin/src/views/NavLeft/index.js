import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig';
import { bus } from '../../utils'; 
import './index.less';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends Component {
    state = {
        isfold: false
    }

    componentWillMount() {
        // const menuListNode = this.renderMenu(menuList)
        // this.setState({
        //     menuListNode
        // })
    }
    
    componentDidMount() {
        bus.on('changeFold', isfold => {
            console.log('changeFold', isfold)
            this.setState({
                isfold
            })
        })
    }

    handleClick = (e) => {
        console.log('click ', e);
    }

    // 菜单渲染
    renderMenu = data => {
        return data.map((item, index) => {
            if(item.chilren){
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{this.state.isfold?'':item.title}</span></span>}>
                        {this.renderMenu(item.chilren)}
                    </SubMenu>
                )
            }
            return (<Menu.Item key={item.key} >
                { item.icon && <Icon type={item.icon} /> }
                {item.icon && this.state.isfold ? '' :item.title }
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
                    {!this.state.isfold&&<h1>eRoad</h1>}
                </div>
                <Menu
                    onClick={this.handleClick}
                    style={this.state.isfold?{width: 70 }:{ width: 256 }}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    mode={this.state.isfold ? 'vertical' :'inline'}
                    >
                    {this.renderMenu(menuList) }

                </Menu>
            </div>
        )
    }
}