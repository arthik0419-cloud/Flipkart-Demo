// Dummy User Data
const userData = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    addresses: [
        {
            type: "Home",
            address: "123, MG Road, Bangalore, Karnataka 560001",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560001"
        },
        {
            type: "Work",
            address: "456, Tech Park, Electronic City, Bangalore, Karnataka 560100",
            city: "Bangalore",
            state: "Karnataka",
            pincode: "560100"
        }
    ]
};

// Dummy Orders Data
const ordersData = [
    {
        id: "ORD-789012",
        date: "2023-10-15",
        product: {
            name: "Apple iPhone 14 (128GB) - Midnight",
            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            price: 79900
        },
        status: "Delivered",
        total: 79900
    },
    {
        id: "ORD-789013",
        date: "2023-10-10",
        product: {
            name: "Samsung Galaxy Watch 5",
            image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 24999
        },
        status: "Shipped",
        total: 24999
    },
    {
        id: "ORD-789014",
        date: "2023-10-05",
        product: {
            name: "Nike Air Max Shoes",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            price: 8999
        },
        status: "Placed",
        total: 8999
    },
    {
        id: "ORD-789015",
        date: "2023-09-28",
        product: {
            name: "Sony WH-1000XM4 Headphones",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 29990
        },
        status: "Delivered",
        total: 29990
    }
];

// Dummy Reviews Data
const reviewsData = [
    {
        id: 1,
        product: {
            name: "Apple iPhone 14",
            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        rating: 5,
        date: "2023-10-18",
        text: "Excellent phone with amazing camera and battery life. Performance is top-notch."
    },
    {
        id: 2,
        product: {
            name: "Sony Headphones",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        rating: 4,
        date: "2023-10-05",
        text: "Great noise cancellation and sound quality. Comfortable for long hours."
    },
    {
        id: 3,
        product: {
            name: "Nike Shoes",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        rating: 3,
        date: "2023-09-30",
        text: "Good quality but the size was slightly bigger than expected."
    }
];

// Available products for review
const availableProducts = [
    { id: 1, name: "Apple iPhone 14 (128GB) - Midnight" },
    { id: 2, name: "Samsung Galaxy Watch 5" },
    { id: 3, name: "Nike Air Max Shoes" },
    { id: 4, name: "Sony WH-1000XM4 Headphones" },
    { id: 5, name: "Dell Inspiron Laptop" },
    { id: 6, name: "Boat Airdopes 441" }
];

// DOM Elements
const ordersPreview = document.getElementById('ordersPreview');
const reviewsContainer = document.getElementById('reviewsContainer');
const profileContainer = document.getElementById('profileContainer');
const addReviewBtn = document.getElementById('addReviewBtn');
const editProfileBtn = document.getElementById('editProfileBtn');
const reviewModal = document.getElementById('reviewModal');
const profileModal = document.getElementById('profileModal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const reviewForm = document.getElementById('reviewForm');
const profileForm = document.getElementById('profileForm');
const productSelect = document.getElementById('productSelect');
const starRating = document.querySelectorAll('.star-rating i');
const ratingValue = document.getElementById('ratingValue');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadOrdersPreview();
    loadReviews();
    loadProfile();
    setupEventListeners();
    populateProductSelect();
});

// Load orders preview (shows only 3 orders)
function loadOrdersPreview() {
    const previewOrders = ordersData.slice(0, 3);
    
    previewOrders.forEach(order => {
        const orderCard = createOrderCard(order);
        ordersPreview.appendChild(orderCard);
    });
}

// Create order card element
function createOrderCard(order) {
    const orderCard = document.createElement('div');
    orderCard.className = 'order-card';
    
    // Format date
    const orderDate = new Date(order.date);
    const formattedDate = orderDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    
    // Format price
    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(order.total);
    
    // Status class
    const statusClass = `status-${order.status.toLowerCase()}`;
    
    orderCard.innerHTML = `
        <div class="order-header">
            <div>
                <div class="order-id">Order ID: ${order.id}</div>
                <div class="order-date">Ordered on ${formattedDate}</div>
            </div>
            <div class="order-status ${statusClass}">${order.status}</div>
        </div>
        <div class="order-body">
            <img src="${order.product.image}" alt="${order.product.name}" class="order-image">
            <div class="order-details">
                <div class="order-product-name">${order.product.name}</div>
                <div class="order-price">${formattedPrice}</div>
                <a href="orders.html" class="view-all">View Details</a>
            </div>
        </div>
    `;
    
    return orderCard;
}

// Load reviews
function loadReviews() {
    reviewsContainer.innerHTML = '';
    
    reviewsData.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
}

// Create review card element
function createReviewCard(review) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    
    // Format date
    const reviewDate = new Date(review.date);
    const formattedDate = reviewDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    
    // Create star rating HTML
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= review.rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    reviewCard.innerHTML = `
        <div class="review-product">
            <img src="${review.product.image}" alt="${review.product.name}" class="review-product-image">
            <div class="review-product-name">${review.product.name}</div>
        </div>
        <div class="review-content">
            <div class="review-header">
                <div class="review-rating">
                    ${starsHtml}
                </div>
                <div class="review-date">${formattedDate}</div>
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `;
    
    return reviewCard;
}

// Load profile
function loadProfile() {
    profileContainer.innerHTML = `
        <div class="profile-section">
            <h4>Personal Information</h4>
            <div class="profile-detail">
                <div class="profile-label">Full Name</div>
                <div class="profile-value">${userData.name}</div>
            </div>
            <div class="profile-detail">
                <div class="profile-label">Email Address</div>
                <div class="profile-value">${userData.email}</div>
            </div>
            <div class="profile-detail">
                <div class="profile-label">Phone Number</div>
                <div class="profile-value">${userData.phone}</div>
            </div>
        </div>
        <div class="profile-section">
            <h4>Addresses</h4>
            ${userData.addresses.map(address => `
                <div class="address-card">
                    <div class="address-type">${address.type}</div>
                    <div class="address-text">${address.address}</div>
                    <div class="address-text">${address.city}, ${address.state} - ${address.pincode}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Add Review button
    addReviewBtn.addEventListener('click', () => {
        reviewModal.style.display = 'flex';
    });
    
    // Edit Profile button
    editProfileBtn.addEventListener('click', () => {
        // Fill form with current data
        document.getElementById('editName').value = userData.name;
        document.getElementById('editEmail').value = userData.email;
        document.getElementById('editPhone').value = userData.phone;
        document.getElementById('editAddress').value = userData.addresses[0].address;
        document.getElementById('editCity').value = userData.addresses
        // ... (previous code from script.js continues)

document.getElementById('editCity').value = userData.addresses[0].city;
        document.getElementById('editState').value = userData.addresses[0].state;
        document.getElementById('editPincode').value = userData.addresses[0].pincode;
        
        profileModal.style.display = 'flex';
    });
    
    // Close modal buttons
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            reviewModal.style.display = 'none';
            profileModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
        if (e.target === profileModal) {
            profileModal.style.display = 'none';
        }
    });
    
    // Star rating interaction
    starRating.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            ratingValue.value = rating;
            
            // Update star display
            starRating.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Review form submission
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const productId = parseInt(productSelect.value);
        const rating = parseInt(ratingValue.value);
        const reviewText = document.getElementById('reviewText').value;
        
        if (!productId || rating === 0) {
            alert('Please select a product and provide a rating');
            return;
        }
        
        // Find selected product
        const selectedProduct = availableProducts.find(p => p.id === productId);
        
        // Add new review to reviewsData
        const newReview = {
            id: reviewsData.length + 1,
            product: {
                name: selectedProduct.name,
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" // Default image
            },
            rating: rating,
            date: new Date().toISOString().split('T')[0],
            text: reviewText
        };
        
        reviewsData.unshift(newReview); // Add to beginning
        loadReviews(); // Reload reviews
        
        // Reset form
        reviewForm.reset();
        ratingValue.value = 0;
        starRating.forEach(star => {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        });
        
        // Close modal
        reviewModal.style.display = 'none';
        
        // Show success message
        alert('Review submitted successfully!');
    });
    
    // Profile form submission
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Update user data
        userData.name = document.getElementById('editName').value;
        userData.email = document.getElementById('editEmail').value;
        userData.phone = document.getElementById('editPhone').value;
        
        // Update address (for simplicity, updating first address only)
        userData.addresses[0].address = document.getElementById('editAddress').value;
        userData.addresses[0].city = document.getElementById('editCity').value;
        userData.addresses[0].state = document.getElementById('editState').value;
        userData.addresses[0].pincode = document.getElementById('editPincode').value;
        
        // Update UI
        loadProfile();
        
        // Update header name
        document.querySelector('.user-name').textContent = userData.name;
        document.querySelector('.user-info h3').textContent = userData.name;
        
        // Close modal
        profileModal.style.display = 'none';
        
        // Show success message
        alert('Profile updated successfully!');
    });
}

// Populate product select dropdown
function populateProductSelect() {
    availableProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav a, .sidebar-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentPage === 'index.html' || currentPage === '') {
            if (link.getAttribute('href') === 'index.html' || 
                link.getAttribute('href') === '#') {
                link.classList.add('active');
            }
        } else if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Handle anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});