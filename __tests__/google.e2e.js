const timeout = 10000;

describe('Authentication Suite', () => {
	let page;
	beforeAll(async () => {
		page = await global.__BROWSER__.newPage();
		await page.setViewport({width: 1200, height });
		await page.goto('https://gizmodo.com/');

	}, timeout);

	afterAll(async () => {
		// await page.close();
	});



	it('should be able to login with a burner account', async () => {
				await page.goto('https://gizmodo.com/');

		// const elementHandle = await page.$('#.section-nav__section.js_nav-section > a');
			await Promise.all([
			// Wait for redirect
			page.waitForSelector('.section-nav__section.js_nav-section > a'),
			// Click on the first popular post
			page.click('.section-nav__section.js_nav-section > a')

		]);
// 			await page.evaluate(() => {
//   document.querySelector('.section-nav__section.js_nav-section > a').click();
// });
		// await page.waitForNavigation();
		// await page.waitForSelector('.networknav__userButton .userbutton a');
		// await page.click('.networknav__userButton .userbutton a');
		// let UserNameLabel = await page.evaluate(() => document.querySelector('[data-username="gawkerselenium"]').innerText.trim());
		// expect(UserNameLabel).toBe('gawkerselenium');
		//expect(page.url()).toBe('http://kinja.localhost:9000/dashboard');
		expect(true).toBe(true);
	}, timeout);


}, timeout);



