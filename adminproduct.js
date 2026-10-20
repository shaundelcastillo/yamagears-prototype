// Initial catalog synchronized with local storage
let productCatalog = JSON.parse(localStorage.getItem("yama_products_db")) || [
    { id: 1, name: "Yama Gears Trail Jersey MTB", category: "jersey", type: "merch", price: 1250, stock: 15, specs: "Breathable Mesh, Quick-Dry", image: "https://via.placeholder.com/150", sizes: ["S", "M", "L", "XL", "2XL", "3XL"] },
    { id: 2, name: "Yama Heavyweight Hoodie", category: "hoodie", type: "merch", price: 1850, stock: 8, specs: "100% Cotton, Embroidered Logo", image: "https://via.placeholder.com/150", sizes: ["S", "M", "L", "XL", "2XL", "3XL"] },
    { id: 3, name: "SMITH Mainline Helmet Set", category: "gears", type: "merch", price: 22500, stock: 3, specs: "Full-face helmet in Size Medium", image: "https://via.placeholder.com/150" },
    { id: 4, name: "SRAM Code R Brake Lever", category: "parts", type: "bikes", price: 8500, stock: 5, specs: "4-Piston Hydraulic", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Trek Slash 8", category: "bikes", type: "bikes", price: 200000, stock: 0, specs: "Aggressive long-travel enduro bike", image: "https://via.placeholder.com/150" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Sync storage immediately[cite: 7]
    if (!localStorage.getItem("yama_products_db")) {
        localStorage.setItem("yama_products_db", JSON.stringify(productCatalog));
    }
    filterProducts();

    // Modal backdrop click listener[cite: 7]
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("product-modal");
        if (e.target === modal) closeModal();
    });
});

// Toggle Size Field visibility based on product type selection[cite: 7]
function toggleSizeField() {
    const typeSelect = document.getElementById("prod-type");
    const sizesContainer = document.getElementById("sizes-container");
    
    if (!typeSelect || !sizesContainer) return;

    if (typeSelect.value === "merch") {
        sizesContainer.style.display = "block";
    } else {
        sizesContainer.style.display = "none";
        document.getElementById("prod-sizes").value = ""; // Clear sizes if hardware/bike[cite: 7]
    }
}

// Render Product Table Data[cite: 7]
function renderProductTable(items) {
    const tbody = document.getElementById("product-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">No products found.</td></tr>`;
        return;
    }

    items.forEach(p => {
        const tr = document.createElement("tr");
        const isStock = (p.stock ?? 0) > 0;
        const sizeDisplay = p.sizes && p.sizes.length > 0 ? `<br><small style="color:#f39c12;">Sizes: ${p.sizes.join(', ')}</small>` : '';

        tr.innerHTML = `
            <td>
                <img src="${p.image}" class="img-thumb" alt="${p.name}" onerror="this.src='https://via.placeholder.com/45?text=No+Img'">
            </td>
            <td>
                <strong>${p.name}</strong>${sizeDisplay}<br>
                <small style="color:var(--text-muted);">${p.specs}</small>
            </td>
            <td>
                <span class="badge ${p.type === 'merch' ? 'badge-merch' : 'badge-bikes'}">
                    ${p.type === 'merch' ? 'PRIMARY' : 'SECONDARY'}
                </span>
            </td>
            <td>${p.category ? p.category.toUpperCase() : 'GENERAL'}</td>
            <td>₱${p.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</td>
            <td>
                <span class="badge ${isStock ? 'badge-stock' : 'badge-out'}">
                    ${isStock ? `${p.stock} in stock` : 'Out of Stock'}
                </span>
            </td>
            <td>
                <button class="btn btn-secondary" onclick="openEditModal(${p.id})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteProduct(${p.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Live Search & Filter Logic[cite: 7]
function filterProducts() {
    productCatalog = JSON.parse(localStorage.getItem("yama_products_db")) || productCatalog;

    const queryInput = document.getElementById("search-input");
    const query = queryInput ? queryInput.value.toLowerCase() : "";
    
    const typeSelect = document.getElementById("type-filter");
    const selectedType = typeSelect ? typeSelect.value : "all";

    const catSelect = document.getElementById("category-filter");
    const selectedCategory = catSelect ? catSelect.value : "all";

    const filtered = productCatalog.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(query) || p.specs.toLowerCase().includes(query);
        const matchesType = selectedType === 'all' || p.type === selectedType;
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;

        return matchesQuery && matchesType && matchesCategory;
    });

    renderProductTable(filtered);
}

// Modal Toggle Functions[cite: 7]
function openAddModal() {
    document.getElementById("modal-title").innerText = "Add New Product";
    document.getElementById("product-form").reset();
    document.getElementById("prod-id").value = "";
    document.getElementById("prod-type").value = "merch"; // Default to merch[cite: 7]
    document.getElementById("prod-sizes").value = "S, M, L, XL, 2XL, 3XL"; // Default apparel sizes[cite: 7]
    
    toggleSizeField(); // Ensure correct size field visibility[cite: 7]
    document.getElementById("product-modal").style.display = "flex";
}

function openEditModal(id) {
    const product = productCatalog.find(p => p.id === id);
    if (!product) return;

    document.getElementById("prod-id").value = product.id;
    document.getElementById("prod-name").value = product.name;
    document.getElementById("prod-type").value = product.type;
    document.getElementById("prod-category").value = product.category;
    document.getElementById("prod-price").value = product.price;
    document.getElementById("prod-stock").value = product.stock ?? 10;
    document.getElementById("prod-specs").value = product.specs;
    document.getElementById("prod-image").value = product.image;
    
    document.getElementById("prod-sizes").value = product.sizes ? product.sizes.join(", ") : "";

    toggleSizeField(); // Show/hide based on product type[cite: 7]

    document.getElementById("modal-title").innerText = "Edit Product";
    document.getElementById("product-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Form Submission (Add / Update)[cite: 7]
function handleFormSubmit(e) {
    e.preventDefault();

    const id = document.getElementById("prod-id").value;
    const name = document.getElementById("prod-name").value.trim();
    const type = document.getElementById("prod-type").value;
    const category = document.getElementById("prod-category").value;
    const price = parseFloat(document.getElementById("prod-price").value);
    const stock = parseInt(document.getElementById("prod-stock").value, 10);
    const specs = document.getElementById("prod-specs").value.trim();
    const image = document.getElementById("prod-image").value.trim();
    
    // Only parse sizes if type is merch[cite: 7]
    let sizes = [];
    if (type === "merch") {
        const sizesInput = document.getElementById("prod-sizes").value.trim();
        sizes = sizesInput ? sizesInput.split(",").map(s => s.trim()).filter(s => s !== "") : [];
    }

    if (id) {
        const index = productCatalog.findIndex(p => p.id == id);
        if (index !== -1) {
            productCatalog[index] = { id: parseInt(id), name, type, category, price, stock, specs, image, sizes };
        }
    } else {
        const newProduct = { id: Date.now(), name, type, category, price, stock, specs, image, sizes };
        productCatalog.push(newProduct);
    }

    saveAndRefresh();
    closeModal();
}

// Delete Action (Updated with custom toast notification instead of native browser confirm)
function deleteProduct(id) {
    const product = productCatalog.find(p => p.id === id);
    if (!product) return;

    productCatalog = productCatalog.filter(p => p.id !== id);
    saveAndRefresh();

    showAdminToast("Product Removed", `${product.name} has been removed from inventory.`);
}

// Synchronize with Local Storage and Update UI[cite: 7]
function saveAndRefresh() {
    localStorage.setItem("yama_products_db", JSON.stringify(productCatalog));
    filterProducts();
}

// Custom Admin Toast Notification Helper
function showAdminToast(title, message) {
    let toast = document.getElementById("admin-toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "admin-toast-notification";
        toast.style.cssText = `
            position: fixed; bottom: 30px; right: 30px; background: #1a1a1a; color: #fff;
            padding: 16px 20px; border-radius: 8px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
            display: flex; align-items: center; gap: 14px; z-index: 99999;
            transform: translateY(120px); opacity: 0; transition: transform 0.3s ease, opacity 0.3s ease;
            border-left: 5px solid #dc3545; border: 1px solid #333;
        `;
        toast.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 22px; color: #dc3545;"></i>
            <div>
                <h4 id="admin-toast-title" style="margin: 0 0 4px 0; font-size: 15px; font-weight: 700;"></h4>
                <p id="admin-toast-desc" style="margin: 0; font-size: 13px; color: #aaa;"></p>
            </div>
        `;
        document.body.appendChild(toast);
    }

    document.getElementById("admin-toast-title").innerText = title;
    document.getElementById("admin-toast-desc").innerText = message;

    setTimeout(() => {
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        toast.style.transform = "translateY(120px)";
        toast.style.opacity = "0";
    }, 4000);
}