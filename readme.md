# Unexpected Behavior: Cypress App Restarts When Navigating to a Superdomain Different from baseUrl, Causing before Hooks to Rerun

When navigating to a URL with a different superdomain than the baseUrl, the entire Cypress app unexpectedly restarts, causing the before hooks to run again. While it's expected for the browser to restart when no baseUrl is set, the Cypress app itself should not restart when navigating to a different superdomain.

## Install & Run

```
npm i
npx cypress open
// RUN EACH TEST INDIVIDUALLY USING `it.only()`, RESTARTING CYPRESS EACH TIME
```