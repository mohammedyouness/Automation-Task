export class Header {
  registerButton() {
    return cy.contains("Register");
  }
  loginButton() {
    return cy.contains("Log in");
  }
  myAccountButton() {
    return cy.contains("My account");
  }
}
