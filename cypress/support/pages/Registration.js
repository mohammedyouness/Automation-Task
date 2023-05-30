export class Registration {
  genderMale() {
    return cy.get("#gender-male");
  }
  firstName() {
    return cy.get("#FirstName");
  }
  lastName() {
    return cy.get("#LastName");
  }
  email() {
    return cy.get("#Email");
  }
  password() {
    return cy.get("#Password");
  }
  confirmPassowrd() {
    return cy.get("#ConfirmPassword");
  }
  registerButton() {
    return cy.get("#register-button");
  }
  completionMsg() {
    return cy.get(".result");
  }
  continueButton() {
    return cy.get("a.register-continue-button");
  }
  fillRegistrationForm(firstName, lastName, email, password, confirmPassword) {
    this.genderMale().click();
    this.firstName().type(firstName);
    this.lastName().type(lastName);
    this.email().type(email);
    this.password().type(password);
    this.confirmPassowrd().type(confirmPassword);
    this.registerButton().click();
  }
}
