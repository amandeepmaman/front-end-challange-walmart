import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext.jsx';

const SideMenu = () => {
  const { activePage, setActivePage } = useContext(AppContext);

  return (
    <div className="side-menu" data-testid="side-menu">
      <button 
        className={`menu-item ${activePage === 'apps' ? 'active' : ''}`}
        onClick={() => setActivePage('apps')}
      >
        Apps
      </button>
      <button 
        className={`menu-item ${activePage === 'documents' ? 'active' : ''}`}
        onClick={() => setActivePage('documents')}
      >
        Documents
      </button>
    </div>
  );
};

export default SideMenu;