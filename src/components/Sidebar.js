import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, Settings, GraduationCap, FileText, 
  ChevronDown, ChevronRight, Menu, X 
} from 'lucide-react';
import { menuData } from '../data/menuData';

const iconMap = {
  Home, Users, Settings, GraduationCap, FileText
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isActive = (path) => location.pathname === path;
  
  const isParentActive = (item) => {
    if (isActive(item.path)) return true;
    if (item.subItems) {
      return item.subItems.some(subItem => 
        isActive(subItem.path) || 
        (subItem.subItems && subItem.subItems.some(subSubItem => isActive(subSubItem.path)))
      );
    }
    return false;
  };

  const MenuItem = ({ item, level = 0 }) => {
    const Icon = iconMap[item.icon];
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems[item.id];
    const active = isParentActive(item);

    return (
      <div className="menu-item">
        <div
          className={`menu-button ${active ? 'active' : ''}`}
          onClick={() => hasSubItems ? toggleExpanded(item.id) : null}
        >
          <Link 
            to={item.path} 
            className="menu-button-content"
            onClick={(e) => hasSubItems && e.preventDefault()}
          >
            {Icon && level === 0 && <Icon className="menu-icon" />}
            <span className="menu-text">
              {item.title}
            </span>
          </Link>
          {hasSubItems && (
            <div>
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>
          )}
        </div>
        
        {hasSubItems && isExpanded && (
          <div className="submenu">
            {item.subItems.map(subItem => (
              <MenuItem key={subItem.id} item={subItem} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar} />
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <GraduationCap size={24} />
            </div>
            <div className="logo-text">
              <h1 className="logo-title">Techtron</h1>
              <p className="logo-subtitle">School Management</p>
            </div>
          </div>
          <button 
            onClick={toggleSidebar}
            className="mobile-menu-btn"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="nav-menu">
          {menuData.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;