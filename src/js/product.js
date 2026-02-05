// Dummy Product Data
const product = {
    id: 1,
    name: "Apple iPhone 15 Pro Max (256 GB) - Black Titanium",
    category: "Smartphones",
    brand: "Apple",
    price: 139900,
    originalPrice: 169900,
    discountPercent: 17,
    rating: 4.7,
    ratingCount: 12543,
    reviewsCount: 2871,
    images: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1695048133024-6b6c7084d4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1694868708028-b1d5e5c69b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1691496766405-00c9c4de67da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    offers: [
        "Bank Offer: 10% instant discount on ICICI Bank Credit Card and EMI Txns",
        "Bank Offer: 5% Cashback on Flipkart Axis Bank Card",
        "Special Price: Get extra ₹6000 off (price inclusive of discount)",
        "Partner Offer: Sign up for Flipkart Pay Later and get free TimesPrime Benefits worth ₹10,000*"
    ],
    highlights: [
        "Apple-designed A17 Pro chip for next-level performance",
        "Titanium design, strongest yet in an iPhone",
        "Pro camera system for incredible low-light photos",
        "Action button for quick access to your favorite feature",
        "All-day battery life and fast charging"
    ],
    description: "The iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also has a Ceramic Shield front that's tougher than any smartphone glass. The Action button is a fast track to your favorite feature. Just press and hold to launch the action you assign and then take off. The A17 Pro chip enables desktop-class gaming with hardware-accelerated ray tracing. The most advanced iPhone camera system. A 48MP Main camera captures super-high-resolution photos. Next-generation portraits with more detail and color.",
    specifications: {
        "Display": "6.7-inch Super Retina XDR display",
        "Processor": "A17 Pro chip with 6-core CPU",
        "Storage": "256 GB",
        "Camera": "48MP Main | 12MP Ultra Wide | 12MP 5x Telephoto",
        "Front Camera": "12MP TrueDepth camera",
        "Battery": "Up to 29 hours video playback",
        "Operating System": "iOS 17",
        "Connectivity": "5G, Wi-Fi 6E, Bluetooth 5.3",
        "Water Resistance": "IP68 rated (maximum depth of 6 meters up to 30 minutes)",
        "Dimensions": "159.9 mm × 76.7 mm × 8.25 mm, 221 grams"
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Populate product details
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-category').textContent = product.category;
    
    // Format and display price
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });
    
    document.getElementById('current-price').textContent = formatter.format(product.price);
    document.getElementById('original-price').textContent = formatter.format(product.originalPrice);
    document.getElementById('discount-percent').textContent = `${product.discountPercent}% off`;
    
    // Display ratings
    document.getElementById('rating-value').textContent = product.rating;
    document.getElementById('rating-count').textContent = `(${product.ratingCount.toLocaleString()} Ratings)`;
    document.getElementById('reviews-count').textContent = `${product.reviewsCount.toLocaleString()} Reviews`;
    
    // Create rating stars
    const ratingStars = document.getElementById('rating-stars');
    ratingStars.innerHTML = '';
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            ratingStars.innerHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && halfStar) {
            ratingStars.innerHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            ratingStars.innerHTML += '<i class="far fa-star"></i>';
        }
    }
    
    // Display offers
    const offersList = document.querySelector('.offers-list');
    product.offers.forEach(offer => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-tag"></i> ${offer}`;
        offersList.appendChild(li);
    });
    
    // Display highlights
    const highlightsList = document.querySelector('.highlights-list');
    product.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${highlight}`;
        highlightsList.appendChild(li);
    });
    
    // Display description
    document.getElementById('product-description').textContent = product.description;
    
    // Display specifications
    const specsTable = document.querySelector('.specs-table');
    for (const [key, value] of Object.entries(product.specifications)) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${key}</td>
            <td>${value}</td>
        `;
        specsTable.appendChild(row);
    }
    
    // Setup product images
    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    
    // Create thumbnails
    product.images.forEach((imageSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${product.name} - View ${index + 1}`;
        
        thumbnail.appendChild(img);
        thumbnailContainer.appendChild(thumbnail);
        
        // Add click event to thumbnails
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImage.src = imageSrc;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Setup button click events (UI only)
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');
    
    addToCartBtn.addEventListener('click', function() {
        alert('Product added to cart! (UI simulation)');
        this.style.backgroundColor = '#ff8300';
        setTimeout(() => {
            this.style.backgroundColor = '#ff9f00';
        }, 300);
    });
    
    buyNowBtn.addEventListener('click', function() {
        alert('Proceeding to checkout! (UI simulation)');
        this.style.backgroundColor = '#fa5600';
        setTimeout(() => {
            this.style.backgroundColor = '#fb641b';
        }, 300);
    });
    
    // View all offers button
    const viewAllOffersBtn = document.querySelector('.view-all-offers');
    viewAllOffersBtn.addEventListener('click', function() {
        alert('Showing all available offers! (UI simulation)');
    });
});