document.addEventListener("DOMContentLoaded", () => {
    renderInventoryReport();
});

// Render summary cards and breakdown table based on live localStorage database
function renderInventoryReport() {
    const products = JSON.parse(localStorage.getItem("yama_products_db")) || [];
    const searchQuery = document.getElementById("inventory-search").value.toLowerCase();
    const lineFilter = document.getElementById("line-filter").value;

    let totalStockCount = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;
    let totalInventoryValue = 0;

    // Filter products based on search and line selection
    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || (p.category && p.category.toLowerCase().includes(searchQuery));
        const matchesLine = lineFilter === "all" || p.type === lineFilter;
        return matchesSearch && matchesLine;
    });

    const tbody = document.getElementById("inventory-table-body");
    tbody.innerHTML = "";

    if (filteredProducts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">No inventory records found.</td></tr>`;
    }

    filteredProducts.forEach(p => {
        const stock = p.stock ?? 0;
        const price = p.price ?? 0;
        const assetValue = stock * price;

        // Accumulate global metrics from the entire product catalog
        // (Calculated on unfiltered catalog for accurate system-wide stats)
        totalInventoryValue += assetValue;
        if (stock === 0) {
            outOfStockCount++;
        } else if (stock <= 5) {
            lowStockCount++;
            totalStockCount += stock;
        } else {
            totalStockCount += stock;
        }

        // Determine stock status badge
        let statusBadge = '';
        if (stock === 0) {
            statusBadge = `<span class="badge badge-out">Out of Stock</span>`;
        } else if (stock <= 5) {
            statusBadge = `<span class="badge badge-warning">Low Stock</span>`;
        } else {
            statusBadge = `<span class="badge badge-stock">In Stock</span>`;
        }

        const lineLabel = p.type === 'merch' ? 'Primary (Merch)' : 'Secondary (Bikes & Parts)';

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${p.name}</strong><br><small style="color:var(--text-muted);">${p.specs || ''}</small></td>
            <td>${p.category ? p.category.toUpperCase() : 'GENERAL'}</td>
            <td>${lineLabel}</td>
            <td><strong>${stock}</strong></td>
            <td>₱${price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</td>
            <td><strong>₱${assetValue.toLocaleString('en-PH', {minimumFractionDigits: 2})}</strong></td>
            <td>${statusBadge}</td>
        `;
        tbody.appendChild(tr);
    });

    // Update Top Overview Widgets Summary Cards
    // For total stock quantity across all items
    const absoluteTotalStock = products.reduce((acc, curr) => acc + (curr.stock ?? 0), 0);
    const absoluteTotalValue = products.reduce((acc, curr) => acc + ((curr.stock ?? 0) * (curr.price ?? 0)), 0);
    const absoluteLowStock = products.filter(p => (p.stock ?? 0) > 0 && (p.stock ?? 0) <= 5).length;
    const absoluteOutStock = products.filter(p => (p.stock ?? 0) === 0).length;

    document.getElementById("stat-total-stock").innerText = absoluteTotalStock;
    document.getElementById("stat-low-stock").innerText = absoluteLowStock;
    document.getElementById("stat-out-stock").innerText = absoluteOutStock;
    document.getElementById("stat-total-value").innerText = `₱${absoluteTotalValue.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
}

// 3. Optional Export JSON Functionality
function exportInventoryJSON() {
    const products = JSON.parse(localStorage.getItem("yama_products_db")) || [];
    const reportData = {
        generatedAt: new Date().toISOString(),
        totalProducts: products.length,
        inventory: products
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `yama_inventory_report_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}