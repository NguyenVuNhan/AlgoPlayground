import React from 'react';

export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <header className="w-full bg-gray-700 px-3 py-2">
      <p className="text-white text-2xl font-bold font-serif">{title}</p>
    </header>
  );
}

export default Header;
