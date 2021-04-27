import { boolean } from '@storybook/addon-knobs';
import { RiDashboardFill } from 'react-icons/ri';
import Header from '../header/header';
import React, { useState } from 'react';
import { SideNav, SideNavProps } from './side-nav';

export default {
  component: SideNav,
  title: 'components/SideNav',
};

const DummyMenuItems = () => {
  return (
    <div className="menu-item">
      <button className="btn icon-btn">
        <RiDashboardFill />
      </button>
      <p>Transaction</p>
    </div>
  );
};

export const WithHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen">
      <Header onMenuClick={() => setOpen(!open)} />
      <SideNav open={open}>
        <DummyMenuItems />
      </SideNav>
    </div>
  );
};

export const Inactive = () => {
  const props: SideNavProps = {
    open: boolean('open', false),
    children: <DummyMenuItems />,
  };

  return (
    <div className="h-screen">
      <SideNav open={props.open}>{props.children}</SideNav>
    </div>
  );
};

export const Active = () => {
  const props: SideNavProps = {
    open: boolean('open', true),
    children: <DummyMenuItems />,
  };

  return (
    <div className="h-screen">
      <SideNav open={props.open}>{props.children}</SideNav>
    </div>
  );
};
