import React from 'react'
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import router from "../../config/router"

const PageLayoutHook = () => {
  return (
    <div id="wapper">
      <ProLayout
        {...router}
        title="Ant Design Pro"
        siderWidth="220px"
        fixSiderbar={true}
        fixedHeader={true}
      >
        <PageContainer header="" title="Demo" content="欢迎使用">
          
        </PageContainer>
      </ProLayout>
    </div>
  )
}

export default PageLayoutHook
