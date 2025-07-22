let products = {
 data:[
    {
        productName:"Regular White T-Shirt",
        category:"Topwear",
        price: "30",
        image:"tshr.jpg",
    },
      {
        productName:"Beige Short Skirt",
        category:"bottomwear",
        price: "49",
        image:"skrit.avif",
    },
      {
        productName:"Black Leather Jacket",
        category:"Jacket",
        price: "149",
        image:"m2.jpg",
    },
      {
        productName:"Stylish Pink Trouser",
        category:"bottomwear",
        price: "89",
        image:"trouser.avif",
    },
     {
        productName:"Blue Men's Jacket",
        category:"Jacket",
        price: "187",
        image:"m1.webp",
    },
     {
        productName:"Comfy Gray Pants",
        category:"Bottomwear",
        price: "49",
        image:"pants.jpg",
    },
      {
        productName:"Comfy New Watch",
        category:"Watch",
        price: "249",
        image:"wat.webp",
    },
    {
        productName:"black hat",
        category:"hat",
        price:"98",
        image:"h1.jpg",
    },
 ]

};

for(let i of products.data){

    let card = document.createElement("div");

    card.classList.add("card" , i.category,"hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = '$'+ i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value){

    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");

        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{

        if(value == "all"){
            element.classList.remove("hide");
} else{

    if(element.classList.contains(value)){

        element.classList.remove("hide");
    }else{

        element.classList.add("hide");
    }
}

    });

}

document.getElementById("search").addEventListener("click",() =>{
    let searchInput = document.getElementById("search-input").value;
    let elements =document.querySelectorAll(".product-name");
    let cards =document.querySelectorAll(".card");
    elements.forEach((element,index)=>{
        
        if(element.innerText.includes(searchInput.toUpperCase())){

        cards[index].classList.remove("hide");

        }else{

            cards[index].classList.add("hide");



    }
});
});





window.onload =() =>{

    filterProduct("all");
};