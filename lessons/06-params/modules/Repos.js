import React from 'react';
import { Link } from 'react-router';

const Repos = () => {
  return (
    <div>
      <h3>Repos</h3>
      <ul>
        <li><Link to="/repos/reactjs/react-router">reactjs/react-router</Link></li>
        <li><Link to="/repos/facebook/react">facebook/react</Link></li>
      </ul>
    </div>
  );
};

export default Repos;