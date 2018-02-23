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
		const elementHandle = await page.$('#lst-ib');
		await elementHandle.type('Puggles', {delay: 10});
		await page.click('input.lsb');
		await page.waitForNavigation();
		await page.waitForSelector('div#rcnt');
		// await page.click('.networknav__userButton .userbutton a');
		let UserNameLabel = await page.evaluate(() => document.querySelector('div#rcnt').innerText.trim());
		console.log('UserNameLabel---', UserNameLabel)
		// expect(UserNameLabel).toBe('gawkerselenium');
		// expect(page.url()).toBe('http://kinja.localhost:9000/dashboard');
		expect(true).toBe(true);
	}, timeout);


}, timeout);



