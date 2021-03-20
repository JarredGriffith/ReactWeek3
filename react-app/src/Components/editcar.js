import React,  {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export const NewValetCar = (props)=> {
    const [guestNAme, setName] = useState('');
    const [carMake, setCarMake] = useState('');

    const handleSubmit = (e)=> {
        props.updateCar({guestNAme,carMake}); 
        e.preventDefault(); 
    }

return (
    <form onSubmit={handleSubmit} className="container border border-dar p-3 mb-2 bg-secondary text-white">
        <div className="container">
        <div>
            <label>Car Owner Name</label>
            <input type="text" placeholder="Name" value={this.props.} className="form-control" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
            <label>Car make</label>
            <input type="text" placeholder="Make" value={carMake} className="form-control" onChange={(e)=> setCarMake(e.target.value)}/>
        </div> <br></br>
        <button type="submit" className="btn btn-primary text-center">Submit Guest Card</button> 
        </div>
    </form>
)
}