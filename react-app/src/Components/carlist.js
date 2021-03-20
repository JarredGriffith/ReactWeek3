import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class CarList extends React.Component {
    constructor(props){
        super(props); 
        
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    //for the delete button
    handleDeleteClick(){
        this.props.deleteCar(this.props._id)
    }

    //this makes the cards for  current the valet cars
    render() {
        return (
            <div className="card container">
                <div className="card-body">
                    <h5 className="card-title">Car Owner Name : {this.props.guestNAme}</h5>
                    <p className="card-text">Car Make : {this.props.carMake}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button> 
                </div>
            </div>
        );
    }

}
