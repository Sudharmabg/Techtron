import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const FavoritesPanel = ({ isOpen, onClose }) => {
  const [favorites, setFavorites] = useState([]);
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    const savedUsage = JSON.parse(localStorage.getItem('techtron-usage') || '{}');
    const savedRecent = JSON.parse(localStorage.getItem('techtron-recent') || '[]');
    
    // Auto-generate favorites from most used items (usage > 3)
    const autoFavorites = Object.entries(savedUsage)
      .filter(([path, count]) => count >= 3)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([path, count]) => ({ path, title: path.split('/').pop() }));
    
    setFavorites(autoFavorites);
    setRecentItems(savedRecent);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="favorites-panel">
      <div className="favorites-header">
        <h3>Quick Access</h3>
        <button onClick={onClose} className="favorites-close">×</button>
      </div>
      
      <div className="favorites-content">
        {favorites.length > 0 && (
          <div className="favorites-section">
            <h4><Star size={16} /> Most Used</h4>
            {favorites.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="favorites-item"
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
        
        {recentItems.length > 0 && (
          <div className="favorites-section">
            <h4><Clock size={16} /> Recent</h4>
            {recentItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="favorites-item"
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
        
        {favorites.length === 0 && recentItems.length === 0 && (
          <p className="favorites-empty">No frequently used items yet</p>
        )}
      </div>
    </div>
  );
};

export const useFavorites = () => {
  const [usage, setUsage] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('techtron-usage') || '{}');
    setUsage(saved);
  }, []);

  const addToUsage = (item) => {
    const newUsage = { ...usage };
    newUsage[item.path] = (newUsage[item.path] || 0) + 1;
    
    setUsage(newUsage);
    localStorage.setItem('techtron-usage', JSON.stringify(newUsage));
    
    // Also add to recent
    const recent = JSON.parse(localStorage.getItem('techtron-recent') || '[]');
    const newRecent = [item, ...recent.filter(r => r.path !== item.path)].slice(0, 5);
    localStorage.setItem('techtron-recent', JSON.stringify(newRecent));
  };

  const getFavorites = () => {
    return Object.entries(usage)
      .filter(([path, count]) => count >= 3)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([path]) => ({ path, title: path.split('/').pop() }));
  };

  return { addToUsage, getFavorites, usage };
};

export default FavoritesPanel;