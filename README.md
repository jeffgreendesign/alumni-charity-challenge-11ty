# Richmond Alumni Charity Challenge

A static website for Richmond's Alumni Charity Challenge, an annual charity event established in 2013 by the VCU Alumni Richmond Chapter.

Built with [Eleventy](https://www.11ty.dev/) (11ty) v2.0.1.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

## Development Commands

### Start Development Server

```bash
npx @11ty/eleventy --serve
```

This will:
- Build the site to the `_site/` directory
- Start a local development server (typically at `http://localhost:8080`)
- Watch for file changes and automatically rebuild
- Live reload the browser when changes are detected

### Build for Production

```bash
npx @11ty/eleventy
```

The built site will be output to the `_site/` directory.

## Project Structure

```
/
├── .eleventy.js          # Eleventy configuration
├── index.html            # Main single-page application
├── _includes/            # Reusable HTML partials
│   ├── _header.html      # Navigation header
│   └── _footer.html      # Footer with scripts
├── bundle.css            # Pre-bundled styles
├── bundle.js             # Pre-bundled JavaScript
├── main.js               # Additional JavaScript
└── _site/                # Build output (git-ignored)
```

## Architecture

### Single-Page Application

This is a **single-page website** with all content in [index.html](index.html). The page includes sections for:

- About the event
- History
- Recognition
- Participants
- Leadership
- Calendar
- Sponsors

Navigation uses anchor links (e.g., `#about`, `#participants`) for smooth scrolling between sections.

### Build Configuration

The [.eleventy.js](.eleventy.js) configuration includes:

- **HTML Minification**: All HTML files are automatically minified using `html-minifier`
- **CSS Minification**: A `cssmin` filter is available for inline CSS using `clean-css`
- **Static Asset Passthrough**: `bundle.css` and `main.js` are copied directly to output without processing

### Frontend Stack

- **Bootstrap 3.3.7**: Responsive layout framework (via CDN)
- **jQuery 1.12.4**: JavaScript library for Bootstrap functionality (via CDN)
- **Font Awesome**: Icon library
- **Custom CSS**: Pre-bundled in `bundle.css`
- **Custom JavaScript**: Pre-bundled in `bundle.js` and `main.js`

## Annual Updates

The site should be updated annually for each new charity challenge:

1. **Update year references** in [index.html](index.html)
2. **Update donation links** (currently pointing to FeedMore.org)
3. **Update meta tags** including descriptions and Open Graph tags
4. **Update copyright year** in [_includes/_footer.html](_includes/_footer.html)
5. **Add new images** to `img/YEAR/` directory
6. **Update school logos** and participant information

## Deployment

### Live Site

The site is deployed on Netlify at **https://alumnicharity.org**

### Netlify Configuration

The [netlify.toml](netlify.toml) file configures:
- Build command: `npx @11ty/eleventy`
- Publish directory: `_site`
- Node version: 22
- Security headers and cache optimization

### Deploying Changes

**Automatic Deployment (Recommended):**
Push changes to the `main` branch on GitHub. Netlify will automatically build and deploy the site.

**Manual Deployment via CLI:**
```bash
# Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# Deploy to production
netlify deploy --prod

# Preview deployment
netlify deploy
```

**Local Development with Netlify:**
```bash
netlify dev
```

This runs the site in Netlify's environment locally, useful for testing functions or environment variables.

### Site Management

- **Admin Dashboard**: https://app.netlify.com/projects/silly-entremet-c44d32
- **Site ID**: b4c2b4e0-8f6a-4398-b5c6-9adb2a090687

## Dependencies

### Production Dependencies

- `html-minifier`: ^4.0.0 - HTML compression
- `clean-css`: ^5.3.2 - CSS minification

### Development Dependencies

- `@11ty/eleventy`: ^2.0.1 - Static site generator

## License

ISC

## Contributing

This is a community-driven project for the VCU Alumni Richmond Chapter. For updates or contributions, please contact the project maintainers.
