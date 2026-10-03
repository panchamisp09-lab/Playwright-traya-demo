class CartPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.getByRole('button', {
            name: 'Checkout'
        });
    }

    async verifyProduct(productName) {

        const product = this.cartItems.filter({
            hasText: productName
        });

        return await product.isVisible();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;