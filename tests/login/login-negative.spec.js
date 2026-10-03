const { test, expect } = require('../../fixtures/testFixtures');
const testData = require('../../test-data/testData');

test.describe('SauceDemo Login Negative Scenarios', () => {

    test('Verify login with invalid credentials @negative', async ({
        loginPage
    }) => {

        await loginPage.open();

        await loginPage.login(
            testData.invalidUser.username,
            testData.invalidUser.password
        );

        const errorMessage = await loginPage.getErrorMessage();

        await expect(errorMessage)
            .toContain('Username and password do not match');
    });
});