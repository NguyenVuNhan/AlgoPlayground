import React from 'react';
import { action } from '@storybook/addon-actions';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'components/Header',
};

export const primary = () => {
  const props: HeaderProps = {
    onMenuClick: action('Menu Click'),
  };

  return <Header onMenuClick={props.onMenuClick} />;
};
