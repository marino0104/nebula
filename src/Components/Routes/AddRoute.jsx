import React, { Component } from 'react';

class AddRoute extends Component {
    render() {
        let { handleAddRoute, modal, handleSearch, search_route, handleCloseModal, handleAddItem } = this.props;
        return (
            <div className="add-routes">
                <div className="row justify-content-center">
                    <h2>Rutas</h2>
                    <button onClick={handleAddRoute} className="rounded">+</button>
                </div>
                {modal ?
                    <div className={`routes-modal ${modal ? 'modal-active' : ''}`}>
                        <input type="text" onChange={handleSearch('search_route')} name="search_route" placeholder="Buscar..." />
                        {search_route.map((routeItem, index) => (
                            <button onClick={handleAddItem} name={routeItem.routeName} id={routeItem.id} key={index}><p >{routeItem.routeName}</p></button>
                        ))}
                        <button className="close-modal" onClick={handleCloseModal}>X</button>
                    </div>
                    :
                    ''}
            </div>
        );
    }
}

export default AddRoute;