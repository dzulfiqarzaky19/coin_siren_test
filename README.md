# Coin Siren - Technical Case Study

A Next.js 14+ landing page implementation demonstrating Atomic Design, SSR with API Routes, and performance optimization.

## Links

- **Live Demo**: [Vercel Deployment](https://coin-siren-test.vercel.app)
- **Repository**: [GitHub](https://github.com/dzulfiqarzaky19/coin_siren_test)

---

## Requirements Compliance

| Requirement | Implementation |
|-------------|----------------|
| Next.js 14 (TypeScript) | Next.js 16.0.7 with TypeScript 5 |
| Atomic Design Pattern | atoms/molecules/organisms structure |
| SSR with API Routes | Server Component calls route handlers |
| Static data in handler | Mock data inside `GET()` functions |
| Parallel API calls | `Promise.all([...])` |
| TailwindCSS | Tailwind v4 |
| ESLint + Prettier | Flat config with Prettier integration |
| Animations | framer-motion |

---

## Architecture Decisions

### 1. SSR with API Routes (Without `fetch`)

**Challenge**: The requirement was "SSR render with API routes" + "Call the API in parallel". Using `fetch('http://localhost:3000/api/...')` fails during build because the server isn't yet finished the build.

**Solution**: Import and call the route handlers directly.

```tsx
// page.tsx (Server Component)
import { GET as getTalents } from '@/app/api/talents/route';

const [talents, services, company] = await Promise.all([
  getTalents().then((r) => r.json()),
  getServices().then((r) => r.json()),
  getCompany().then((r) => r.json()),
]);
```

This approach:
- Still uses API route logic (data defined in handlers)
- Parallel execution with `Promise.all`
- Works during build (no network request needed)
- Deploys to Vercel without URL configuration

**Other possible solution** : use `fetch` with `process.env.NEXT_PUBLIC_BASE_URL`, the problem is this is exposed to the client side.

---

### 2. Dummy Data vs Constant

**Challenge**: Data is static for this task, but I needed to decide which should come from API routes (simulating a database) vs hardcoded constants.

**Solution**: I categorized data by **change frequency** and **ownership**:
| Data | Type | Reason |
|------|------|--------|
| Talents | API Route | User-generated, frequently updated |
| Services | API Route | Business offerings, may expand |
| Company Info | API Route | Legal/contact details, rarely but importantly updated |
| Navigation | Constant | Fixed UI structure |
| Hero Text | Constant | Marketing copy, rarely changes |
| Filter Options | Constant | Static UI labels |

**Principle**: If data would come from a database or CMS in production, it goes in API routes. If it's hardcoded UI copy, it's a constant.
___

### 3. Server vs Client Component Strategy

**Principle**: Push `'use client'` as deep as possible to minimize JavaScript bundle.

| Component | Type | Reason |
|-----------|------|--------|
| `HeroSlider` | Client | Uses `useState` for slider index |
| `HeroServices` | Client | Uses `useState` for animation trigger |
| `HeaderMobileMenu` | Client | Uses `useState` for menu toggle |
| `IntroAnimation` | Client | Uses framer-motion |
| Everything else | Server | No interactive state needed |

**Key Insight**: Components like `Button` and `Typography` have NO `'use client'` directive. They remain Server Components when imported by server parents, but become client-bundled when imported by client parents.

```
Header (Server) → Button (Server)
HeroSlider (Client) → Button (Client, due to parent)
```

---

### 4. Hero Slider Implementation

**Challenge**: Create an infinite carousel with 3 visible cards.

**Solution**: Used framer-motion's `wrap` utility for circular indexing plus sliding window logic.

```tsx
const virtualIndex = wrap(0, total, index);  // Wraps around array bounds
const offset = wrap(-1, total - 1, i - virtualIndex);
const isVisible = Math.abs(offset) <= 1;  // Only render [-1, 0, 1]
```

- `virtualIndex`: Current center card (wraps at array bounds)
- `offset`: Position relative to center (-1 = left, 0 = center, 1 = right)
- Cards outside `[-1, 0, 1]` are not rendered

---

### 5. Layout Strategy on Hero Section (Flex vs Grid)

**Initial approach**: CSS Grid with explicit template areas.

```
[bubble] [image]
[title]  [image]
[cta]    [image]
```

**Problem**: Too rigid, hard to maintain responsive behavior.

**Final approach**: Flexbox with visibility toggles.

- Desktop: Two-column flex layout
- Mobile: Single column with re-ordered elements
- Some elements duplicated with opposite visibility (`hidden md:block` / `block md:hidden`)

Trade-off accepted: Slight HTML duplication for better maintainability.

---

### 6. Checkbox as Read-Only Display

The filter checkboxes in the design don't correlate with talent card skills. Instead of adding fake filtering logic (which would require `useState` and make it a client component), I made them:

```tsx
<input type="checkbox" defaultChecked readOnly />
```

This keeps the component as a **Server Component** while matching the visual design.

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── talents/route.ts   # Static talent data
│   │   ├── services/route.ts  # Static service data
│   │   └── company/route.ts   # Static company data
│   ├── page.tsx               # Home (SSR + Parallel)
│   └── layout.tsx
├── components/
│   ├── atoms/                 # 8 components
│   ├── molecules/             # 13 components
│   └── organisms/             # 3 components
├── constants/                 # Centralized static data
├── types/                     # TypeScript interfaces
└── utils/
    └── cn.tsx                 # Tailwind class merger
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint and format
npm run lint
npm run format
```

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework with App Router |
| `motion` | Animations (framer-motion) |
| `lucide-react` | Icons |
| `clsx` + `tailwind-merge` | Class name utilities |
| `tailwindcss` | Styling |

---

## Learnings

1. **Direct handler calls vs fetch**: For internal API routes in Server Components, calling handlers directly is more robust than HTTP fetch.

2. **Animation trade-offs**: framer-motion requires client JS, but I isolated animations to wrapper components (`IntroAnimation`, [HeroSlider](cci:1://file:///home/dzulfiqarzaky/projects/coin_siren_test/src/components/molecules/HeroSliderItem.tsx:15:0-50:2)) keeping the client boundary shallow rather than deeply nested.

3. **Atomic Design vs Feature Sliced Design**: Atomic Design works well for small projects, but for larger projects I would recommend FSD — 100+ components in one folder adds maintenance complexity.


---

## Future Improvements
Given more time, I would consider:
1. **Functional Filtering** :  Connect the filter checkboxes to actually filter talent cards by skill
2. **i18n Support** : Add Korean/English language toggle since the site is bilingual
3. **Skeleton Loaders** : Replace "Loading..." text with shimmer placeholders
4. **Error Boundaries** : Handle API failures gracefully with fallback UI
5. **Unit Tests** : Test API handlers and utility functions with Jest
6. **Touch Gestures** : Add swipe support to the hero slider on mobile