# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**figma-converter** converts Figma designs into Angular components using the Figma MCP server. It reads Figma design nodes via MCP tool calls and outputs Angular component files (TypeScript, HTML template, SCSS).

## Commands

```bash
# Install dependencies
npm install

# Development server
ng serve

# Build
ng build

# Run tests
ng test

# Run a single test file
ng test --include='**/path/to/file.spec.ts'

# Lint
ng lint
```

## Architecture

### Data Flow
Figma MCP → design node extraction → component analysis → Angular code generation → file output

### Key Concepts

**MCP Integration**: All Figma data is fetched through the Figma MCP server tools (e.g., `get_figma_data`, node traversal). No direct Figma REST API calls — MCP is the only data source.

**Component Generation Pipeline**:
1. Fetch design nodes from Figma via MCP
2. Analyze node tree (frames, components, auto-layout, styles)
3. Map Figma concepts to Angular equivalents:
   - Frames/Groups → Angular components
   - Auto-layout → Flexbox/Grid CSS
   - Text styles → Typography classes or CSS variables
   - Components/Instances → Reusable Angular components with `@Input()` bindings
   - Variants → `@Input()` props with conditional classes or `ngSwitch`
4. Emit `.component.ts`, `.component.html`, `.component.scss` files

**Output Structure**: Generated components are written to `src/app/generated/` by default, following Angular CLI naming conventions (`kebab-case.component.*`).

## Figma MCP Usage

Use MCP tools to fetch and traverse Figma nodes. Key operations:
- Fetch a node by file key + node ID
- Walk child nodes recursively to build the component tree
- Extract fills, strokes, typography, effects, and layout constraints

When a Figma node maps to a reusable component (i.e., it is a Figma Component or Instance), generate a standalone Angular component. For one-off frames, inline the markup.
