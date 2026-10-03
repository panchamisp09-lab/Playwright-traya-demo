class Header {

    constructor(page) {
        this.page = page;

        this.cart = page.locator('.shopping_cart_link');

        this.menuButton = page.locator('#react-burger-menu-btn');

        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async openCart() {
        await this.cart.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}

module.exports = Header;