describe("template spec", () => {
  // it("Task 1 - Verify Page Loads Correctly", () => {
  //   cy.visit("https://example.com");
  //   cy.contains("h1", "Example Domain");
  // });

  // it("Task 2: Login – Valid Credentials", () => {
  //   cy.visit("https://the-internet.herokuapp.com/login");
  //   cy.contains("Login Page");
  //   cy.get("#username").type("tomsmith");
  //   cy.get("#password").type("SuperSecretPassword!");
  //   cy.get('button[type="submit"]').click();
  //   cy.contains("You logged into a secure area!").should("be.visible");
  // });
  // it("Task 3: Login – Invalid Credentials", () => {
  //   cy.visit("https://the-internet.herokuapp.com/login");
  //   cy.contains("Login Page");
  //   cy.get("#username").type("wrong");
  //   cy.get("#password").type("wrong");
  //   cy.get('button[type="submit"]').click();
  //   cy.contains("You logged into a secure area!").should("be.visible");
  // });
  // it("Task 4: Checkbox Interaction", () => {
  //   cy.visit("https://the-internet.herokuapp.com/checkboxes");
  //   // cy.get('input[type="checkbox"]').eq(0)
  //   // .uncheck().should('not.be.checked');
  //   // cy.get('input[type="checkbox"]').eq(1)
  //   //   .uncheck();

  //   // Check the first checkbox
  //   cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");

  //   // Uncheck the second checkbox
  //   cy.get('input[type="checkbox"]').eq(1).uncheck().should("not.be.checked");
  // });
  
  // it("Task 5: Form Submission Validation", () => {
  //   cy.visit("https://demoqa.com/text-box")
  //   cy.get("#userName").type("Smriti Shrestha")
  //   cy.get("#userEmail").type("Smritishrestha058@gmail.com")
  //   // cy.get("#currentAddress").type("Bhaktapur")
  //   // cy.get("#permanentAddress").type("bhaktapur")
  //   cy.get("#submit").click();
  // })

  it("task 1", ()=> {
    cy.visit('https://demoqa.com/text-box');
    cy.url("text-box");
    cy.get("#submit").should("be.Visible");
  })
  

  // it("Check Youtube Search Bar", () => {
  //   cy.visit("https://www.youtube.com/");
  //   cy.get(".ytSearchboxComponentInput").type("cortis");
  //   cy.get(".ytSearchboxComponentSearchButton").click();
  // })
});
