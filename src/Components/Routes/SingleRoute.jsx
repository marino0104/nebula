import React from 'react';

const SingleRoute = (props) => {
    let { id, name } = props;
    return (
        <div className="route-single">
            <span id={id} >{name}</span>
        </div>
    );
};

export default SingleRoute;