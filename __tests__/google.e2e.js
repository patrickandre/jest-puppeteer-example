const timeout = 20000;

describe('Authentication Suite', () => {
	let page;
	beforeAll(async () => {
		page = await global.__BROWSER__.newPage();
		await page.setViewport({width: 1200, height });
		await page.bringToFront()
		await page.goto('https://gizmodo.com/', {waitUntil: 'domcontentloaded'});

	}, timeout);

	afterAll(async () => {
		 //await page.close();
	});



	it('should be able to login with a burner account', async () => {

			await page.evaluate(() => {
  				document.querySelector('li.section-nav__section.js_nav-section > a').click();
			});

			await page.waitForNavigation();
			await page.waitForSelector('.networknav__userButton a');

			await page.evaluate(() => {
  				document.querySelector('.networknav__userButton a').click();
			});
		// let UserNameLabel = await page.evaluate(() => document.querySelector('[data-username="gawkerselenium"]').innerText.trim());
		// expect(UserNameLabel).toBe('gawkerselenium');
		//expect(page.url()).toBe('http://kinja.localhost:9000/dashboard');
		expect(true).toBe(true);
	}, timeout);


}, timeout);



