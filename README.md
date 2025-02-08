**Step-1**:
Clone the repo >> **git clone https://github.com/noyonsarder/devSpike_Playwright_e2e.git**

**Step-2**:
Install:  npm install @cucumber/cucumber

if you see any error like below >>
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/cucumber-js - Not found

**Step-3**:
Finally, run the tests >> **npx cucumber-js**

**Explanation of the key folder structure:**

**features**:
This folder contains Gherkin files (.feature files), where test scenarios are written in a human-readable language

**step_definitions**:
This folder contains the step definition files, where the actual code to implement the steps defined in the Gherkin files is written.

**support**:
Hooks are set up there to initialize a page before each scenario runs.
