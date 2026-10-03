class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.getByRole('button', {
            name: 'Continue'
        });

        this.finishButton = page.getByRole('button', {
            name: 'Finish'
        });

        this.orderConfirmation = page.locator('.complete-header');
    }

    async enterCustomerDetails(firstName, lastName, postalCode) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async completeOrder() {
        await this.finishButton.click();
    }

    async getConfirmationMessage() {
        return await this.orderConfirmation.textContent();
    }
}

module.exports = CheckoutPage;