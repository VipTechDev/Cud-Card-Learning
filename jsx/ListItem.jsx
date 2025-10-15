import React from 'react'; // React must be imported to use JSX

import '../styles/list.css'; // Modular CSS for scoped styling

// Functional component using props destructuring
const ListItem = ({ text, description, onDelete, onEdit }) => (
  <div className="list-item"> {/* Root container with styling */}
    <div className="item-content">
      <strong className="item-title">{text}</strong> {/* Title from props */}
      <p className="item-description">{description}</p> {/* Description from props */}
    </div>
    <div className="item-footer">
      {/* Edit button triggers onEdit prop */}
      <button className="action-button edit-button" onClick={onEdit}>
        ✏️ Edit
      </button>
      {/* Delete button triggers onDelete prop */}
      <button className="action-button delete-button" onClick={onDelete}>
        ❌ Delete
      </button>
    </div>
  </div>
);

export default ListItem; // Export for use in parent components
