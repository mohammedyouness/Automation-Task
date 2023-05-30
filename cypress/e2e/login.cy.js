import { Login } from "../support/pages/Login";
import { Header } from "../support/pages/Header";

const login = new Login();
const header = new Header();

describe("Login", function () {
  let data;
  beforeEach(() => {
    cy.fixture("userInfo.json").then((userInfo) => {
      data = userInfo;
    });
    cy.visit("");
    header.loginButton().click();
  });

  it("should redirect as a logged-in user to the home page", function () {
    login.login(data.email, data.password);
    header.myAccountButton().should("be.visible");
  });

  it("should reset his password", function () {
    login.forgotPasswordButton().click();
    login.email().type(data.email);
    login.recoverButton().click();
    login
      .recoverySuccessMsg()
      .should("contain.text", "Email with instructions has been sent to you.");
  });
});
