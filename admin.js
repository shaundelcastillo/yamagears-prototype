// Synchronized LocalStorage key with product management
let adminProducts = JSON.parse(localStorage.getItem("yama_products_db")) || [
    { id: 1, name: "Yama Gears Trail Jersey MTB", category: "jersey", type: "merch", price: 1250, stock: 15, specs: "Breathable Mesh", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Fox Speedframe Pro Helmet", category: "gears", type: "merch", price: 20999, stock: 8, specs: "Adjustable Visor", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bold Linkin 150 Pro Carbon", category: "bikes", type: "bikes", price: 138000, stock: 2, specs: "SRAM 1x12 Speed", image: "https://via.placeholder.com/150" }
];

const mockOrders = [
    { id: "YG-9482", customer: "Juan Dela Cruz", payment: "GCash", total: 1250, status: "In Transit" },
    { id: "YG-1042", customer: "Maria Santos", payment: "Card", total: 20999, status: "Delivered" },
    { id: "YG-5531", customer: "Alex Mercer", payment: "Store Pickup", total: 138000, status: "Processing" }
];

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderOverview();
    renderProductsTable();
    renderOrdersTable();
    
    const productForm = document.getElementById("product-form");
    if (productForm) {
        productForm.addEventListener("submit", handleProductSubmit);
    }

    // Modal backdrop click listener
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("product-modal");
        if (e.target === modal) closeProductModal();
    });
});

// Navigation & Hash Target Handling
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item[data-tab]");
    const pageTitle = document.getElementById("page-title");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabTarget = item.getAttribute("data-tab");
            switchTab(tabTarget, item.innerText.trim());
        });
    });

    // Check URL Hash for direct navigation (e.g., admin.html#orders)
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const targetNav = document.querySelector(`.nav-item[data-tab="${hash}"]`);
        if (targetNav) switchTab(hash, targetNav.innerText.trim());
    }
}

function switchTab(tabTarget, title) {
    const navItems = document.querySelectorAll(".nav-item[data-tab]");
    navItems.forEach(nav => nav.classList.remove("active"));

    const activeNav = document.querySelector(`.nav-item[data-tab="${tabTarget}"]`);
    if (activeNav) activeNav.classList.add("active");

    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    const activeTab = document.getElementById(`tab-${tabTarget}`);
    if (activeTab) activeTab.classList.add("active");

    const pageTitle = document.getElementById("page-title");
    if (pageTitle && title) pageTitle.innerText = title;
}

// Render Overview Tab
function renderOverview() {
    const inventoryCount = document.getElementById("metric-inventory-count");
    if (inventoryCount) inventoryCount.innerText = adminProducts.length;

    const tbody = document.getElementById("recent-orders-table");
    if (!tbody) return;
    tbody.innerHTML = mockOrders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.payment}</td>
            <td>₱${order.total.toLocaleString('en-PH', {minimumFractionDigits: 2})}</td>
            <td><span class="badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}">${order.status}</span></td>
        </tr>
    `).join('');
}

// Render Products Table
function renderProductsTable() {
    const tbody = document.getElementById("admin-products-table");
    if (!tbody) return;
    
    // Always fetch latest data from storage
    adminProducts = JSON.parse(localStorage.getItem("yama_products_db")) || adminProducts;

    tbody.innerHTML = adminProducts.map(p => `
        <tr>
            <td><img src="${p.image}" class="img-thumb" alt="${p.name}" onerror="this.src='https://via.placeholder.com/45?text=No+Img'"></td>
            <td><strong>${p.name}</strong><br><small style="color:var(--text-muted);">${p.specs}</small></td>
            <td>${p.category ? p.category.toUpperCase() : 'GENERAL'}</td>
            <td>${p.type === 'merch' ? 'Primary' : 'Secondary'}</td>
            <td>₱${p.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</td>
            <td>
                <button class="btn btn-secondary" onclick="editProduct(${p.id})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteProduct(${p.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Render Orders Tab
function renderOrdersTable() {
    const tbody = document.getElementById("all-orders-table");
    if (!tbody) return;
    tbody.innerHTML = mockOrders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.payment}</td>
            <td>₱${order.total.toLocaleString('en-PH', {minimumFractionDigits: 2})}</td>
            <td><span class="badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}">${order.status}</span></td>
            <td><button class="btn btn-secondary" onclick="alert('Viewing order ${order.id}')">View</button></td>
        </tr>
    `).join('');
}

// Modal & CRUD Actions
function openProductModal() {
    document.getElementById("modal-title").innerText = "Add New Product";
    document.getElementById("product-form").reset();
    document.getElementById("prod-id").value = "";
    document.getElementById("product-modal").style.display = "flex";
}

function closeProductModal() {
    document.getElementById("product-modal").style.display = "none";
}

function handleProductSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("prod-id").value;
    const name = document.getElementById("prod-name").value.trim();
    const category = document.getElementById("prod-category").value;
    const type = document.getElementById("prod-type").value;
    const price = parseFloat(document.getElementById("prod-price").value);
    const specs = document.getElementById("prod-specs").value.trim();
    const image = document.getElementById("prod-image").value.trim();
    const stockInput = document.getElementById("prod-stock");
    const stock = stockInput ? parseInt(stockInput.value, 10) : 10; // Default stock if field missing

    if (id) {
        const index = adminProducts.findIndex(p => p.id == id);
        if (index !== -1) {
            adminProducts[index] = { id: parseInt(id), name, category, type, price, stock, specs, image };
        }
    } else {
        const newProd = { id: Date.now(), name, category, type, price, stock, specs, image };
        adminProducts.push(newProd);
    }

    saveAndRefresh();
    closeProductModal();
}

function editProduct(id) {
    const p = adminProducts.find(item => item.id === id);
    if (!p) return;

    document.getElementById("prod-id").value = p.id;
    document.getElementById("prod-name").value = p.name;
    document.getElementById("prod-category").value = p.category;
    document.getElementById("prod-type").value = p.type;
    document.getElementById("prod-price").value = p.price;
    document.getElementById("prod-specs").value = p.specs;
    document.getElementById("prod-image").value = p.image;
    
    const stockInput = document.getElementById("prod-stock");
    if (stockInput) stockInput.value = p.stock || 10;

    document.getElementById("modal-title").innerText = "Edit Product";
    document.getElementById("product-modal").style.display = "flex";
}

function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        adminProducts = adminProducts.filter(p => p.id !== id);
        saveAndRefresh();
    }
}

function saveAndRefresh() {
    localStorage.setItem("yama_products_db", JSON.stringify(adminProducts));
    renderProductsTable();
    renderOverview();
}