import React from "react"
import { Layout, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class MainClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            current: '1',
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
                    >
                        <SubMenu key="sub1" icon={<MailOutlined />} title="导航栏一">
                            <Menu.Item key="1">导航一</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            content
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default MainClass