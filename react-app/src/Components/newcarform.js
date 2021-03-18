import React,  {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export const NewValetCar = (props)=> {
    const [guestNAme, setName] = useState('');
    const [carMake, setCarMake] = useState('');

    const handleSubmit = (e)=> {
        props.addNewCar(guestNAme,carMake); 
        e.preventDefault(); 
    }


return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Guest Name</label>
            <input type="text" placeholder="Name" value={guestNAme} className="form-control" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
            <label>Car make</label>
            <input type="text" placeholder="Make" value={carMake} className="form-control" onChange={(e)=> setCarMake(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-danger">Submit Guest Card</button> 
    </form>
)
}