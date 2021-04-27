import { Header, SideNav } from '@algo-playground/web/ui/components';
import { RiDashboardFill } from 'react-icons/ri';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen min-h-screen">
      <Header onMenuClick={() => setOpen(!open)} />
      <SideNav open={open}>
        <div className="menu-item">
          <button className="btn icon-btn">
            <RiDashboardFill />
          </button>
          <p>Transaction</p>
        </div>
      </SideNav>
    </div>
  );
}

export default App;
