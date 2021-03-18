import React from 'react';
import CarList from './Components/carlist.js'; 
import { NewValetCar } from './Components/newcarform'; 
import {Apicalls} from './rest/api'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      guest:[]
    }
    this.getdata = this.getdata.bind(this); 
    this.deleteCar = this.deleteCar.bind(this); 
    this.addNewCar = this.addNewCar.bind(this); 
  }

  getdata = async()=>{
    const data = await Apicalls.get(); 
    this.setState({data})
    console.log(this.state)
  }; 

  deleteCar = async(id)=>{
    await Apicalls.delete(id); 
    this.getdata(); 
  }; 

  addNewCar = async(car)=>{
    await Apicalls.create(car); 
    this.getdata(); 
  }

  render(){
    let guestCard = this.state.guest.map(car => {
      return <CarList {...car} key={car._id}
      deleteCar={this.deleteCar} />
    })

    return(
      <div>
      <div className="Container">
        <h2>add Guest</h2>
        <NewValetCar addNewCar={this.addNewCar}/>
      </div>
      <div>
        <h2>Guest</h2>
        {guestCard}
      </div>
      </div>
    )
  }

}