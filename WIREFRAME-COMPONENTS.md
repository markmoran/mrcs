# MRCS Wireframe v5 — Component Spec

All repeating patterns are defined here. Before building or editing any wireframe section, look up the canonical markup below. Do not invent structure — use this spec.

---

## Shared CSS + Components

All shared CSS is injected by `mrcs-components.js` via a `<style id="mrcs-shared-styles">` tag. All shared HTML components are injected via placeholder `<div id="...">` elements.

**Never hardcode these sections inline.** Use the placeholder div, and let mrcs-components.js handle the rest.

| Placeholder div | Component | Used on |
|---|---|---|
| `<div id="mrcs-header">` | Utility bar + Nav | All pages |
| `<div id="mrcs-home-services">` | Home page service cards | Home page only |
| `<div id="mrcs-services">` | Generic 4×2 service card grid | All non-home pages needing the grid |
| `<div id="mrcs-locations-service">` | Service page locations section | All 8 service pages |
| `<div id="mrcs-crisis">` | Crisis support banner (dark bg) | All pages |
| `<div id="mrcs-work-cta">` | Work at Mount Rogers CTA | Most pages |
| `<div id="mrcs-footer">` | Footer + copyright bar | All pages |

---

## Callout Section

Used on: service pages, careers, about, donate pages, and any page with a text+media two-column highlight block.

**CSS classes:** `.callout-section`, `.callout-label`, `.callout-row`, `.callout-text`, `.callout-media` — all defined in shared CSS.

**Canonical HTML:**
```html
<section class="callout-section">
  <!-- optional: add class="callout-gray" for #f5f5f5 background -->
  <div class="container">
    <div class="callout-label">Section Label Text</div>  <!-- ALWAYS outside the flex row -->
    <div class="callout-row">
      <div class="callout-text">
        <h2>Section Heading</h2>
        <p>Body paragraph text here.</p>
        <a href="#" class="btn btn-secondary">CTA Button</a>
      </div>
      <div class="callout-media">Media Placeholder</div>
    </div>
  </div>
</section>
```

**Key rules:**
- `.callout-label` MUST be outside (above) `.callout-row` so the media placeholder top-aligns with the `<h2>`, not the label
- `.callout-text` max-width is 589px (set by shared CSS)
- `.callout-media` is 400×300px (set by shared CSS)
- Use `class="callout-section callout-gray"` for gray background variant
- Do NOT use inline styles on callout sections — use the class system

---

## Service Page Locations Section

Used on: all 8 individual service pages.

**Canonical HTML — just the placeholder:**
```html
<div id="mrcs-locations-service"></div>
```

`mrcs-components.js` injects a standard section with:
- h2 "Locations"
- Intro paragraph
- 400px-tall map placeholder
- 4-column grid of 4 "Location Name" placeholder cards (address + phone, no real data)
- Centered "View All Locations" button → mrcs-wf-locations-v5.html

**Never hardcode a locations section on a service page.** If the section needs to vary per page, discuss with the project lead before breaking from the shared component.

---

## Locations Listing Page (mrcs-wf-locations-v5.html)

**Below-map layout:** Horizontal list cards — NOT a grid.

Each card is a flex row:
- Left: Location Name (24px bold), meta row (address, phone, email, hours icons), Services label + description text
- Right: 250px-wide photo placeholder

**Count text:** "Showing 10 of 27 Locations"

**Pagination:** 3 pages. Page 1 active (bg #7e7e7e, white text). Pages 2–3 inactive (bg #d9d9d9). Each button 39×39px.

**No "View All Locations" button** on this page (it IS the all-locations page).

---

## Individual Location Detail (mrcs-wf-location-v5.html)

**"About This Location" section:**
- Background: #f6f6f6
- Content width: max-width 850px, centered (narrow container)
- Layout: alternating two-column rows (text + image placeholder, then image + text)

**Services section:**
- NOT the generic `<div id="mrcs-services">` component
- Custom 4×2 card grid matching Get Help page card style: title, description, "Learn More →" link per card
- All 8 services listed

---

## Board of Directors (mrcs-wf-board-v5.html)

**CEO section:** bg #f5f5f5, content width 850px centered

**Board member list:** Single-column vertical list of white-bg card containers, NOT a multi-column grid or plain text rows. Each card: name (bold 16px) + title/position (14px gray). Consistent horizontal padding (32px).

**Callout section:** Use `.callout-section` class system. Section-label above the flex row.

---

## FAQ Page (mrcs-wf-faq-v5.html)

**Accordion section:** bg #ebebeb, content 850px centered (300px horizontal padding in 1440px frame)

**Collapsed accordion items:** white bg, rounded, border

**Expanded accordion item:** bg #d9d9d9, shows question + 2-paragraph answer

**"Still Have Questions" CTA section:** bg #f7f7f7, contains:
1. Small uppercase label "STILL HAVE QUESTIONS?"
2. `<h2>` "Didn't find your answer?"
3. Body text
4. "Contact Us →" button (bg #111)

---

## Events Calendar (mrcs-wf-events-v5.html)

This is a CALENDAR page, NOT a card listing or event grid.

Layout (all in bg #f5f5f5 section):
1. Search row: text input + "Find Events" button + Month dropdown
2. Calendar nav row: prev arrow + "This Month" button + next arrow + "June 2026" label
3. Calendar placeholder: `[Embedded Google Calendar]` div, max-width 1027px, height 600px
4. "Subscribe to Calendar" button, right-aligned

No event cards. No map section. No card listing.

---

## Hero Section Pattern

Used across all pages. White background, `padding: 72px 0 80px`.

Contents (narrow column, max-width ~700px):
- Breadcrumb (`Home / Section Name`)
- `<h1>` page title
- Subtitle paragraph
- Optional CTA button

---

## Container Width Reference

| Name | Value | When to use |
|---|---|---|
| Full container | max-width 1200px, padding 0 32px | Most content sections |
| Narrow container | max-width 850px, centered | Hero text, board content, about team section, FAQ content, location detail |
| Callout text col | max-width 589px | Left column in `.callout-row` only |

---

## Background Color Reference

| Color | Token / Value | Typical use |
|---|---|---|
| White | #ffffff | Hero, callout sections, trainings, narcan, wellness services |
| Light gray A | #f5f5f5 | CEO section, ESS overview content, about mission |
| Light gray B | #f6f6f6 | Service page locations sections, location listing cards |
| Light gray C | #ebebeb | FAQ accordion section |
| Off-white | var(--bg) ≈ #f2f2f0 | Outreach services, generic sections |
| Dark / charcoal | #1a1a1a or var(--dark-bg) | Crisis banner, nav, footer, CTA buttons |

---

## What NOT to do

- Do NOT hardcode a locations section on any service page — use `<div id="mrcs-locations-service">` and let the component inject it
- Do NOT put `.callout-label` inside `.callout-row` — it goes ABOVE the flex row
- Do NOT use inline styles for callout sections — use the `.callout-section` class system
- Do NOT include "Employment Support Services" in the Get Help nav dropdown — ESS is top-level nav only
- Do NOT use real location names, real phone numbers, or real email addresses as link hrefs — use placeholder text and `href="#"`
- Do NOT guess layout from context — check this spec first, then check Figma if the spec doesn't cover it
