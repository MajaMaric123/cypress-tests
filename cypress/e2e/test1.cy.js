import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login tests', function(){

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Login test 1', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    })
})    