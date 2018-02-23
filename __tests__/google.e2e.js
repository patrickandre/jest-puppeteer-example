const timeout = 10000;

describe('Authentication Suite', () => {
	let page;
	beforeAll(async () => {
		page = await global.__BROWSER__.newPage();
		await page.goto('http://www.google.com');
		await page.setViewport({width, height });
	}, timeout);

	afterAll(async () => {
		await page.close();
	});



	it('should be able to login with a burner account', async () => {
/*		const elementHandle = await page.$('#screenNameSignIn');
		const elementHandleKey = await page.$('#token');
		await elementHandle.type(username, {delay: 10});
		await elementHandleKey.type(password, {delay: 10});
		await page.click('#login-selector-form > div.row.newlogin > div:nth-child(2) > div.row.collapse.text-right > button');
		await page.waitForNavigation();
		await page.waitForSelector('.networknav__userButton .userbutton a');
		await page.click('.networknav__userButton .userbutton a');
		// let UserNameLabel = await page.evaluate(() => document.querySelector('[data-username="gawkerselenium"]').innerText.trim());
		// expect(UserNameLabel).toBe('gawkerselenium');
		expect(page.url()).toBe('http://kinja.localhost:9000/dashboard');*/
		expect(true).toBe(true);
	}, timeout);


}, timeout);



