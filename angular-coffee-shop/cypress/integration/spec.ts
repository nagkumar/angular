import "cypress-audit/commands";

describe('My First Test', () =>
{
    it('Visits the initial project page', () =>
    {
	cy.visit('/')
	cy.contains('Your Order')
	cy.contains('Make Payment')

	const customThresholds: any = {
	    performance: 1,
	    accessibility: 50,
	    seo: 70,
	    'first-contentful-paint': 10000,
	    'largest-contentful-paint': 10000,
	    'cumulative-layout-shift': 0.9,
	    'total-blocking-time': 10000,
	};

	const desktopConfig: any = {
	    formFactor: 'desktop',
	    screenEmulation: {disabled: true},
	};

	(cy as any).lighthouse(customThresholds, desktopConfig);
	// (cy as any).lighthouse();
	// (cy as any).pa11y()
    })
})

