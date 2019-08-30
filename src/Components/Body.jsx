import React, { Component } from 'react';
import UIfx from 'uifx';
import successSound from './../assets/sounds/success.wav';
import errorSound from './../assets/sounds/error.mp3';
import Routes from './Routes/Routes';
import AddBox from './Boxes/AddBox';
import BoxInfo from './Boxes/BoxInfo';
import boxes from './services/boxes.json';



const passBox = new UIfx(successSound);
const nonPassBox = new UIfx(errorSound);
class Body extends Component {
    state = {
        add_box: null,
        boxes: boxes,
        box_info:[]
    }
    handleAddBox = input => e => {
        this.setState({
            [input]:e.target.value
        })
    }
    handleSend = e => {
        if (e.key === 'Enter') {
            let { boxes, add_box } = this.state;
            boxes.forEach(box => {
            
                if (box.id === parseInt(add_box)) {
                    if (box.state === "entregado") {
                        nonPassBox.play()
                    } else {
                        passBox.play()
                    }
                    this.setState({
                        box_info: box,
                        add_box:null
                    })
                }
            })
        }
    }
    handleToggle = e => {
        let containerBox = document.querySelector('.routes');
        if (containerBox.classList.contains('expanded-bar')) {
            containerBox.classList.remove('expanded-bar')
        } else {
            containerBox.classList.add('expanded-bar')
        }
    }
    render() {
        let { add_box, box_info } = this.state;
        return (
            <div className="container-fluid body-container h-100">
                <div className="row">
                    
                    <div className="col-md-3 routes py-3">
                        <button className="only-responsive btn-toggle" onClick={this.handleToggle}>

                        </button>
                        <Routes/>
                    </div>
                    <div className="col-md-9 boxes py-3">
                        <AddBox handleAddBox={this.handleAddBox} handleSend={this.handleSend} add_box={add_box}/>
                        <BoxInfo box_info={box_info} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;