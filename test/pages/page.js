/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page  {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
    get logout () {
        return $('input[type="logout_sidebar_link"]'); //ovde vrv treba href
    }
    async logout (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.logout.click();
    }
   
    }
  
       
        
    

