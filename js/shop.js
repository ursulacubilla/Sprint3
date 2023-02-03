// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            console.log(cartList);
        }
    }
    calculateTotal();
    applyPromotionsCart(cart);
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    total = 0;

    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    return total;
    // document.getElementById("total_price").innerHTML = total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart = [];
    calculateTotal();

    for (let i = 0; i < cartList.length; i++) {

        const productExist = cart.find(product => product.id === cartList[i].id);

        if (!productExist) {
            cart.push({ ...cartList[i], quantity: 1, subtotal: cartList[i].price, subtotalWithDiscount: cartList[i].price });
            console.log(cart);
        } else {
            productExist.quantity++;
            productExist.subtotal = productExist.price * productExist.quantity;
        }
    }
    return cart;
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
        } else if(cart[i].id === 3 && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 2/3;
        // ver con juanito si esta bien. no entiendo el 2/3 como funciona :/ me da un subtotal con descuento pero no se calcularlo en la calculadora para ver si esta correcto :))))))
        } else {
            cart[i].subtotalWithDiscount = cart[i].subtotal;
        }
    } 
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    buy();
    generateCart();
    //id = cartModal;
    const myCart = document.getElementById("cartModal");

    
    // console.log(myCart.innerHTML);

    const myHtml = `  
    <div class="modal-dialog">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-cart-arrow-down"></i> My Cart</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			  </div>
			  <div class="modal-body">
				  <h3 class="text-center bill px-5">Shopping Cart</h3>
				  <table class="table">
					<thead>
						<tr>
						  <th scope="col">Product</th>
						  <th scope="col">Price</th>
						  <th scope="col">Qty.</th>
						  <th scope="col">Total <small>(with discount)</small></th>
						</tr>
					  </thead>

					  <tbody id="cart_list">
						<tr>
						  <th scope="row">${cart.name}</th>
						  <td>${cart.price}</td>
						  <td>${cart.quantity}</td>
						  <td>${cart.subtotal}</td>
						</tr>
						<tr>
						  <th scope="row">Pasta</th>
						  <td>$6.25</td>
						  <td>1</td>
						  <td>$6.25</td>
						</tr>
						<tr>
						  <th scope="row">Lawn dress</th>
						  <td>$15</td>
						  <td>3</td>
						  <td>$45</td>
						</tr>
					  </tbody>
				  </table>
				  <div class="text-center fs-3">
					Total: $<span id="total_price">${cart.subtotalWithDiscount}</span>
				  </div>
				  <div class="text-center"> 
					<a href="checkout.html" class="btn btn-primary m-3">Checkout</a>
					<a href="javascript:void(0)" onclick="cleanCart()" class="btn btn-primary m-3">Clean Cart</a>
				  </div>
			  </div>
			</div>
		  </div>`;
          
           myCart.innerHTML = myHtml;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
    generateCart();
    applyPromotionsCart();
}