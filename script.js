const menu = document.getElementById('menu');
const close = document.getElementById('close');
const mobileMenu = document.getElementById('mobile_menu');
const cover = document.getElementById('cover');

menu.addEventListener("click", function(){
mobileMenu.style.display = "block";
cover.classList.toggle('show');
});

close.addEventListener("click", function(){
    mobileMenu.style.display = "none";
    cover.classList.remove('show');
 });

    const mainImage = document.getElementById('main_product_img');
    const imageMenu = document.getElementsByClassName('menu_img');
    const mainImage2 = document.getElementById('main_menu_img2');
    const imageMenu2 = document.getElementsByClassName('menu_img2');
    const imageCon = document.getElementById('lightbox_container');
    
    
    for (let i = 0; i < imageMenu.length; i++){
      imageMenu[i].addEventListener("click", function(){
        if (i === 0){
          mainImage.src = "images/image-product-1.jpg";
        }
         else if (i === 1){
          mainImage.src = "images/image-product-2.jpg";
        }
        else if (i === 2){
          mainImage.src = "images/image-product-3.jpg";
        }
        else if (i === 3){
          mainImage.src = "images/image-product-4.jpg";
        }
      })
    }

    for (let i = 0; i < imageMenu2.length; i++){
      imageMenu2[i].addEventListener("click", function(){
        if (i === 0){
          mainImage2.src = "images/image-product-1.jpg";
        }
         else if (i === 1){
          mainImage2.src = "images/image-product-2.jpg";
        }
        else if (i === 2){
          mainImage2.src = "images/image-product-3.jpg";
        }
        else if (i === 3){
          mainImage2.src = "images/image-product-4.jpg";
        }
      })
    }

    mainImage.addEventListener("click", function (){
         imageCon.style.display = "flex";
         cover.classList.toggle('show');
    });
    
    const closeLightbox = document.getElementById('close_lightbox');

    closeLightbox.addEventListener("click", function (){
      imageCon.style.display = "none";
      cover.classList.remove('show');
 });  

 const prevLightbox = document.getElementById('previous_lightbox');
 const nextLightbox = document.getElementById('next_lightbox');
 const menuImg2 = document.getElementById('main_menu_img2');
 
 let currentIndex = 0;
 nextLightbox.addEventListener("click", function() {
   currentIndex = (currentIndex + 1) % 4;
   if (currentIndex === 0){
     menuImg2.src = "images/image-product-1.jpg";
   }
   else if (currentIndex === 1){
     menuImg2.src = "images/image-product-2.jpg";
   }
   else if (currentIndex === 2){
     menuImg2.src = "images/image-product-3.jpg";
   }
   else if (currentIndex === 3){
     menuImg2.src = "images/image-product-4.jpg";
   }
 });
 
 prevLightbox.addEventListener("click", function() {
   currentIndex = (currentIndex - 1 + 4) % 4;
   if (currentIndex === 0){
     menuImg2.src = "images/image-product-1.jpg";
   }
   else if (currentIndex === 1){
     menuImg2.src = "images/image-product-2.jpg";
   }
   else if (currentIndex === 2){
     menuImg2.src = "images/image-product-3.jpg";
   }
   else if (currentIndex === 3){
     menuImg2.src = "images/image-product-4.jpg";
   }
 });
 
 const prev = document.getElementById('previous');
 const next = document.getElementById('next');
 const menuMobile = document.getElementById('menu_img_mobile');
 
 let currentIndexMobile = 0;
 next.addEventListener("click", function() {
   currentIndexMobile = (currentIndexMobile + 1) % 4;
   if (currentIndexMobile === 0){
     menuMobile.src = "images/image-product-1.jpg";
   }
   else if (currentIndexMobile === 1){
     menuMobile.src = "images/image-product-2.jpg";
   }
   else if (currentIndexMobile === 2){
     menuMobile.src = "images/image-product-3.jpg";
   }
   else if (currentIndexMobile === 3){
     menuMobile.src = "images/image-product-4.jpg";
   }
 });
 
 prev.addEventListener("click", function() {
   currentIndexMobile = (currentIndexMobile - 1 + 4) % 4;
   if (currentIndexMobile === 0){
     menuMobile.src = "images/image-product-1.jpg";
   }
   else if (currentIndexMobile === 1){
     menuMobile.src = "images/image-product-2.jpg";
   }
   else if (currentIndexMobile === 2){
     menuMobile.src = "images/image-product-3.jpg";
   }
   else if (currentIndexMobile === 3){
     menuMobile.src = "images/image-product-4.jpg";
   }
 });
 
 const add = document.getElementById('add');
 const minus = document.getElementById('minus');
 const numOrder = document.getElementById('number_of_order');
 
 let num = 0;
 
 add.addEventListener("click", function (){
   numOrder.value = ++num;
   numOrder.innerHTML = num;
 });

 minus.addEventListener("click", function (){
  if (num > 0) {
    numOrder.value = --num;
  } else {
    numOrder.value = 0;
  }
  numOrder.innerHTML = num;
}); 


const cart = document.getElementById('cart');
const cartMenu = document.getElementById('cart_menu');
const addtoCart = document.getElementById('addtoCart');
const order = document.getElementById('order');
const noOrder = document.getElementById('no_order');
const orders = document.getElementById('orders');
const number = document.getElementById('number');
const amount = document.getElementById('amount');
const deleteButton = document.getElementById('delete');
const checkOut = document.getElementById('checkout');

cart.addEventListener("click", function(){
  if (cartMenu.style.display == "none"){
cartMenu.style.display = "flex";
  }
  else {
      cartMenu.style.display = "none";
  }
  }); 

  addtoCart.addEventListener("click", function (){
    orders.value =  numOrder.value;
    orders.innerHTML = numOrder.value;

    if (orders.value > 0){
      order.style.display = "flex";
      noOrder.style.display = "none";
      checkOut.style.display = "block";
    }
        else {
          order.style.display = "none";
          checkOut.style.display = "none";
          noOrder.style.display = "block";
          }

          number.innerHTML = orders.value; 
          amount.value = orders.value * 125;
          amount.innerHTML = amount.value;
          num = 0;
          numOrder.innerHTML = num;
    });

    deleteButton.addEventListener("click", function(){
      order.style.display = "none";
      noOrder.style.display = "block";
      checkOut.style.display = "none";
      number.value = 0;
      number.innerHTML = 0;
      });

      checkOut.addEventListener("click", function(){
        order.style.display = "none";
        noOrder.style.display = "block";
        checkOut.style.display = "none";
        number.value = 0;
        number.innerHTML = 0;
        alert('Thank you for ordering!!');
        }); 







 
