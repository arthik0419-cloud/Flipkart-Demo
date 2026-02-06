// Dummy cart data
const cartItems = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro",
        description: "256 GB, Deep Purple",
        price: 129999,
        image: "https://images.unsplash.com/photo-1663499482523-1c0c1eae618d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        quantity: 1
    },
    {
        id: 2,
        name: "Sony WH-1000XM4 Wireless Headphones",
        description: "Noise Cancelling, Black",
        price: 24990,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        quantity: 1
    },
    {
        id: 3,
        name: "Nike Air Max 270",
        description: "Men's Running Shoes, Size 10",
        price: 10995,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        quantity: 2
    },
    {
        id: 4,
        name: "Samsung 55-inch 4K UHD Smart TV",
        description: "Crystal Processor 4K",
        price: 54999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        quantity: 1
    }
];

// DOM elements
const cartItemsContainer = document.getElementById('cart-items-container');
const subtotalElement = document.getElementById('subtotal');
const discountElement = document.getElementById('discount');
const totalElement = document.getElementById('total');
const itemsCountElement = document.querySelector('.items-count');

// Initialize cart
let cart = [...cartItems];

// Format currency in Indian Rupees
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Calculate cart totals
function calculateCartTotals() {
    let subtotal = 0;
    let discount = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    // Calculate discount (10% of subtotal for demo)
    discount = subtotal * 0.1;
    
    const total = subtotal - discount;
    
    // Update UI
    subtotalElement.textContent = formatCurrency(subtotal);
    discountElement.textContent = `-${formatCurrency(discount)}`;
    totalElement.textContent = formatCurrency(total);
    
    // Update items count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    itemsCountElement.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet. Start shopping to add items to your cart.</p>
                <a href="#" class="shop-now-btn">Shop Now</a>
            </div>
        `;
        calculateCartTotals();
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.setAttribute('data-id', item.id);
        
        cartItemElement.innerHTML = `
            <div class="item-info">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
            <div class="item-price">${formatCurrency(item.price)}</div>
            <div class="quantity-controls">
                <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
            </div>
            <div class="item-total">${formatCurrency(itemTotal)}</div>
            <button class="remove-btn" data-id="${item.id}">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Add event listeners to buttons
    addEventListeners();
    calculateCartTotals();
}

// Add event listeners to cart buttons
function addEventListeners() {
    // Increase quantity buttons
    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            increaseQuantity(id);
        });
    });
    
    // Decrease quantity buttons
    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(id);
        });
    });
    
    // Remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            removeItem(id);
        });
    });
}

// Increase item quantity
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity++;
        renderCartItems();
    }
}

// Decrease item quantity
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        renderCartItems();
    }
}

// Remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    renderCartItems();
    
    // Show notification
    showNotification('Item removed from cart');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #323232;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        z-index: 1000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    
    // Apply promo code button
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            const promoInput = document.querySelector('.promo-input input');
            const promoCode = promoInput.value.trim();
            
            if (promoCode === 'FLIPKART10') {
                showNotification('Promo code applied successfully! 10% discount added.');
                promoInput.value = '';
            } else if (promoCode) {
                showNotification('Invalid promo code. Please try again.');
            }
        });
    }
});