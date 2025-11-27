# Hugo Shellish Theme - Agent Guide

## Project Overview

A minimal, shell/terminal-inspired Hugo theme with monospace typography, dark/light mode support, and clean design.

## Directory Structure

```
hugo-shellish/
├── assets/css/style.css    # Main stylesheet (CSS variables, responsive)
├── layouts/
│   ├── _default/           # Core templates (baseof, home, list, single)
│   └── partials/           # Reusable components (header, footer, nav, related)
├── static/
│   ├── js/theme.js         # Dark/light mode toggle
│   └── svg/                # Theme icons (moon.svg, sun.svg)
├── exampleSite/            # Demo site for development/testing
│   ├── config.toml         # Site configuration
│   └── content/            # Sample content (blog, projects)
└── specs/                  # Design specs and planning docs
```

## Commands

### Development

```bash
# Run dev server (from exampleSite/)
cd exampleSite && hugo server

# Build site
cd exampleSite && hugo

# Build with drafts
cd exampleSite && hugo server -D
```

### Validation

```bash
# Build and check for errors
cd exampleSite && hugo --gc --minify
```

## Conventions

### CSS
- Use CSS custom properties (variables) defined in `:root` and `[data-theme="dark"]`
- Mobile-first responsive design with breakpoints at 768px and 480px
- No CSS frameworks - pure CSS only
- Font: JetBrains Mono (woff2)

### Templates
- Go templates with Hugo functions
- Partials for reusable components
- Use `.Site.Params` for configurable options

### Content
- Front matter: `title`, `date`, `tags`, `description`
- Tags used for related posts matching

## Key Files

- `assets/css/style.css` - All styles, CSS variables for theming
- `layouts/_default/baseof.html` - Base HTML structure
- `layouts/_default/single.html` - Individual post/page template
- `layouts/partials/related.html` - Related posts component
- `exampleSite/config.toml` - Example configuration with all options

## Configuration

Theme supports these `[params]` in config.toml:
- `author`, `description` - Site metadata
- `showBreadcrumbs` - Enable/disable breadcrumbs
- `[params.social]` - Social links (github, twitter, linkedin, rss)
- `[related]` - Related posts config (tags weight: 100, keywords: 80, date: 10)
