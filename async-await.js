fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log)
.catch((error)=>{
console.log("Error:",error);
});

 
const fun = async () => {
    var response = await fetch('https://dummyjson.com/products');
    var data = await response.json();
    data.products.map((product) => {
        console.log(product);
    });
    console.log(data);
}

fun();  

