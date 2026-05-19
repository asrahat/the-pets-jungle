import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            
          </label>
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
                <Link href='/dashboard'>DashBoard</Link>
            </li>
            <li>
                <Link href='/dashboard/my-request'>My Request</Link>
            </li>
            <li>
                <Link href='/dashboard/add-pet'>Add Pet</Link>
            </li>
            <li>
                <Link href='/dashboard/my-listing'>Add Listings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default layout;