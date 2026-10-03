const testData = {
    validUser: {
        username: process.env.SAUCE_USERNAME,
        password: process.env.SAUCE_PASSWORD
    },

    invalidUser: {
        username: 'invalid_user',
        password: 'invalid_password'
    },

    checkoutUser: {
        firstName: 'Panchami',
        lastName: 'Test',
        postalCode: '560001'
    },

    product: {
        name: 'Sauce Labs Backpack'
    }
};

module.exports = testData;