import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { useFavorites } from './FavoritesPanel';
import { getMenuIcon } from '../data/menuIcons';
import { getMenuColor } from '../data/menuColors';
import FavoritesPanel from './FavoritesPanel';

const SecondarySidebar = ({ activeMenu, menuData, onContextualOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const location = useLocation();
  const { addToUsage } = useFavorites();

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => {
      // Close all other expanded items and toggle the clicked one
      const newExpanded = {};
      if (!prev[itemId]) {
        newExpanded[itemId] = true;
      }
      return newExpanded;
    });
  };

  const isActive = (path) => location.pathname === path;

  const activeMenuItem = menuData.find(item => item.id === activeMenu);

  if (!activeMenuItem) return null;

  // Filter items based on search
  const filterItems = (items) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.subItems && item.subItems.some(sub => 
        sub.title.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  };

  const handleItemClick = (item) => {
    addToUsage(item);
  };

  const handleContextualClick = (item, e) => {
    // Remove modal functionality - just expand normally
    toggleExpanded(item.id);
  };

  const MenuItem = ({ item, level = 0, parentId = null }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems[item.id];
    const active = isActive(item.path);
    const hasMany = hasSubItems && item.subItems.length > 5;
    const Icon = getMenuIcon(item.id);
    const color = getMenuColor(item.id, parentId);

    return (
      <div className="secondary-menu-item">
        <div 
          className={`secondary-menu-button enhanced ${active ? 'active' : ''}`}
          style={{
            '--hover-color': color,
            ...(active ? { 
              backgroundColor: `${color}08`,
              borderLeft: `4px solid ${color}`,
              paddingLeft: '12px'
            } : {})
          }}
        >
          <Link 
            to={item.path} 
            className="secondary-menu-content"
            onClick={(e) => {
              if (hasSubItems) {
                e.preventDefault();
                toggleExpanded(item.id);
              } else {
                handleItemClick(item);
              }
            }}
          >
            <div className="menu-item-icon" style={{ backgroundColor: `${color}15`, color: color }}>
              <Icon size={18} />
            </div>
            <span className="menu-item-text">
              {item.title}
            </span>
          </Link>
          
          {hasSubItems && (
            <ChevronDown size={16} className={`chevron ${isExpanded ? 'expanded' : ''}`} />
          )}
        </div>
        
        {hasSubItems && isExpanded && (
          <div className="tertiary-menu">
            {item.subItems.map(subItem => (
              <MenuItem key={subItem.id} item={subItem} level={level + 1} parentId={item.id} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const filteredItems = filterItems(activeMenuItem.subItems || []);

  return (
    <>
      <div className={`secondary-sidebar ${activeMenu ? 'open' : ''}`}>
        <div className="secondary-sidebar-header">
          <h2 className="secondary-title">{activeMenuItem.title}</h2>
        </div>

        <div className="search-container-secondary">
          <Search className="search-icon-secondary" />
          <input
            type="text"
            placeholder="Search menu items..."
            className="search-input-secondary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <nav className="secondary-nav">
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} parentId={activeMenu} />
          ))}
          {filteredItems.length === 0 && searchTerm && (
            <div className="no-results">No items found</div>
          )}
        </nav>
      </div>
    </>
  );
};

export default SecondarySidebar;