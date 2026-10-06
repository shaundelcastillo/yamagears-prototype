// Synchronized Orders Store
let ordersCatalog = JSON.parse(localStorage.getItem("yama_orders_db")) || [
    {
        id: "YG-9482",
        customer: "Juan Dela Cruz",
        date: "2026-10-05",
        payment: "GCash",
        total: 1250,
        status: "In Transit",
        items: [{ name: "Yama Gears Trail Jersey MTB", qty: 1, price: 1250 }]
    },
    {
        id: "YG-1042",
        customer: "Maria Santos",
        date: "2026-10-04",
        payment: "Card",
        total: 20999,
        status: "Delivered",
        items: [{ name: "Fox Speedframe Pro Helmet", qty: 1, price: 20999 }]
    },
    {
        id: "YG-5531",
        customer: "Alex Mercer",
        date: "2026-10-06",
        payment: "Store Pickup",
        total: 138000,
        status: "Processing",
        items: [{ name: "Bold Linkin 150 Pro Carbon", qty: 1, price: 138000 }]
    }
];

let activeOrderId = null;

document.addEventListener("DOMContentLoaded", () => {
    // Initial sync
    if (!localStorage.getItem("yama_orders_db")) {
        localStorage.setItem("yama_orders_db", JSON.stringify(ordersCatalog));
    }
    filterOrders();

    // Modal backdrop click listener
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("order-modal");
        if (e.target === modal) closeOrderModal();
    });
});

// Render Order Table Data
function renderOrdersTable(items) {
    const tbody = document.getElementById("orders-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">No orders found.</td></tr>`;
        return;
    }

    items.forEach(order => {
        const tr = document.createElement("tr");

        let badgeClass = "badge-processing";
        if (order.status === "Delivered") badgeClass = "badge-delivered";
        else if (order.status === "In Transit") badgeClass = "badge-transit";
        else if (order.status === "Cancelled") badgeClass = "badge-cancelled";

        tr.innerHTML = `
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>${order.payment}</td>
            <td>₱${order.total.toLocaleString('en-PH', {minimumFractionDigits: 2})}</td>
            <td><span class="badge ${badgeClass}">${order.status}</span></td>
            <td>
                <button class="btn btn-secondary" onclick="viewOrder('${order.id}')">
                    <i class="fa-solid fa-eye"></i> Manage
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Live Search & Filter Logic
function filterOrders() {
    ordersCatalog = JSON.parse(localStorage.getItem("yama_orders_db")) || ordersCatalog;

    const queryInput = document.getElementById("order-search");
    const query = queryInput ? queryInput.value.toLowerCase() : "";

    const statusSelect = document.getElementById("status-filter");
    const selectedStatus = statusSelect ? statusSelect.value : "all";

    const filtered = ordersCatalog.filter(o => {
        const matchesQuery = o.id.toLowerCase().includes(query) || o.customer.toLowerCase().includes(query);
        const matchesStatus = selectedStatus === "all" || o.status === selectedStatus;
        return matchesQuery && matchesStatus;
    });

    renderOrdersTable(filtered);
}

// View Order Modal
function viewOrder(id) {
    const order = ordersCatalog.find(o => o.id === id);
    if (!order) return;

    activeOrderId = id;
    document.getElementById("modal-order-id").innerText = `Order: ${order.id}`;
    document.getElementById("detail-customer").innerText = order.customer;
    document.getElementById("detail-date").innerText = order.date;
    document.getElementById("detail-payment").innerText = order.payment;
    document.getElementById("detail-status-select").value = order.status;
    document.getElementById("detail-total-amount").innerText = `₱${order.total.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;

    const itemsList = document.getElementById("detail-items-list");
    itemsList.innerHTML = order.items.map(i => `
        <li>
            <span>${i.qty}x ${i.name}</span>
            <strong>₱${(i.price * i.qty).toLocaleString('en-PH', {minimumFractionDigits: 2})}</strong>
        </li>
    `).join('');

    document.getElementById("order-modal").style.display = "flex";
}

function closeOrderModal() {
    document.getElementById("order-modal").style.display = "none";
    activeOrderId = null;
}

// Update Order Status
function saveOrderStatus() {
    if (!activeOrderId) return;

    const newStatus = document.getElementById("detail-status-select").value;
    const index = ordersCatalog.findIndex(o => o.id === activeOrderId);

    if (index !== -1) {
        ordersCatalog[index].status = newStatus;
        localStorage.setItem("yama_orders_db", JSON.stringify(ordersCatalog));
        filterOrders();
        closeOrderModal();
    }
}