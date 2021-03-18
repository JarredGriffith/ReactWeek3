import React from 'react'; 
// import NewValetCar from './newcarform'; 

export default class CarList extends React.Component {
    constructor(props){
        super(props); 
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(){
        this.props.deleteCar(this._id)
    }

    render() {
        console.log('test')
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.car}</h5>
                    <p className="card-text">{this.props.carMake} in</p>
                </div>
                <div className="card-footer"> test 
                    <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button>
                </div>
            </div>
        );
    }

}
