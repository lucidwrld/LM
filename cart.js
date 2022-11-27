
const cartBar = document.querySelector(".cart")
const cart = document.querySelector(".cart-page")
const closeCart = document.querySelector(".closes")


cartBar.addEventListener("click",function(){
 cart.style.transform= "translate(0%)"
})
closeCart.addEventListener("click", function(){
 cart.style.transform= "translate(100%)"
})