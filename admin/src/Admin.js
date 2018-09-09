import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Header from './views/layout/Header';
import Footer from './views/layout/Footer';
import NavLeft from './views/layout/NavLeft';
import './styles/common.less';
import { bus } from './utils';

export default class Admin extends Component{
    state = {
        isfold: false
    }
    componentDidMount() {
        bus.on('changeFold', isfold => {
            this.setState({
                isfold
            })
        })
    }

    render() {
        return(
            <Row className="main">
                <Col span={3} className={this.state.isfold ?'main-left-fold main-left':'main-left'} >
                    <NavLeft/>
                </Col>
                <Col span={21} className={this.state.isfold ? 'main-right-fold main-right' : 'main-right'}>
                    <Header className="right-header"/>
                    <Row className="right-content">
                        {this.props.children}
                    </Row>
                    <Footer className="right-footer"/>
                </Col>
            </Row>
        )
    }
}