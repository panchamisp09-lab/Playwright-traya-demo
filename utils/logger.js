function logInfo(message) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
}

function logError(message) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
}

function logStep(message) {
    console.log(`[STEP] ${message}`);
}

module.exports = {
    logInfo,
    logError,
    logStep
};

const {
    logInfo,
    logStep
} = require('../../utils/logger');

logStep('Logging into SauceDemo');

logInfo('Login completed successfully');