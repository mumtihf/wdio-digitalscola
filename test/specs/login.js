describe('Login Feature', () => {
    it('Login Successful', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$('#user-name')
        const passwordTextbox = await browser.$('#password')
        const loginBtn = await browser.$('//input[@type="submit"]')

        await usernameTextbox.addValue('standard_user')
        await passwordTextbox.addValue('secret_sauce')
        await loginBtn.click()

        await browser.pause(5000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
    })
})