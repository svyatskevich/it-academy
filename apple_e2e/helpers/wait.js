function waitForExist(selector) {
    return (selector).should('exist');
}

function waitForVisible(selector) {
    return (selector).should('be.visible');
}



module.exports = { waitForExist, waitForVisible };