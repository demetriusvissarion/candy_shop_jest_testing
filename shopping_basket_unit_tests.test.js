const Candy = require('./candy');
const ShoppingBasket = require('./shopping_basket');

jest.mock("./candy");


describe('Unit Tests for the ShoppingBasket', () => {
    beforeEach(() => {
        // Before each test, reset
        Candy.mockClear();
    });
    
    it('returns zero for the TotalPrice when the basket is empty', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });
    
    it('returns the TotalPrice when basket has one item at 4.99', () => {
        const basket = new ShoppingBasket();
        const doubleCandy = {
            name : 'Mars',
            price : 4.99,
            getName: () => { return doubleCandy.name },
            getPrice: () => { return doubleCandy.price },
        }

        basket.addItem(doubleCandy);
        expect(basket.getTotalPrice()).toEqual(4.99);
    });

    it('returns the TotalPrice when basket has multiple items', () => {
        const basket = new ShoppingBasket();

        const doubleCandy1 = {
            name : 'Mars',
            price : 4.99,
            getName: () => { return doubleCandy1.name },
            getPrice: () => { return doubleCandy1.price },
        }
        basket.addItem(doubleCandy1);

        const doubleCandy2 = {
            name : 'Skittle',
            price : 3.99,
            getName: () => { return doubleCandy2.name },
            getPrice: () => { return doubleCandy2.price },
        }
        basket.addItem(doubleCandy2);

        const doubleCandy3 = {
            name : 'Skittle',
            price : 3.99,
            getName: () => { return doubleCandy3.name },
            getPrice: () => { return doubleCandy3.price },
        }
        basket.addItem(doubleCandy3);

        expect(basket.getTotalPrice()).toEqual(12.97);
    });

});