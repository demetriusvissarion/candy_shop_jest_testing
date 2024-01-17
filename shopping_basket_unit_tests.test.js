const Candy = require('./candy');
const ShoppingBasket = require('./shopping_basket');

jest.mock("./Trainer");


describe('candy', () => {
    beforeEach(() => {
        // Before each test, reset
    });
    
    it('returns zero for the TotalPrice when the basket is empty', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });
    
    it('returns the TotalPrice when basket has one item at 4.99', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        basket.addItem(candy);
        expect(basket.getTotalPrice()).toEqual(4.99);
    });

    it('returns the TotalPrice when basket has one item at 4.99', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        basket.addItem(candy);
        basket.addItem(new Candy('Skittle', 3.99));
        basket.addItem(new Candy('Skittle', 3.99));
        expect(basket.getTotalPrice()).toEqual(12.97);
    });
});
