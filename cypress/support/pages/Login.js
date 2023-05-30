export class Login {
  email() {
    return cy.get("#Email");
  }
  password() {
    return cy.get("#Password");
  }
  loginButton() {
    return cy.get("button.login-button");
  }
  forgotPasswordButton() {
    return cy.contains("Forgot password?");
  }
  recoverButton() {
    return cy.get(".password-recovery-button");
  }
  recoverySuccessMsg() {
    return cy.get(".bar-notification .content");
  }
  login(email, password) {
    this.email().type(email);
    this.password().type(password);
    this.loginButton().click();
  }
}
