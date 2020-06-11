import React from 'react';
import './SideDrawer.css';

const sideDrawer = (props) => {
  return(
    <div className="sideDrawer">
      <h3>Logo</h3>
      <nav>
        <ul>
          <li>Blog</li>
          <li>Resourse</li>
          <li>Client Success</li>
          <li>Solutions</li>
          <li>Features</li>
       </ul>
      </nav>
    </div>
  )
}

export default sideDrawer;
