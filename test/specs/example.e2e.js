const InventoryPage = require('../pages/inventory.page');
const LoginPage = require('../pages/login.page');



describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open();

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     await expect(SecurePage.flashAlert).toBeExisting();
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!');
    // });
  it ('should login certain user', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(browser).toHaveUrl(browser.options.baseUrl + 'inventory.html');
  })


    it("should logout and redirect to another page(home page)", async () => {
        // await inventory.open();
        // await inventory.logout('standard_user')
        // await inventory.inputUsername.setValue('standard_user')
        // clickLogout = logout.Logout(browser.options.baseUrl + 'inventory.html')
        // logout.clickLogout().click();
        //click on hamburger menu
        await InventoryPage.sideMenu.click();
        //click on logout
        await InventoryPage.logoutLink.click();
        //treba da se pojavi stranica koju kliknemo na logout - saucedemo.com (homepage) page show up
        await expect(browser).toHaveUrl(browser.options.baseUrl);
    });

});


