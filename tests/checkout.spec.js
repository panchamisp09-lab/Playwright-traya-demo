const { test, expect } = require('../fixtures/testFixtures');

const testData = require('../test-data/testData');

test.describe('SauceDemo End-to-End Checkout', () => {

    test('Complete product purchase successfully @smoke @regression', async ({
        page,
        loginPage,
        productsPage,
        cartPage,
        checkoutPage
    }) => {

        await test.step('Launch application', async () => {

            await loginPage.open();

            await expect(page).toHaveTitle(
                'Swag Labs'
            );
        });

        await test.step('Login', async () => {

            await loginPage.login(
                testData.validUser.username,
                testData.validUser.password
            );

            await expect(page).toHaveURL(
                /inventory/
            );
        });

        await test.step('Verify successful login', async () => {

            const title =
                await productsPage.verifyProductsPage();

            await expect(title).toBe('Products');
        });

        await test.step('Select product', async () => {

            await productsPage.selectProduct(
                testData.product.name
            );
        });

        await test.step('Verify product added to cart', async () => {

            const cartCount =
                await productsPage.getCartCount();

            await expect(cartCount).toBe('1');
        });

        await test.step('Open cart', async () => {

            await productsPage.openCart();

            await expect(page).toHaveURL(
                /cart/
            );
        });

        await test.step('Verify cart details', async () => {

            const productVisible =
                await cartPage.verifyProduct(
                    testData.product.name
                );

            await expect(productVisible).toBeTruthy();
        });

        await test.step('Proceed to checkout', async () => {

            await cartPage.checkout();

            await expect(page).toHaveURL(
                /checkout-step-one/
            );
        });

        await test.step('Enter customer details', async () => {

            await checkoutPage.enterCustomerDetails(
                testData.checkoutUser.firstName,
                testData.checkoutUser.lastName,
                testData.checkoutUser.postalCode
            );
        });

        await test.step('Continue checkout', async () => {

            await checkoutPage.continueCheckout();

            await expect(page).toHaveURL(
                /checkout-step-two/
            );
        });

        await test.step('Complete checkout', async () => {

            await checkoutPage.completeOrder();
        });

        await test.step('Verify order confirmation', async () => {

            const confirmation =
                await checkoutPage.getConfirmationMessage();

            await expect(confirmation).toBe(
                'Thank you for your order!'
            );

            await expect(page).toHaveURL(
                /checkout-complete/
            );
        });
    });
});