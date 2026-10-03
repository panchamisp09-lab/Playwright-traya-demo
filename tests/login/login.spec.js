const { test, expect } = require('../../fixtures/testFixtures');
const testData = require('../../test-data/testData');

test.describe('SauceDemo Login', () => {

    test('Verify successful login @smoke', async ({
        page,
        loginPage,
        productsPage
    }) => {

        await test.step('Launch application', async () => {
            await loginPage.open();
        });

        await test.step('Login with valid credentials', async () => {
            await loginPage.login(
                testData.validUser.username,
                testData.validUser.password
            );
        });

        await test.step('Verify successful login', async () => {

            await expect(page).toHaveURL(/inventory/);

            const title = await productsPage.verifyProductsPage();

            await expect(title).toBe('Products');
        });
    });
});