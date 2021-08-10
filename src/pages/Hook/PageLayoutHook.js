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
  const {children, location = {pathname: '/'}} = props;

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
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
      >
        <PageContainer 
          title="我是标题"
          content = {() => {
            return <div>Hello</div>
          }}
        ></PageContainer>
      </ProLayout>
    </div>
  )
}

export default PageLayoutHook
