import { Registration } from "../support/pages/Registration";
import { Header } from "../support/pages/Header";

const registration = new Registration();
const header = new Header();

describe("Registration", function () {
  let data;
  before(() => {
    cy.fixture("userInfo.json").then((userInfo) => {
      data = userInfo;
    });
    cy.visit("");
    header.registerButton().click();
  });

  it("should redirect to the home page after confirming the registration completed message", function () {
    registration.fillRegistrationForm(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.confirmPassword
    );
    registration
      .completionMsg()
      .should("contain.text", "Your registration completed");

    registration.continueButton().should("be.visible").click();
  });
});
