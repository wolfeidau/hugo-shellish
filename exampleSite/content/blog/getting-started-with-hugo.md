---
title: "Getting Started with Hugo"
date: 2024-11-26
tags: ["hugo", "static-site", "tutorial"]
description: "Learn how to get started with Hugo and build your first static site"
---

Hugo is a fantastic tool for building fast, modern static websites. Let me walk you through getting started.

## Installation

First, install Hugo:

```bash
# macOS with Homebrew
brew install hugo

# Ubuntu/Debian
sudo apt-get install hugo

# Windows with Chocolatey
choco install hugo
```

## Creating a New Site

```bash
hugo new site my-website
cd my-website
```

## Adding a Theme

Install a theme as a git submodule:

```bash
git init
git submodule add https://github.com/user/theme-name themes/theme-name
echo 'theme = "theme-name"' >> config.toml
```

## Creating Content

Create your first post:

```bash
hugo new posts/my-first-post.md
```

Edit the generated markdown file in `content/posts/my-first-post.md`.

## Running Locally

Start the development server:

```bash
hugo server -D
```

Visit `http://localhost:1313` to see your site.

## Building

When ready to deploy:

```bash
hugo
```

This generates your static site in the `public/` directory, ready to deploy to any web server.

## Next Steps

- Explore theme customization
- Configure your site with `config.toml`
- Create more content
- Deploy to your hosting provider

Happy blogging!
