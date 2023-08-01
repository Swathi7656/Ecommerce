// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var item = items[itemIndex];

  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // Item does not exist in the cart, add it with a quantity of 1
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  // Update the cart count
  updateCartCount();

  // Update the cart items display
  updateCartItems();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    // Item found in the cart, remove it
    cartItems.splice(itemIndex, 1);

    // Update the cart count
    updateCartCount();

    // Update the cart items display
    updateCartItems();
  }
}

// Function to update the cart count
function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}

// Function to update the cart items display
function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');

    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = '₹' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);

    cartItemsElement.appendChild(cartItemElement);
  });
}

// Sample data for items
var items = [
  {
    id: 1,
    name: 'Shoe 1',
    price: 5195.00,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 2,
    name: 'Shoe 2',
    price: 1999.00,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
  },
  // Add more items as needed
  {
    id: 3,
    name: 'Shoe 3',
    price: 9195.00,
    image: 'https://images.unsplash.com/photo-1577983072945-4a01dcd3439a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 4,
    name: 'Shoe 4',
    price: 4999.00,
    image: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    name: 'Shoe 5',
    price: 7995.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTiABYZA7YABr9un0dxRTcDT1FyMJacNI0A&usqp=CAU',
  },
  {
    id: 6,
    name: 'Shoe 6',
    price: 5999.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE0Bi7lDa0RitMWXMIrJ1JQ-NR3zZQppL_g&usqp=CAU',
  },
  {
    id: 7,
    name: 'Shoe 7',
    price: 3199.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROMkG-90IaFtXcfh7s1kiuWlLpFqWjaz3lQ&usqp=CAU',
  },
  {
    id: 8,
    name: 'Shoe 8',
    price: 999.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzq5iMPvRj6l-WSAslTaH7B3tdN7tTyEpoDA&usqp=CAU',
  },
];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});

// for navigating to other html pages
// 1.running section
document.getElementById('runningBtn').addEventListener('click', function() {
  window.location.href = 'running.html';
});

// 2.SPORTSTYLE section
document.getElementById('sportBtn').addEventListener('click', function() {
  window.location.href = 'sport.html';
});

// 3.apparel section
document.getElementById('apparelBtn').addEventListener('click', function() {
  window.location.href = 'apparel.html';
});

// 4.performance section
document.getElementById('performanceBtn').addEventListener('click', function() {
  window.location.href = 'performance.html';
});
