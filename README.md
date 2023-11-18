# koa-boilerplate
Koa Boilerplate/Template for node.js

#Node Version:
v16.17.0

### Features :
- Typescript Enabled
- Eslint Configured
- Auto indent on save using Prettier
- MySQL Connectivity
- Joi validation
- Error handling
- Swagger UI API Documenation

### Editor Configuration : [🔗](https://code.visualstudio.com/docs/languages/typescript#_code-actions-on-save)

Install following extensions (for VS Code):
- EditorConfig
- ESLint
- Prettier

For Automatically fixing code in VS Code Editor:

- Open `Settings.json`file using `Ctrl(cmd)+shift+P` and search for `Preferences: Open Settings (JSON)`
- Add/Update the following lines of code:
```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true,
    }
```
