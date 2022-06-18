import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
// import router from "../../config/router";
import {Link} from 'react-router-dom'
import Welcome from "./Welcome";
import MainClass from './Main';

function getMenu() {
  const menuData = {
    route: {
      path: '/',
      routes: [
        {
          "path": "/",
          "name": "MainClass 类",
          "component": MainClass
        },
        {
          "path": "/welcome",
          "name": "Welcome 类",
          "component": Welcome
        }
      ]
    },
    location: {
      pathname: '/'
    }
  }
  return menuData
}
const PageLayoutHook = (props) => {
  return (
    <div id="wapper">
      <ProLayout
        {...getMenu()}
        location="/"
        title="Ant Design"
        logo='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        siderWidth="220px"
        fixSiderbar={true}
        fixedHeader={true}
        menuItemRender={(item, dom) => (
          <Link to={item.path}>{dom}</Link>
        )}
      >
       <ProLayout navTheme="light" menuHeaderRender={false} {...props}>
        <PageContainer content="欢迎您的使用">{props.children}</PageContainer>
      </ProLayout>
      </ProLayout>
    </div>
  )
}

export default PageLayoutHook
