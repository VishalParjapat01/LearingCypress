import LoginPage from "../../support/PageClasses/LoginPage";
import Logout from "../../support/PageClasses/Logout";
import link from "../../support/PageClasses/Link";
import Search from "../../support/PageClasses/Search";

describe('Orangetests', () => {


    // i have to create object of all the classes.

    const loginobj = new LoginPage();

    const linkobj = new link();

    const searchobj = new Search();

    const logoutobj = new Logout();

    
    it('test_01', () => {

        // enter url

        loginobj.Enterurl();

        // login

        loginobj.Logintoapp();

        // click on link

        //linkobj.clickonlink('Admin');

        // search

        searchobj.Searchitem('Buzz');

        // logout
        
        logoutobj.logoutofapp();

        // forgot 
        loginobj.Forgotpassword();
    });
});