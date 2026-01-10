import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSidebar, { moduleColors } from './components/MainSidebar';
import SecondarySidebar from './components/SecondarySidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Breadcrumb from './components/Breadcrumb';
import ContextualPanel from './components/ContextualPanel';
import { menuData } from './data/menuData';
import './styles/globals.css';

const PlaceholderPage = ({ title }) => (
  <div className="placeholder-page">
    <div className="placeholder-card">
      <h1 className="placeholder-title">{title}</h1>
      <p className="placeholder-text">This page is under development. The navigation structure is ready for implementation.</p>
    </div>
  </div>
);

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contextualPanel, setContextualPanel] = useState({ isOpen: false, item: null });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openContextualPanel = (item) => {
    setContextualPanel({ isOpen: true, item });
  };

  const closeContextualPanel = () => {
    setContextualPanel({ isOpen: false, item: null });
  };

  const generateRoutes = (items) => {
    let routes = [];
    
    items.forEach(item => {
      routes.push(
        <Route 
          key={item.path} 
          path={item.path} 
          element={item.path === '/' ? <Dashboard /> : <PlaceholderPage title={item.title} />} 
        />
      );
      
      if (item.subItems) {
        item.subItems.forEach(subItem => {
          routes.push(
            <Route 
              key={subItem.path} 
              path={subItem.path} 
              element={<PlaceholderPage title={subItem.title} />} 
            />
          );
          
          if (subItem.subItems) {
            subItem.subItems.forEach(subSubItem => {
              routes.push(
                <Route 
                  key={subSubItem.path} 
                  path={subSubItem.path} 
                  element={<PlaceholderPage title={subSubItem.title} />} 
                />
              );
            });
          }
        });
      }
    });
    
    return routes;
  };

  const activeModuleColor = activeMenu ? moduleColors[activeMenu] : '#3b82f6';

  return (
    <Router>
      <div className="app-container">
        <MainSidebar 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu} 
          menuData={menuData} 
        />
        <SecondarySidebar 
          activeMenu={activeMenu} 
          menuData={menuData}
          onContextualOpen={openContextualPanel}
        />
        
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <Breadcrumb />
          
          <main className="content-area">
            <Routes>
              {generateRoutes(menuData)}
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
        
        <ContextualPanel 
          isOpen={contextualPanel.isOpen}
          onClose={closeContextualPanel}
          menuItem={contextualPanel.item}
          moduleColor={activeModuleColor}
        />
      </div>
    </Router>
  );
}

export default App;