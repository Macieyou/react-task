import React  from 'react';
import "./Container.scss"

const Container = ({className, children}) => (
  <div className={className ? ` container ${className}` : 'container'}>
      {children}
  </div>
);

export default Container;