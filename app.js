


let products = [
    { id: 1, name: "Nike Air Max 2024", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2aecf220-1477-4a70-9070-56216a01264b/NIKE+DUNK+LOW+RETRO.png", price: 220 },
    { id: 2, name: "Nike ZoomX Vaporfly Next% 3", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd16a7b9-8dc2-4108-9d59-8b990fa744f1/KD16.png", price: 280 },
    { id: 3, name: "Nike React Infinity Run Flyknit", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22c88786-3980-4040-92a8-ae9f9ac7680d/W+AIR+MAX+270.png", price: 250 },
    { id: 4, name: "Nike Air Zoom Pegasus 40", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/AIR+JORDAN+1+MID.png", price: 230 },
    { id: 5, name: "Nike Air Force 1 '07", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/W+AIR+FORCE+1+%2707+FLYEASE.png", price: 260 },
    { id: 6, name: "Nike Air Max 270 React", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8dfd0373-2dd2-4659-9fbc-86d92f699f55/AIR+MAX+270.png", price: 240 },
    { id: 7, name: "Nike Blazer Mid '77 Vintage", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed21a310-3544-4c4a-a70a-349a5b976975/NIKE+DUNK+LOW+%28GS%29.png", price: 270 },
    { id: 8, name: "Nike Dunk Low Retro", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed21a310-3544-4c4a-a70a-349a5b976975/NIKE+DUNK+LOW+%28GS%29.png", price: 220 },
    { id: 9, name: "Nike Air Max 90", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51e86134-67d7-496f-96ab-b4b8ec042174/BOOK+1.png", price: 250 },
    { id: 10, name: "Nike Free RN 5.0", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aaa71e1a-5451-48d0-abb5-cc54991bfbd1/LEBRON+XXII+QS.png", price: 210 },
    { id: 11, name: "Nike SB Dunk Low", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/45acacbf-3e5b-4933-bb85-ad4efd18d344/JA+2+NIGHTMARE.png", price: 280 },
    { id: 12, name: "Nike Air Max 97", image:  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a84aaf1-89de-482d-9731-69df25def73f/W+G.T.+CUT+3.png", price: 260 },
    { id: 13, name: "Nike Air Zoom Structure 25", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd364f19-7351-41de-979a-d4b88ba881c1/JORDAN+TATUM+3.png", price: 240 },
    { id: 14, name: "Nike LeBron 18 Low", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd364f19-7351-41de-979a-d4b88ba881c1/JORDAN+TATUM+3.png", price: 270 },
    { id: 15, name: "Nike Kyrie 8", image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88224ab6-3203-4857-a0df-caf12210721e/W+G.T.+HUSTLE+3.png" , price: 230 },
    { id: 16, name: "Nike Air Jordan 1 Retro", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00f13b4b-dc75-46cd-ae5e-5cb3cad4c1f8/NIKE+AIR+ZOOM+G.T.+JUMP+2.png", price: 290 },
    { id: 17, name: "Nike Air Zoom Alphafly Next% 2", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd16a7b9-8dc2-4108-9d59-8b990fa744f1/KD16.png", price: 300 },
    { id: 18, name: "Nike Pegasus Trail 4", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f237f2f2-e4f0-43ae-b9f0-016829141fa8/JORDAN+HEIR+SERIES.png", price: 220 },
];

const list = document.querySelector('.list');  // the shoes will be moved here
const cart = document.querySelector('.cart'); // the shoes that will go to the cart panel 
const listCards = document.querySelector('.list-cards');  // list of shoes 
const totalDiv = document.querySelector('.total');  // total price
const quantitySpan = document.querySelector('.quantity'); // how many shoes 
const closeCartButton = document.querySelector('.close-cart');  // close the cart slide


// add the products to the list section 

function initApp() {
    products.forEach((product) => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `  <img src="${product.image}" alt="${product.name}"> 
                            <h4>${product.name}</h4> 
                            <p>$${product.price.toLocaleString()}</p> 
                            <button onclick="addToCart(${product.id})">Add to Cart</button>`  ;

        list.appendChild(item);  // Add the item to the product list
    });
}

// Call the function to render products
initApp();




/********************************************** */
// Cart array to store selected products
let cartItems = [];

// Add to Cart Function
function addToCart(productId) {
    // Find the product by id
    const product = products.find((item) => item.id === productId);
    
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (existingProduct) {
        // If the product is already in the cart ++
        existingProduct.quantity++;
    } else {
        // else add the product to the cart with a quantity of 1
        cartItems.push({ ...product, quantity: 1 });// the spread operator instead of writting the whole product description
    }

    // Update the cart UI after adding the item
    updateCart();
}
/**************************************************** */
// Update Cart UI and Total Price
function updateCart() {
    listCards.innerHTML = "";  // Clear the existing cart items
    let totalQuantity = 0;
    let totalPrice = 0;

    // Render cart items
    cartItems.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toLocaleString()}</p>
                <div>
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        listCards.appendChild(cartItem);  // Add the cart item to the list
    });

    // Update total price and quantity
    totalDiv.innerText = `Total: $${totalPrice.toLocaleString()}`;
    quantitySpan.innerText = totalQuantity;
}
/********************************************** */
// Change Quantity of Cart Items
function changeQuantity(productId, change) {
    // Find the product in the cart
    const product = cartItems.find((item) => item.id === productId);

    if (product) {
        product.quantity += change;  // Change the quantity

        if (product.quantity <= 0) {
            // If quantity is zero or less, remove the item from the cart
            cartItems = cartItems.filter((item) => item.id !== productId);
        }
    }

    // Update the cart UI after changing the quantity
    updateCart();
}
/************************************************ */
// Open and Close Cart
document.querySelector('.shopping').addEventListener('click', () => {
    cart.classList.add('active');  // Show the cart when the shopping icon is clicked
});

closeCartButton.addEventListener('click', () => {
    cart.classList.remove('active');  // Hide the cart when the close button is clicked
});
