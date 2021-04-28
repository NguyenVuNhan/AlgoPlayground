import React, { ReactNode } from 'react';

export interface SideNavProps {
  open: boolean;
  children?: ReactNode;
}

export function SideNav(props: SideNavProps) {
  const { open, children } = props;

  return (
    <div
      className={[
        'flex flex-col overflow-hidden bg-gray-900 text-white transform ease-in-out transition-all duration-300 gap-1 shadow-e4',
        open ? 'w-screen sm:w-64' : 'w-0 sm:w-16',
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export default SideNav;
