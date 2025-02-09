# sobrecoisas.com Design Document

## Overview
sobrecoisas.com is a minimalistic blogging platform built with Astro and Tailwind CSS, focusing on delivering a distraction-free reading experience for Brazilian Portuguese content. The website prioritizes simplicity, accessibility, and performance.

## Goals and Non-Goals

### Goals
- Create a clean, typography-focused blog with zero distractions
- Provide excellent reading experience across all devices
- Implement efficient content organization with tags/categories
- Enable quick and intuitive content discovery through search
- Ensure fast page loads and optimal performance
- Support screen readers and keyboard navigation

### Non-Goals
- Multi-language support (for now)
- Complex animations or interactive features
- Code syntax highlighting
- Analytics integration
- Comment system
- Newsletter subscription

## Architecture

### Technology Stack
- **Framework**: Astro with TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown files
- **Search**: Client-side search implementation
- **Deployment**: Static site generation (SSG)

### Directory Structure
```
src/
├── components/      # Reusable Astro components
│   ├── layout/     # Layout components
│   ├── common/     # Shared components
│   └── posts/      # Post-specific components
├── content/        # Content collections
│   └── posts/      # Blog posts in Markdown
├── layouts/        # Page layouts
├── pages/          # Route pages
├── styles/         # Global styles
└── utils/          # Helper functions
```

### Content Structure
- Posts are stored as Markdown files
- Each post contains:
  - Title
  - Summary
  - Publication date
  - Tags
  - Main content
  - Optional featured image

### URL Structure
- Homepage: `/`
- Individual posts: `/[slug]`
- Tag pages: `/tag/[tag]`
- Search page: `/search`

## Component Design

### Core Components
1. **Header**
   - Site title
   - Navigation menu
   - Search button

2. **PostList**
   - Grid/list of post previews
   - Post metadata display
   - Tag links

3. **PostLayout**
   - Article content
   - Metadata display
   - Navigation between posts

4. **Search**
   - Search input
   - Results display
   - Tag filtering

5. **TagCloud**
   - Display of available tags
   - Tag count indicators

### Page Layouts
1. **Homepage**
   - Recent posts list
   - Featured tags
   - Search integration

2. **Post Page**
   - Article content
   - Related posts
   - Tag links

3. **Tag Page**
   - Posts filtered by tag
   - Tag description
   - Related tags

4. **Search Page**
   - Search interface
   - Real-time results
   - Tag filters

## User Experience

### Design Principles
- Minimalistic interface inspired by hakibenita.com
- Typography-first approach
- High contrast for readability
- Generous whitespace
- No unnecessary decorations
- Fast and responsive

### Typography
- Clear hierarchy using font sizes
- Comfortable line height and paragraph spacing
- Optimized reading width
- High contrast text colors

### Colors
- Minimal color palette
- Focus on black and white
- Subtle accent colors for interactive elements
- High contrast for accessibility

### Responsive Design
- Mobile-first approach
- Fluid typography
- Optimized reading experience across devices
- Simplified navigation on mobile

## Performance Considerations

### Optimization Strategies
- Static site generation
- Minimal JavaScript usage
- Optimized image loading
- Efficient asset bundling
- CSS optimization

### Performance Metrics Targets
- Lighthouse score > 95
- First Contentful Paint < 1s
- Largest Contentful Paint < 2.5s
- First Input Delay < 100ms
- Cumulative Layout Shift < 0.1

## Accessibility

### Requirements
- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Screen reader optimization

## Future Considerations

### Potential Extensions
- Internationalization support
- Analytics integration
- RSS feed
- Social sharing
- Newsletter integration
- Comment system

## Implementation Plan

### Phase 1: Core Setup
1. Initialize Astro project with TypeScript
2. Set up Tailwind CSS
3. Create basic layouts and components
4. Implement content collections

### Phase 2: Content Structure
1. Set up post collection schema
2. Create initial post templates
3. Implement tag system
4. Set up URL routing

### Phase 3: Features
1. Implement search functionality
2. Create tag pages
3. Add navigation between posts
4. Optimize images and assets

### Phase 4: Polish
1. Refine typography and styling
2. Implement accessibility features
3. Optimize performance
4. Add SEO elements

## Design System Decisions

### February 9, 2025 13:11:55 GMT-3

After careful consideration of our project's needs and goals, we've decided to keep our styling approach simple and maintainable by:

1. **Using Tailwind's Default Design System**:
   - Leveraging Tailwind's well-thought-out default values
   - No custom theme variables or unnecessary abstractions
   - Direct use of utility classes for predictability

2. **Rationale**:
   - Our minimalist blog doesn't require custom branding or complex design tokens
   - Tailwind's utility classes are already semantic and well-documented
   - Adding theme variables would be premature optimization
   - Simpler codebase is easier to maintain and understand
   - Changes will be easier to implement on a simpler foundation

3. **Future Considerations**:
   - Custom theming can be added later if specific needs arise
   - Focus remains on content and functionality
   - Maintaining consistency through direct utility class usage
