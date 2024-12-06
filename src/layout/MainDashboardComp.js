import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComp from './NavComp'; // Import NavComp (adjust the path if necessary)
import FooterComp from './FooterComp'; // Import FooterComp (adjust the path if necessary)

const MainDashboard = () => {
  return (
    <div className='container mt-3'>
    <div className='card border-primary'>

      {/* MainDashboard */}
      
        <div className='card-header border-primary'>
          <NavComp></NavComp> {/* Navigation component */}
        </div>
        <div className='card-body border-primary'>
          <Outlet></Outlet> {/* Outlet for nested routes */}
        </div>
        <div className='card-footer border-primary'>
          <FooterComp></FooterComp> {/* Footer component */}
        </div>
      
    </div>
    </div>
    
  );
};

export default MainDashboard;