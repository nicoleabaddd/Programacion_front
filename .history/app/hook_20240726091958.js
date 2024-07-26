export function onsumit (){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>console.log(data));       
    console.log("se envió",data)
}

export function onsumitPost (){
    fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: 144,
              quantity: 8,
            },
            {
              id: 98,
              quantity: 1,
            },
          ]
        })
      })
      .then(res => res.json())
      .then(console.log);
}