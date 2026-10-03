const { defineConfig, devices } = require('@playwright/test');
const environments = require('./config/environments');
require('dotenv').config();

const environment = process.env.ENV || 'qa';

module.exports = defineConfig({

    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5000
    },

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }]
    ],

    use: {
        baseURL: environments[environment].baseURL,

        headless: true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure',

        actionTimeout: 10000,

        navigationTimeout: 30000,

        viewport: {
            width: 1440,
            height: 900
        }
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        }
    ]
});