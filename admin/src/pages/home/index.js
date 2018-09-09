import React, { Component } from 'react';
import { Card, Col, Row, Table } from 'antd';
import echarts from 'echarts';


export default class Home extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementsByClassName('echarts')[0]);
        let option = {
            title: {
                text: '易路业务报表'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['蒸发量', '降水量', '平均温度']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '平均温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        myChart.setOption(option);
        
    }
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
        }];
        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
        <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="易" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="路" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="软" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={6}>
                        <Card title="件" bordered={false}>Card content</Card>
                    </Col>
                </Row>
                <Row className="echarts" style={{width:'100%',height: '400px',marginTop: '1rem'}}>

                </Row>
                <Row>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Row>

        </div>
        
    )
  }
}
