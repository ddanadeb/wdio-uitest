const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get sideMenu () {
        return $('#react-burger-menu-btn')
    }
    get logoutLink () {
        return $('#logout_sidebar_link')
    }
}

module.exports = new InventoryPage();
