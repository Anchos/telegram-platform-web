import React from 'react';

export const Checkbox = ({ id, label }) => (
  <div
    style={{ display: 'flex', alignItems: 'center' }}
  >
    <input 
      id={id} 
      type='checkbox'
      style={{ display: 'none' }}
    />
    <label htmlFor={id}
      style={{ 
        display: 'block',
        width: "40px",
        height: "40px",
        borderRadius: "3px",
        backgroundColor: "#ffffff",
        border: "solid 1px #999999",
        marginRight: '20px'
        }}
    />
    <label htmlFor={id}>{label}</label>
  </div>
)
