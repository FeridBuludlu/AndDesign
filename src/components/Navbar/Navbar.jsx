import React from 'react';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const items = new Array(4).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Navbar = () => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
    <img src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" alt="" />
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {items.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
