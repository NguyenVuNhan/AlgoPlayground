import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'components/Header',
};

export const primary = () => {
  const props: HeaderProps = {
    title: text('title', 'Hello world'),
  };

  return <Header title={props.title} />;
};
