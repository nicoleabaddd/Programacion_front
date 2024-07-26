fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>console.log(data));           
            
console.log("data",data)   
         
const onsumit=async=>{
    console.log("se envió",data)
}

export default   
