let inquiriesList = JSON.parse(localStorage.getItem("yama_inquiries_db")) || [
    { id: 101, name: "Mark Cruz", email: "markcruz@gmail.com", message: "Do you have size XL available for the Yama Gears Trail Jersey?", date: "11/14/2026 08:30 AM", status: "Pending", adminReply: "" }
];

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("yama_inquiries_db")) {
        localStorage.setItem("yama_inquiries_db", JSON.stringify(inquiriesList));
    }
    renderInquiriesTable();
});

function renderInquiriesTable() {
    inquiriesList = JSON.parse(localStorage.getItem("yama_inquiries_db")) || [];
    const tbody = document.getElementById("inquiries-table-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (inquiriesList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No customer inquiries found.</td></tr>`;
        return;
    }

    inquiriesList.forEach(item => {
        const tr = document.createElement("tr");
        const isResolved = item.status === "Resolved";

        tr.innerHTML = `
            <td>${item.date}</td>
            <td><strong>${item.name}</strong></td>
            <td><a href="mailto:${item.email}" style="color:#005bd3;">${item.email}</a></td>
            <td>
                ${item.message}
                ${item.adminReply ? `<br><small style="color:#28a745;"><strong>Admin Reply:</strong> ${item.adminReply}</small>` : ''}
            </td>
            <td>
                <span class="badge" style="background: ${isResolved ? '#28a745' : '#f39c12'}; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px;">
                    ${item.status}
                </span>
            </td>
            <td>
                <button class="btn btn-secondary" onclick="openReplyModal(${item.id})">
                    <i class="fa-solid fa-reply"></i> ${isResolved ? 'Edit Reply' : 'Reply'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openReplyModal(id) {
    const inquiry = inquiriesList.find(i => i.id === id);
    if (!inquiry) return;

    document.getElementById("reply-inquiry-id").value = inquiry.id;
    document.getElementById("reply-to-email").value = inquiry.email;
    document.getElementById("reply-original-msg").innerText = inquiry.message;
    document.getElementById("admin-response-text").value = inquiry.adminReply || "";

    document.getElementById("reply-modal").style.display = "flex";
}

function closeReplyModal() {
    document.getElementById("reply-modal").style.display = "none";
}

function sendAdminReply(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById("reply-inquiry-id").value, 10);
    const replyText = document.getElementById("admin-response-text").value.trim();

    const index = inquiriesList.findIndex(i => i.id === id);
    if (index !== -1) {
        inquiriesList[index].adminReply = replyText;
        inquiriesList[index].status = "Resolved";
        localStorage.setItem("yama_inquiries_db", JSON.stringify(inquiriesList));
    }

    closeReplyModal();
    renderInquiriesTable();
    alert("Reply successfully saved and simulated email dispatched to customer!");
}