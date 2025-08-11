
# Contributing to RahaSoft ERP

We love your input! We want to make contributing to RahaSoft ERP as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## What's Required

**Planning:** Define MVP scope, prioritize modules, design database schema, and set up project management.

**Development:** Scaffold frontend and backend, implement authentication, build each module, set up state management, integrate database, and develop APIs.

**Testing:** Write unit/integration tests, set up CI/CD, and ensure high coverage.

**Documentation:** Maintain up-to-date README, contributing guidelines, and API docs.

**Deployment:** Prepare Docker/Kubernetes configs, set up cloud infrastructure, and monitor performance/security.

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests Process

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Development Setup

1. **Prerequisites**
   ```bash
   Node.js 18+
   PostgreSQL database
   Git
   ```

2. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/RahaSoft-ERP.git
   cd RahaSoft-ERP
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```

### Coding Standards

#### TypeScript Guidelines
- Use TypeScript for all new code
- Follow strict type checking
- Prefer interfaces over types for object shapes
- Use proper typing for React components

#### Code Style
- Use ESLint and Prettier configurations
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic

#### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

feat(auth): add OAuth integration
fix(dashboard): resolve chart rendering issue
docs(readme): update installation instructions
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### File Structure Guidelines

```
src/
├── app/                    # Next.js app directory (pages)
├── components/             # Reusable UI components
│   ├── ui/                # Basic UI components
│   └── [feature]/         # Feature-specific components
├── lib/                   # Utility libraries
├── modules/               # Business logic modules
├── stores/                # State management
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

### Component Guidelines

#### React Components
- Use functional components with hooks
- Follow the single responsibility principle
- Use TypeScript interfaces for props
- Include JSDoc comments for complex components

```typescript
interface ButtonProps {
  /** The button variant */
  variant?: 'primary' | 'secondary' | 'danger'
  /** Whether the button is disabled */
  disabled?: boolean
  /** Click event handler */
  onClick?: () => void
  /** Button content */
  children: React.ReactNode
}

/**
 * A reusable button component
 */
export function Button({ variant = 'primary', disabled, onClick, children }: ButtonProps) {
  // Component implementation
}
```

#### Styling Guidelines
- Use Tailwind CSS classes
- Create reusable component variants
- Follow responsive design principles
- Use semantic class names

### Testing Guidelines

#### Unit Tests
- Write tests for all utility functions
- Test React components with React Testing Library
- Aim for high test coverage
- Use descriptive test names

```typescript
describe('formatCurrency', () => {
  it('should format positive numbers correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56')
  })

  it('should handle zero values', () => {
    expect(formatCurrency(0)).toBe('$0.00')
  })
})
```

#### Integration Tests
- Test API endpoints
- Test database operations
- Test user workflows

### Database Guidelines

#### Prisma Schema
- Use descriptive model names
- Include proper relationships
- Add database constraints
- Use enums for fixed values

#### Migrations
- Write reversible migrations
- Test migrations thoroughly
- Include descriptive migration names

### API Guidelines

#### REST API
- Follow RESTful conventions
- Use proper HTTP status codes
- Include proper error handling
- Document all endpoints

#### Error Handling
```typescript
try {
  // API operation
} catch (error) {
  console.error('Operation failed:', error)
  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
}
```

### Documentation

#### Code Documentation
- Add JSDoc comments for functions
- Include examples in documentation
- Keep documentation up to date

#### README Updates
- Update setup instructions if changed
- Add new features to feature list
- Update dependencies if changed

### Performance Guidelines

#### Frontend Performance
- Use Next.js Image component for images
- Implement proper loading states
- Use React.memo for expensive components
- Optimize bundle size

#### Backend Performance
- Use database indexes appropriately
- Implement caching where needed
- Optimize database queries
- Use pagination for large datasets

### Security Guidelines

#### Frontend Security
- Sanitize user inputs
- Use HTTPS in production
- Implement proper authentication
- Follow OWASP guidelines

#### Backend Security
- Validate all inputs
- Use parameterized queries
- Implement rate limiting
- Log security events

### Deployment Guidelines

#### Production Checklist
- [ ] All tests pass
- [ ] No console errors
- [ ] Environment variables set
- [ ] Database migrations applied
- [ ] Performance tested
- [ ] Security reviewed

### Bug Reports

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/Crypt-Analyst/RahaSoft-ERP/issues/new).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Requests

We welcome feature requests! Please:

1. Check if the feature already exists or is planned
2. Describe the feature clearly
3. Explain why it would be useful
4. Provide examples or mockups if applicable

### License

By contributing, you agree that your contributions will be licensed under the MIT License.

### References

- [GitHub Flow](https://guides.github.com/introduction/flow/index.html)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

## Questions?

Don't hesitate to reach out if you have questions:
- Open an issue for bugs or feature requests
- Join our Discord for general discussion
- Email us at dev@rahasoft.com for other inquiries

Thank you for contributing to RahaSoft ERP! 🚀
