// Check it out... it's a cart

function addItem(cart, item, quantity) {
    if (typeof item !== 'string' || typeof quantity !== 'number' || quantity <= 0) return cart;

    if (cart[item]) {
        cart[item] += quantity;
    } else {
        cart[item] = quantity;
    }

    return cart;
}

function removeItem(cart, item) {
    if (cart[item]) {
        delete cart[item];
    }
    return cart;
}

function getTotalItems(cart) {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

module.exports = { addItem, removeItem, getTotalItems };
