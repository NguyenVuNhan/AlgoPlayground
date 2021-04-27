import React from 'react';

export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <header className="w-full bg-gray-900 px-3 py-6">
      <p className="text-white text-2xl font-bold font-serif">{title}</p>
    </header>
  );
}

export default Header;
