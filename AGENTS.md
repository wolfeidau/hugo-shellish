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

### Accessibility
- All text must meet WCAG AA contrast ratio (4.5:1 for body text, 3:1 for large text)
- Use `--text-muted` for secondary/dimmed text instead of `opacity` (opacity reduces contrast)
- Light mode colors are adjusted for contrast: `--title-color: #b35d47`, `--accent-color: #3b6591`
- Dark mode Nord colors pass contrast requirements without adjustment
- Test color pairs at: https://webaim.org/resources/contrastchecker/

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

### LLM Discovery (llms.txt)

To enable LLM-friendly content discovery, add to your site's config.toml:

```toml
[outputs]
  home = ["HTML", "RSS", "llms"]
  page = ["HTML", "md"]

[outputFormats.llms]
  name = "llms"
  mediaType = "text/plain"
  baseName = "llms"

[outputFormats.md]
  name = "md"
  mediaType = "text/markdown"
  baseName = "index"
  isPlainText = true
```

This generates:
- `/llms.txt` - Index file with links to all blog posts, projects, and notes
- `/blog/post-title/index.md` - Markdown versions of individual pages with original frontmatter

LLMs can use llms.txt to discover content, then fetch clean markdown versions for detailed information.
