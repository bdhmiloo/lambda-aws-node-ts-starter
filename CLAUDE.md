# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `npm run build` - Cleans, installs dependencies, type-checks, bundles Lambda function with esbuild, builds layer, and creates zip artifacts
- **Dev Mode**: `npm run dev` - Runs nodemon for development (watch and restart on changes)
- **Test**: `npm run test` - Runs Jest tests silently without cache
- **Test with Coverage**: `npm run test:cov` - Runs Jest with coverage report
- **Lint**: `npm run lint` - Runs ESLint with auto-fix on TypeScript/JavaScript files
- **Type Check**: `npm run type-check` - Runs TypeScript compiler without emitting output
- **Clean**: `npm run clean` - Removes build and layer/nodejs directories
- **Clean Install**: `npm run clean:install` - Runs `npm ci` for clean dependency installation

## Project Structure

- **src/index.ts**: Main Lambda handler function that processes API Gateway events and returns JSON response
- **layer/**: Directory for Lambda layer dependencies (node_modules are copied here during build)
- **build/**: Output directory for bundled Lambda JavaScript file (index.js)
- **Configuration**: 
  - `tsconfig.json`: TypeScript configuration
  - `jest.config.ts`: Jest testing configuration
  - `eslint.config.js`: ESLint configuration
  - `build.mjs`: Esbuild configuration for Lambda bundling

## Architecture Overview

This is a TypeScript AWS Lambda starter project designed for API Gateway integration:
- The Lambda handler (`src/index.ts`) receives `APIGatewayProxyEvent` and returns `APIGatewayProxyResult`
- Dependencies are managed via Lambda layer (built in `layer/nodejs` during `build:layer` script)
- Build process uses esbundler to create a single, minified JavaScript file with sourcemaps
- Testing is configured with Jest and ts-jest for TypeScript support
- Code quality maintained with ESLint and Prettier integration

## Common Tasks

- To run a single test: `npm test -- <testNamePattern>` (Jest pattern matching)
- To debug locally: Use `npm run dev` which starts nodemon (assuming dev:start script is configured)
- To inspect built artifacts: Check `build/index.js` and `layer/nodejs/` after running `npm run build`