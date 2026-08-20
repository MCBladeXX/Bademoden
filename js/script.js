// DATENSTRUKTUR MIT PREISEN UND DEINEN BILDNAMEN
const products = [
    // --- HERREN-KATEGORIEN ---
    { id: 1, gender: 'herren', type: 'Kurze Badehose', title: 'Retro Swim Trunks', price: 29.99, image: './img/Trunks.jpg' },
    { id: 2, gender: 'herren', type: 'Kielange Badehose', title: 'Classic Knee-Length Boardshort', price: 34.99, image: './img/Boardshort.jpg' },
    
    // --- DAMEN-KATEGORIEN ---
    { id: 3, gender: 'damen', type: 'Monokini', title: 'High-Cut Midnight Monokini', price: 49.99, image: './img/HOTBodysuit.jpg' },
    { id: 4, gender: 'damen', type: 'Bikini', title: 'Front Cut-Out Inverted Set', price: 39.99, image: './img/MicroBikini.jpg' },
    { id: 5, gender: 'damen', type: 'Slingshot', title: 'Multi-Color Micro Slingshot', price: 44.99, image: './img/MicroMonokini.jpg' },
    { id: 6, gender: 'damen', type: 'Badeanzug', title: 'Minimalist Signature Swimsuit', price: 45.99, image: './img/HOTBodysuit.jpg' },
    { id: 7, gender: 'damen', type: 'Trägerloser Badeanzug', title: 'Bandeau Sleek One-Piece', price: 42.99, image: './img/trägerlosBadeanzug.jpg' },
    { id: 8, gender: 'damen', type: 'Tanga Strings', title: 'Ultra High-Cut String Set', price: 24.99, image: './img/TBikini.jpg' },
    { id: 9, gender: 'damen', type: 'Dünne BHs', title: 'Exotic Leopard String Set', price: 27.99, image: './img/TBikini.jpg' },
    { id: 10, gender: 'damen', type: 'Schmale BHs', title: 'Micro Off-Shoulder Bandeau Top', price: 29.99, image: './img/MicroBikiniOffShoulder.jpg' }
];

// WARENKORB SPEICHER-ARRAY
let cart = [];

let currentGender = 'all';
let currentType = 'all';

// INITIALISIERUNG BEIM START
document.addEventListener('DOMContentLoaded', () => {
    setupGenderTabs();
    setupCartEvents();
    renderFilters();
    renderProducts();
});

// EVENT-LISTENER FÜR GENDER SWITCH
function setupGenderTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            currentGender = e.target.getAttribute('data-gender');
            currentType = 'all'; 
            
            renderFilters();
            renderProducts();
        });
    });
}

// PRODUKTSCHNITTE DYNAMISCH FILTERN
function renderFilters() {
    const container = document.getElementById('filterTags');
    container.innerHTML = '';

    const availableTypes = ['all'];
    products.forEach(p => {
        if ((currentGender === 'all' || p.gender === currentGender) && !availableTypes.includes(p.type)) {
            availableTypes.push(p.type);
        }
    });

    availableTypes.forEach(type => {
        const btn = document.createElement('button');
        btn.className = `tag ${type === currentType ? 'active' : ''}`;
        btn.innerText = type === 'all' ? 'Alles anzeigen' : type;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            currentType = type;
            renderProducts();
        });

        container.appendChild(btn);
    });
}

// RENDERING DER PRODUKT-CARDS
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchGender = currentGender === 'all' || p.gender === currentGender;
        const matchType = currentType === 'all' || p.type === currentType;
        return matchGender && matchType;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">In dieser Kategorie sind aktuell keine Artikel verfügbar.</div>';
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const mediaHTML = p.image 
            ? `<img src="${p.image}" alt="${p.title}" class="product-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <div class="product-image-placeholder" style="display:none;">Bild fehlt im Ordner</div>`
            : `<div class="product-image-placeholder">${p.type}</div>`;

        card.innerHTML = `
            <div class="product-media-container">
                ${mediaHTML}
            </div>
            <div class="product-info">
                <div class="product-category">${p.gender} // ${p.type}</div>
                <div class="product-title">${p.title}</div>
                <div class="product-price">${p.price.toFixed(2).replace('.', ',')} €</div>
                <button class="buy-btn" onclick="addToCart(${p.id})">In den Warenkorb</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// =========================================
// WARENKORB STEUERUNGS-LOGIK
// =========================================

function setupCartEvents() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    // Öffnen über Header-Button
    document.getElementById('cartToggleBtn').addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('visible');
    });

    // Schließen über X-Button
    document.getElementById('closeCartBtn').addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    });

    // Schließen über Klick ins Dunkle
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    });

    // Kasse-Button Test-Klick
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if(cart.length === 0) {
            alert("Dein Warenkorb ist leer!");
        } else {
            alert("Vielen Dank! Deine Bestellung im Wert von " + calculateTotal() + " € wurde simuliert.");
            cart = [];
            updateCartUI();
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        }
    });
}

// FUNKTION: ARTIKEL HINZUFÜGEN
function addToCart(productId) {
    const productToAdd = products.find(p => p.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        updateCartUI();
        
        // Öffnet die Sidebar automatisch, damit der User sieht, dass es geklappt hat
        document.getElementById('cartSidebar').classList.add('open');
        document.getElementById('cartOverlay').classList.add('visible');
    }
}

// FUNKTION: ARTIKEL ENTFERNEN (Über den Index im Cart-Array)
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// FUNKTION: GESAMTSUMME BERECHNEN
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total.toFixed(2).replace('.', ',');
}

// FUNKTION: WARENKORB OBERFLÄCHE AKTUALISIEREN
function updateCartUI() {
    // 1. Zähler im Header anpassen
    document.getElementById('cartCount').innerText = cart.length;

    // 2. Gesamtpreis aktualisieren
    document.getElementById('cartTotalValue').innerText = calculateTotal() + " €";

    // 3. Artikelliste neu generieren
    const container = document.getElementById('cartItemsContainer');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty-msg">Dein Warenkorb ist noch leer.</div>';
        return;
    }

    // Für jedes Item im Warenkorb eine Zeile bauen
    cart.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        
        const imgHTML = item.image 
            ? `<img src="${item.image}" alt="${item.title}" class="cart-item-img">`
            : `<div class="cart-item-placeholder">Kein Bild</div>`;

        itemRow.innerHTML = `
            ${imgHTML}
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.price.toFixed(2).replace('.', ',')} €</div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">Löschen</button>
        `;
        container.appendChild(itemRow);
    });
}
