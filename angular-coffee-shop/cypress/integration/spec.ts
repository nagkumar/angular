describe('My First Test', () =>
{
    it('Visits the initial project page', () =>
    {
	cy.visit('/')
	cy.contains('Your Order')
	cy.contains('Make Payment')
    })
})
