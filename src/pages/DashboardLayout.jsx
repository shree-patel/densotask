import React from 'react';
import NavigationPanel from '../components/Sidebar';
import HeaderNavigation from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function LayoutShell() {
 return (
    <div className="d-flex">
      <NavigationPanel />
      <div className="d-flex flex-column flex-grow-1">
        <HeaderNavigation />
        <main className="p-3 flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
