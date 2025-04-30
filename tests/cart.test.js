// Check it out... it's a test... of the cart

const { addItem, removeItem, getTotalItems } = require('../cart');

describe('Shopping Cart Module', () => {
    let cart;

    beforeEach(() => {
        cart = {};
    });

    // add item
    test('adds a new item with valid quantity', () => {
        addItem(cart, 'apple', 3);
        expect(cart.apple).toBe(3);
    });

    test('adds to existing item quantity', () => {
        cart.apple = 2;
        addItem(cart, 'apple', 1);
        expect(cart.apple).toBe(3);
    });

    test('does not add item with negative quantity', () => {
        addItem(cart, 'banana', -2);
        expect(cart.banana).toBeUndefined();
    });

    test('does not add item with 0 quantity', () => {
        addItem(cart, 'grape', 0);
        expect(cart.grape).toBeUndefined();
    });

    // remove item.
    test('removes an item that exists', () => {
        cart.orange = 4;
        removeItem(cart, 'orange');
        expect(cart.orange).toBeUndefined();
    });

    test('does nothing if item does not exist', () => {
        removeItem(cart, 'ghost');
        expect(Object.keys(cart).length).toBe(0);
    });

    test('removes the last item in cart', () => {
        cart.pear = 1;
        removeItem(cart, 'pear');
        expect(getTotalItems(cart)).toBe(0);
    });

    // getTotalItems
    test('returns total item quantity', () => {
        cart.apple = 2;
        cart.banana = 5;
        expect(getTotalItems(cart)).toBe(7);
    });

    test('returns 0 when cart is empty', () => {
        expect(getTotalItems(cart)).toBe(0);
    });

    test('handles large quantities', () => {
        cart.toys = 100000;
        cart.books = 500000;
        expect(getTotalItems(cart)).toBe(600000);
    });
});
