import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const ContextualPanel = ({ isOpen, onClose, menuItem, moduleColor }) => {
  if (!isOpen || !menuItem) return null;

  return (
    <div className="contextual-panel-overlay">
      <div className="contextual-panel">
        <div className="contextual-panel-header" style={{ borderTopColor: moduleColor }}>
          <h2>{menuItem.title}</h2>
          <button onClick={onClose} className="contextual-panel-close">
            <X size={20} />
          </button>
        </div>
        
        <div className="contextual-panel-content">
          {menuItem.subItems?.map(subItem => (
            <div key={subItem.id} className="contextual-section">
              <div className="contextual-section-header">
                <h3>{subItem.title}</h3>
              </div>
              
              {subItem.subItems && subItem.subItems.length > 0 ? (
                <div className="contextual-items-grid">
                  {subItem.subItems.map(item => (
                    <Link 
                      key={item.id} 
                      to={item.path} 
                      className="contextual-item"
                      onClick={onClose}
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link 
                  to={subItem.path} 
                  className="contextual-item-single"
                  onClick={onClose}
                >
                  Go to {subItem.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContextualPanel;