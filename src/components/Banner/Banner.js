import React from 'react';

function Banner({ type, children }) {
  const className = type ? `banner ${type}` : 'banner';
  return <div className={className}>{children}</div>;
}

export default Banner;
