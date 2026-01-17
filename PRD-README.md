# Product Requirements Document (PRD)
## Lazer Lotus Official Website - Futuristic Redesign

### 🎯 Project Overview

Transform the existing Weebly-based blog into a modern, futuristic static website that parodies religion with a tech-forward aesthetic inspired by Apple Store and OpenAI websites. The site will be a portfolio showcase for frontend engineering skills while maintaining the satirical spiritual content.

---

## 📋 Executive Summary

**Current State:** 
- Weebly-hosted static blog with traditional web design
- Parody religion content about "妙法無邊雷射蓮花" (Lazer Lotus)
- Chinese language content with sections on teachings, spirit animals, ceremonies, etc.

**Target State:**
- Modern, futuristic static website with tech-forward design
- Deployed on GitHub Pages or Cloudflare Pages
- Custom domain integration
- Open source tech stack suitable for frontend engineer portfolio
- Maintains all existing content with enhanced UX/UI

---

## 🎨 Design Vision

### Design Aesthetic
- **Inspiration:** Apple Store, OpenAI website
- **Style Keywords:** Minimalist, futuristic, tech-forward, clean, elegant
- **Color Palette:**
  - Primary: Deep space/navy blues, gradient backgrounds
  - Accent: **Neon/cyan green** (representing "lazer" theme - primary brand color)
  - Neutral: White, off-white, subtle grays

### Design Principles
1. **Minimalism:** Clean layouts with generous whitespace
2. **Typography:** Modern sans-serif (Inter, SF Pro, or similar)
3. **Micro-interactions:** Smooth animations and transitions
4. **Glassmorphism:** Subtle frosted glass effects where appropriate
5. **Gradient Overlays:** Futuristic gradient backgrounds
6. **3D Elements:** Subtle depth with shadows and layered effects
7. **Responsive:** Mobile-first approach, perfect on all devices

---

## 🏗️ Technical Requirements

### Tech Stack (Open Source & Modern)

#### Core Framework
- **Primary Choice:** [Vite + React](https://vitejs.dev/)
  - Lightweight and fast build tool
  - Excellent developer experience with HMR (Hot Module Replacement)
  - Full control over configuration
  - React ecosystem and components
  - Great for custom static builds
  - Perfect for showcasing React skills

- **Alternative Options:**
  - [Astro](https://astro.build/) - If prefer SSG with optional React hydration
  - [Next.js](https://nextjs.org/) - If need more framework features (static export mode)

#### Styling
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/)
  - Utility-first, highly customizable
  - Great for rapid development
  - Modern and widely used

- **Alternative:** CSS Modules or Styled Components (if using React)

#### Animations
- **Framer Motion** - React animation library (recommended)
- **GSAP** - Alternative for complex animations (optional)
- For smooth transitions and micro-interactions

#### Build Tools
- **Vite** - Fast build tool with excellent DX
- **TypeScript** - Type safety and better code quality
- **React** - UI library for component-based architecture

#### Deployment
- **Primary:** [GitHub Pages](https://pages.github.com/)
  - Free for public repos
  - Easy custom domain setup
  - GitHub Actions for CI/CD

- **Alternative:** [Cloudflare Pages](https://pages.cloudflare.com/)
  - Free tier with generous limits
  - Excellent performance (CDN)
  - Easy custom domain configuration
  - Built-in preview deployments

### Project Structure
```
lazer-lotus-offical/
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── styles/           # Global styles
│   ├── assets/           # Images, fonts, etc.
│   └── utils/            # Helper functions
├── public/               # Static assets
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind config
├── tsconfig.json         # TypeScript config
└── package.json
```

---

## 📄 Content Structure

### Main Navigation

1. **了解妙雷 (Understanding the Teachings)**
   - 本教宗旨 (Religious Principles)
   - 雷射蓮花 (Lazer Lotus)
   - 雷射師父 (Lazer Master)

2. **功德靈獸 (Merit Spirit Animals)**
   - 靈性猴 (Spiritual Monkey)
   - 大宇宙大智慧大刺蝟 (Great Universe Great Wisdom Great Hedgehog)
   - 靈性鵜鶘 (Spiritual Pelican)

3. **妙雷宗婚禮儀式 (Wedding Ceremonies)**
   - 緒論 (Introduction)
   - 結婚儀式 (Marriage Ceremony)
   - 靈性動物介紹 (Spirit Animal Introductions)
   - 離婚儀式 (Divorce Ceremony)

4. **手搖杯改運法 (Bubble Tea Fortune Method)**
   - 何謂手搖杯 (What is Bubble Tea)
   - 如何感應手搖杯能量 (How to Sense Bubble Tea Energy)
   - 讓手搖杯消磁 (Demagnetizing Bubble Tea)

5. **法枯謁 (Dharma Declaration)**
6. **了凡視訊 (Enlightenment Video)**
7. **信徒見證 (Believer Testimonials)**

### Homepage Sections
- Hero section with animated gradient background
- Value proposition (existing copy about modern enlightenment)
- Feature preview cards for main sections
- Smooth scroll navigation
- Call-to-action buttons with hover effects

---

## 🎯 Features & Functionality

### Core Features
1. **Responsive Navigation**
   - Sticky header with smooth scroll
   - Mobile hamburger menu
   - Active section highlighting

2. **Page Transitions**
   - Smooth fade/slide transitions between pages
   - Loading states (optional)

3. **Scroll Animations**
   - Fade-in on scroll
   - Parallax effects (subtle)
   - Progressive image loading

4. **Interactive Elements**
   - Hover effects on cards/buttons
   - Gradient text effects
   - Glassmorphic cards

5. **Performance**
   - Lazy loading images
   - Optimized assets
   - Minimal JavaScript
   - Lighthouse score 90+

### Advanced Features (Optional)
1. **Multi-language Support**
   - Chinese (Traditional) - primary
   - English - secondary (for international showcase)

2. **Search Functionality**
   - Client-side search for content

3. **Blog/News Section** (if adding new content)
   - MDX support for markdown content

4. **Analytics Integration**
   - Plausible Analytics or Google Analytics (privacy-friendly)

---

## 🚀 Deployment Strategy

### Option 1: GitHub Pages

**Setup Steps:**
1. Create repository on GitHub
2. Configure GitHub Pages in repository settings
3. Set custom domain in repository settings (DNS config needed)
4. Set up GitHub Actions for automated builds

**Custom Domain (GoDaddy) DNS Configuration:**
```
Type: A Record
Host: @
Value: 185.199.108.153 (GitHub Pages IP)
        185.199.109.153
        185.199.110.153
        185.199.111.153

Type: CNAME
Host: www
Value: your-username.github.io
```

**Pros:**
- Free hosting
- Easy custom domain
- Version control built-in
- CI/CD with GitHub Actions

**Cons:**
- Build time limits
- Slightly slower than CDN-first solutions

### Option 2: Cloudflare Pages

**Setup Steps:**
1. Connect GitHub repository to Cloudflare Pages
2. Configure build settings (build command, output directory)
3. Add custom domain in Cloudflare dashboard
4. Update DNS in GoDaddy to Cloudflare nameservers (or use Cloudflare as registrar)

**Custom Domain Configuration:**
- Point nameservers to Cloudflare, or
- Update DNS records in GoDaddy to Cloudflare IPs

**Pros:**
- Fast global CDN
- Unlimited bandwidth
- Preview deployments for PRs
- Better performance metrics

**Cons:**
- Slightly more setup for custom domains

**Recommendation:** Cloudflare Pages for better performance and developer experience.

---

## 📊 Success Metrics

### Performance Goals
- Lighthouse Performance Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Design Goals
- Modern, futuristic aesthetic matching Apple/OpenAI style
- Smooth animations and interactions
- Perfect mobile responsiveness
- Accessibility score 90+ (WCAG AA)

### Portfolio Goals
- Clean, maintainable code structure
- Well-documented codebase
- Easy for other engineers to understand and contribute
- Showcases modern frontend best practices

---

## 🔧 Development Phases

### Phase 1: Foundation (Week 1)
- [x] Set up project structure with chosen tech stack
- [x] Configure build tools and deployment
- [x] Implement base layout and navigation
- [x] Set up Tailwind CSS with custom theme
- [x] Create reusable components (Button, Card, etc.)

### Phase 2: Content Migration (Week 1-2)
- [x] Recreate homepage with hero section
- [ ] Build all main section pages
- [ ] Migrate existing content:
  - [x] **了解妙雷 (Understanding the Teachings)** - Main landing page with overview
    - [x] 本教宗旨 (Religious Principles) - Sub-page/section
    - [x] 雷射蓮花 (Lazer Lotus) - Sub-page/section
    - [x] 雷射師父 (Lazer Master) - Sub-page/section
  - [x] **功德靈獸 (Merit Spirit Animals)** - Main page with spirit animals overview
    - [x] 靈性猴 (Spiritual Monkey) - Sub-page/section
    - [x] 大宇宙大智慧大刺蝟 (Great Universe Great Wisdom Great Hedgehog) - Sub-page/section
    - [x] 靈性鵜鶘 (Spiritual Pelican) - Sub-page/section
  - [x] **妙雷宗婚禮儀式 (Wedding Ceremonies)** - Main wedding ceremonies page
    - [x] 緒論 (Introduction) - Sub-page/section
    - [x] 結婚儀式 (Marriage Ceremony) - Sub-page/section
    - [x] 靈性動物介紹 (Spirit Animal Introductions) - Sub-page/section
    - [x] 離婚儀式 (Divorce Ceremony) - Sub-page/section
  - [ ] **手搖杯改運法 (Bubble Tea Fortune Method)** - Main bubble tea method page
    - [ ] 何謂手搖杯 (What is Bubble Tea) - Sub-page/section
    - [ ] 如何感應手搖杯能量 (How to Sense Bubble Tea Energy) - Sub-page/section
    - [ ] 讓手搖杯消磁 (Demagnetizing Bubble Tea) - Sub-page/section
  - [ ] **法枯謁 (Dharma Declaration)** - Single page
  - [ ] **了凡視訊 (Enlightenment Video)** - Video page/section
  - [ ] **信徒見證 (Believer Testimonials)** - Testimonials page
- [x] Implement responsive layouts

### Phase 3: Enhancements (Week 2)
- [ ] Add animations and transitions
- [ ] Add scroll animations
- [ ] Optimize images and assets

### Phase 4: Polish & Deploy (Week 2-3)
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Set up custom domain
- [ ] Final QA and launch

---

## 🎨 Design Mockups Reference

### Inspiration Websites to Study
1. **Apple.com**
   - Hero sections with product showcases
   - Smooth scroll effects
   - Minimalist navigation

2. **OpenAI.com**
   - Gradient backgrounds
   - Modern typography
   - Clean content sections

3. **Linear.app**
   - Futuristic UI elements
   - Smooth animations
   - Glassmorphic effects

4. **Stripe.com**
   - Interactive elements
   - Clean design system

### Key UI Elements to Implement
- **Hero Section:** Full-screen gradient with floating elements
- **Navigation:** Glassmorphic sticky header
- **Cards:** Frosted glass effect with subtle shadows
- **Buttons:** Gradient backgrounds with hover animations
- **Typography:** Large, bold headings with gradient text
- **Spacing:** Generous padding and whitespace

---

## 🛠️ Development Guidelines

### Code Quality
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Component-based architecture
- Reusable utility functions
- Clear file naming conventions

### Git Workflow
- Feature branches
- Meaningful commit messages
- Pull requests for review (if collaborating)

### Documentation
- README.md with setup instructions
- Component documentation (JSDoc comments)
- Deployment guide
- Contributing guidelines (if open source)

---

## 🔐 Privacy & SEO

### Privacy
- Minimal third-party scripts
- Privacy-friendly analytics (if needed)
- No cookies unless necessary

### SEO Optimization Features

#### Core SEO Implementation
1. **Meta Tags & Open Graph**
   - Dynamic `<title>` tags per page
   - Meta descriptions for each page
   - Open Graph tags (og:title, og:description, og:image)
   - Twitter Card tags
   - Canonical URLs
   - Language tags (lang="zh-TW")

2. **Structured Data (Schema.org)**
   - JSON-LD structured data
   - Organization schema
   - WebSite schema with search action
   - Article/BlogPosting schema (for content pages)
   - BreadcrumbList schema for navigation

3. **Technical SEO**
   - Semantic HTML5 elements
   - Proper heading hierarchy (H1 → H6)
   - Alt text for all images
   - Accessible link text
   - Mobile-first responsive design
   - Fast page load times

4. **Sitemap & Robots**
   - Auto-generated `sitemap.xml`
   - Dynamic sitemap for all pages
   - `robots.txt` configuration
   - XML sitemap submission ready

5. **URL Structure**
   - Clean, descriptive URLs
   - Hyphenated slugs (e.g., `/understanding-teachings/`)
   - Language path support (future: `/zh/`, `/en/`)
   - 301 redirects for old URLs (if migrating)

6. **Performance SEO**
   - Image optimization (WebP, AVIF formats)
   - Lazy loading images
   - Code splitting for faster loads
   - Critical CSS inlining
   - Minification of HTML/CSS/JS

7. **Content SEO**
   - Keyword-optimized headings
   - Internal linking structure
   - Content hierarchy
   - Long-tail keyword targeting
   - Content freshness indicators

#### SEO Tools & Plugins (Optional)
- **react-helmet-async** - For dynamic meta tag management
- **vite-plugin-html** - For HTML template optimization
- **@sanity/astro-sitemap** or custom sitemap generator
- **Google Search Console** - Integration ready
- **Bing Webmaster Tools** - Integration ready

#### Analytics & Monitoring
- **Google Analytics 4** (optional, privacy-conscious)
- **Search Console** integration for SEO monitoring
- **Lighthouse CI** - Automated performance/SEO checks
- **PageSpeed Insights API** - Track Core Web Vitals

#### Future SEO Enhancements
- Multi-language support (i18n) with hreflang tags
- Blog/RSS feed for content marketing
- AMP pages (if needed)
- Progressive Web App (PWA) features
- Social media preview optimization
- Rich snippets for search results

---

## 📝 Additional Considerations

### Content Strategy
- Maintain satirical/humorous tone
- Tech-forward language when appropriate
- Professional presentation despite parody content

### Future Enhancements (Post-Launch)
- Interactive animations for spirit animals
- Animated gradient backgrounds
- Video integration for "了凡視訊"
- Form submissions for testimonials (static form + email service)

---

## ✅ Acceptance Criteria

The project will be considered complete when:

1. ✅ All existing content is migrated and accessible
2. ✅ Site loads in < 2 seconds on 3G connection
3. ✅ Responsive on mobile, tablet, and desktop
4. ✅ Custom domain is properly configured and working
5. ✅ Smooth animations and transitions throughout
6. ✅ Lighthouse scores 90+ across all categories
8. ✅ Code is clean, documented, and follows best practices
9. ✅ Site matches futuristic tech aesthetic
10. ✅ All pages are accessible and navigable

---

## 📚 Resources

### Documentation
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async) - SEO meta tags

### Design Tools
- [Figma](https://www.figma.com/) - Design mockups
- [Coolors](https://coolors.co/) - Color palette generator
- [Hero Patterns](https://www.heropatterns.com/) - Pattern backgrounds

---

## 🎯 Next Steps

1. ✅ Review and approve this PRD
2. ✅ Tech stack chosen: **Vite + React + TypeScript + Tailwind CSS**
3. Choose deployment platform (recommend Cloudflare Pages)
4. Set up initial project structure
5. Begin Phase 1 development

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Author:** Frontend Engineering Team  
**Status:** ⏳ Pending Review
