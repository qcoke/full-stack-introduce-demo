import React from "react";
import { Layout, Table, Divider } from 'antd';

const { Content } = Layout

class MainClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <span>{text}</span>,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                }
            ]
        }
    }

    render() {
        return (
            <Content>
                <h1 className="sub-header">Table 列表</h1>
                <Divider />
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </Content>
        )
    }
}

export default MainClass