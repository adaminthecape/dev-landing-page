# Component Library Reference

## UI Components (src/components/ui/)

These are foundational, reusable components used throughout the project.

### NavHeader
A sticky navigation bar for the portfolio.

**Props:**
- `title?: string` - Site title/branding
- `links?: Array<{label: string, href: string}>` - Navigation links
- `className?: string` - Additional CSS classes

**Usage:**
```jsx
<NavHeader 
  title="Alex Doe"
  links={[
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]}
/>
```

**Styling Notes:**
- Use `sticky top-0` for positioning
- Add `z-50` to keep above other content
- Include subtle shadow for depth: `shadow-sm`
- Use `bg-white/95` for semi-transparent background with backdrop blur

### PageSection
A flexible section wrapper for page content areas.

**Props:**
- `id?: string` - Section anchor ID
- `title?: string` - Section heading
- `subtitle?: string` - Optional subtitle
- `children: React.ReactNode` - Section content
- `className?: string` - Additional CSS classes

**Usage:**
```jsx
<PageSection id="projects" title="Featured Projects" subtitle="Recent work">
  {/* Project cards go here */}
</PageSection>
```

**Styling Notes:**
- Default padding: `py-12 md:py-16`
- Consistent max-width wrapping
- Title: `text-2xl md:text-3xl font-bold tracking-tight`
- Subtitle: `text-slate-600 text-sm md:text-base mt-2`

### TextInput
Reusable form input component.

**Props:**
- `label?: string` - Input label
- `type?: string` - Input type (text, email, textarea, etc.)
- `placeholder?: string` - Placeholder text
- `value: string` - Controlled input value
- `onChange: (value: string) => void` - Change handler
- `error?: string` - Error message
- `className?: string` - Additional CSS classes

**Usage:**
```jsx
<TextInput
  label="Email"
  type="email"
  placeholder="your@email.com"
  value={email}
  onChange={setEmail}
  error={emailError}
/>
```

**Styling Notes:**
- Base: `px-4 py-2 border border-slate-300 rounded-lg`
- Focus: `focus:outline-none focus:ring-2 focus:ring-blue-500`
- Error state: `border-red-500 text-red-600`
- Disabled: `disabled:bg-slate-100 disabled:cursor-not-allowed`

### Button
Primary/secondary action button component.

**Props:**
- `children: React.ReactNode` - Button text/content
- `variant?: 'primary' | 'secondary'` - Button style (default: 'primary')
- `size?: 'sm' | 'md' | 'lg'` - Button size (default: 'md')
- `disabled?: boolean` - Disabled state
- `onClick?: () => void` - Click handler
- `className?: string` - Additional CSS classes

**Usage:**
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Get in Touch
</Button>
```

**Styling Notes:**
- Primary: `bg-blue-600 text-white hover:bg-blue-700`
- Secondary: `border border-slate-300 text-slate-800 hover:bg-slate-100`
- Transitions: Always include `transition` class
- Sizes: sm (px-3 py-1), md (px-4 py-2), lg (px-6 py-3)

### Card
Container for grouped content.

**Props:**
- `children: React.ReactNode` - Card content
- `hover?: boolean` - Add hover effect (default: false)
- `className?: string` - Additional CSS classes

**Usage:**
```jsx
<Card hover>
  <h3>Project Title</h3>
  <p>Description here</p>
</Card>
```

**Styling Notes:**
- Base: `rounded-lg border border-slate-200 p-6 bg-white`
- Hover: `hover:shadow-md hover:border-slate-300 transition`
- Spacing between cards: Use `gap-6` or `space-y-6`

## Layout Components (src/components/layout/)

### MainLayout
Primary layout wrapper for the entire page.

**Props:**
- `children: React.ReactNode` - Page content
- `header?: React.ReactNode` - Optional custom header
- `footer?: React.ReactNode` - Optional custom footer

**Usage:**
```jsx
<MainLayout header={<NavHeader />}>
  {/* Page sections */}
</MainLayout>
```

**Structure:**
```
<div class="min-h-screen bg-slate-50">
  {header}
  <main class="px-6 py-12 md:px-24 lg:px-48">
    {children}
  </main>
  {footer}
</div>
```

## Section Components (src/components/sections/)

### HeroSection
Large introductory section at the top of the page.

**Content:**
- Developer name (large, bold)
- Job title
- Location and contact info
- Brief bio
- Call-to-action buttons

**Animation:**
- Fade-in effect on page load
- Slight slide-up animation for text

### ExperienceSection
Timeline of work experience.

**Components:**
- Uses `PageSection` wrapper
- Contains multiple `ExperienceItem` components
- Timeline styling with vertical line (optional)

### ProjectsSection
Showcase of featured projects.

**Components:**
- Uses `PageSection` wrapper
- Grid of `ProjectCard` components
- Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop

### SkillsSection
Display of technical skills.

**Components:**
- Uses `PageSection` wrapper
- Skill badges/tags
- Grid or flex layout

## Feature Components (src/components/features/)

### ProjectCard
Individual project showcase card.

**Props:**
- `title: string` - Project name
- `description: string` - Brief description
- `image?: string` - Project image URL
- `tags?: string[]` - Technology tags
- `links?: Array<{label: string, href: string}>` - Project links
- `className?: string` - Additional CSS classes

**Styling Notes:**
- Build on Card component
- Image with rounded top: `rounded-t-lg`
- Gradient overlay on images for text readability
- Tags as small badges: `bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded`

### ExperienceItem
Single job/experience entry.

**Props:**
- `title: string` - Job title and company
- `period: string` - Date range
- `description: string` - Job description
- `highlights?: string[]` - Key accomplishments

**Styling Notes:**
- Clear visual hierarchy with font sizes
- Company and role distinction
- Subtle left border for timeline feel: `border-l-2 border-blue-600 pl-4`

### ContactForm
Contact/inquiry form component.

**Features:**
- Name field
- Email field
- Message textarea
- Submit button
- Success/error states

**Behavior:**
- Client-side validation
- Visual feedback on submission
- Clear success message

## Animation Patterns

### Slide-In-Up
For section entrance animations:
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideInUp {
  animation: slideInUp 0.6s ease-out;
}
```

### Fade-In
For subtle content reveals:
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-in;
}
```

### Hover Scale
For interactive elements:
```jsx
<button className="hover:scale-105 transition-transform">
  Click me
</button>
```

## Composition Examples

### Complete Hero with Navigation
```jsx
<MainLayout header={<NavHeader title="Alex Doe" links={navLinks} />}>
  <HeroSection />
  <ExperienceSection />
  <ProjectsSection />
  <SkillsSection />
</MainLayout>
```

### Custom Card with Animation
```jsx
<Card hover className="animate-slideInUp">
  <div className="aspect-video bg-gradient-to-br from-blue-400 to-slate-600 rounded-md mb-4" />
  <h3 className="text-lg font-semibold text-slate-900">Project Title</h3>
  <p className="text-slate-600 text-sm mt-2">Description</p>
</Card>
```

---

**Note:** When creating new components, follow these patterns and ensure they integrate seamlessly with existing components and styling conventions.
