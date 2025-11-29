describe('Confirm Violation UI Test', () => {
  beforeEach(() => {
    cy.visit('/violation.php');
  });

  it('opens confirmation modal, confirms a violation, and archives it', () => {
    // Find the first confirm button and click it to open modal
    cy.get('.confirm-btn', { timeout: 10000 }).first().click();

    // Confirm modal should appear
    cy.get('#confirm-modal').should('be.visible');

    // Click the confirm button inside the modal
    cy.get('#confirm-confirm-btn').click();

    // Optionally, check for success message or that the row is removed/reloaded
    // cy.get('#confirm-modal').should('not.be.visible');

    // You can add assertions here to verify the violation was archived
  });
});






// describe('Confirm Violation UI Test', () => {
//   it('opens confirmation modal, confirms a violation, and archives it', () => {

//     // Visit the page
//     cy.visit('violation.php');

//     // Wait for table and confirm buttons to appear
//     cy.get('.confirm-btn', { timeout: 5000 })
//       .should('exist')
//       .and('have.length.greaterThan', 0);

//     // Select the first row and store it
//     cy.get('.violation-table tbody tr').first().as('firstRow');

//     // Click confirm button inside that row
//     cy.get('@firstRow').find('.confirm-btn').click();

//     // Confirmation modal should appear
//     cy.get('#confirm-modal')
//       .should('be.visible')
//       .within(() => {
//         cy.contains('Are you sure you want to confirm this violation?');
//       });

//     // Click the confirmation button
//     cy.get('#confirm-confirm-btn').click();

//     // Wait for the page reload
//     cy.wait(1500);

//     // The row should be gone (archived)
//     cy.get('@firstRow').should('not.exist');
//   });
// });




// describe('Confirm Violation UI Test', () => {
//   it('confirms a violation and archives it', () => {
//     cy.visit('violation.php'); // Adjust path as needed

//     // Find the first Confirm button and click it
//     cy.get('.confirm-btn').first().click();

//     // Confirm modal appears and click "Yes, Confirm"
//     cy.get('#confirm-modal').should('be.visible');
//     cy.get('#confirm-confirm-btn').click();

//     // Wait for page reload or UI update
//     cy.wait(1000);

//     // Verify the violation is no longer in the list (or check for success message)
//     // cy.get('.violation-table tbody tr').should('not.contain', 'Some known violation detail');
//   });
// });
