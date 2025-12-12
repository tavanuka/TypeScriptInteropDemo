This repository demonstrates the new .NET 10 feature in Blazor which adds an interesting new feature for creating JS objects witha constructor.
It also incorporates usage of TypeScript as a middleman to further enhance type safety for usage with this feature.

## Prerequisites
- Latest .NET 10 SDK installed
- Node.js installed (I have 22.13.1, but doesn't matter)

## Starting the project
Build the application and navigate to the root of the repository and run this command:
```cmd
npm install
```

This will install all node dependencies and further child dependencies described in the workspaces array of `package.json`.
Then, from your IDE or .NET CLI run it with the launch configuration for `TypeScriptInteropDemo` with https.