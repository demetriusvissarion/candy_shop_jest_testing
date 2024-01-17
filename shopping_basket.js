class ShoppingBasket {
    constructor() {
        this.candies = [];
        this.discount = 0;
    }

    applyDiscount(discount) {
        discount = this.discount;
    }

    getTotalPrice() {
        let sum = 0 // sum of all candy object prices
        this.candies.map((candy) => sum += candy.getPrice());
        return sum * (100 - this.discount) / 100
    }

    addItem(candy) {
        return this.candies.push(candy)
    }
}

module.exports = ShoppingBasket;