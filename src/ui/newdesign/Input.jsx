import React from 'react';

export const Input = props => (
  <div style={{ marginBottom: '40px' }}>
    <input
      style={{ 
        width: '100%', 
        height: '40px', 
        fontSize: '20px',
        paddingLeft: '17px',
        borderRadius: 3,
        backgroundColor: "#ffffff",
        boxShadow: "inset -1px 1px 2px 0 rgba(0, 0, 0, 0.25)",
        border: "1px solid #ced4da"
      }}
      {...props} 
    />
  </div>
)
