class ProductsPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.inventoryItems = page.locator('.inventory_item');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async verifyProductsPage() {
        await this.pageTitle.waitFor();
        return await this.pageTitle.textContent();
    }

    async selectProduct(productName) {

        const product = this.inventoryItems.filter({
            hasText: productName
        });

        await product.getByRole('button', {
            name: /add to cart/i
        }).click();
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

module.exports = ProductsPage;