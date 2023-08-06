### Features
+ TypeScript and Express.js were used.
+ **Nodemon** was used for hot reloading.
+ During development, the command npx **ts-node ./src/index.ts** was used to run the project   with hot reloading.
+ For production builds, the following command was used: rimraf **./build && tsc**.
+ **TypeDI** was used for automatic dependency management.
+ **Clean architecture** will follow




### Script used
```bash
"test": "echo \"Error: no test specified\" && exit 1",
"start:dev": "npx nodemon",
"build": "rimraf ./build && tsc",
"start": "npm run build && node build/index.js",
"lint": "eslint . --ext .ts",
"lint-and-fix": "eslint . --ext .ts --fix"
```

```bash
├── app.ts
├── config
├── exception
│   └── api_error.ts
├── index.ts
├── lib
├── middleware
│   ├── error_converter.ts
│   └── error_handler.ts
└── modules
    └── user
        ├── user.controller.ts
        ├── user.model.ts
        ├── user.route.ts
        └── user.service.ts
```

