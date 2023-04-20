'use strict'

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // clear existing content
    
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";
  
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;
      image.className = "card-img-top";
      card.appendChild(image);
  
      const body = document.createElement("div");
      body.className = "card-body";
      card.appendChild(body);
  
      const title = document.createElement("h5");
      title.className = "card-title";
      title.innerText = product.title;
      body.appendChild(title);
  
      const price = document.createElement("p");
      price.className = "card-text";
      price.innerText = "$" + product.price.toFixed(2);
      body.appendChild(price);
  
      const description = document.createElement("p");
      description.className = "card-text";
      description.innerText = product.description;
      body.appendChild(description);
  
      const rating = document.createElement("p");
      rating.className = "card-text";
      rating.innerText = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
      body.appendChild(rating);
  
      container.appendChild(card);
    });
  }
  

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>displayProducts(json))

// console.log(a);



// const a = document.querySelector('.box')
// const b = document.querySelector('.container')

// b.addEventListener.add("click",function () {
// })