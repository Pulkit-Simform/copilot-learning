# Development Instructions

## Architecture
This is a monolithic NestJS application built with the NestJS framework. All features are contained within a single codebase for simplicity and ease of development.

## Coding Standards
- **Language**: TypeScript
- **Linting**: Follow ESLint configuration in `eslint.config.mjs`
- **Formatting**: Use Prettier with `.prettierrc` configuration
- **Naming Conventions**: Use camelCase for variables/functions, PascalCase for classes/interfaces
- **Imports**: Use absolute imports where possible

## Project Structure
```
src/
├── app.controller.ts    # Main application controller
├── app.module.ts        # Root application module
├── app.service.ts       # Main application service
└── [feature-modules]/   # Feature-specific modules
```

## Adding New Features
To maintain standardization and consistency:

1. **Create a Module**:
   ```bash
   nest g module feature-name
   ```

2. **Add Controller**:
   ```bash
   nest g controller feature-name
   ```

3. **Add Service**:
   ```bash
   nest g service feature-name
   ```

4. **Update App Module**:
   Import and add the new module to `app.module.ts`

5. **Add Tests**:
   - Unit tests for services
   - E2E tests for controllers
   - Run tests with `npm run test`

## Database Integration
- Use TypeORM or Mongoose for database operations
- Define entities/models in separate files
- Use repository pattern for data access

## API Design
- Follow RESTful conventions
- Use DTOs for request/response validation
- Implement proper error handling with NestJS exceptions

## Security
- Implement authentication/authorization as needed
- Use guards for route protection
- Validate inputs using class-validator

## Deployment
- Build the application: `npm run build`
- Run in production: `npm run start:prod`
- Use environment variables for configuration

## Best Practices
- Keep controllers thin, business logic in services
- Use dependency injection
- Implement logging with NestJS Logger
- Write comprehensive tests
- Document APIs with Swagger if needed