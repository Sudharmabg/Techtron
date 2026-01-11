import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Download, FileText, File, Printer, Copy } from 'lucide-react';
import '../styles/RoleMaster.css';
import '../styles/components.css';

const RoleMaster = () => {
  const [roleName, setRoleName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [roles, setRoles] = useState([
    { id: 1, name: 'Super Admin' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'External User' },
    { id: 4, name: 'Faculty User' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleName.trim()) {
      const newRole = {
        id: roles.length + 1,
        name: roleName.trim()
      };
      setRoles([...roles, newRole]);
      setRoleName('');
    }
  };

  const handleEdit = (id) => {
    // Edit functionality
    console.log('Edit role:', id);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="role-master-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Role Master</h1>
        <p className="page-subtitle">Manage user roles and permissions</p>
      </div>

      {/* Form Section */}
      <div className="form-card">
        <form onSubmit={handleSubmit} className="role-form">
          <div className="form-group">
            <label htmlFor="roleName" className="form-label">Role Name</label>
            <input
              type="text"
              id="roleName"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="form-input"
              placeholder="Enter role name"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            <Plus size={16} />
            Add Role
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="table-card">
        {/* Table Header */}
        <div className="table-header">
          <div className="export-buttons">
            <button className="export-btn-standard copy">
              <Copy size={16} />
              Copy
            </button>
            <button className="export-btn-standard csv">
              <FileText size={16} />
              CSV
            </button>
            <button className="export-btn-standard excel">
              <File size={16} />
              Excel
            </button>
            <button className="export-btn-standard pdf">
              <FileText size={16} />
              PDF
            </button>
            <button className="export-btn-standard print">
              <Printer size={16} />
              Print
            </button>
          </div>

          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Role Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role) => (
                <tr key={role.id}>
                  <td>
                    <div className="data-item-box">
                      <div className="data-item-content">
                        {role.name}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        onClick={() => handleEdit(role.id)}
                        className="action-btn-standard action-btn-edit"
                        title="Edit Role"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(role.id)}
                        className="action-btn-standard action-btn-delete"
                        title="Delete Role"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="table-footer">
          <div className="table-info">
            Showing 1 to {filteredRoles.length} of {filteredRoles.length} entries
          </div>
          <div className="pagination">
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleMaster;