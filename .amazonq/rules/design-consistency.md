# Techtron School Management System - Design Rules

## Menu Design Standards

### Menu Item Structure
- All menu items must use the `.secondary-menu-button` class
- Items without dropdowns should use Link as the container element
- Items with dropdowns should use div as the container element
- All menu items must have the sliding gradient hover effect

### Menu Item CSS Classes
```css
.secondary-menu-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 10px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;
}

.secondary-menu-button::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.1));
  transition: width 0.3s ease;
}

.secondary-menu-button:hover::before {
  width: 100%;
}

.secondary-menu-button:hover {
  border-color: var(--hover-color, #3b82f6);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
```

## Data Table Design Standards

### Table Item Structure
- All data items in tables must use the `.data-item-box` class
- Items should have the same hover effects as menu items
- Consistent spacing and styling across all tables

### Table Item CSS Classes
```css
.data-item-box {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  margin: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.data-item-box::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.1));
  transition: width 0.3s ease;
}

.data-item-box:hover::before {
  width: 100%;
}

.data-item-box:hover {
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.data-item-content {
  position: relative;
  z-index: 1;
  flex: 1;
}
```

## Button Design Standards

### Export Buttons
- All export buttons must use blue hover color (#3b82f6)
- Consistent styling across all pages

### Action Buttons
- Edit buttons: Blue theme (#3b82f6)
- Delete buttons: Red theme (#dc2626)
- Primary buttons: Blue with lift effect on hover

## Color Scheme
- Primary Blue: #3b82f6
- Success Green: #10b981
- Warning Orange: #f59e0b
- Danger Red: #dc2626
- Purple: #8b5cf6

## Implementation Rules
1. Always use the defined CSS classes for consistency
2. All hover effects must include the sliding gradient animation
3. All interactive elements must have the translateY(-1px) lift effect
4. Border colors must match the component's theme color
5. Use the same spacing and padding across similar components