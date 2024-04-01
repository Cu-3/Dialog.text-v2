var cartIcon = document.querySelector(".cart-icon")
var cartDiv = document.querySelector(".cart-section")
var cartClose = document.querySelector(".cart-close-icon")
var favIcon = document.querySelectorAll(".fav-icon-con")
var favIcon2 = document.querySelectorAll(".fav-icon-con2")
var productCart = document.querySelectorAll(".product-cart-icon")
var productCart2 = document.querySelector(".product-cart-icon2")
let userInfo = document.querySelector(".user-con")
let userInfoName = document.querySelector(".user-name")
let links = document.querySelector(".register-box")
let cartArea = document.querySelectorAll(".add-btn")
var cartPage = document.querySelector(".cart-empty")

cartIcon.onclick = function (){
    cartDiv.style.opacity = "1"
    cartDiv.style.transition = ".3s"
}
cartClose.onclick = function closecart(){
    cartDiv.style.opacity = "0"                              
    cartDiv.style.transition = ".3s"
}
favIcon.forEach(function(item2){
    item2.onclick = function(){
        favIcon.style.opacity = '0'
        favIcon.style.transition = ".4s"
    }
})
favIcon.ondblclick = function(){
    favIcon.style.opacity = '1'
    favIcon.style.transition = ".4s"
}

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "block"
    userInfoName.innerHTML = localStorage.getItem("username")
}
//////////////////////////////////////////////////////////
let allproducts = document.querySelector(".product-con1")
let products = [
    {
        id: 1 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "4699",
        oldPrice : "4300" ,
        dicount : "8$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.6",
        numberOfRate : "(11k)"
    },
    {
        id: 2 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "4399",
        oldPrice : "4000" ,
        dicount : "5$",
        imgUrl: "img/iphon15promax.webp",
        rate : "3.9",
        numberOfRate : "(34k)"
    },
    {
        id: 3 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "5299",
        oldPrice : "5000" ,
        dicount : "4$",
        imgUrl: "img/iphon15promax.webp",
        rate : "5.0",
        numberOfRate : "(34k)"
    },
    {
        id: 4 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "4699",
        oldPrice : "4300" ,
        dicount : "8$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.8",
        numberOfRate : "(22k)"
    },
    {
        id: 5 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(8k)"
    },
    {
        id: 6 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(1.4k)"
    },
    {
        id: 7 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(4k)"
    },
    {
        id: 8 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(54k)"
    },
    {
        id: 9 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(1.2k)"
    },
    {
        id: 10 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(18k)"
    },
    {
        id: 11 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(3k)"
    },
    {
        id: 12 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    },
    {
        id: 13 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    },
    {
        id: 14 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    },
    {
        id: 15 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    }
    ,
    {
        id: 15 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    }
    ,
    {
        id: 15 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    }
    ,
    {
        id: 15 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    },
    {
        id: 15 ,
        title : "iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - ",
        newPrice : "3000",
        oldPrice : "2700" ,
        dicount : "6$",
        imgUrl: "img/iphon15promax.webp",
        rate : "4.3",
        numberOfRate : "(9k)"
    }
];



function drawitem (){
    let y = products.map((item) =>{
        return`
        <div class="home-product1">
        <div class="product-img1-con">
            <div class="product-fav">
                <div class="fav-icon-con">
                    <i class="fa-regular fa-heart fav-icon1"></i>
                </div>
                <div class="fav-icon-con2">
                    <i class="fa-solid fa-heart fav-icon2"></i>
                </div>
            </div>
            <img src="${item.imgUrl}" class="product-img1">
            <div class="product-cart">
                <div class="rating-con">
                    <span class="rating-con-title"><b>${item.rate}</b></span>
                    <i class="fa-solid fa-star rating-icon" ></i>
                    <span class="rating-con-title">${item.numberOfRate}</span>
                </div>
                    <div class="product-cart-icon" onClick="additem(${item.id})">
                        <button class="add-btn">Add Cart</button>
                    </div>
                    <div class="product-cart-icon2">
                        <p class="product-cart-title">Added</p>
                    </div> 
            </div>
        </div>
        <div class="card-footer">
            <p class="card-footer-title">${item.title} - <span class="cart-price">AED <B>${item.newPrice}</B><small><del>${item.oldPrice}</del></small><span class="price-dis">${item.dicount}</span></span></p>
        </div>
        <div class="card-copyright">
            <h6 class="card-copyright1">Mentpress</h6>
        </div>
    </div> 
    `
    })
    allproducts.innerHTML = y ;
}
drawitem()

function additem(id){
    
    if(localStorage.getItem("username")){
        cartPage.style.display = "none";
        let chosenitem = products.find((item) => item.id === id);
        console.log(chosenitem)

    }else{
        window.location ="login.html"
    }
} 
var logout = document.querySelector(".logout-icon ")
        logout.addEventListener("click" , function (){
            localStorage.clear();
            setTimeout(()=>{
                window.location = "login.html"
            } , 1500)
        })

var cartName = document.querySelector(".incart-name")
var incart = document.querySelector(".product-area")
var incartBtn = document.querySelector(".product-btn-con2")

cartArea.forEach(function(pro1){
    pro1.onclick = function (){
        if(localStorage.getItem("username")){
            
            incart.innerHTML += `<p class="incart-name">${cartName.textContent}</p>`
        }else{
            setTimeout(()=>{
                window.location = "login.html"
            } , 1500)
        }
        if(incart.innerHTML != ""){
            incartBtn.style.display = "block"
        }
    }
})

