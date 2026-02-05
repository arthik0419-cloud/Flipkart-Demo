// Dummy product data
const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro (256 GB) - Deep Purple",
        price: 129999,
        originalPrice: 139999,
        discount: 7,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "mobiles"
    },
    {
        id: 2,
        name: "Samsung 55-inch 4K Ultra HD Smart LED TV",
        price: 54999,
        originalPrice: 69999,
        discount: 21,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics"
    },
    {
        id: 3,
        name: "Nike Air Max 270 React Running Shoes",
        price: 5499,
        originalPrice: 7999,
        discount: 31,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion"
    },
    {
        id: 4,
        name: "Milton Thermosteel Flip Lid Bottle, 1 Litre",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "home"
    },
    {
        id: 5,
        name: "Bajaj 1200W Toaster Grill with Adjustable Temperature",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "appliances"
    },
    {
        id: 6,
        name: "HP Pavilion Gaming Laptop (16GB RAM, 512GB SSD)",
        price: 72990,
        originalPrice: 84990,
        discount: 14,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "laptops"
    },
    {
        id: 7,
        name: "Men's Casual Checkered Shirt (Regular Fit)",
        price: 899,
        originalPrice: 1999,
        discount: 55,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "fashion"
    },
    {
        id: 8,
        name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
        price: 22999,
        originalPrice: 29999,
        discount: 23,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "electronics"
    }
];

// Dummy category data
const categories = [
    { name: "Mobiles", icon: "fa-mobile-alt", color: "#2874f0" },
    { name: "Fashion", icon: "fa-tshirt", color: "#fb641b" },
    { name: "Electronics", icon: "fa-tv", color: "#ff9f00" },
    { name: "Home", icon: "fa-home", color: "#e74c3c" },
    { name: "Appliances", icon: "fa-blender", color: "#8e44ad" },
    { name: "Travel", icon: "fa-plane", color: "#3498db" },
    { name: "Beauty", icon: "fa-spa", color: "#e84393" },
    { name: "Grocery", icon: "fa-shopping-basket", color: "#2ecc71" },
    { name: "Toys", icon: "fa-gamepad", color: "#f1c40f" },
    { name: "Furniture", icon: "fa-couch", color: "#d35400" }
];

// DOM Elements
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const productsGrid = document.getElementById('products-grid');
const categoriesGrid = document.getElementById('categories-grid');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    startSlider();
    setupEventListeners();
});

// Render categories
function renderCategories() {
    categoriesGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-icon" style="background-color: ${category.color}20; color: ${category.color}">
                <i class="fas ${category.icon}"></i>
            </div>
            <div class="category-name">${category.name}</div>
        `;
        categoriesGrid.appendChild(categoryCard);
    });
}

// Render products
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount">${product.discount}% off</span>
                </div>
                <div class="discount-text">Free delivery</div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Slider functionality
function startSlider() {
    setInterval(() => {
        nextSlide();
    }, 5000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    const slidesContainer = document.querySelector('.slides-container');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Slider controls
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Dot controls
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-slide'));
            updateSlider();
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', () => {
        if (searchInput.value.trim()) {
            alert(`Searching for: "${searchInput.value}"\nThis is a frontend-only demo, so no actual search will be performed.`);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    
    cartBtn.addEventListener('click', () => {
        alert('Cart is empty. This is a frontend-only demo.');
    });
    
    // Login button
    const loginBtn = document.querySelector('.nav-btn:first-child');
    loginBtn.addEventListener('click', () => {
        alert('Login/Registration functionality is not implemented as this is a frontend-only demo.');
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            alert(`You clicked on ${categories[index].name} category. This is a frontend-only demo.`);
        });
    });
    
    // Product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            alert(`You clicked on ${products[index].name}. This is a frontend-only demo.`);
        });
    });
}