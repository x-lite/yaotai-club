import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Header from './views/Header';
import Footer from './views/Footer';
import NavLeft from './views/NavLeft';
import './styles/common.less';

export default class Admin extends Component{

    render() {
        return(
            <Row className="main">
                <Col span={3} className="main-left">
                    <NavLeft/>
                </Col>
                <Col span={21} className="main-right">
                    <Header className="right-header"/>
                    <Row className="right-content">
                        content
                    </Row>
                    <Footer className="right-footer"/>
                </Col>
            </Row>
        )
    }
}