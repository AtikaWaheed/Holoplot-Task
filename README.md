## Setup Instructions

### Prerequisites

- Docker installed on your machine

### Steps

1. Extract the contents of the zip file.

2. Open a terminal and navigate to the extracted directory.

    ```sh
    cd Holoplot-Project
    ```

3. Build the Docker image:

    ```sh
    docker build -t cypress-performance-test .
    ```

4. Run the tests:

    ```sh
    docker run --rm cypress-performance-test
    ```

This will build the Docker image and run the Cypress tests in a container.

## Test Details

The test checks the performance of the Three.js example at `https://threejs.org/examples/#webgl_instancing_performance`.

### Test File

- `cypress/e2e/performanceTest.cy.js`: Contains the Cypress test script.
