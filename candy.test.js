const Candy = require('./candy');

describe('candy', () => {
    const candy = new Candy('Mars', 4.99);
    it('returns the name of a candy', () => {
        expect(candy.getName()).toEqual('Mars');
    });
    it('returns the price of a candy', () => {
        expect(candy.getPrice()).toEqual(4.99);
    });
});