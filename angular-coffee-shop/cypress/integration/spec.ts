import "cypress-audit/commands";

before(function ()
       {
	   cy.log('spec before function')
       })

beforeEach(function ()
	   {
	       cy.log('spec beforeEach function')
	   })

describe('My First Test', () =>
{
    before(function ()
	   {
	       cy.log('describe before function')
	   })

    beforeEach(function ()
	       {
		   cy.log('describe beforeEach function')
	       })

    it('it1', () =>
    {
	cy.visit('/')
    })

    it('it2', () =>
    {
	cy.visit('/owner')
    })

    it('it3', () =>
    {
	cy.visit('/')
    })

    afterEach(function ()
	      {
		  cy.log('describe afterEach function')
	      })

    after(function ()
	  {
	      cy.log('describe after function')
	  })
})

afterEach(function ()
	  {
	      cy.log('spec afterEach function')
	  })

after(function ()
      {
	  cy.log('spec after function')
      })