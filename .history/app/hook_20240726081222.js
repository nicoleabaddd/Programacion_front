export function onsumit (){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>console.log(data));       
    console.log("se envió",data)
}
