import React from 'react';
import { Users, GraduationCap, BookOpen, DollarSign, TrendingUp, Calendar, Clock } from 'lucide-react';
import { useFavorites } from '../components/FavoritesPanel';

const Dashboard = () => {
  const { getFavorites } = useFavorites();
  const favorites = getFavorites();
  
  const stats = [
    { title: 'Total Students', value: '1,234', icon: GraduationCap, color: 'blue', change: '+12%' },
    { title: 'Total Teachers', value: '89', icon: Users, color: 'green', change: '+3%' },
    { title: 'Active Classes', value: '45', icon: BookOpen, color: 'purple', change: '+5%' },
    { title: 'Monthly Revenue', value: '$45,678', icon: DollarSign, color: 'yellow', change: '+8%' }
  ];

  const recentActivities = [
    { action: 'New student admission', student: 'Sarah Johnson', time: '2 hours ago', type: 'admission' },
    { action: 'Grade submitted', student: 'Math Class 10A', time: '4 hours ago', type: 'grade' },
    { action: 'Fee payment received', student: 'Michael Brown', time: '6 hours ago', type: 'payment' },
    { action: 'Parent meeting scheduled', student: 'Emma Davis', time: '1 day ago', type: 'meeting' }
  ];

  const quickActions = [
    { title: 'Add New Student', icon: GraduationCap, color: '#3b82f6', path: '/students/direct-admission' },
    { title: 'Fees Collection', icon: DollarSign, color: '#10b981', path: '/students/fees-collection' },
    { title: 'Daily Attendance', icon: Clock, color: '#8b5cf6', path: '/students/attendance/daily-attendance' },
    { title: 'Generate Reports', icon: BookOpen, color: '#f59e0b', path: '/reports' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back! Here's what's happening at your school.</p>
        </div>
        <div className="academic-year">
          <Calendar size={20} />
          <span>Academic Year 2023-24</span>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <h3>{stat.title}</h3>
                <p className="stat-value">{stat.value}</p>
                <div className="stat-change stat-change-positive">
                  <TrendingUp size={16} />
                  <span>{stat.change}</span>
                  <span style={{marginLeft: '4px', color: '#64748b'}}>vs last month</span>
                </div>
              </div>
              <div className={`stat-icon ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="main-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Activities</h2>
          </div>
          <div className="card-content">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${
                  activity.type === 'admission' ? 'blue' :
                  activity.type === 'grade' ? 'green' :
                  activity.type === 'payment' ? 'yellow' : 'purple'
                }`}>
                  {activity.type === 'admission' ? <GraduationCap size={20} /> :
                   activity.type === 'grade' ? <BookOpen size={20} /> :
                   activity.type === 'payment' ? <DollarSign size={20} /> :
                   <Calendar size={20} />}
                </div>
                <div className="activity-info">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-student">{activity.student}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-sidebar">
          {/* Quick Actions */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Quick Actions</h2>
            </div>
            <div className="card-content">
              {quickActions.map((action, index) => (
                <button key={index} className="quick-action" onClick={() => window.location.href = action.path}>
                  <div className="quick-action-content">
                    <action.icon className="quick-action-icon" style={{color: action.color}} />
                    <span className="quick-action-text">{action.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Most Used */}
          {favorites.length > 0 && (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Most Used</h2>
              </div>
              <div className="card-content">
                {favorites.slice(0, 5).map((fav, index) => (
                  <button key={index} className="quick-action" onClick={() => window.location.href = fav.path}>
                    <div className="quick-action-content">
                      <Clock className="quick-action-icon" style={{color: '#f59e0b'}} />
                      <span className="quick-action-text">{fav.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;