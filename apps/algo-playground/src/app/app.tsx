import { Switch, Route, Redirect } from 'react-router-dom';
import { BouncingBall } from '@algo-playground/simulation/physics';
import { Header, SideNav } from '@algo-playground/web/ui/components';
import { RiDashboardFill } from 'react-icons/ri';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-300">
      <Header onMenuClick={() => setOpen(!open)} />
      <div className="flex flex-grow max-h-full overflow-hidden">
        <SideNav open={open}>
          <div className="menu-item">
            <button className="btn icon-btn">
              <RiDashboardFill />
            </button>
            <p>Transaction</p>
          </div>
        </SideNav>

        <Switch>
          <Route exact path="/simulation/physic/bouncing-ball">
            <BouncingBall className="w-90 h-90 sm:w-full sm:h-full" />
          </Route>
          <Redirect to="/simulation/physic/bouncing-ball" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
