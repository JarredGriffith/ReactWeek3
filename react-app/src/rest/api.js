const ENDPOINT = "https://crudcrud.com/api/5c82594d1f594441a2f62f4a4a228ad1/unicorns"; 

class APIcalls {
    get = async ()=> {
        try {
            //making a get requet
            const resp = await fetch(ENDPOINT); 
            const data = await resp.json(); 
            return data; 
        } catch(e) {
            console.log("Error with the get request",e)
        }
    }

    //remeber that when you send a put request you can update the ID or it errors. 
    put = async(car) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`,{
                method: 'PUT', 
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify({
                    "name" : 
                }), 
            })
            return await resp.json(); 
        } catch(e){
            console.log("Put request error",e)
        }
    }

}