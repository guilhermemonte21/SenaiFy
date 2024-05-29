describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.viewport("iphone-xr");
  });

  it("Visualizar playlists e executar uma música", () => {
    cy.get("[aria-label='title-head']").contains("Good morning");
    cy.get("[aria-label='playlist-item']");
    cy.get("[aria-label='playlist-item']").eq(0).click();
    cy.wait(1000);
    cy.get("[aria-label='music-item']");
    cy.get("[aria-label='music-item']").eq(1).click();
  });

  it("Navegar entre playlists e executar outra música", () => {
    cy.get(".r-alignItems-1habvwh > .r-transitionProperty-1i6wzkk").click();
    cy.get("[aria-label='playlist-item']").eq(1).click();
    cy.wait(1000);
    cy.get("[aria-label='music-item']");
    cy.get("[aria-label='music-item']").eq(1).click();
  });

  it("Procurar e favoritar uma música", () => {
    cy.get(
      '[href="/Search"] > .r-flex-13awgt0 > [style="opacity: 1;"] > .css-view-175oi2r'
    ).click();
    cy.get(".css-textinput-11aywtz")
      .click()
      .wait(1500)
      .type("master of puppets");

    cy.get("[aria-label='search-item']").wait(3000);
    cy.get("[aria-label='search-item']")
      .eq(0)
      .get('[style="margin-top: 15px; padding-bottom: 150px;"] > :nth-child(1) > .r-flexDirection-18u37iz > .r-transitionProperty-1i6wzkk')
      .click();
  });

  it("Verificar música favoritada na tela de Favoritos", () => {
    cy.get('[href="/Favorites"]').click();
    cy.get("[aria-label='favorite-item']");
    cy.get("[aria-label='favorite-item']").eq(0).click();
  });
});
