// Default Settings Configurations
const defaultSettings = {
    storeName: "Yama Gears MTB & Apparel",
    storeEmail: "support@yamagears.com",
    currency: "₱",
    gcash: true,
    card: true,
    pickup: true
};

document.addEventListener("DOMContentLoaded", () => {
    loadSettings();
});

// Load settings into form inputs
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem("yama_settings_db")) || defaultSettings;

    document.getElementById("store-name").value = settings.storeName;
    document.getElementById("store-email").value = settings.storeEmail;
    document.getElementById("store-currency").value = settings.currency;

    document.getElementById("gcash-toggle").checked = settings.gcash;
    document.getElementById("card-toggle").checked = settings.card;
    document.getElementById("pickup-toggle").checked = settings.pickup;
}

// Save Profile Information
function saveStoreSettings(e) {
    e.preventDefault();
    const settings = JSON.parse(localStorage.getItem("yama_settings_db")) || defaultSettings;

    settings.storeName = document.getElementById("store-name").value.trim();
    settings.storeEmail = document.getElementById("store-email").value.trim();
    settings.currency = document.getElementById("store-currency").value.trim();

    localStorage.setItem("yama_settings_db", JSON.stringify(settings));
    showToast("Store profile saved successfully!");
}

// Save Payment Method Preferences
function savePaymentSettings(e) {
    e.preventDefault();
    const settings = JSON.parse(localStorage.getItem("yama_settings_db")) || defaultSettings;

    settings.gcash = document.getElementById("gcash-toggle").checked;
    settings.card = document.getElementById("card-toggle").checked;
    settings.pickup = document.getElementById("pickup-toggle").checked;

    localStorage.setItem("yama_settings_db", JSON.stringify(settings));
    showToast("Payment options updated successfully!");
}

// Export Database JSON Backup
function exportDatabase() {
    const backupData = {
        products: JSON.parse(localStorage.getItem("yama_products_db")) || [],
        orders: JSON.parse(localStorage.getItem("yama_orders_db")) || [],
        settings: JSON.parse(localStorage.getItem("yama_settings_db")) || defaultSettings
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    
    a.href = url;
    a.download = `yama_gears_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("Database export started!");
}

// Reset Storage Data to Initial Default State
function resetDatabase() {
    if (confirm("Are you sure you want to reset all stored products and orders? This action cannot be undone.")) {
        localStorage.removeItem("yama_products_db");
        localStorage.removeItem("yama_orders_db");
        localStorage.removeItem("yama_settings_db");
        
        loadSettings();
        showToast("System reset to default state!");
    }
}

// Toast Feedback Generator
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show";
    setTimeout(() => { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}