import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button
            onClick={toggleSidebar}
            className="mobile-menu-btn"
          >
            <Menu size={24} />
          </button>
          
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search students, teachers, classes..."
              className="search-input"
            />
          </div>
        </div>

        <div className="header-right">
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>

          <div className="user-profile">
            <div className="user-info">
              <p className="user-name">John Admin</p>
              <p className="user-role">Administrator</p>
            </div>
            <div className="user-avatar">
              <User size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;