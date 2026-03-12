describe('template spec', () => {
  // it('Task 1: Home Page Check', () => {
  //   cy.visit('https://the-internet.herokuapp.com/')
  //   cy.contains("h1", "Welcome to the-internet")
  //   cy.contains("a", "Form Authentication").click();
  //   cy.url("login");
  //   // cy.get("Login").should("be.visible");
  //   // cy.get("#username").type("tomsmith");
  //   // cy.get("#password").type("SuperSecretPassword!");
  //   cy.login('tomsmith', 'SuperSecretPassword!')
  //   cy.contains("a", "Logout").click();
  //   cy.contains("You logged out of the secure area!");
  //   // cy.get("#username").should("be.visible");
  //   // cy.get("#password").should("be.visible");
  //   // cy.contains("button", "Login")

  // })
  // it("Wrong Credentials", () => {
  //   cy.visit('https://the-internet.herokuapp.com/login')

  //   cy.get("#username").type("tom");
  //   cy.get("#password").type("Super");
  //   cy.get("button[type='submit']").click();
  //   cy.contains("You logged into a secure area!");

  // })
  // it("Checkbox Handling", () => {
  //   cy.visit("https://the-internet.herokuapp.com/")
  //   cy.contains("a", "Dropdown").click();
  //   cy.select("#dropdown").get("option").eq(1).click();

  // })

  // it("JavaScript Alerts", () => {
  //   cy.visit("https://the-internet.herokuapp.com/")
  //   cy.contains("a", "JavaScript Alerts").click();
  //   cy.get("button").eq(0).click();
  //   cy.contains("You successfully clicked an alert");
  // })
  it('Childwear', () => {
    cy.visit("http://localhost/child/index.php");
  })
})