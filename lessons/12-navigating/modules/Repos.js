import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router';

const Repos = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    console.log(path);
    browserHistory.push(path);
  }

  return (
    <div>
      <h2>Repos</h2>
      <ul>
        <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
        <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        <li>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="userName" />
            <input type="text" placeholder="repo" />
            <button type="submit">Go</button>
          </form>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default Repos;