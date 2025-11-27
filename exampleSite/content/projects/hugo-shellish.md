---
title: "Hugo Shellish Theme"
date: 2024-11-26
tags: ["hugo", "theme", "open-source"]
description: "A minimal, shell-inspired Hugo theme"
---

A clean, terminal-inspired Hugo theme focused on simplicity and readability.

## Features

- Minimal, distraction-free design
- Monospace typography inspired by shell environments
- Fully responsive and mobile-friendly
- No JavaScript frameworks, pure CSS
- Dark theme optimized for comfortable reading
- Fast page load times
- SEO friendly with proper meta tags and RSS support

## Tech Stack

- Hugo static site generator
- Pure HTML templates with Go templating
- Vanilla CSS (no frameworks)
- Monospace fonts for that shell aesthetic

## Why?

Modern websites are often bloated with unnecessary JavaScript, tracking scripts, and flashy animations. This theme strips away all the noise and focuses on what matters: your content.

It's perfect for:
- Developer portfolios
- Technical blogs
- Project documentation
- Personal websites
- Minimalist content sites

## Links

- [GitHub Repository](https://github.com/markw/hugo_shellish)
- [Live Demo](#)
- [Documentation](#)

## Getting Started

```bash
hugo new site my-site
cd my-site
git init
git submodule add https://github.com/markw/hugo_shellish themes/hugo_shellish
echo 'theme = "hugo_shellish"' >> config.toml
hugo server
```

Start creating content and watch your minimal, beautiful site come to life.
