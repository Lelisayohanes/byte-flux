# Developer Platform Color Palette

A sophisticated, minimal color palette designed specifically for developer platforms. This palette is optimized for both light and dark themes, ensuring excellent readability and professional aesthetics.

## Design Principles

- **Minimal & Cohesive**: Limited color set for consistent application
- **Professional**: Modern, trustworthy colors suitable for technical platforms
- **Accessible**: High contrast ratios meeting WCAG guidelines
- **Theme-Aware**: Seamless transitions between light and dark modes
- **Developer-Focused**: Colors that work well for code, documentation, and technical content

## Color System

### Base Colors

| Color | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| **Background** | `hsl(0 0% 100%)` - Pure White | `hsl(220 13% 9%)` - Near Black | Main page backgrounds |
| **Foreground** | `hsl(220 13% 9%)` - Near Black | `hsl(0 0% 100%)` - White | Primary text content |
| **Card** | `hsl(0 0% 100%)` - White | `hsl(220 13% 9%)` - Near Black | Card backgrounds |
| **Border** | `hsl(220 13% 85%)` - Light Gray | `hsl(220 13% 20%)` - Dark Gray | Borders and dividers |

### Primary Colors

| Color | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| **Primary** | `hsl(214 100% 50%)` - Vibrant Blue | `hsl(214 100% 60%)` - Brighter Blue | CTAs, links, active states |
| **Primary Foreground** | `hsl(0 0% 100%)` - White | `hsl(220 13% 9%)` - Near Black | Text on primary elements |

### Secondary Colors

| Color | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| **Secondary** | `hsl(220 13% 95%)` - Very Light Gray | `hsl(220 13% 15%)` - Dark Gray | Secondary buttons, subtle backgrounds |
| **Muted** | `hsl(220 13% 95%)` - Very Light Gray | `hsl(220 13% 15%)` - Dark Gray | Subtle backgrounds, disabled states |
| **Muted Foreground** | `hsl(220 13% 45%)` - Medium Gray | `hsl(220 13% 65%)` - Light Gray | Secondary text, captions |

### Semantic Colors

| Color | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| **Success** | `hsl(142 76% 36%)` - Professional Green | `hsl(142 76% 45%)` - Brighter Green | Success messages, positive feedback |
| **Warning** | `hsl(38 92% 50%)` - Professional Orange | `hsl(38 92% 60%)` - Brighter Orange | Warnings, attention states |
| **Destructive** | `hsl(0 84% 60%)` - Professional Red | `hsl(0 84% 70%)` - Brighter Red | Errors, destructive actions |
| **Info** | `hsl(214 100% 50%)` - Blue | `hsl(214 100% 60%)` - Brighter Blue | Information, tips |

## Usage Examples

### Tailwind CSS Classes

```tsx
// Primary elements
<button className="bg-primary text-primary-foreground">Primary Button</button>

// Secondary elements
<div className="bg-secondary text-secondary-foreground">Secondary Content</div>

// Semantic states
<div className="bg-success text-success-foreground">Success Message</div>
<div className="bg-warning text-warning-foreground">Warning Message</div>
<div className="bg-destructive text-destructive-foreground">Error Message</div>
<div className="bg-info text-info-foreground">Info Message</div>

// Muted content
<p className="text-muted-foreground">Secondary text content</p>

// Cards and containers
<div className="bg-card text-card-foreground border border-border">
  Card content
</div>
```

### CSS Custom Properties

```css
/* Direct usage in CSS */
.custom-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}

/* Semantic color usage */
.success-badge {
  background-color: hsl(var(--success));
  color: hsl(var(--success-foreground));
}
```

## Accessibility

All color combinations in this palette meet WCAG AA contrast requirements:

- **Text on Background**: 4.5:1 minimum contrast ratio
- **Large Text**: 3:1 minimum contrast ratio
- **UI Components**: 3:1 minimum contrast ratio

## Theme Switching

The palette automatically adapts when switching between light and dark themes:

```tsx
// Theme switching example
const [theme, setTheme] = useState('light');

return (
  <html className={theme === 'dark' ? 'dark' : ''}>
    {/* Your content automatically uses the appropriate colors */}
  </html>
);
```

## Best Practices

1. **Consistency**: Use semantic color names rather than specific color values
2. **Hierarchy**: Use muted colors for secondary information, primary colors for important actions
3. **States**: Use semantic colors (success, warning, destructive) for clear user feedback
4. **Accessibility**: Always test color combinations for sufficient contrast
5. **Theme Awareness**: Design with both light and dark themes in mind

## Color Psychology

- **Blue (Primary)**: Trust, reliability, technology - perfect for developer platforms
- **Gray (Neutrals)**: Professional, clean, unobtrusive - ideal for content areas
- **Green (Success)**: Growth, completion, positive feedback
- **Orange (Warning)**: Attention, caution, important information
- **Red (Destructive)**: Urgency, errors, critical actions

This palette creates a professional, trustworthy environment that developers will find comfortable and easy to work with.
