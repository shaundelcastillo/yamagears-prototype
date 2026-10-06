// Initial catalog synchronized with local storage
let productCatalog = JSON.parse(localStorage.getItem("yama_products_db")) || [
    { id: 1, name: "Yama Gears Trail Jersey MTB", category: "jersey", type: "merch", price: 1250, stock: 15, specs: "Breathable Mesh, Quick-Dry", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Yama Heavyweight Hoodie", category: "hoodie", type: "merch", price: 1850, stock: 8, specs: "100% Cotton, Embroidered Logo", image: "https://via.placeholder.com/150" },
    { id: 3, name: "SMITH Mainline Helmet Set", category: "gears", type: "merch", price: 22500, stock: 3, specs: "Full-face helmet in Size Medium", image: "https://via.placeholder.com/150" },
    { id: 4, name: "SRAM Code R Brake Lever", category: "parts", type: "bikes", price: 8500, stock: 5, specs: "4-Piston Hydraulic", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Trek Slash 8", category: "bikes", type: "bikes", price: 200000, stock: 0, specs: "Aggressive long-travel enduro bike", image: "https://via.placeholder.com/150" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Sync storage immediately
    if (!localStorage.getItem("yama_products_db")) {
        localStorage.setItem("yama_products_db", JSON.stringify(productCatalog));
    }
    filterProducts();

    // Modal backdrop click listener
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("product-modal");
        if (e.target === modal) closeModal();
    });
});

// Render Product Table Data
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

        tr.innerHTML = `
            <td>
                <img src="${p.image}" class="img-thumb" alt="${p.name}" onerror="this.src='https://via.placeholder.com/45?text=No+Img'">
            </td>
            <td>
                <strong>${p.name}</strong><br>
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

// Live Search & Filter Logic
function filterProducts() {
    // Re-fetch latest state from storage before applying filters
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

// Modal Toggle Functions
function openAddModal() {
    document.getElementById("modal-title").innerText = "Add New Product";
    document.getElementById("product-form").reset();
    document.getElementById("prod-id").value = "";
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

    document.getElementById("modal-title").innerText = "Edit Product";
    document.getElementById("product-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

// Form Submission (Add / Update)
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

    if (id) {
        const index = productCatalog.findIndex(p => p.id == id);
        if (index !== -1) {
            productCatalog[index] = { id: parseInt(id), name, type, category, price, stock, specs, image };
        }
    } else {
        const newProduct = { id: Date.now(), name, type, category, price, stock, specs, image };
        productCatalog.push(newProduct);
    }

    saveAndRefresh();
    closeModal();
}

// Delete Action
function deleteProduct(id) {
    if (confirm("Are you sure you want to remove this product from inventory?")) {
        productCatalog = productCatalog.filter(p => p.id !== id);
        saveAndRefresh();
    }
}

// Synchronize with Local Storage and Update UI
function saveAndRefresh() {
    localStorage.setItem("yama_products_db", JSON.stringify(productCatalog));
    filterProducts();
}