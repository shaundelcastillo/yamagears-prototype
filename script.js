const products = [
    // PRIMARY PRODUCTS: Apparel & Merchandise
    { 
        id: 1, 
        name: "Yama Gears Trail Jersey MTB", 
        category: "jersey", 
        type: "merch", 
        price: 1250, 
        specs: "Breathable Mesh, Quick-Dry, Japan Fabric",
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/jerseymtb-black.jpg" 
    },
    { 
        id: 2, 
        name: "Yama Gears Trail Jersey MTB", 
        category: "jersey", 
        type: "merch", 
        price: 1250, 
        specs: "Breathable Mesh, Quick-Dry, Japan Fabric", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/jerseymtb-grey.jpg" 
    },
    { 
        id: 3, 
        name: "Yama Gears Heavyweight Hoodie", 
        category: "hoodie", 
        type: "merch", 
        price: 1850, 
        specs: "100% Cotton, Embroidered Mountain Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/hoodie-black.jpg" 
    },
    { 
        id: 4, 
        name: "Yama Gears Heavyweight Hoodie", 
        category: "hoodie", 
        type: "merch", 
        price: 1850, 
        specs: "100% Cotton, Embroidered Mountain Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/hoodie-green.jpg" 
    },
    { 
        id: 5, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "images/caps/cap1.jpg" 
    },
    { 
        id: 6, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "images/caps/cap2.jpg" 
    },
    { 
        id: 7, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/checkered-black.jpg" 
    },
    { 
        id: 8, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/checkered-green.jpg" 
    },
    { 
        id: 9, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/windbreaker-brown.jpg" 
    },
    { 
        id: 10, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/windbreaker-gray.jpg" 
    },
    { 
        id: 11, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-white/shirt1.jpg" 
    },
    { 
        id: 12, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-white/shirt2.jpg" 
    },{ 
        id: 13, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-white/shirt3.jpg" 
    },{ 
        id: 14, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-white/shirt4.jpg" 
    },{ 
        id: 15, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-white/shirt5.jpg" 
    },{ 
        id: 16, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-black/shirt1.jpg" 
    },{ 
        id: 17, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-black/shirt2.jpg" 
    },{ 
        id: 18, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo",
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-black/shirt3.jpg" 
    },{ 
        id: 19, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-black/shirt4.jpg" 
    },
    { 
        id: 20, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        image: "images/tshirts-black/shirt6.jpg" 
    },
    { 
        id: 21, 
        name: "SMITH Mainline Helmet & Goggle Set", 
        category: "gears", 
        type: "merch", 
        price: 22500, 
        specs: "SMITH Mainline full-face helmet in Size Medium, comes with its original storage bag.", 
        image: "images/parts/smith helmet.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/parts/smith helmet1st.jpg",
            "images/parts/smith helmet2nd.jpg",
            "images/parts/smith helmet3rd.jpg"
        ]
    },
    { 
        id: 22, 
        name: "Fox Speedframe Pro Helmet", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "Adjustable visor, optimized ventilation ports, and extended coverage on the back of the head typical for trail and enduro riding.", 
        image: "images/parts/fox profame.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/parts/fox profame1st.jpg",
            "images/parts/fox profame2nd.jpg",
            "images/parts/fox profame3rd.jpg"
        ]
    },
    { 
        id: 23, 
        name: "Yeti Cycles / WTB", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "SMITH Mainline full-face helmet in Size Medium, comes with its original storage bag.", 
        image: "images/parts/yeti cycles.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/parts/yeti cycles1st.jpg",
            "images/parts/yeti cycles2nd.jpg",
            "images/parts/yeti cycles3rd.jpg"
        ]
    },
    
    // //SECONDARY PRODUCTS: MTB Parts & Complete Bikes
    { 
        id: 24, 
        name: "SRAM Code R hydraulic disc brake lever", 
        category: "parts", 
        type: "bikes", 
        price: 8500, 
        specs: "Imported Japan Stock, 4-Piston.", 
        image: "images/parts/trp evo.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/parts/trp evo.jpg",
            "images/parts/trp evo1st.jpg",
            "images/parts/trp evo2nd.jpg"
        ]
    },
    { 
        id: 25, 
        name: "Rocky Mountain Altitude ALLOY", 
        category: "parts", 
        type: "bikes", 
        price: 58000, 
        specs: "Full Suspension Alloy Frame, Rear Shock Included, Boost 148 Spacing", 
        image: "images/parts/rocky mountain.jpg" 
    },
    { 
        id: 26, 
        name: "TR 11 Bro", 
        category: "parts", 
        type: "bikes", 
        price: 74000, 
        specs: "Transition Downhill Frame w/ headset", 
        image: "images/bikes/tr11bro.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/bikes/tr11bro1st.jpg",
            "images/bikes/tr11bro2nd.jpg",
            "images/bikes/tr11bro3rd.jpg"
        ]
    },
    { 
        id: 27, 
        name: "Bold Linkin 150 Pro Carbon", 
        category: "bikes", 
        type: "bikes", 
        price: 138000, 
        specs: "SRAM 1x12 Speed, Öhlins Air Suspension, SRAM Code R Brakes, Medium", 
        image: "images/bikes/bold linkin.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/bikes/Bold Linkin1st.jpg",
            "images/bikes/bold linkin2nd.jpg",
            "images/bikes/bold linkin3rd.jpg"
        ]
    },
    { 
        id: 28, 
        name: "Trek Slash 8", 
        category: "bikes", 
        type: "bikes", 
        price: 200000, 
        specs: "Aggressive long-travel enduro bike built to conquer high-speed downhill trails and rough technical terrain.", 
        image: "images/bikes/trek.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/bikes/trek1st.jpg",
            "images/bikes/trek2nd.jpg",
            "images/bikes/trek3rd.jpg"
        ]
    },
    { 
        id: 29, 
        name: "Specialized Stumpjumper Evo alloy", 
        category: "bikes", 
        type: "bikes", 
        price: 250000, 
        specs: "Versatile all-mountain trail bike with adjustable geometry, engineered for smooth climbing and aggressive descents.", 
        image: "images/bikes/specialized.jpg", 
        // Add 3 helmet angle URLs here:
        images: [
            "images/bikes/specialized1st.jpg",
            "images/bikes/specialized2nd.jpg",
            "images/bikes/specialized3rd.jpg"
        ]
    },
];

let cart = JSON.parse(localStorage.getItem("yama_cart")) || [];
let ygCustomerDetails = {};

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();

    const grid = document.getElementById("products-grid");
    if (grid) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get("category");

        if (categoryParam) {
            filterCategory(categoryParam);
        } else {
            renderProducts(products);
        }
    }
});

// Save cart to LocalStorage
function saveCart() {
    localStorage.setItem("yama_cart", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerText = cart.length;
    }
}

// Render Product Cards
function renderProducts(items) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    items.forEach(product => {
        const priorityLabel = product.type === "merch" ? "PRIMARY: MERCH" : "SECONDARY: HARDWARE";
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <span class="priority-tag">${priorityLabel}</span>
            <div class="product-image" style="cursor: pointer;" onclick="openQuickView(${product.id})">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=No+Image+Available';">
            </div>
            <div class="product-info">
                <h3 class="product-title" style="cursor: pointer;" onclick="openQuickView(${product.id})">${product.name}</h3>
                <p class="product-specs">${product.specs}</p>
                <div class="product-price">₱${product.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</div>
             <button class="btn btn-primary btn-block"onclick="${product.sizes && product.sizes.length > 0
        ? `openQuickView(${product.id})`
        : `addToCart(${product.id})`}">
    ADD TO CART
</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedQvSize = "";

    const images = (product.images && product.images.length > 0) 
        ? product.images.slice(0, 3) 
        : [product.image, product.image, product.image];

    const modalBody = document.getElementById('quick-view-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="qv-grid">
            <!-- Left: 3 Vertical Thumbnails -->
            <div class="qv-thumb-column">
                ${images.map((img, idx) => `
                    <img src="${img}" class="qv-thumb ${idx === 0 ? 'active' : ''}" onclick="switchQvImage('${img}', this)">
                `).join('')}
            </div>

            <!-- Middle: Main Active Image Preview -->
            <div class="qv-main-img-container">
                <img src="${images[0]}" id="qv-active-img" alt="${product.name}">
            </div>

            <!-- Right: Details, Quantity, Add to Cart, Specs & Warranty Badge -->
            <div class="qv-details-column">
                <h2 class="qv-title">${product.name}</h2>
                <div class="qv-rating">⭐⭐⭐⭐⭐ <span>0 Reviews</span></div>

                ${product.sizes && product.sizes.length > 0 ? `
    <div class="qv-size-wrapper">
        <span class="qv-size-label">Select Size</span>
        <div class="qv-size-options">
            ${product.sizes.map(size => `
                <button
                    type="button"
                    class="size-pill"
                    onclick="selectApparelSize(this, '${size}')">
                    ${size}
                </button>
            `).join('')}
        </div>
    </div>
` : ''}
                
                <div class="qv-qty-wrapper">
                    <span class="qv-qty-label">Quantity</span>
                    <div class="qv-qty-controls">
                        <button type="button" onclick="adjustQvQty(-1)">-</button>
                        <input type="text" id="qv-qty-input" value="1" readonly>
                        <button type="button" onclick="adjustQvQty(1)">+</button>
                    </div>
                </div>

                <div class="qv-price">
                    ₱${product.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}
                </div>
                
                <div class="qv-stock-status">
                    <i class="fa-solid fa-truck"></i> Inventory on the way
                </div>

                <button class="btn btn-primary qv-add-btn" onclick="addQvToCart(${product.id})">
                    Add to Cart
                </button>

                <div class="qv-specs-box">
                    <strong>SPECIFICATIONS:</strong><br>
                    ${product.specs}
                </div>

                <!-- Warranty Badge & Policy Link -->
                <div class="qv-warranty-badge">
                    <i class="fa-solid fa-shield-halved"></i>
                    <strong>Warranty:</strong> 1-Year Manufacturer Warranty |
                    <a href="#" onclick="openPolicyModal('warranty')">Learn More</a>
                </div>
            </div>
        </div>
    `;

    openModal('quick-view-modal');
}

let selectedQvSize = "";

function selectApparelSize(button, size) {
    selectedQvSize = size;

    document.querySelectorAll(".size-pill").forEach(pill => {
        pill.classList.remove("selected");
    });

    button.classList.add("selected");
}


function switchQvImage(imgSrc, thumbElement) {
    document.getElementById('qv-active-img').src = imgSrc;
    document.querySelectorAll('.qv-thumb').forEach(t => {
        t.style.borderColor = '#ddd';
        t.classList.remove('active');
    });
    thumbElement.style.borderColor = '#000';
    thumbElement.classList.add('active');
}

function adjustQvQty(change) {
    const input = document.getElementById('qv-qty-input');
    if (!input) return;
    let qty = parseInt(input.value) + change;
    if (qty < 1) qty = 1;
    input.value = qty;
}

function addQvToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById("qv-qty-input");
    const quantity = qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;

    if (!product) return;

    // Apparel products with sizes require a size selection.
    if (product.sizes && product.sizes.length > 0 && !selectedQvSize) {
        showToast("Select a Size", "Please choose a size before adding to your order.");
        return;
    }

    for (let i = 0; i < quantity; i++) {
        cart.push({
            ...product,
            selectedSize: selectedQvSize || null
        });
    }

    saveCart();

    const sizeMessage = selectedQvSize
        ? ` (Size: ${selectedQvSize})`
        : "";

    showToast(
        "Added to Cart",
        `${quantity} x ${product.name}${sizeMessage} added to your order.`
    );

    closeModal("quick-view-modal");
}

// Filter Categories
function filterCategory(cat) {
    const grid = document.getElementById("products-grid");
    if (!grid) {
        window.location.href = `products.html?category=${cat}`;
        return;
    }

    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(t => t.classList.remove("active"));

    if (cat === 'all') {
        renderProducts(products);
    } else if (cat === 'merch') {
        renderProducts(products.filter(p => p.type === 'merch'));
    } else if (cat === 'bikes') {
        renderProducts(products.filter(p => p.type === 'bikes'));
    } else {
        renderProducts(products.filter(p => p.category === cat));
    }
}

// Modal Toggle Functions
function openModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.style.display = "flex";
    }
}

function closeModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.style.display = "none";
    }
}

// Order Tracking Simulation
function processTracking() {
    const trackInput = document.getElementById("track-input");
    const resultBox = document.getElementById("tracking-result");

    if (!trackInput || !resultBox) return;

    const val = trackInput.value.trim();

    if (val === "") {
        alert("Please enter a valid Order Reference ID.");
        return;
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <strong>Order Status for Ref: ${val.toUpperCase()}</strong><br>
        <p><i class="fa-solid fa-ship"></i> Status: <strong>In Transit (Japan to Philippines)</strong></p>
        <p>Estimated Arrival: 3-5 Business Days</p>
        <p><small>Handled with reinforced protective packaging.</small></p>
    `;
}

function trackFromBanner() {
    const bannerInput = document.getElementById("banner-track-id");
    if (bannerInput && bannerInput.value.trim() !== "") {
        window.location.href = `track-order.html?id=${encodeURIComponent(bannerInput.value)}`;
    } else {
        window.location.href = "track-order.html";
    }
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (!item) return; 
    
    if (item.sizes && item.sizes.length > 0) {
        openQuickView(id);
        return;
    }

    cart.push({
        ...item,
        selectedSize: null
    });

    saveCart();
    showToast("Added to Cart", `${item.name} added to your order.`);
}
    

// Open Cart & Two-Step Checkout Function
function openCart() {
    ygAddCheckoutForm();

    const modal = document.getElementById("cart-modal");
    const customerStep = document.getElementById("yg-customer-step");
    const cartLayout = modal?.querySelector(".cart-layout");
    const detailsBox = document.getElementById("yg-saved-customer-details");
    const heading = modal?.querySelector(".modal-content > h2");

    if (cart.length === 0) {
        ygRenderExistingCart();
        openModal("cart-modal");
        return;
    }

    if (heading) heading.textContent = "Customer Information";

    openModal("cart-modal");

    if (customerStep) customerStep.style.display = "block";
    if (cartLayout) cartLayout.style.display = "none";
    if (detailsBox) detailsBox.style.display = "none";
}

// Handles switching between Card, GCash, Maya, and Store Pickup forms
function togglePaymentForm(method) {
    const forms = document.querySelectorAll('.payment-form-section');
    forms.forEach(form => form.style.display = 'none');

    const targetForm = document.getElementById(`${method}-form`);
    if (targetForm) {
        targetForm.style.display = 'block';
    }

    calculateCartTotals(method === 'store');
}

// Calculates cart subtotal, shipping fee, and grand total
function calculateCartTotals(isStorePickup = false) {
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price);

    const shippingFee = (cart.length > 0 && !isStorePickup) ? 250 : 0;
    const total = subtotal + shippingFee;

    const shippingEl = document.getElementById("cart-shipping");
    if (shippingEl) {
        shippingEl.innerText = `₱${shippingFee.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
    }

    const subtotalEl = document.getElementById("cart-subtotal");
    if (subtotalEl) {
        subtotalEl.innerText = `₱${subtotal.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
    }

    const totalEl = document.getElementById("cart-total");
    if (totalEl) {
        totalEl.innerText = `₱${total.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
    }
}

// Custom Toast Notification Helper Function
function showToast(title, message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notification";
        toast.className = "toast-notification";
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check toast-icon"></i>
            <div class="toast-message">
                <h4 id="toast-title"></h4>
                <p id="toast-desc"></p>
            </div>
        `;
        document.body.appendChild(toast);
    }

    document.getElementById("toast-title").innerText = title;
    document.getElementById("toast-desc").innerText = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

// Process Checkout with Custom Toast Notification & Policy Agreement Check
function processCheckout() {
    if (cart.length === 0) {
        showToast("Cart Empty", "Your shopping cart is currently empty.");
        return;
    }

    if (!ygCustomerDetails.email || !ygCustomerDetails.address) {
        showToast("Missing Information", "Please complete your contact and delivery information first.");
        const customerStep = document.getElementById("yg-customer-step");
        const cartLayout = document.querySelector("#cart-modal .cart-layout");

        if (customerStep) customerStep.style.display = "block";
        if (cartLayout) cartLayout.style.display = "none";
        return;
    }

    // Validate Policy Agreement Checkbox
    const termsCheck = document.getElementById("terms-check");
    if (termsCheck && !termsCheck.checked) {
        showToast("Agreement Required", "Please agree to the Terms & Conditions, Warranty, and Cancellation Policy before placing your order.");
        return;
    }

    const method = document.querySelector('input[name="paymethod"]:checked')?.value || "card";

    const methodNames = {
        card: "Credit/Debit Card",
        gcash: "GCash",
        maya: "Maya",
        store: "Store Pickup / Cash"
    };

    const trackingId = "YG-" + Math.floor(1000 + Math.random() * 9000);

    showToast("Order Placed Successfully!", `Processed via ${methodNames[method]}. Tracking ID: ${trackingId}`);

    cart = [];
    saveCart();
    ygCustomerDetails = {};

    closeModal("cart-modal");

    const customerStep = document.getElementById("yg-customer-step");
    const cartLayout = document.querySelector("#cart-modal .cart-layout");
    const detailsBox = document.getElementById("yg-saved-customer-details");
    const form = document.getElementById("yg-customer-form");

    if (customerStep) customerStep.style.display = "block";
    if (cartLayout) cartLayout.style.display = "grid";
    if (detailsBox) detailsBox.style.display = "none";
    if (form) form.reset();

    // Reset terms checkbox for next order
    if (termsCheck) termsCheck.checked = false;
}

function submitInquiry(e) {
    e.preventDefault();
    showToast("Inquiry Sent", "Your inquiry has been submitted to Yama Gears staff.");
    e.target.reset();
}

function toggleInlineSearch() {
    const wrapper = document.getElementById('nav-search-wrapper');
    const input = document.getElementById('search-input');
    
    if (!wrapper.classList.contains('active')) {
        wrapper.classList.add('active');
        input.focus();
    } else {
        if (input.value.trim() !== "") {
            executeSearch();
        } else {
            wrapper.classList.remove('active');
        }
    }
}

function handleSearchKey(event) {
    if (event.key === 'Enter') {
        executeSearch();
    }
}

function executeSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query !== '') {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
}

document.addEventListener('click', function(e) {
    const wrapper = document.getElementById('nav-search-wrapper');
    if (wrapper && !wrapper.contains(e.target) && wrapper.classList.contains('active')) {
        if (document.getElementById('search-input').value.trim() === "") {
            wrapper.classList.remove('active');
        }
    }
});

/* ==========================================
   YAMA GEARS - ADD-ON TWO-STEP CHECKOUT
   ========================================== */

function ygAddCheckoutForm() {
    const modal = document.getElementById("cart-modal");
    if (!modal || document.getElementById("yg-customer-step")) return;

    const modalContent = modal.querySelector(".modal-content");
    const cartLayout = modal.querySelector(".cart-layout");

    if (!modalContent || !cartLayout) return;

    const customerStep = document.createElement("section");
    customerStep.id = "yg-customer-step";
    customerStep.innerHTML = `
        <div class="yg-checkout-header">
            <p>Enter your contact and delivery details to continue.</p>
        </div>

        <form id="yg-customer-form">
            <h3>Contact Information</h3>

            <div class="yg-form-grid">
                <div class="yg-field yg-full">
                    <label for="yg-email">Email Address *</label>
                    <input id="yg-email" name="email" type="email" autocomplete="email" required>
                </div>

                <div class="yg-field">
                    <label for="yg-first-name">First Name *</label>
                    <input id="yg-first-name" name="firstName" autocomplete="given-name" required>
                </div>

                <div class="yg-field">
                    <label for="yg-last-name">Last Name *</label>
                    <input id="yg-last-name" name="lastName" autocomplete="family-name" required>
                </div>

                <div class="yg-field yg-full">
                    <label for="yg-phone">Phone Number *</label>
                    <input id="yg-phone" name="phone" type="tel" autocomplete="tel" required>
                </div>
            </div>

            <h3>Delivery Address</h3>

            <div class="yg-form-grid">
                <div class="yg-field yg-full">
                    <label for="yg-address">Street Address *</label>
                    <input id="yg-address" name="address" autocomplete="street-address" required>
                </div>

                <div class="yg-field">
                    <label for="yg-city">City / Municipality *</label>
                    <input id="yg-city" name="city" autocomplete="address-level2" required>
                </div>

                <div class="yg-field">
                    <label for="yg-region">Province / Region *</label>
                    <input id="yg-region" name="region" autocomplete="address-level1" required>
                </div>

                <div class="yg-field yg-full">
                    <label for="yg-postal">Postal Code *</label>
                    <input id="yg-postal" name="postal" autocomplete="postal-code" required>
                </div>
            </div>

            <div class="yg-checkout-actions">
                <button type="button" class="btn btn-secondary" id="yg-back-to-cart">
                    Back to Cart
                </button>
                <button type="submit" class="btn btn-primary">
                    Continue to Order Summary
                </button>
            </div>
        </form>
    `;

    modalContent.insertBefore(customerStep, cartLayout);

    document.getElementById("yg-customer-form").addEventListener("submit", function(event) {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty. Please add a product first.");
            return;
        }

        const formData = new FormData(this);
        ygCustomerDetails = Object.fromEntries(formData.entries());

        customerStep.style.display = "none";
        cartLayout.style.display = "grid";

        const summaryHeading = modalContent.querySelector(":scope > h2");
        if (summaryHeading) {
            summaryHeading.textContent = "Review Your Order";
        }

        let detailsBox = document.getElementById("yg-saved-customer-details");

        if (!detailsBox) {
            detailsBox = document.createElement("div");
            detailsBox.id = "yg-saved-customer-details";
            cartLayout.parentNode.insertBefore(detailsBox, cartLayout);
        }

        detailsBox.innerHTML = `
            <h3>Delivery Details</h3>
            <p><strong>Name:</strong> ${ygEscape(ygCustomerDetails.firstName + " " + ygCustomerDetails.lastName)}</p>
            <p><strong>Email:</strong> ${ygEscape(ygCustomerDetails.email)}</p>
            <p><strong>Phone:</strong> ${ygEscape(ygCustomerDetails.phone)}</p>
            <p><strong>Address:</strong> ${ygEscape(ygCustomerDetails.address + ", " + ygCustomerDetails.city + ", " + ygCustomerDetails.region + " " + ygCustomerDetails.postal)}</p>

            <button type="button" class="btn btn-secondary" id="yg-edit-customer">
                Edit Details
            </button>
        `;

        document.getElementById("yg-edit-customer").onclick = function() {
            customerStep.style.display = "block";
            cartLayout.style.display = "none";
            detailsBox.style.display = "none";

            if (summaryHeading) {
                summaryHeading.textContent = "Customer Information";
            }
        };

        ygRenderExistingCart();
    });

    document.getElementById("yg-back-to-cart").addEventListener("click", () => {
        customerStep.style.display = "none";
        cartLayout.style.display = "grid";

        const summaryHeading = modalContent.querySelector(":scope > h2");
        if (summaryHeading) {
            summaryHeading.textContent = "Your Shopping Cart & Order Checkout";
        }
    });
}

function ygEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function ygRenderExistingCart() {
    const container = document.getElementById("cart-items-container");
    if (!container) return;

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "summary-line";

            
const itemDetails = item.selectedSize
    ? `${ygEscape(item.name)}<br><small class="cart-item-size">Size: ${ygEscape(item.selectedSize)}</small>`
    : ygEscape(item.name);

row.innerHTML = `
    <span>${itemDetails}</span>
    <span>₱${Number(item.price).toLocaleString("en-PH", { minimumFractionDigits: 2 })}</span>
`;

            container.appendChild(row);
        });
    }

    const selected = document.querySelector('input[name="paymethod"]:checked');
    togglePaymentForm(selected ? selected.value : "card");
}

(function ygAddCheckoutStyles() {
    if (document.getElementById("yg-checkout-added-styles")) return;

    const style = document.createElement("style");
    style.id = "yg-checkout-added-styles";
    style.textContent = `
        #yg-customer-step { padding: 20px 0; }
        #yg-customer-step h3, #yg-saved-customer-details h3 { margin: 22px 0 12px; }
        .yg-form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .yg-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .yg-full { grid-column: 1 / -1; }
        .yg-field input { box-sizing: border-box; width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; font: inherit; }
        .yg-checkout-actions { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
        #yg-saved-customer-details { padding: 16px; margin: 16px 0; background: #f5f5f5; border-radius: 8px; overflow-wrap: anywhere; }
        #yg-saved-customer-details p { margin: 8px 0; }

        /* Toast Notification Styles */
        .toast-notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #fff;
            color: #111;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 14px;
            z-index: 99999;
            transform: translateY(120px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            border-left: 5px solid #28a745;
        }

        .toast-notification.show {
            transform: translateY(0);
            opacity: 1;
        }

        .toast-icon {
            font-size: 24px;
            color: #28a745;
        }

        .toast-message h4 {
            margin: 0 0 4px 0;
            font-size: 15px;
            font-weight: 700;
        }

        .toast-message p {
            margin: 0;
            font-size: 13px;
            color: #666;
        }

        @media (max-width: 600px) {
            .yg-form-grid { grid-template-columns: 1fr; }
            .yg-full { grid-column: auto; }
            .yg-checkout-actions { flex-direction: column; }
            .yg-checkout-actions button { width: 100%; }
        }
    `;
    document.head.appendChild(style);
})();

const storePolicies = {
    terms: `
        <h2>Terms & Conditions</h2>
        <p>Welcome to Yama Gears. By placing an order on our platform, you agree to the following terms:</p>
        <ul>
            <li><strong>Prices & Stock:</strong> Prices and availability of hardware (frames, brakes) and merchandise are subject to change without prior notice.</li>
            <li><strong>Order Accuracy:</strong> Customers are responsible for verifying correct sizing (e.g., helmet size, frame size) before completing purchase.</li>
            <li><strong>Payment:</strong> Orders are processed upon confirmation of payment via GCash, Maya, or cash on delivery/pickup.</li>
        </ul>
    `,
    warranty: `
        <h2>Warranty Policy</h2>
        <p>Yama Gears stands by the quality of our MTB hardware and apparel:</p>
        <ul>
            <li><strong>Bicycles & Frames (Hardware):</strong> Covered by a 1-Year Limited Manufacturer Warranty against factory defects. Crash damage or improper installation is excluded.</li>
            <li><strong>Components & Brakes:</strong> 6-Month Warranty against hydraulic leaks or mechanical failure under normal riding conditions.</li>
            <li><strong>Apparel & Merch:</strong> 7-Day Replacement Policy for manufacturing defects (stitching, zippers) provided items are unworn with original tags intact.</li>
        </ul>
    `,
    cancellation: `
        <h2>Cancellation & Returns</h2>
        <p>Our cancellation and return procedures are outlined below:</p>
        <ul>
            <li><strong>Order Cancellation:</strong> Orders can be cancelled free of charge within 2 hours of placement, provided they have not been dispatched for shipping.</li>
            <li><strong>Returns & Exchanges:</strong> Returns are accepted within 7 days of receipt for unused items in original packaging.</li>
            <li><strong>Refund Processing:</strong> Approved refunds will be processed via original payment method (GCash/Maya) within 3-5 business days.</li>
        </ul>
    `
};

function openPolicyModal(policyType) {
    const modalBody = document.getElementById("policy-modal-body");
    if (modalBody && storePolicies[policyType]) {
        modalBody.innerHTML = storePolicies[policyType];
        openModal("policy-modal");
    }
}