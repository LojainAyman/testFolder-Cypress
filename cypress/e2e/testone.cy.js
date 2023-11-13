
/// <reference types= "cypress" />

describe('this is to test the log in page',()=>{
  it('test log in with correct username and correct passward',()=>{
    cy.visit("https://www.google.com")
  })

  it('test log in with correct username and incorrect passward',()=>{
    cy.visit("https://www.google.com")
    cy.get('#APjFqb').type("lojain ayman{enter}")
    // cy.get('.FPdoLc > center > .gNO89b').click()
  })

})