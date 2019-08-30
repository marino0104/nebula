import React, { Component } from 'react';
import AddRoute from './AddRoute';
import RoutesList from './RoutesList';
import activeRoutes from './../services/routes.json';



class Routes extends Component {
    state = {
        modal: false,
        active_routes: [],
        search_route: activeRoutes,
        renderedRoutes:[]
    }
    handleAddRoute = () => {
        this.setState({
            modal:true
        })
    }
    handleSearch = input=>e => {
        let arrayRoutes = [];
        let allRoutes = activeRoutes;
        let searchValue = e.target.value;
        if (searchValue.length >= 4) {
            allRoutes.forEach(route => {
                if (route.routeName.toLowerCase().indexOf(searchValue.toLowerCase())!==-1) {
                    arrayRoutes.push(route)
                    
                } else {
                    
                }
            })
            this.setState({
                search_route: arrayRoutes
            })
        } else {
            this.setState({
                search_route:allRoutes
            })
        }

    }
    handleAddItem = e => {
        console.log(e.currentTarget.name)
        this.setState({
            renderedRoutes: [...this.state.renderedRoutes, { name:e.currentTarget.name,id:e.currentTarget.id }]
        })
    }
    handleCloseModal = () => {
        this.setState({
            modal: false
        })
    }
    render() {
        let { search_route, modal, renderedRoutes } = this.state;
        return (
            <div className="routes-container">
                <AddRoute handleAddRoute={this.handleAddRoute} handleSearch={this.handleSearch} modal={modal} search_route={search_route} handleCloseModal={this.handleCloseModal} handleAddItem={this.handleAddItem}/>
                <RoutesList renderedRoutes={renderedRoutes}/>
            </div>
        );
    }
}

export default Routes;