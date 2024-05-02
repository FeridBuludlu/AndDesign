import React from 'react';
import { Layout } from 'antd';
import './PageContent.css'
const { Content } = Layout;

const PageContent = () => {
  return (
    <Content className="page-content">
    <div className='Page'>
    <img src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" alt="" />
    <p>Səmərəli səhifə animasiya həlli</p>
    <button>Daha ətraflı</button>
    </div>
    </Content>
  );
};

export default PageContent;