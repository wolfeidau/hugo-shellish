# Hugo Shellish Theme - Initial Plan

## Overview
Build a Hugo theme based on andrej.sh with a clean shell/terminal aesthetic. Minimal design with monospace fonts, command-like navigation, and hierarchical text layout.

## Reference Site: andrej.sh
- **Aesthetic**: Terminal/shell-like interface
- **Navigation**: Command palette style (`⌘ K`)
- **Sections**: Home, Blog, Books, RSS
- **Content Types**: Bio, Work history, Projects, Reading list
- **Tech Stack**: Go templates, Astro (we'll use Hugo + Go templates)
- **Philosophy**: Minimal, no unnecessary JavaScript, fast and clean

## Phase 1: Design & Structure

### Visual Elements
- Monospace font (consider: JetBrains Mono, Courier Prime, IBM Plex Mono)
- Dark background with light text (or configurable)
- Minimal color palette (primary accent color for links/highlights)
- Shell prompt aesthetic (optional: `>` or `$` symbols)
- Hierarchical text layout with breadcrumb-like navigation

### Hugo Content Organization
```
content/
  /_index.md                 # Home page
  /blog/
    /_index.md              # Blog listing
    /post-1.md              # Individual posts
  /projects/
    /_index.md              # Projects listing
    /project-1.md           # Individual projects
  /books/
    /_index.md              # Books/reading list
  /work/
    /_index.md              # Work history/experience
```

### Configuration Structure
- Theme name: `hugo-shellish`
- Hugo version: Latest (v0.120+)
- Assets: CSS, fonts, optional minimal JS for command palette
- Data files: Optional for structured content (github activity, social links)

## Phase 2: Hugo Theme Foundation

### Directory Structure
```
hugo-shellish/
  archetypes/
    default.md
    post.md
  layouts/
    _default/
      baseof.html
      home.html
      list.html
      single.html
    partials/
      header.html
      nav.html
      footer.html
      meta.html
      breadcrumb.html
  assets/
    css/
      style.css
      syntax.css (if needed)
  static/
    fonts/
  config.toml
  theme.toml
```

### Core Templates
1. **baseof.html**: Base layout with HTML structure
2. **home.html**: Homepage with bio, featured content
3. **list.html**: Section listings (blog posts, projects)
4. **single.html**: Individual post/project page
5. **Partials**:
   - `header.html`: Site title, command palette trigger
   - `nav.html`: Navigation menu/breadcrumbs
   - `footer.html`: Footer with social links, RSS
   - `meta.html`: Meta tags, SEO

## Phase 3: Styling

### CSS Strategy
- Mobile-first responsive design
- CSS Grid/Flexbox for layout
- No CSS framework (pure CSS or minimal utility classes)
- Variables for colors, fonts, spacing
- Dark mode as default (optional light mode toggle)

### Color Palette (Finalized)

**Light Mode (Default)**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Accent: `#0066cc`
- Border: `#e0e0e0`
- Code background: `#f5f5f5`

**Dark Mode**
- Background: `#0d1117`
- Text: `#c9d1d9`
- Accent: `#58a6ff`
- Border: `#30363d`
- Code background: `#161b22`

### Typography
- Font: JetBrains Mono (woff2 format)
- Body: 16px base size, 1.6 line height
- Headings: Same monospace, scaled up
- Light/Dark mode toggle with SVG icons
- No line numbers on code blocks

## Phase 4: Features

### MVP Features (Completed)
1. [x] **Homepage**: Bio section with latest posts
2. [x] **Blog System**: Post listings with dates, individual post pages
3. [x] **Projects Section**: Project listing with descriptions
4. [x] **Navigation**: Minimal top nav with breadcrumb support
5. [x] **RSS Feed**: Auto-generated from Hugo
6. [x] **Dark/Light Mode Toggle**: CSS-based with localStorage persistence and system preference detection

### Completed Features
- JetBrains Mono font integration
- Light and dark modes with SVG icon toggle
- Responsive design (mobile, tablet, desktop)
- Syntax highlighting with base16-snazzy theme
- Minimal code block styling (transparent background, border only)
- SVG theme icons (moon/sun)
- Visited link styling consistent across modes
- Sample content (homepage, blog posts, projects)

### Nice-to-Have Features (Not Yet Implemented)
1. **Command Palette** (`⌘ K`): JavaScript-based quick navigation
2. **Keyboard Shortcuts**: e.g., `/` to focus search
3. **GitHub Activity Display**: Static or fetched data
4. **Search**: Built-in Hugo search or Algolia
5. [x] **Tags/Categories**: For blog organization (auto-generated)

### Future Enhancements
1. Table of contents for long posts
2. Related posts
3. Comments (Disqus, Utterances, etc.)
4. Analytics

## Phase 5: Polish & Optimization

### Performance
- Minify CSS/JS
- Optimize images
- Remove unused CSS (PurgeCSS if needed)
- Fast page load times

### SEO & Metadata
- Proper meta tags (og:, twitter:)
- Schema.org structured data
- Sitemap generation
- RSS feed

### Testing & Validation
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile responsiveness
- Lighthouse performance audit
- Accessibility (WCAG compliance)

### Documentation
- README with setup instructions
- Configuration guide
- Content creation guide
- Customization guide

## Success Criteria
- [x] Theme is installed and Hugo builds successfully
- [x] Homepage displays correctly with shell-like aesthetic
- [x] All sections (blog, projects, books) are functional
- [x] Responsive design works on mobile/tablet/desktop
- [ ] Page load time < 2s
- [ ] Lighthouse score > 90

## Dependencies
- Hugo v0.120+
- (Optional) Node.js/npm for build tools if using PostCSS/Tailwind
- No JavaScript frameworks required for MVP

## Timeline Actual
- Phase 1 (Design & Structure): ~1 hour ✓
- Phase 2 (Foundation): ~1.5 hours ✓
- Phase 3 (Styling + Dark Mode): ~2 hours ✓
- Phase 4 (MVP Features + Enhancements): ~2 hours ✓
- Phase 5 (Polish): In progress

**Total so far: ~6.5 hours**

## Build Information

### Successful Build
- Hugo v0.152.2+extended
- 35 pages generated
- 14 aliases
- 3 static files (CSS, JS, SVG icons)
- Build time: ~5-10ms

### File Structure
```
hugo-shellish/
├── archetypes/
│   ├── default.md
│   └── post.md
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── home.html
│   │   ├── list.html
│   │   └── single.html
│   └── partials/
│       ├── breadcrumb.html
│       ├── footer.html
│       ├── header.html
│       ├── meta.html
│       └── nav.html
├── static/
│   ├── css/style.css
│   ├── js/theme.js
│   └── svg/
│       ├── moon.svg
│       └── sun.svg
├── exampleSite/
│   ├── archetypes/
│   ├── config.toml
│   ├── content/
│   │   ├── _index.md
│   │   ├── blog/
│   │   ├── projects/
│   │   └── ...
│   └── themes/hugo-shellish (symlink)
├── README.md
├── theme.toml
└── .gitignore
```

## Next Steps
- [ ] Performance optimization and Lighthouse testing
- [ ] Minify CSS/JS
- [ ] Search functionality (optional)
- [ ] Command palette feature (optional)
- [ ] Comprehensive testing across browsers
