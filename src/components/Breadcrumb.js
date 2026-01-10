import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { menuData } from '../data/menuData';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbs = () => {
    const breadcrumbs = [{ title: 'Home', path: '/' }];
    
    if (pathSegments.length === 0) return breadcrumbs;

    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Find the menu item for this path
      const findMenuItem = (items, path) => {
        for (const item of items) {
          if (item.path === path) return item;
          if (item.subItems) {
            const found = findMenuItem(item.subItems, path);
            if (found) return found;
          }
        }
        return null;
      };

      const menuItem = findMenuItem(menuData, currentPath);
      if (menuItem) {
        breadcrumbs.push({
          title: menuItem.title,
          path: currentPath
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="breadcrumb">
      <div className="breadcrumb-container">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.path} className="breadcrumb-item">
            {index === 0 && <Home size={16} className="breadcrumb-home-icon" />}
            {index < breadcrumbs.length - 1 ? (
              <Link to={crumb.path} className="breadcrumb-link">
                {crumb.title}
              </Link>
            ) : (
              <span className="breadcrumb-current">{crumb.title}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <ChevronRight size={16} className="breadcrumb-separator" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;