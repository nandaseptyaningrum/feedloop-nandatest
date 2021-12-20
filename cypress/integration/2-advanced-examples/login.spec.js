describe('Login Test',() =>{

    it('Failed login with valid username invalid password',() =>{
        cy.visit('https://stg-console.qore.sh/')
        cy.get(':nth-child(1) > .relative > .form-input-control').type('rozak@feedloop.io')
        cy.get('.flex-col.pt-4 > .relative > .form-input-control').type('12345667')
        cy.get('.bg-blue-600').click()
        cy.get('.bg-red-200').contains('Wrong email and password combination')
    })
    
    it('Success Login',() =>{
        cy.visit('https://stg-console.qore.sh/')
        cy.get(':nth-child(1) > .relative > .form-input-control').type('rozak@feedloop.io')
        cy.get('.flex-col.pt-4 > .relative > .form-input-control').type('abcd1234')
        cy.get('.bg-blue-600').click()
        cy.get('.ant-layout-header > .bg-white').contains('Workspace')
    })
})