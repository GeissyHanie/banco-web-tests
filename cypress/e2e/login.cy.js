describe("Login", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("/");
    cy.screenshot('apos-visitar-a-pagina');
  });

  it("Login com dados válidos deve permitir entrada no sistema", () => {
    //Act
    cy.fazerLoginComCredenciaisValidas();

    cy.screenshot('apos-preencher-os-dados-de-login-validos');
    
    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados inválidos deve apresentar mensagem de erro", () => {
    //Act
    cy.fazerLoginComCredenciaisInvalidas();

    //Assert
    cy.verificarMensagemNoToast("Erro no login. Tente novamente.");
  });
});
