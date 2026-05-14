import React from 'react';
import ReactDOM from 'react-dom/client';


const PhoneComponent = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

export default PhoneComponent;