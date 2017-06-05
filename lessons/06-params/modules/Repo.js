import React from 'react';

const Repo = (props) => {
    return (
        <div>
            <h2>Repo</h2>
            <h3>{ props.params.userName }</h3>
            <h3>{ props.params.repoName }</h3>
        </div>
    );
};

export default Repo;