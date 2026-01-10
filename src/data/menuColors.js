export const menuColors = {
  // User Management - Green theme
  'role': '#10b981',
  'menu': '#10b981', 
  'access-rights': '#10b981',

  // Masters - Orange theme
  'student-control': '#f59e0b',
  'academic-control': '#f59e0b',
  'exam-control': '#f59e0b',
  'transport-control': '#f59e0b',
  'hostel-control': '#f59e0b',
  'fees-control': '#f59e0b',

  // Student Management - Purple theme
  'enquiry-management': '#8b5cf6',
  'direct-admission': '#8b5cf6',
  'online-admission-process': '#8b5cf6',
  'academic-task': '#8b5cf6',
  'class-room-management': '#8b5cf6',
  'fees-collection': '#8b5cf6',
  'attendance': '#8b5cf6',
  'examination': '#8b5cf6',
  'certificates': '#8b5cf6',

  // Reports - Red theme
  'student-reports': '#ef4444',
  'routine-reports': '#ef4444',
  'fees-collection-reports': '#ef4444',
  'marks-report': '#ef4444',
  'attendance-report': '#ef4444'
};

export const getMenuColor = (itemId, parentId) => {
  // First check if item has its own color
  if (menuColors[itemId]) {
    return menuColors[itemId];
  }
  
  // Then check parent color
  if (parentId && menuColors[parentId]) {
    return menuColors[parentId];
  }
  
  // Default color
  return '#64748b';
};