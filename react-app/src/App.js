import React from 'react';
import CarList from './Components/carlist'; 
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

  render(){
    let guestCard = this.state.guest.map(car => {
      return <CarList {...car} key={car._id}
      deleteCar={this.deleteCar} 
      updateCar={this.updateCar}/>
    })

    return(
      <div className="Container">
      <div >
        <h2 className="text-center">React valet app!</h2>
        <NewValetCar addNewCar={this.addNewCar}/>
      </div>
      <br></br>
      <div>
        <h2 className="text-center">Current Valet Cars</h2>
        {guestCard}
      </div>
      </div>
    )
  }

  componentDidMount() {
    this.getdata();
  }
  getdata = async()=>{
    const d = await Apicalls.get(); 
    this.setState({guest: d})
    console.log(this.state)
  }; 

  deleteCar = async(id)=>{
    console.log(id)
    await Apicalls.delete(id); 
    this.getdata(); 
  }; 

  addNewCar = async(car)=>{
    await Apicalls.create(car); 
    this.getdata(); 
  }

}