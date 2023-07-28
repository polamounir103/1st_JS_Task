var buyBtn = document.querySelectorAll("#buy-btn")
var cartNo = document.getElementById("cart-no")
var cartNo2 = document.getElementById("cart-no2")
var cartIcon = document.querySelector ("#cart")
var cartClose = document.querySelector("#hide-cart")
var cartBtn = document.querySelector("#cart-button")
var closeCart = document.querySelector("#hide-cart-button")
var cartClear = document.querySelector ("#cart-contant-clear")
var x = 0

var itemsTitle = document.querySelectorAll(".card-body")
var productItem = document.querySelectorAll("#card")
var cartContant = document.querySelector("#cart-contant")
// var btn = document.querySelector("#btn1")
// var itemCp =document.querySelectorAll("item-title1")


var total = 0 
itemsTitle.forEach(function(item){
    item.onclick = function () {
        total +=  +(item.getAttribute("price"))
        ++x;
        cartNo.innerHTML = x;
        cartNo2.innerHTML = x;
        cartNo.style.display = "inline-block";
        cartNo2.style.display = "inline-block";
        
        if( x > 1) {
            cartContant.innerHTML += "<br>" + "<h6 style=\"display:inline-block\">"+ x +"</h2>" + "-" + item.textContent 
        }
        else {
            cartContant.innerHTML += "<h6 style=\"display:inline-block\">"+ x + "</h2>" + "-" + item.textContent 
        }
    }
})



////////// cart contant /////////
function showingCart(){
        cartContant.style.display = "block"
        cartClose.style.display = "inline"
        cartIcon.style.display = "none"
        cartBtn.style.visibility = "hidden"
        closeCart.style.display = "block"
    }
    
    function hidingCart(){
        cartContant.style.display = "none"
        cartClose.style.display = "none"
        cartIcon.style.display = "inline"
        cartBtn.style.visibility = "visible"
        closeCart.style.display = "none"
    }

cartIcon.onclick = showingCart
cartClose.onclick = hidingCart

cartBtn.onclick = showingCart
closeCart.addEventListener("click" , hidingCart)

////////////// clear cart ////////////////

function clearing() {
    console.log("john")
    cartContant.innerHTML = ""
    x = 0
    cartContant.style.display = "none"
    cartClose.style.display = "none"
    cartIcon.style.display = "inline"
    // cartBtn.style.display = "block"
    cartBtn.style.visibility = "visible"
    closeCart.style.display = "none"
    cartNo.style.display = "none"
    cartNo2.style.display = "none"
    totalPriceContant.innerHTML = ""
    total = 0 
    cartContant.innerHTML = " <h6 style=\"text-decoration: underline; \">Cart Items :- </h2>"
}

cartClear.addEventListener("click" , clearing)







/////////////////////////////////

var totalPriceBtn = document.querySelector("#allprice")
var totalPriceContant = document.querySelector("#tolal-price")

function pricing() {
    console.log("john")
    // totalPriceContant.style.display = "block"
    totalPriceContant.innerHTML = total
}

totalPriceBtn.onclick = pricing







if (cartContant != ""){           
    cartContant.innerHTML = " <h6 style=\"text-decoration: underline; \">Cart Items :- </h2>"
}
else {
    
    cartContant.innerHTML = "None"
} 


////////////////////////////////////////////////////////////////////////////
