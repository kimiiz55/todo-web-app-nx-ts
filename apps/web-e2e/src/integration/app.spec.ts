import { getGreeting } from '../support/app.po';

describe('web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Simple Todos 😎🎉');
  });

  it('should show reqired message ', () => {

    cy.get('button[id="add-task-button"]').click()

    cy.get('form[id="form-modal"]')

    cy.get('input[name="title"]')

    cy.get('span[id="reqired-title"]').should('not.exist')

    cy.get('input[name="dueDate"]')

    cy.get('span[id="reqired-due-date"]').should('not.exist')

    cy.get('button[id="form-modal-submit-button"]').click()

    cy.get('span[id="reqired-title"]')

    cy.get('span[id="reqired-due-date"]')

    cy.get('input[name="title"]').type('This is Task Title')

    cy.get('span[id="reqired-title"]').should('not.exist')

    cy.get('input[name="dueDate"]').type('2020-12-31')

    cy.get('span[id="reqired-due-date"]').should('not.exist')
  });
});
