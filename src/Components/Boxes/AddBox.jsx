import React, { Component } from 'react';

class AddBox extends Component {
    render() {
        let { handleAddBox, handleSend, add_box } = this.props;
        return (
            <div className="px-5 add-item-container">
                <input type="text" autoFocus={true} placeholder="Ingrese el código de barras" name="add_box" onChange={handleAddBox('add_box')} onKeyPress={handleSend} defaultValue={add_box}/>
            </div>
        );
    }
}

export default AddBox;