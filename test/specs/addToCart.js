describe('Add To Cart Feature', () => {
    it('Add Item to Cart', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$('#user-name')
        const passwordTextbox = await browser.$('#password')
        const loginBtn = await browser.$('//input[@type="submit"]')
        const addToCartBtn = await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]')
        const cartIconBtn = await browser.$('//*[@id="shopping_cart_container"]/a/span')
        const itemText = await browser.$('//*[@id="item_4_title_link"]/div')

        await usernameTextbox.addValue('standard_user')
        await passwordTextbox.addValue('secret_sauce')
        await loginBtn.click()
        await addToCartBtn.click()
        await cartIconBtn.click()

        await browser.pause(5000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(browser).toHaveTitle('Swag Labs')
        await expect(itemText).toHaveText('Sauce Labs Backpack')
    })
})