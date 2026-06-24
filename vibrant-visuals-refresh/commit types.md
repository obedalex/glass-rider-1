# Conventional Commit Types Guide

A quick reference guide for commonly used Git commit types based on the Conventional Commits style.

---

# Core Commit Types

## `feat`

Used when adding a new feature.

### Example

```bash
feat: add dark mode toggle
```

### Common Uses
- New pages
- New components
- New API integrations
- New functionality

---

## `fix`

Used for bug fixes.

### Example

```bash
fix: resolve cart quantity duplication
```

### Common Uses
- Logic bugs
- UI issues
- API errors
- Broken functionality

---

## `refactor`

Used when restructuring or improving code without changing behavior.

### Example

```bash
refactor: extract authentication logic into hook
```

### Common Uses
- Code cleanup
- Reducing duplication
- Better architecture
- Improving readability

### Important
A refactor should NOT change what the app does.

---

## `chore`

Used for maintenance tasks that don't affect app features or fix bugs.

### Example

```bash
chore: update eslint configuration
```

### Common Uses
- Dependency updates
- Tooling changes
- Config updates
- Cleanup tasks

---

## `docs`

Used for documentation-only changes.

### Example

```bash
docs: update installation instructions
```

### Common Uses
- README updates
- API docs
- Comments
- Setup guides

---

## `style`

Used for formatting or stylistic changes that don't affect logic.

### Example

```bash
style: format navbar component
```

### Common Uses
- Indentation
- Spacing
- Semicolons
- Prettier formatting

---

## `test`

Used when adding or updating tests.

### Example

```bash
test: add unit tests for auth middleware
```

### Common Uses
- Unit tests
- Integration tests
- Mock setup
- Testing utilities

---

## `perf`

Used for performance improvements.

### Example

```bash
perf: memoize expensive product filtering
```

### Common Uses
- Rendering optimizations
- Query optimization
- Caching improvements
- Memory improvements

---

# Build & Deployment Related Types

## `build`

Used for build system or dependency changes.

### Example

```bash
build: migrate from webpack to vite
```

### Common Uses
- Bundler changes
- Build scripts
- Package compilation setup

---

## `ci`

Used for CI/CD pipeline changes.

### Example

```bash
ci: add github actions deployment workflow
```

### Common Uses
- GitHub Actions
- Jenkins
- Deployment scripts
- Automated testing pipelines

---

# Less Common But Useful Types

## `revert`

Used when reverting a previous commit.

### Example

```bash
revert: revert broken payment implementation
```

---

## `hotfix`

Used for urgent production fixes.

### Example

```bash
hotfix: fix production login crash
```

### Note
Not officially part of Conventional Commits, but widely used.

---

## `init`

Used for initial project setup.

### Example

```bash
init: bootstrap react vite application
```

---

## `deps`

Used specifically for dependency updates.

### Example

```bash
deps: upgrade nextjs to v16
```

---

## `security`

Used for security-related fixes.

### Example

```bash
security: sanitize markdown input
```

---

## `wip`

Means "Work In Progress."

### Example

```bash
wip: incomplete checkout implementation
```

### Note
Usually temporary and avoided on production branches.

---

# Quick Comparison Table

| Commit Type | Purpose |
|---|---|
| `feat` | Add new feature |
| `fix` | Fix bug |
| `refactor` | Improve internal code structure |
| `perf` | Improve performance |
| `docs` | Documentation updates |
| `style` | Formatting/styling changes |
| `test` | Add/update tests |
| `chore` | Maintenance work |
| `build` | Build system/tooling |
| `ci` | CI/CD pipeline changes |
| `revert` | Undo previous commit |
| `security` | Security fixes |
| `deps` | Dependency updates |
| `hotfix` | Urgent production fix |
| `wip` | Work in progress |
| `init` | Initial setup |

---

# Example Commit History

```bash
feat: add product wishlist
fix: resolve mobile navbar overflow
refactor: simplify cart reducer logic
perf: optimize image lazy loading
docs: add environment setup guide
style: format checkout page
test: add auth hook tests
chore: update prettier configuration
build: configure vite aliases
ci: add deployment workflow
```

---

# Useful Resource

Official Conventional Commits Specification:

https://www.conventionalcommits.org/en/v1.0.0/
