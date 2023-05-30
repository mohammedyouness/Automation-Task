export class Dashboard {
  searchBar() {
    return cy.get("#small-searchterms");
  }
  searchBoxButton() {
    return cy.get(".search-box-button");
  }
  searchResults() {
    return cy.get(".details .product-title a");
  }
  searchStore(searchKeyword) {
    this.searchBar().type(searchKeyword);
    this.searchBoxButton().click();
  }
  currencyDropdown() {
    return cy.get("select#customerCurrency");
  }
}
