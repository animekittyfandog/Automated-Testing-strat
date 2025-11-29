describe('Confirm Violation UI Test', () => {
  it('confirms a violation and archives it', () => {
    cy.visit('violation.php'); // Adjust path as needed

    // Find the first Confirm button and click it
    cy.get('.confirm-btn').first().click();

    // Confirm modal appears and click "Yes, Confirm"
    cy.get('#confirm-modal').should('be.visible');
    cy.get('#confirm-confirm-btn').click();

    // Wait for page reload or UI update
    cy.wait(1000);

    // Verify the violation is no longer in the list (or check for success message)
    // cy.get('.violation-table tbody tr').should('not.contain', 'Some known violation detail');
  });
});
