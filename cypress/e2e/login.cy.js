describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
    cy.screenshot('apos-visitar-a-pagina');
  });

  it("Login com dados válidos deve permitir entrada no sistema", () => {
    //Act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.valida.usuario);
      cy.get("#senha").click().type(credenciais.valida.senha);
    });

    cy.screenshot('apos-preencher-os-dados-de-login-validos');
    cy.contains("button", "Entrar").click();
    cy.screenshot('apos-clicar-no-botao-entrar');

    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados inválidos deve apresentar mensagem de erro", () => {
    //Act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.invalida.usuario);
      cy.get("#senha").click().type(credenciais.invalida.senha);
    });
    cy.contains("button", "Entrar").click();

    //Assert
    cy.get("#toast-container > div").should("have.text", "Erro no login. Tente novamente.");
  });
});
