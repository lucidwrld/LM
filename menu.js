import data from './items.json' assert {type: 'json'}

const numberBtn = document.querySelectorAll('[data-number]')



function appendNumber(number ){
 
      if (number ==="RICE") {
      let option = "rice"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c1").classList.remove("load")
      }
      else if (number ==="SPAGHETTI") {
      let option = "spaghetti"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c2").classList.remove("load")
      }
      else if (number ==="SOUP") {
      let option = "soup"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c3").classList.remove("load")
      }
      else if (number ==="DESSERT") {
      let option = "dessert"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c4").classList.remove("load")
      }
      else if (number ==="SPECIAL MEALS") {
      let option = "smeal"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c5").classList.remove("load")
      }
      else if (number ==="BREAD") {
      let option = "bread"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c6").classList.remove("load")
      }
      else if (number ==="SNACKS") {
      let option = "sides"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c7").classList.remove("load")
      }
      else if (number ==="DRINKS") {
      let option = "drinks"
      document.querySelector("."+option+"").classList.remove("loading")
      document.querySelector(".c8").classList.remove("load")
      }
 }
   
 
 numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.innerHTML )
  })
 })

function getoption(){
 let rice = document.getElementById('rice');
 let spaghetti = document.getElementById('spaghetti');
 let soup = document.getElementById('soup');
 let dessert = document.getElementById('dessert');
 let smeal = document.getElementById('smeal');
 let bread = document.getElementById('bread');
 let sides = document.getElementById('sides');
 let drinks = document.getElementById('drinks');

 let riceData = data.busaItem.filter(item=> item.category=='rice');
    console.log(riceData);

    

  riceData = riceData.map(item =>{

    /* creating the card  */
   let itemCard= document.createElement('div');
   itemCard.setAttribute('class','card bg-black my-4 align-items-center');

   let img= document.createElement('img');
   img.setAttribute('class', 'card-img-top')
   img.src= item.Img;

   let itemName= document.createElement('p');
   itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
   itemName.setAttribute('id', 'item-name');
   itemName.innerText= item.name;

   let itemPrice= document.createElement('p');
   itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
   itemPrice.innerText= 'Price : ₦ '+ item.price;
   let addToCart = document.createElement('button');
   addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
   addToCart.setAttribute('id', item.id);
   addToCart.innerText= 'Add to Cart'
   itemCard.appendChild(img);
   itemCard.appendChild(itemName)
   itemCard.appendChild(itemPrice)
   itemCard.appendChild(addToCart)
   rice.appendChild(itemCard);
  })

  let spaghettiData = data.busaItem.filter(item=> item.category=='spaghetti');
    console.log(spaghettiData);
  spaghettiData = spaghettiData.map(item =>{ 
    /* creating the card  */
  let itemCard= document.createElement('div');
  itemCard.setAttribute('class','card bg-black my-4 align-items-center');
  

  let img= document.createElement('img');
  img.setAttribute('class', 'card-img-top')
  img.src= item.Img;

  let itemName= document.createElement('p');
  itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
  itemName.setAttribute('id', 'item-name');
  itemName.innerText= item.name;

  let itemPrice= document.createElement('p');
  itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
  itemPrice.innerText= 'Price : ₦ '+ item.price;
  let addToCart = document.createElement('button');
  addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
  addToCart.setAttribute('id', item.id);
  addToCart.innerText= 'Add to Cart'
  itemCard.appendChild(img);
  itemCard.appendChild(itemName)
  itemCard.appendChild(itemPrice)
  itemCard.appendChild(addToCart)

        spaghetti.appendChild(itemCard);
  })

  
  let soupData = data.busaItem.filter(item=> item.category=='soup');
    console.log(soupData);
    soupData = soupData.map(item =>{
      /* creating the card  */
   let itemCard= document.createElement('div');
   itemCard.setAttribute('class','card bg-black my-4 align-items-center');

   let img= document.createElement('img');
   img.setAttribute('class', 'card-img-top')
   img.src= item.Img;

   let itemName= document.createElement('p');
   itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
   itemName.setAttribute('id', 'item-name');
   itemName.innerText= item.name;

   let itemPrice= document.createElement('p');
   itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
   itemPrice.innerText= 'Price : ₦ '+ item.price;
   let addToCart = document.createElement('button');
   addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
   addToCart.setAttribute('id', item.id);
   addToCart.innerText= 'Add to Cart'
   itemCard.appendChild(img);
   itemCard.appendChild(itemName)
   itemCard.appendChild(itemPrice)
   itemCard.appendChild(addToCart)
     soup.appendChild(itemCard);
  })


  let breadData = data.busaItem.filter(item=> item.category=='bread');
    console.log(breadData);
    breadData = breadData.map(item =>{
      /* creating the card  */
   let itemCard= document.createElement('div');
   itemCard.setAttribute('class','card bg-black my-4 align-items-center');

   let img= document.createElement('img');
   img.setAttribute('class', 'card-img-top')
   img.src= item.Img;

   let itemName= document.createElement('p');
   itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
   itemName.setAttribute('id', 'item-name');
   itemName.innerText= item.name;

   let itemPrice= document.createElement('p');
   itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
   itemPrice.innerText= 'Price : ₦ '+ item.price;
   let addToCart = document.createElement('button');
   addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
   addToCart.setAttribute('id', item.id);
   addToCart.innerText= 'Add to Cart'
   itemCard.appendChild(img);
   itemCard.appendChild(itemName)
   itemCard.appendChild(itemPrice)
   itemCard.appendChild(addToCart)
     bread.appendChild(itemCard);
  })

  let dessertData = data.busaItem.filter(item=> item.category=='dessert');
  console.log(dessertData);
  dessertData = dessertData.map(item =>{
    /* creating the card  */
 let itemCard= document.createElement('div');
 itemCard.setAttribute('class','card bg-black my-4 align-items-center');

 let img= document.createElement('img');
 img.setAttribute('class', 'card-img-top')
 img.src= item.Img;

 let itemName= document.createElement('p');
 itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
 itemName.setAttribute('id', 'item-name');
 itemName.innerText= item.name;

 let itemPrice= document.createElement('p');
 itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
 itemPrice.innerText= 'Price : ₦ '+ item.price;
 let addToCart = document.createElement('button');
 addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
 addToCart.setAttribute('id', item.id);
 addToCart.innerText= 'Add to Cart'
 itemCard.appendChild(img);
 itemCard.appendChild(itemName)
 itemCard.appendChild(itemPrice)
 itemCard.appendChild(addToCart)
   dessert.appendChild(itemCard);
})

let smealData = data.busaItem.filter(item=> item.category=='smeal');
  console.log(smealData);
  smealData = smealData.map(item =>{
    /* creating the card  */
 let itemCard= document.createElement('div');
 itemCard.setAttribute('class','card bg-black my-4 align-items-center');

 let img= document.createElement('img');
 img.setAttribute('class', 'card-img-top')
 img.src= item.Img;

 let itemName= document.createElement('p');
 itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
 itemName.setAttribute('id', 'item-name');
 itemName.innerText= item.name;

 let itemPrice= document.createElement('p');
 itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
 itemPrice.innerText= 'Price : ₦ '+ item.price;
 let addToCart = document.createElement('button');
 addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
 addToCart.setAttribute('id', item.id);
 addToCart.innerText= 'Add to Cart'
 itemCard.appendChild(img);
 itemCard.appendChild(itemName)
 itemCard.appendChild(itemPrice)
 itemCard.appendChild(addToCart)
   smeal.appendChild(itemCard);
})

  let sidesData = data.busaItem.filter(item=> item.category=='sides');
    console.log(sidesData);
    sidesData = sidesData.map(item =>{
      /* creating the card  */
   let itemCard= document.createElement('div');
   itemCard.setAttribute('class','card bg-black my-4 align-items-center');

   let img= document.createElement('img');
   img.setAttribute('class', 'card-img-top')
   img.src= item.Img;

   let itemName= document.createElement('p');
   itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
   itemName.setAttribute('id', 'item-name');
   itemName.innerText= item.name;

   let itemPrice= document.createElement('p');
   itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
   itemPrice.innerText= 'Price : ₦ '+ item.price;
   let addToCart = document.createElement('button');
   addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50  add-to-cart')
   addToCart.setAttribute('id', item.id);
   addToCart.innerText= 'Add to Cart'
   itemCard.appendChild(img);
   itemCard.appendChild(itemName)
   itemCard.appendChild(itemPrice)
   itemCard.appendChild(addToCart)
     sides.appendChild(itemCard);
  })

  let drinkData = data.busaItem.filter(item=> item.category=='drink');
    console.log(drinkData);
    drinkData = drinkData.map(item =>{
      /* creating the card  */
   let itemCard= document.createElement('div');
   itemCard.setAttribute('class','card bg-black my-4 align-items-center');

   let img= document.createElement('img');
   img.setAttribute('class', 'card-img-top')
   img.src= item.Img;

   let itemName= document.createElement('p');
   itemName.setAttribute('class', 'card-title text-light text-center fw-bolder');
   itemName.setAttribute('id', 'item-name');
   itemName.innerText= item.name;

   let itemPrice= document.createElement('p');
   itemPrice.setAttribute('class', 'card-title bg-light text- text-center fw-bolder w-100');
   itemPrice.innerText= 'Price : ₦ '+ item.price;
   let addToCart = document.createElement('button');
   addToCart.setAttribute('class', 'btn btn-outline-light my-4 w-50 add-to-cart')
   addToCart.setAttribute('id', item.id);
   addToCart.innerText= 'Add to Cart'
   itemCard.appendChild(img);
   itemCard.appendChild(itemName)
   itemCard.appendChild(itemPrice)
   itemCard.appendChild(addToCart)

     drinks.appendChild(itemCard);
  })
}
getoption()


document.querySelectorAll('.add-to-cart').forEach(item=> {
  item.addEventListener('click', addToCart);
 })

 var cartData= [];

 function addToCart(){
  console.log(this.previousSibling.previousSibling);
  let itemToAdd= this.previousSibling.previousSibling.innerText;
  let itemObj= data.busaItem.find(element=>element.name==itemToAdd);
 
  console.log(itemObj);
 
  var index= cartData.indexOf(itemObj);
  if(index=== -1){
      document.getElementById(itemObj.id).innerHTML= "Added to cart";
      document.getElementById(itemObj.id).classList.add('btn-light')
      document.getElementById(itemObj.id).classList.add('text-dark')
      cartData= [...cartData,itemObj];
      console.log(cartData);
  }
  else if(index > -1){
      alert("Added to cart");
  }
 
  document.getElementById('cart-plus').innerText= ' '+cartData.length + '';
   totalAmount();
  cartItems();
 }

 
 function cartItems(){
  let tableBody= document.getElementById('table-body');
  tableBody.innerHTML= '';
 
  cartData.map(item=> {
    let lineSpace = document.createElement('br')
      let tableRow= document.createElement('tr');
      tableRow.setAttribute('class', 'bg-light')

      var rowData1= document.createElement('td');
      rowData1.setAttribute('class', 'w-25 border-0')
      var img= document.createElement('img');
      img.setAttribute('class', 'w-50 rounded-5 ')
      img.src= item.Img;
      rowData1.appendChild(img);
 
      var rowData2= document.createElement('td');
      rowData2.setAttribute('class', ' border-0')
      let itemName = document.createElement('p')
      itemName.setAttribute('class', 'fw-bolder')
      itemName.innerText= item.name;
      rowData2.appendChild(itemName)
 
      var rowData3= document.createElement('td');
      rowData3.setAttribute('class', ' d-flex align-items-center border-0')
      let btn1= document.createElement('button');
      
      btn1.setAttribute('class', ' decrease-item btn btn-outline-dark w-25 h-50 ')
      btn1.innerHTML= '-';
      var span= document.createElement('span');
      span.innerText= item.quantity;
      let btn2= document.createElement('button');

      btn2.setAttribute('class', 'increase-item btn btn-outline-dark w-25 h-50')
      btn2.innerText= '+';
 
      rowData3.appendChild(btn1);
      rowData3.appendChild(span);
      rowData3.appendChild(btn2);
 
      var rowData4= document.createElement('td');
      rowData4.setAttribute('class', ' border-0')
      rowData4.innerText= item.price;
     
 
      tableRow.appendChild(rowData1);
      tableRow.appendChild(rowData2);
      tableRow.appendChild(rowData3);
      tableRow.appendChild(rowData4);
 
      tableBody.appendChild(lineSpace);
      tableBody.appendChild(tableRow);
 
  })
  document.querySelectorAll('.increase-item').forEach(item=> {
      item.addEventListener('click', incrementItem);
  })
  document.querySelectorAll('.decrease-item').forEach(item=> {
      item.addEventListener('click', decrementItem);
  })
 }
 
 var currPrice= 0;
 
 function incrementItem(){
  console.log(this.parentNode.previousSibling.innerText)
  let itemToInc= this.parentNode.previousSibling.innerText;
  console.log(itemToInc);
  var incObj= cartData.find(element=>element.name==itemToInc);
  incObj.quantity+= 1;
  
 
  currPrice=(incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
 
  incObj.price= currPrice*incObj.quantity;
  totalAmount();
  cartItems();
  
 }
 
 var flag= false;
 
 function decrementItem(){
  let itemToDec= this.parentNode.previousSibling.innerText;
  let decObj= cartData.find(element=> element.name==itemToDec);
  let ind= cartData.indexOf(decObj);
  if(decObj.quantity > 1){
      currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
      decObj.quantity-=1;
      decObj.price= currPrice*decObj.quantity;
  }
  else{
      
      document.getElementById(decObj.id).innerHTML= "Add to cart";
      document.getElementById(decObj.id).classList.remove('btn-light')
      document.getElementById(decObj.id).classList.remove('text-dark')
      cartData.splice(ind,1);
      document.getElementById('cart-plus').innerHTML= ''+cartData.length + '';
      
      if(cartData.length < 1 && flag){
          document.getElementById('food-items').classList.toggle('food-items');
          document.getElementById('category-list').classList.toggle('food-items');
          document.getElementById('cart-page').classList.toggle('cart-toggle');
          document.getElementById('checkout').classList.toggle('cart-toggle');
          flag= false;
          alert("Currently no item in cart");
      }
  }
  totalAmount();
  cartItems();
 }
 
 function totalAmount(){
  var sum=0;
  cartData.map(item=>{
      sum+= item.price
  })
  document.getElementById('total-item').innerText= 'Total Item: '+cartData.length;
  document.getElementById('total-price').innerText= 'Total Price : ₦ ' + sum;
 }
 
 document.getElementById('cart-plus').addEventListener('click', cartToggle);
  
 function cartToggle(){
  if(cartData.length > 0){
      document.getElementById('food-items').classList.toggle('food-items');
      document.getElementById('category-list').classList.toggle('food-items');
      document.getElementById('cart-page').classList.toggle('cart-toggle');
      document.getElementById('checkout').classList.toggle('cart-toggle');
      flag= true;
  }
 
 }