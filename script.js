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
        images: [
            "images/parts/yeti cycles1st.jpg",
            "images/parts/yeti cycles2nd.jpg",
            "images/parts/yeti cycles3rd.jpg"
        ]
    },
    
    // SECONDARY PRODUCTS: MTB Parts & Complete Bikes
    { 
        id: 24, 
        name: "SRAM Code R hydraulic disc brake lever", 
        category: "parts", 
        type: "bikes", 
        price: 8500, 
        specs: "Imported Japan Stock, 4-Piston.", 
        image: "images/parts/trp evo.jpg", 
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
        images: [
            "images/bikes/specialized1st.jpg",
            "images/bikes/specialized2nd.jpg",
            "images/bikes/specialized3rd.jpg"
        ]
    },
];

let cart = JSON.parse(localStorage.getItem("yama_cart")) || [];
let currentCheckoutStep = 'cart'; // 'cart' or 'checkout'
let selectedPaymentMethod = 'paypal';
let billingAddressMode = 'same';

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
        badge.innerText = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
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
            <div class="product-image" onclick="openQuickView(${product.id})">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=No+Image+Available';">
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
                <p class="product-specs">${product.specs}</p>
                <div class="product-price">₱${product.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</div>
             <button class="btn btn-primary btn-block" onclick="${product.sizes && product.sizes.length > 0
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
                    <a href="#" onclick="openPolicyModal('warranty', event)">Learn More</a>
                </div>
            </div>
        </div>
    `;

    openModal('quick-view-modal');
}

let selectedQvSize = "";

function selectApparelSize(button, size) {
    selectedQvSize = size;
    document.querySelectorAll(".size-pill").forEach(pill => pill.classList.remove("selected"));
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

    if (product.sizes && product.sizes.length > 0 && !selectedQvSize) {
        showToast("Select a Size", "Please choose a size before adding to your order.");
        return;
    }

    const existingIndex = cart.findIndex(item => item.id === productId && item.selectedSize === (selectedQvSize || null));
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            selectedSize: selectedQvSize || null
        });
    }

    saveCart();

    const sizeMessage = selectedQvSize ? ` (Size: ${selectedQvSize})` : "";
    showToast("Added to Cart", `${quantity} x ${product.name}${sizeMessage} added to your order.`);
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

    const existingIndex = cart.findIndex(p => p.id === id && !p.selectedSize);
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            selectedSize: null
        });
    }

    saveCart();
    showToast("Added to Cart", `${item.name} added to your order.`);
}

// Open Shopify Cart Modal
function openCart() {
    currentCheckoutStep = 'cart';
    renderCartModalContent();
    openModal("cart-modal");
}

function renderCartModalContent() {
    const modal = document.getElementById("cart-modal");
    if (!modal) return;
    
    // Ensure modal content wrapper exists
    let wrapper = modal.querySelector(".modal-content");
    if (!wrapper) {
        wrapper = document.createElement("div");
        wrapper.className = "modal-content";
        modal.appendChild(wrapper);
    }

    let subtotal = 0;
    cart.forEach(item => subtotal += (item.price * (item.quantity || 1)));

    if (currentCheckoutStep === 'cart') {
        if (cart.length === 0) {
            wrapper.innerHTML = `
                <span class="close-btn" onclick="closeModal('cart-modal')">&times;</span>
                <div class="cart-header-row">
                    <h2>Your cart</h2>
                    <span class="continue-shopping-link" onclick="closeModal('cart-modal')">Continue shopping</span>
                </div>
                <div style="text-align: center; padding: 40px 0;">
                    <p style="color: #666; font-size: 15px; margin-bottom: 20px;">Your cart is currently empty.</p>
                    <button class="shopify-btn-black" onclick="closeModal('cart-modal')">Start Shopping</button>
                </div>
            `;
            return;
        }

        let tableRows = '';
        cart.forEach((item, index) => {
            const itemQty = item.quantity || 1;
            const itemTotal = item.price * itemQty;
            const sizeText = item.selectedSize ? `<br><small>Size: ${ygEscape(item.selectedSize)}</small>` : '';

            tableRows += `
                <tr>
                    <td>
                        <div class="cart-product-cell">
                            <img src="${item.image}" class="cart-product-thumb" alt="${item.name}">
                            <div class="cart-product-info">
                                <h4>${ygEscape(item.name)}</h4>
                                <p>₱${Number(item.price).toLocaleString('en-PH', {minimumFractionDigits: 2})}</p>
                                ${sizeText}
                            </div>
                        </div>
                    </td>
                    <td class="col-qty" style="text-align: right;">
                        <div class="cart-qty-box">
                            <button type="button" onclick="updateCartItemQty(${index}, -1)">-</button>
                            <input type="text" value="${itemQty}" readonly>
                            <button type="button" onclick="updateCartItemQty(${index}, 1)">+</button>
                        </div>
                        <button type="button" class="cart-trash-btn" onclick="removeCartItem(${index})" title="Remove">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                    <td class="col-total cart-item-total">
                        ₱${Number(itemTotal).toLocaleString('en-PH', {minimumFractionDigits: 2})}
                    </td>
                </tr>
            `;
        });

        wrapper.innerHTML = `
            <span class="close-btn" onclick="closeModal('cart-modal')">&times;</span>
            <div class="cart-header-row">
                <h2>Your cart</h2>
                <span class="continue-shopping-link" onclick="closeModal('cart-modal')">Continue shopping</span>
            </div>
            <table class="shopify-cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th class="col-qty" style="text-align: right;">Quantity</th>
                        <th class="col-total" style="text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
            <div class="cart-footer-section">
                <div class="cart-estimated-total">
                    Estimated total <span>₱${Number(subtotal).toLocaleString('en-PH', {minimumFractionDigits: 2})} PHP</span>
                </div>
                <p class="cart-tax-note">Taxes, discounts and shipping calculated at checkout.</p>
                <button class="shopify-btn-black" onclick="proceedToCheckout()">Check out</button>
            </div>
        `;
    } else {
        // Shopify 2-Column Checkout Screen
        let summaryItemsHTML = '';
        cart.forEach(item => {
            const qty = item.quantity || 1;
            summaryItemsHTML += `
                <div class="summary-item-row">
                    <div class="summary-item-left">
                        <div style="position: relative;">
                            <img src="${item.image}" class="summary-thumb" alt="${item.name}">
                            <span class="summary-badge-count">${qty}</span>
                        </div>
                        <div>
                            <strong style="font-size: 13px; display: block; color: #111;">${ygEscape(item.name)}</strong>
                            <small style="color: #666;">${item.selectedSize ? 'Size: ' + item.selectedSize : ''}</small>
                        </div>
                    </div>
                    <span style="font-size: 13px; font-weight: 600;">₱${Number(item.price * qty).toLocaleString('en-PH', {minimumFractionDigits: 2})}</span>
                </div>
            `;
        });

        const shippingFee = 250;
        const estimatedTaxes = subtotal * 0.12;
        const grandTotal = subtotal + shippingFee + estimatedTaxes;

        wrapper.innerHTML = `
            <span class="close-btn" onclick="closeModal('cart-modal')">&times;</span>
            <div class="cart-header-row" style="margin-bottom: 15px;">
                <span class="continue-shopping-link" onclick="currentCheckoutStep='cart'; renderCartModalContent();"><i class="fa-solid fa-arrow-left"></i> Return to cart</span>
                <h2 style="font-size: 20px;">Secure Checkout</h2>
            </div>

            <div class="shopify-checkout-container">
                <!-- Left Column: Forms -->
                <div>
                    <form id="shopify-checkout-form" onsubmit="completeShopifyOrder(event)">
                        <!-- Contact Section -->
                        <div class="checkout-section-title">Contact</div>
                        <div class="shopify-form-group">
                            <input type="email" class="shopify-input" id="chk-email" placeholder="Email" required>
                        </div>
                        <div style="margin-bottom: 20px; font-size: 12px; display: flex; align-items: center; gap: 6px;">
                            <input type="checkbox" id="chk-news" checked>
                            <label for="chk-news">Email me with news and offers</label>
                        </div>

                        <!-- Delivery Section -->
                        <div class="checkout-section-title">Delivery</div>
                        <div class="shopify-form-group">
                            <select class="shopify-select">
                                <option value="Philippines">Philippines</option>
                                <option value="Japan">Japan</option>
                            </select>
                        </div>
                        <div class="shopify-form-row shopify-form-group">
                            <input type="text" class="shopify-input" id="chk-fname" placeholder="First name" required>
                            <input type="text" class="shopify-input" id="chk-lname" placeholder="Last name" required>
                        </div>
                        <div class="shopify-form-group">
                            <input type="text" class="shopify-input" id="chk-address" placeholder="Address" required>
                        </div>
                        <div class="shopify-form-row shopify-form-group">
                            <input type="text" class="shopify-input" placeholder="Apartment, suite, etc. (optional)">
                            <input type="text" class="shopify-input" placeholder="Barangay">
                        </div>
                        <div class="shopify-form-row shopify-form-group">
                            <input type="text" class="shopify-input" id="chk-postal" placeholder="Postal code" required>
                            <input type="text" class="shopify-input" id="chk-city" placeholder="City" required>
                        </div>
                        <div class="shopify-form-group">
                            <select class="shopify-select" id="chk-region">
                                <option value="Cebu">Cebu</option>
                                <option value="Metro Manila">Metro Manila</option>
                                <option value="Davao">Davao</option>
                                <option value="Other">Other Region</option>
                            </select>
                        </div>
                        <div class="shopify-form-group" style="margin-bottom: 25px;">
                            <input type="tel" class="shopify-input" id="chk-phone" placeholder="Phone" required>
                        </div>

                        <!-- Payment Section -->
                        <div class="checkout-section-title">Payment</div>
                        <p style="font-size: 12px; color: #666; margin-bottom: 10px;">All transactions are secure and encrypted.</p>
                        
                        <div class="shopify-payment-box">
                            <!-- Option 1: PayPal -->
                            <div class="shopify-payment-option ${selectedPaymentMethod === 'paypal' ? 'active-payment' : ''}" onclick="selectPayment('paypal')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="pay" ${selectedPaymentMethod === 'paypal' ? 'checked' : ''}> PayPal</label>
                                    <i class="fa-brands fa-paypal" style="color: #003087; font-size: 18px;"></i>
                                </div>
                                <div class="payment-subpanel">
                                    <p>You'll be redirected to PayPal to complete your purchase.</p>
                                </div>
                            </div>

                            <!-- Option 2: PayMongo -->
                            <div class="shopify-payment-option ${selectedPaymentMethod === 'paymongo' ? 'active-payment' : ''}" onclick="selectPayment('paymongo')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="pay" ${selectedPaymentMethod === 'paymongo' ? 'checked' : ''}> Secure Payments via PayMongo</label>
                                    <div style="display: flex; gap: 4px; font-size: 11px; font-weight: bold;">
                                        <span style="background: #eb001b; color:white; padding:2px 6px; border-radius:3px;">MC</span>
                                        <span style="background: #1a1f71; color:white; padding:2px 6px; border-radius:3px;">VISA</span>
                                        <span style="background: #0056b3; color:white; padding:2px 6px; border-radius:3px;">GCash</span>
                                    </div>
                                </div>
                                <div class="payment-subpanel">
                                    <p>Pay securely using credit card, debit card, or e-wallets through PayMongo gateway.</p>
                                </div>
                            </div>

                            <!-- Option 3: COD -->
                            <div class="shopify-payment-option ${selectedPaymentMethod === 'cod' ? 'active-payment' : ''}" onclick="selectPayment('cod')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="pay" ${selectedPaymentMethod === 'cod' ? 'checked' : ''}> Cash on Delivery (COD)</label>
                                </div>
                                <div class="payment-subpanel">
                                    <p>Great news! Yama Gears offers Cash on Delivery. Pay in cash when your order arrives at your doorstep.</p>
                                </div>
                            </div>

                            <!-- Option 4: Bank Deposit -->
                            <div class="shopify-payment-option ${selectedPaymentMethod === 'bank' ? 'active-payment' : ''}" onclick="selectPayment('bank')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="pay" ${selectedPaymentMethod === 'bank' ? 'checked' : ''}> Bank Deposit</label>
                                </div>
                                <div class="payment-subpanel">
                                    <p>Transfer funds directly to our BPI or BDO official corporate accounts.</p>
                                </div>
                            </div>

                            <!-- Option 5: Cash Payment at Store -->
                            <div class="shopify-payment-option ${selectedPaymentMethod === 'store' ? 'active-payment' : ''}" onclick="selectPayment('store')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="pay" ${selectedPaymentMethod === 'store' ? 'checked' : ''}> Cash Payment at Store</label>
                                </div>
                                <div class="payment-subpanel">
                                    <p>Pay cash upon pickup at our official Yama Gears location.</p>
                                </div>
                            </div>

                            <!-- Option 6: GCash -->
                            <div class="shopify-payment-option ${selectedPaymentMethod === 'gcash' ? 'active-payment' : ''}" onclick="selectPayment('gcash')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="pay" ${selectedPaymentMethod === 'gcash' ? 'checked' : ''}> GCash</label>
                                </div>
                                <div class="payment-subpanel">
                                    <p>Send direct payment to <strong>09XX-XXX-XXXX (Yama Gears)</strong> and upload reference.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Billing Address Section -->
                        <div class="checkout-section-title" style="margin-top: 25px;">Billing address</div>
                        <div class="shopify-payment-box">
                            <div class="shopify-payment-option ${billingAddressMode === 'same' ? 'active-payment' : ''}" onclick="selectBilling('same')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="bill" ${billingAddressMode === 'same' ? 'checked' : ''}> Same as shipping address</label>
                                </div>
                            </div>
                            <div class="shopify-payment-option ${billingAddressMode === 'diff' ? 'active-payment' : ''}" onclick="selectBilling('diff')">
                                <div class="shopify-payment-header">
                                    <label><input type="radio" name="bill" ${billingAddressMode === 'diff' ? 'checked' : ''}> Use a different billing address</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="shopify-blue-btn">Pay now</button>
                    </form>
                </div>

                <!-- Right Column: Order Summary Sidebar -->
                <div class="checkout-summary-sidebar">
                    <div style="max-height: 250px; overflow-y: auto; margin-bottom: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                        ${summaryItemsHTML}
                    </div>
                    <div class="summary-item-row">
                        <span style="color: #555;">Subtotal</span>
                        <strong>₱${Number(subtotal).toLocaleString('en-PH', {minimumFractionDigits: 2})}</strong>
                    </div>
                    <div class="summary-item-row">
                        <span style="color: #555;">Shipping</span>
                        <span>₱${Number(shippingFee).toLocaleString('en-PH', {minimumFractionDigits: 2})}</span>
                    </div>
                    <div class="summary-item-row">
                        <span style="color: #555;">Estimated taxes</span>
                        <span>₱${Number(estimatedTaxes).toLocaleString('en-PH', {minimumFractionDigits: 2})}</span>
                    </div>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">
                    <div class="summary-item-row" style="font-size: 16px; font-weight: bold;">
                        <span>Total</span>
                        <span>PHP ₱${Number(grandTotal).toLocaleString('en-PH', {minimumFractionDigits: 2})}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

function proceedToCheckout() {
    if (cart.length === 0) return;
    currentCheckoutStep = 'checkout';
    renderCartModalContent();
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    renderCartModalContent();
}

function selectBilling(mode) {
    billingAddressMode = mode;
    renderCartModalContent();
}

function updateCartItemQty(index, change) {
    if (!cart[index].quantity) cart[index].quantity = 1;
    cart[index].quantity += change;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    saveCart();
    renderCartModalContent();
}

function removeCartItem(index) {
    const removed = cart.splice(index, 1)[0];
    saveCart();
    renderCartModalContent();
    if (removed) {
        showToast("Item Removed", `${removed.name} removed from cart.`);
    }
}

function completeShopifyOrder(e) {
    e.preventDefault();
    const trackingId = "YG-" + Math.floor(1000 + Math.random() * 9000);
    showToast("Order Placed Successfully!", `Tracking ID: ${trackingId} via ${selectedPaymentMethod.toUpperCase()}`);
    cart = [];
    saveCart();
    closeModal('cart-modal');
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

// Updated Inquiry Submission saving to localStorage for Admin Inquiries panel
function submitInquiry(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById("inquiry-name");
    const emailInput = document.getElementById("inquiry-email");
    const messageInput = document.getElementById("inquiry-message");

    const name = nameInput ? nameInput.value.trim() : "Valued Customer";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!email || !message) {
        showToast("Missing Information", "Please provide your email and message before sending.");
        return;
    }

    let inquiries = JSON.parse(localStorage.getItem("yama_inquiries_db")) || [];
    
    const newInquiry = {
        id: Date.now(),
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        status: "Pending",
        adminReply: ""
    };

    inquiries.push(newInquiry);
    localStorage.setItem("yama_inquiries_db", JSON.stringify(inquiries));

    showToast("Inquiry Sent!", "Your message has been sent to Yama Gears staff. We will reply via email shortly.");
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

function ygEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

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

function openPolicyModal(policyType, event) {
    if (event) event.preventDefault();
    closeModal("quick-view-modal");

    const modalBody = document.getElementById("policy-modal-body");
    if (modalBody && storePolicies[policyType]) {
        modalBody.innerHTML = storePolicies[policyType];
        openModal("policy-modal");
    }
}