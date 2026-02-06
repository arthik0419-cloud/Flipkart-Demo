// Add additional CSS for checkout page
const checkoutStyles = `
    /* Checkout Steps */
    .checkout-steps {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    
    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e0e0e0;
        color: #878787;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        margin-bottom: 8px;
        z-index: 2;
    }
    
    .step.active .step-number {
        background-color: #2874f0;
        color: white;
    }
    
    .step-label {
        font-size: 14px;
        color: #878787;
        font-weight: 500;
    }
    
    .step.active .step-label {
        color: #2874f0;
    }
    
    .step-line {
        width: 120px;
        height: 2px;
        background-color: #e0e0e0;
        margin: 0 10px;
    }
    
    /* Checkout Content */
    .checkout-content {
        padding: 30px;
    }
    
    .checkout-section {
        background-color: white;
        border-radius: 4px;
        padding: 25px;
        margin-bottom: 30px;
        border: 1px solid #e0e0e0;
    }
    
    .checkout-section h2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 25px;
        color: #212121;
        display: flex;
        align-items: center;
    }
    
    .checkout-section h2 i {
        margin-right: 10px;
        color: #2874f0;
    }
    
    /* Address Form */
    .address-form {
        margin-top: 20px;
    }
    
    .form-row {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .form-row .form-group {
        flex: 1;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #212121;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.2s;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #2874f0;
        box-shadow: 0 0 0 2px rgba(40, 116, 240, 0.1);
    }
    
    .checkbox-group {
        display: flex;
        align-items: center;
    }
    
    .checkbox-group input {
        width: auto;
        margin-right: 10px;
    }
    
    /* Payment Methods */
    .payment-methods {
        margin-top: 20px;
    }
    
    .payment-option {
        display: flex;
        align-items: center;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: all 0.2s;
    }
    
    .payment-option:hover {
        border-color: #2874f0;
        background-color: rgba(40, 116, 240, 0.05);
    }
    
    .payment-option.selected {
        border-color: #2874f0;
        background-color: rgba(40, 116, 240, 0.1);
    }
    
    .payment-radio {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #e0e0e0;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .payment-option.selected .payment-radio {
        border-color: #2874f0;
    }
    
    .radio-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: transparent;
    }
    
    .payment-option.selected .radio-dot {
        background-color: #2874f0;
    }
    
    .payment-icon {
        margin-right: 20px;
        font-size: 24px;
        color: #2874f0;
        width: 40px;
    }
    
    .payment-details {
        flex: 1;
    }
    
    .payment-details h3 {
        font-weight: 500;
        margin-bottom: 5px;
        color: #212121;
    }
    
    .payment-details p {
        color: #878787;
        font-size: 14px;
    }
    
    .payment-logos {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .upi-logo {
        background-color: #f0f0f0;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
    }
    
    .payment-logos i {
        font-size: 24px;
        color: #666;
    }
    
    /* Order Summary */
    .order-summary {
        margin-top: 20px;
    }
    
    .order-items {
        margin-bottom: 25px;
    }
    
    .order-item {
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .order-item:last-child {
        border-bottom: none;
    }
    
    .order-item-info {
        display: flex;
        flex-direction: column;
    }
    
    .order-item-info span:first-child {
        font-weight: 500;
        margin-bottom: 5px;
    }
    
    .order-item-info span:last-child {
        color: #878787;
        font-size: 14px;
    }
    
    .order-item-price {
        font-weight: 500;
    }
    
    .order-totals {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 4px;
    }
    
    /* Checkout Actions */
    .checkout-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        padding-top: 30px;
        border-top: 1px solid #e0e0e0;
    }
    
    .back-to-cart {
        display: inline-flex;
        align-items: center;
        color: #2874f0;
        text-decoration: none;
        font-weight: 500;
        padding: 12px 25px;
        border: 1px solid #2874f0;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .back-to-cart i {
        margin-right: 8px;
    }
    
    .back-to-cart:hover {
        background-color: rgba(40, 116, 240, 0.1);
    }
    
    .place-order-btn {
        background-color: #fb641b;
        color: white;
        border: none;
        padding: 15px 40px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: background-color 0.2s;
    }
    
    .place-order-btn:hover {
        background-color: #e55a17;
    }
    
    .place-order-btn i {
        margin-right: 10px;
    }
    
    /* Success Modal */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
    }
    
    .modal-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .modal {
        background-color: white;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
        padding: 40px;
        text-align: center;
        transform: translateY(-20px);
        transition: transform 0.3s;
    }
    
    .modal-overlay.active .modal {
        transform: translateY(0);
    }
    
    .modal-icon {
        font-size: 60px;
        color: #388e3c;
        margin-bottom: 20px;
    }
    
    .modal h2 {
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 15px;
        color: #212121;
    }
    
    .modal p {
        color: #878787;
        margin-bottom: 25px;
        line-height: 1.6;
    }
    
    .modal-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
    }
    
    .modal-btn {
        padding: 12px 30px;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
    }
    
    .modal-btn.primary {
        background-color: #2874f0;
        color: white;
    }
    
    .modal-btn.primary:hover {
        background-color: #2265d5;
    }
    
    .modal-btn.secondary {
        background-color: #f0f0f0;
        color: #212121;
    }
    
    .modal-btn.secondary:hover {
        background-color: #e0e0e0;
    }
    
    /* Responsive Styles for Checkout */
    @media (max-width: 768px) {
        .checkout-steps {
            padding: 20px 10px;
        }
        
        .step-line {
            width: 60px;
        }
        
        .checkout-content {
            padding: 20px;
        }
        
        .checkout-section {
            padding: 20px;
        }
        
        .form-row {
            flex-direction: column;
            gap: 0;
        }
        
        .payment-option {
            flex-wrap: wrap;
        }
        
        .payment-logos {
            width: 100%;
            margin-top: 15px;
            padding-left: 60px;
        }
        
        .checkout-actions {
            flex-direction: column;
            gap: 20px;
        }
        
        .back-to-cart, .place-order-btn {
            width: 100%;
            justify-content: center;
        }
    }
`;

// Add checkout styles to the document
const styleElement = document.createElement('style');
styleElement.textContent = checkoutStyles;
document.head.appendChild(styleElement);

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
        });
    });
    
    // Form validation
    const placeOrderBtn = document.getElementById('place-order-btn');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const pincodeInput = document.getElementById('pincode');
    
    placeOrderBtn.addEventListener('click', function() {
        // Simple validation
        let isValid = true;
        const inputs = [nameInput, phoneInput, addressInput, cityInput, stateInput, pincodeInput];
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6161';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });
        
        // Phone number validation
        const phoneRegex = /^[0-9]{10}$/;
        if (phoneInput.value && !phoneRegex.test(phoneInput.value)) {
            isValid = false;
            phoneInput.style.borderColor = '#ff6161';
            showNotification('Please enter a valid 10-digit mobile number');
        }
        
        // Pincode validation
        const pincodeRegex = /^[0-9]{6}$/;
        if (pincodeInput.value && !pincodeRegex.test(pincodeInput.value)) {
            isValid = false;
            pincodeInput.style.borderColor = '#ff6161';
            showNotification('Please enter a valid 6-digit pincode');
        }
        
        if (isValid) {
            showOrderConfirmation();
        } else {
            showNotification('Please fill all required fields correctly');
        }
    });
    
    // Show order confirmation modal
    function showOrderConfirmation() {
        // Create modal
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        
        const selectedPayment = document.querySelector('.payment-option.selected').getAttribute('data-method');
        let paymentMethod = 'Cash on Delivery';
        
        if (selectedPayment === 'upi') {
            paymentMethod = 'UPI';
        } else if (selectedPayment === 'card') {
            paymentMethod = 'Credit/Debit Card';
        }
        
        modalOverlay.innerHTML = `
            <div class="modal">
                <div class="modal-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Order Placed Successfully!</h2>
                <p>Your order has been confirmed. You will receive an order confirmation email shortly.</p>
                <p><strong>Payment Method:</strong> ${paymentMethod}</p>
                <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
                <div class="modal-actions">
                    <button class="modal-btn secondary" id="continue-shopping-btn">Continue Shopping</button>
                    <button class="modal-btn primary" id="view-orders-btn">View Orders</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modalOverlay);
        
        // Show modal with animation
        setTimeout(() => {
            modalOverlay.classList.add('active');
        }, 10);
        
        // Modal button event listeners
        document.getElementById('continue-shopping-btn').addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
        
        document.getElementById('view-orders-btn').addEventListener('click', function() {
            showNotification('This is a demo. Order tracking is not implemented.');
        });
        
        // Close modal when clicking outside
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                setTimeout(() => {
                    document.body.removeChild(modalOverlay);
                }, 300);
            }
        });
    }
    
    // Show notification function
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
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Add CSS for notification animation if not already added
    if (!document.querySelector('#notification-styles')) {
        const notificationStyle = document.createElement('style');
        notificationStyle.id = 'notification-styles';
        notificationStyle.textContent = `
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
        document.head.appendChild(notificationStyle);
    }
});