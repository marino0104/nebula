import React, { Component } from 'react';
import SingleRoute from './SingleRoute';

class RoutesList extends Component {
    render() {
        let { renderedRoutes}=this.props
        return (
            <div className="routes-single">
                {renderedRoutes.length ?
                    renderedRoutes.map((renderRoute, index) => (
                        <SingleRoute key={index} id={renderRoute.id} name={renderRoute.name}/>
                    ))
                    :
                    ''}
            </div>
        );
    }
}

export default RoutesList;