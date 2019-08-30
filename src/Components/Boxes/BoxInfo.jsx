import React, { Component } from 'react'

export default class BoxInfo extends Component {
    render() {
        let { box_info } = this.props;
        return (
            <React.Fragment>
                {box_info.id ?
                    <div className="box-info-container">
                        <div className={`row status ${box_info.state==="entregado"? 'no-admitted' : 'admitted'}`}>
                            <div className="col-md-12 text-center">
                                <p>Estado: <strong>{box_info.state}</strong></p>
                            </div>
                        </div>
                        <div className="row box-info">
                            <div className="col-md-4">
                                <label>Generador:</label>
                                <p>{box_info.generator}</p>
                            </div>
                            <div className="col-md-4">
                                <label>CEDI:</label>
                                <p>{`CEDI ${box_info.cedi}`}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Ruta:</label>
                                <p>{box_info.route}</p>
                            </div>
                        </div>
                        <h3>Información del asesor</h3>
                        <div className="row asesor-info">
                            <div className="col-md-4">
                                <label>Documento:</label>
                                <p>{box_info.adviser.doc}</p>
                            </div>
                            <div className="col-md-4">
                                <label>nombre:</label>
                                <p>{box_info.adviser.name}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Teléfono:</label>
                                <p>{box_info.adviser.phone}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Celular:</label>
                                <p>{box_info.adviser.celular}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Departamento:</label>
                                <p>{box_info.adviser.region_department}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Teléfono:</label>
                                <p>{box_info.adviser.city}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Barrio:</label>
                                <p>{box_info.adviser.neighborhood}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Dirección:</label>
                                <p>{box_info.adviser.direction}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Código población:</label>
                                <p>{box_info.adviser.poblation_code}</p>
                            </div>
                            <div className="col-md-4">
                                <label>Código zona:</label>
                                <p>{box_info.adviser.zone_code}</p>
                            </div>
                        </div>
                    </div>
                    
                    :
                    ''}
            </React.Fragment>
            
        )
    }
}
