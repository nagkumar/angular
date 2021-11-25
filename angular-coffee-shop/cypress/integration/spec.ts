describe('My First Test', () =>
{
    it('Visits the initial project page', () =>
    {
	cy.visit('/')
	cy.contains('Your Order')
	cy.contains('Make Payment')

	const customThresholds = {
	    performance: 50,
	    accessibility: 50,
	    seo: 70,
	    'first-contentful-paint': 2000,
	    'largest-contentful-paint': 3000,
	    'cumulative-layout-shift': 0.1,
	    'total-blocking-time': 500,
	};

	const desktopConfig = {
	    formFactor: 'desktop',
	    screenEmulation: {disabled: true},
	};
	(cy as any).lighthouse(customThresholds, desktopConfig)
    })
})
