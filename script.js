const cartItem=[];
const cartItems=document.getElementById("cart-item");
const totalPrice=document.getElementById("cart-price");
//cart data
let cart=[];
let total=0;
//add cart fuctionalty
document.querySelectorAll(".add-to-cart").forEach(button=>{
    button.addEventListener("click",event=>{
        const product= event.target.parentElement;
        const id=product.dataset.id;
        const name=product.dataset.name;
        const price=parseFloat(product.dataset.price);
        
        //add product to cart
        cart.push({id,name,price});
        total+=price;

        //Update cart UI
        updateCart();
    });      
});
//update cart UI 
function updateCart(){
    cartItems.innerHTML="";
    cart.forEach(item=>{
        const li=document.createElement("li");
        li.textContent='${item.name}-$${item.price}';
        cartItems.appendChild(li);
    
    });
    totalPrice.textContent=total.toFixed(2);
}