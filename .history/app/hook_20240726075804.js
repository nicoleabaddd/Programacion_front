fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>console.log(data));           
            
console.log("data",data)   


export function onsumit=async=>{
    console.log("se envió",data)
}

export default   
