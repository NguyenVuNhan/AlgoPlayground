import React from 'react';
import { MdMenu } from 'react-icons/md';

export interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header(props: HeaderProps) {
  const { onMenuClick } = props;

  return (
    <header className="w-full bg-gray-900 pl-0 px-3 py-6 text-white flex aligns-center shadow-e3">
      <button
        className="btn icon-btn mx-4"
        onClick={onMenuClick}
        data-testid="menu-btn"
      >
        <MdMenu />
      </button>

      <p className="text-2xl font-bold font-serif">Algorithm Playground</p>
    </header>
  );
}

export default Header;
