const ENDPOINT = "https://crudcrud.com/api/5c82594d1f594441a2f62f4a4a228ad1/unicorns"; 

class APIcalls {
    get = async ()=> {
        try {
            //making a get requet
            const resp = await fetch(`${ENDPOINT}`); 
            const data = await resp.json(); 
            return data; 
        } catch(e) {
            console.log("Error with the get request",e)
        }
    }

    //remeber that when you send a put request you can update the ID or it errors. 
    put = async(car) => {
        try{
            let updatewithoutId = {
                name: car.guestNAme, 
                make: car.carMake, 
            }
            const resp = await fetch(`${ENDPOINT}/${car.id}`,{
                method: 'PUT', 
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(updatewithoutId), 
            })
            return resp;
        } catch(e){
            console.log("Put request error",e)
        }
    }

    create = async(car) => {
        console.log(JSON.stringify(car))
        try{
            const resp = await fetch(ENDPOINT,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            }); 
            return resp; 
        } catch(e) {
            console.error(`Problem creating employee: ${e}`);
        }
    }
    delete = async(id) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting employee:${e}`);
        }
    }
}

export const Apicalls = new APIcalls(); 