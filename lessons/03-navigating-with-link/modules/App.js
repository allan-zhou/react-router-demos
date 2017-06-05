import React from 'react'
import { Link } from 'react-router';

const APP = () => {
  return (
    <div>
        <h1>React router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">about</Link></li>
          <li><Link to="/repos">repos</Link></li>
        </ul>
    </div>
  );
};

export default APP;