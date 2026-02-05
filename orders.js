// Dummy Orders Data for Orders Page
const allOrdersData = [
    {
        id: "ORD-789012",
        date: "2023-10-15",
        items: [
            {
                name: "Apple iPhone 14 (128GB) - Midnight",
                image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                price: 79900,
                quantity: 1
            },
            {
                name: "iPhone 14 Silicone Case - Blue",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                price: 1990,
                quantity: 1
            }
        ],
        status: "Delivered",
        total: 81890
    },
    {
        id: "ORD-789013",
        date: "2023-10-10",
        items: [
            {
                name: "Samsung Galaxy Watch 5",
                image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                price: 24999,
                quantity: 1
            }
        ],
        status: "Shipped",
        total: 24999
    },
    {
        id: "ORD-789014",
        date: "2023-10-05",
        items: [
            {
                name: "Nike Air Max Shoes",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                price: 8999,
                quantity: 1
            },
            {
                name: "Nike Sports Socks (Pack of 3)",
                image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                price: 899,
                quantity: 1
            }
        ],
        status: "Placed",
        total: 9898
    },
    {
        id: "ORD-789015",
        date: "2023-09-28",
        items: [
            {
                name: "Sony WH-1000XM4 Headphones",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                price: 29990,
                quantity: 1
            }
        ],
        status: "Delivered",
        total: 29990
    },
    {
        id: "ORD-789016",
        date: "2023-09-15",
        items: [
            {
                name: "Amazon Echo Dot (4th Gen)",
                image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBzcGVha2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                price: 5499,
                quantity: 2
            }
        ],
        status: "Delivered",
        total: 10998
    },
    {
        id: "ORD-789017",
        date: "2023-09-10",
        items: [
            {
                name: "Dell Inspiron Laptop",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                price: 64990,
                quantity: 1
            },
            {
                name: "Laptop Bag",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwYmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                price: 1999,
                quantity: 1
            }
        ],
        status: "Delivered",
        total: 66989
    }
];

// DOM Elements
const ordersList = document.getElementById('ordersList');
const statusFilter = document.getElementById('statusFilter');
const timeFilter = document.getElementById('timeFilter');

// Initialize Orders Page
document.addEventListener('DOMContentLoaded', function() {
    loadAllOrders();
    setupFilters();
});

// Load all orders
function loadAllOrders() {
    ordersList.innerHTML = '';
    
    if (allOrdersData.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-box-open"></i>
                <h3>No orders yet</h3>
                <p>You haven't placed any orders. Start shopping!</p>
                <a href="index.html" class="btn-primary" style="display: inline-block; margin-top: 10px;">Start Shopping</a>
            </div>
        `;
        return;
    }
    
    allOrdersData.forEach(order => {
        const orderCard = createOrderDetailCard(order);
        ordersList.appendChild(orderCard);
    });
}

// Create detailed order card
function createOrderDetailCard(order) {
    const orderCard = document.createElement('div');
    orderCard.className = 'order-detail-card';
    
    // Format date
    const orderDate = new Date(order.date);
    const formattedDate = orderDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Format total price
    const formattedTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(order.total);
    
    // Status class
    const statusClass = `order-status-large status-${order.status.toLowerCase()}`;
    
    // Create items HTML
    const itemsHtml = order.items.map(item => {
        const formattedPrice = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(item.price);
        
        return `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${formattedPrice}</div>
                    <div class="item-quantity">Quantity: ${item.quantity}</div>
                </div>
            </div>
        `;
    }).join('');
    
    orderCard.innerHTML = `
        <div class="order-main-info">
            <div class="order-id-date">
                <div class="order-main-id">Order #${order.id}</div>
                <div class="order-main-date">Ordered on ${formattedDate}</div>
            </div>
            <div class="order-total">${formattedTotal}</div>
            <div class="${statusClass}">${order.status}</div>
        </div>
        <div class="order-items">
            ${itemsHtml}
        </div>
        <div class="order-actions">
            <button class="btn-primary">Track Order</button>
            <button>View Invoice</button>
            <button>Write a Review</button>
            ${order.status === 'Delivered' ? '<button>Return or Replace</button>' : ''}
        </div>
    `;
    
    return orderCard;
}

// Setup filter functionality
function setupFilters() {
    statusFilter.addEventListener('change', filterOrders);
    timeFilter.addEventListener('change', filterOrders);
}

// Filter orders based on selected filters
function filterOrders() {
    const status = statusFilter.value;
    const time = timeFilter.value;
    
    let filteredOrders = [...allOrdersData];
    
    // Filter by status
    if (status !== 'all') {
        filteredOrders = filteredOrders.filter(order => 
            order.status.toLowerCase() === status
        );
    }
    
    // Filter by time
    if (time !== 'all') {
        const now = new Date();
        let cutoffDate;
        
        switch(time) {
            case 'last30':
                cutoffDate = new Date();
                cutoffDate.setDate(now.getDate() - 30);
                break;
            case 'last90':
                cutoffDate = new Date();
                cutoffDate.setDate(now.getDate() - 90);
                break;
            case '2023':
                cutoffDate = new Date('2023-01-01');
                break;
        }
        
        filteredOrders = filteredOrders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate >= cutoffDate;
        });
    }
    
    // Display filtered orders
    displayFilteredOrders(filteredOrders);
}

// Display filtered orders
function displayFilteredOrders(orders) {
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-search"></i>
                <h3>No orders found</h3>
                <p>Try changing your filter criteria</p>
            </div>
        `;
        return;
    }
    
    orders.forEach(order => {
        const orderCard = createOrderDetailCard(order);
        ordersList.appendChild(orderCard);
    });
    
    // Update summary stats
    updateSummaryStats(orders);
}

// Update summary statistics
function updateSummaryStats(orders) {
    const totalOrders = orders.length;
    const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
    const deliveredCount = orders.filter(order => order.status === 'Delivered').length;
    const shippedCount = orders.filter(order => order.status === 'Shipped').length;
    
    // Format total spent
    const formattedTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(totalSpent);
    
    // Update stats display
    document.querySelectorAll('.summary-stats .stat-value')[0].textContent = totalOrders;
    document.querySelectorAll('.summary-stats .stat-value')[1].textContent = formattedTotal;
    document.querySelectorAll('.summary-stats .stat-value')[2].textContent = deliveredCount;
    document.querySelectorAll('.summary-stats .stat-value')[3].textContent = shippedCount;
}