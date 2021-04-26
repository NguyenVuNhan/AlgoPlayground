import React from 'react';

export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <div className="w-full bg-gray-600">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
