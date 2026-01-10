import React from 'react';
import { Home, Users, Settings, GraduationCap, FileText } from 'lucide-react';

const iconMap = {
  Home, Users, Settings, GraduationCap, FileText
};

const moduleColors = {
  'home': '#3b82f6',
  'user-management': '#10b981', 
  'masters': '#f59e0b',
  'student-management': '#8b5cf6',
  'reports': '#ef4444'
};

const MainSidebar = ({ activeMenu, setActiveMenu, menuData }) => {
  const handleMenuClick = (itemId) => {
    if (itemId === 'home') {
      // For home, navigate to dashboard and collapse menu
      window.location.href = '/';
      setActiveMenu(null);
      return;
    }
    setActiveMenu(activeMenu === itemId ? null : itemId);
  };

  return (
    <div className="main-sidebar">
      <div className="main-sidebar-header">
        <div className="main-logo">
          <GraduationCap size={20} />
        </div>
      </div>

      <nav className="main-nav">
        {menuData.map(item => {
          const Icon = iconMap[item.icon];
          const isActive = activeMenu === item.id;
          const color = moduleColors[item.id];
          
          return (
            <button
              key={item.id}
              className={`main-menu-item ${isActive ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
              style={isActive ? { backgroundColor: color, color: 'white' } : {}}
            >
              <div className="main-menu-icon">
                <Icon size={24} />
              </div>
              <div className="main-menu-text">{item.title}</div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export { moduleColors };
export default MainSidebar;