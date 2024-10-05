// // Fetching data from the API
// // Dummy API: https://dummyjson.com/products

fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data  =>{
    data.products.map((element) => {
        console.log(element);
    }
    );
    console.log(data);
    
    
 
})
.catch(error => console.error('Error:', error))






var placementcreteria = ["Student", "Above 60 Percentadsad"]; 

var JohngetPlacement = new Promise((resolve, reject) => {

    if (placementcreteria.includes("Student") && placementcreteria.includes("Above 60 Percent")) {
        resolve("You are  Placed in Google");
    } else {
        reject("You are not eligible for the placement");
    }
});

JohngetPlacement.then((message) => {
    console.log(message);
}
).catch((message) => {
    console.log("This is Recject Part",message);
}
);
 

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 132,23,232, 2,43, 4];
num.forEach((element) => {
    console.log(element);
});




console.log(arr.sort((a, b) => a - b));

num.map((element) => {
    console.log(element);
}
);



 
