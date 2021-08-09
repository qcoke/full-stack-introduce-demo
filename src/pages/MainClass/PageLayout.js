import React from "react"
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, Route } from 'react-router-dom';

import MainClass from "./MainClass";
import Welcome from "./Welcome";

const { Header, Content } = Layout;
const { Sider } = Layout;
const { SubMenu } = Menu;

class PageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark'
        }
    }
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo">Logo</div>
                    <Menu
                        theme={this.state.theme}
                        mode="inline"
                        defaultOpenKeys={['sub1']}
                        onSelect={this.selectItem}
                    >
                        <SubMenu key="sub1" icon={<MailOutlined />} title="主菜单">
                            <Menu.Item key="1">
                                <Link className="nav-link" to="/">Welcome 模块</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link className="nav-link" to="/Main">Main 模块</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ padding: '10px' }}>
                        <div className="right-content">
                            <Route path="/" exact component={Welcome} />
                            <Route path="/Main" component={MainClass} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default PageLayout
