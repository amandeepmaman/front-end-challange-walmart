import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext.jsx';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="logo">Logo</div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
    </nav>
  );
};

export default Navbar;