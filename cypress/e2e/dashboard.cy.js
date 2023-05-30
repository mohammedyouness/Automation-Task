import { Login } from "../support/pages/Login";
import { Header } from "../support/pages/Header";
import { Dashboard } from "../support/pages/Dashboard";

const login = new Login();
const header = new Header();
const dashboard = new Dashboard();

describe("Login", function () {
  let data;
  beforeEach(() => {
    cy.fixture("userInfo.json").then((userInfo) => {
      data = userInfo;
    });
    cy.visit("");
    header.loginButton().click();
  });

  it("Logged User could search for any product", function () {
    login.login(data.email, data.password);
    dashboard.searchStore("Nikon D5500 DSLR");
    dashboard
      .searchResults()
      .first()
      .should("contain.text", "Nikon D5500 DSLR");
  });
});
