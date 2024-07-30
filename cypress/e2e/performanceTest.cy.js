// cypress/e2e/performanceTest.cy.js

describe('Three.js Performance Test', () => {
    it('should measure basic performance metrics', () => {
      cy.visit('https://threejs.org/examples/#webgl_instancing_performance');
  
      // Wait for the iframe to be visible
      cy.get('#viewer', { timeout: 20000 }).should('be.visible');
  
      // Access the iframe's content
      cy.get('#viewer').then(($iframe) => {
        const iframe = $iframe[0];
        const iframeWindow = iframe.contentWindow;
        
  
        // Ensure the iframe's content is accessible
        cy.wrap(iframeWindow).its('document').should('exist');
  
        // Wait for the iframe's body to be accessible
        cy.wrap(iframeWindow.document).find('body', { timeout: 20000 }).should('exist');
  
        // Measure Load Time using Performance Navigation Timing API
        cy.wrap(iframeWindow).then((win) => {
          if (win.performance && win.performance.timing) {
            const timing = win.performance.timing;
            const loadTime = timing.domContentLoadedEventEnd - timing.navigationStart;
            cy.log(`Load Time: ${loadTime}ms`);
            expect(loadTime).to.be.lessThan(5000); // e.g, threshold: 5 seconds
          } else {
            cy.log('Performance timing data is not available');
          }
        });
      });
    });
  });
