
fetch('https://localhost:5000/products')
.then(function(response) {
    return response.json();

})
.then(function(information) {
    console.log(information);
    let items= document.getElementById('products');
    information.forEach(good=>{
        let first=document.createElement('li')
        first.innerText=`${good.name}`
        good.appendChild(items)
    })
})
.catch(function(error){
    console.log('error',error);
});

fetch('https://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();

})
.then(function() {
    console.log(information);
    let items= document.getElementById('fruList');
    information.forEach(good=>{
        let first=document.createElement('li')
        first.innerText=`${good.name}`
        good.appendChild(items)
    })
})
.catch(function(error){
    console.log('error',error);
});

fetch('https://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();

})
.then(function(information) {
    console.log(information);
    let items= document.getElementById('vegList');
    information.forEach(good=>{
        let first=document.createElement('li')
        first.innerText=`${good.name}`
        good.appendChild(items)
    })
})
.catch(function(error){
    console.log('error',error);
});
    


