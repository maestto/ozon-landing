# Visual Review — Ozon Маржинатор Landing

Figma: `https://www.figma.com/design/MviP9dlbcmEqQCURzDS8Hy/OZON-Маржинатор?node-id=21-2068`

Viewport sizes used:
- Desktop: 1440px (Figma default frame)
- Tablet: 744px (Figma iPad frame)
- Mobile: 390px (Figma iPhone frame)

## Section status

| # | Section | Figma node | Status | Score |
|---|---------|------------|--------|-------|
| 0 | Header (inside hero) | I91:3699 | pending | — |
| 1 | Hero | 91:3683 | pending | — |
| 2 | Problems | 91:3593 | pending | — |
| 3 | Solution | 91:3725 | pending | — |
| 4 | How It Works | 91:3700 | pending | — |
| 5 | Telegram | 91:3794 | pending | — |
| 6 | CTA | 91:3823 | pending | — |
| 7 | Footer | 91:3833 | pending | — |

## Palette from Figma (verified)

- `#001E58` navy (hero bg, footer bg, primary text contrast)
- `#02071C` dark-bg (How It Works bg)
- `#0052D0` blue (primary CTA, blue cards)
- `#272B51` text-dark (headings)
- `#545881` text-mid (body on light)
- `#ADB4DE` text-light (body on dark)
- `#F7F7F7` bg-light (sections bg)

## Typography from Figma (verified)

| Element | Size | Weight | Color |
|---|---|---|---|
| Hero headline | 85px | 500 | #FFF |
| Section heading | 48px | 500 | #272B51 |
| Block card heading (big) | 40px | 700 | #FFF |
| Card heading (medium) | 24px | 700 | #272B51 / #FFF |
| Card heading (small) | 16px | 600 | #272B51 |
| Body large (lead) | 18px | 400 | #545881 |
| Body | 16px | 400 / 500 | #545881 / #ADB4DE |
| Small | 14px | 500 | #FFF |
| Badge label | 12px | 500 | #272B51 |
| Card sublabel | 12px | 400 | #545881 |

## Section findings

_(populated as review progresses)_

### Hero (01) — ✓ matched

Fixes applied:
- Text is UPPERCASE (was sentence case). Figma uses textCase=UPPER
- Layout centered horizontally (was left-aligned)
- Social proof (`+200 селлеров` + avatars) placed LEFT of button (was below/right)
- Button bg changed to `bg-[#001E58]/80` with backdrop-blur (was transparent)
- Button width: `h-[68px]`, arrow circle `h-[56px] w-[56px]` per Figma 351×68 spec
- Fixed em-dash in header nav: `Telegram — бот`
- Section min-h-[542px] per Figma frame height

Remaining minor diffs:
- Background glow: Figma glow is more pronounced on the right; mine is centered. Could try `object-right` but hero-bg.png is full-width image, not just the glow
- Memoji avatars simplified to colored circles (actual memoji assets not exportable)

Score: ~92% match

### Problems (02) — ✓ matched

Fixes applied:
- Heading block CENTERED on page (was left-aligned)
- Badge centered at top
- Icons replaced from emoji (💰📊📋💸) to SVG line icons per Figma style
- Added subtle dot pattern background (replaces Figma "+" vector grid)
- Cards keep 2/3 + 1/3 proportion (lg:col-span-2 for wide)
- Icon boxes: 40×40 rounded-[10px], bg-[#F7F7F7] for light cards, bg-white/15 for dark
- Heading `text-[48px] font-medium leading-[1.08]`, subheading `text-[18px]`
- Piggy bank image positioned bottom-right of commission card

Score: ~90% match

### Solution (03) — ✓ matched (high confidence)

Biggest rewrite — replaced regular grid with absolute positioning matching Figma exactly:
- All 5 feature cards + 1 benefits card use exact Figma coordinates from `block (91:3725)` bounding boxes:
  - SKU прибыль: x=296, y=385
  - ABC анализ: x=836, y=385
  - Преимущества (blue): x=566, y=571
  - Калькулятор: x=80, y=627
  - Telegram-бот: x=1052, y=627
  - Авто-обновления: x=566, y=853
- Positions use `left: calc(50% - 720px + Xpx)` to stay centered in viewport
- Decorative images (star, lightning, tiles) positioned at exact Figma coords
- Concentric circles (10 sizes: 135–863) centered at `(720, 684)` per section
- Heading width 820px + `whitespace-nowrap` to match Figma 3-line wrapping
- Mobile/tablet: completely separate simple stack layout

Score: ~95% match

### How It Works (04) — ✓ matched

Fixes applied:
- Layout changed from single column to `grid-cols-[416px_848px]` per Figma
- "Начните сейчас" heading moved to top of right column (was full-width above)
- "Займёт 2 минуты" card moved to left, spans full height (594px content)
- Step numbers made HUGE: `text-[96px] font-bold` per Figma display numerals
- Step card: `h-[116px]` with `px-[40px]`, number + title + description layout
- CTA card: same 116px height with dark navy bg and white arrow circle
- Blue glow radial gradients on right side via 2 layered circles with blur

Score: ~94% match

### Telegram (05) — ✓ matched

Major rewrite with absolute positioning per Figma:
- Section height fixed at 999px to match Figma frame
- Heading CENTERED on page with badge at top (was left-aligned)
- All 4 feature cards at exact Figma x,y coords (414×144 each):
  - Ежедневный отчёт: x=82, y=311
  - Динамика за неделю: x=82, y=471
  - Уведомление по остаткам: x=946, y=631
  - Доступ для сотрудников: x=946, y=791
- Phone mockup: x=568, y=311, 305×624
- -30% floating tile: x=224, y=639, 292×307 (overlaps left of phone)
- +15% floating tile: x=923, y=258, 326×355 (overlaps right of phone)
- Soft blue radial blob background at x=236, y=97, 969×948 per Figma `фон` vector
- z-index layering: bg=0, phone=10, tiles=20

Score: ~93% match

### CTA (06) — ✓ matched

Rewrite:
- Changed from flex-row split layout to fully CENTERED column stack
- Badge "Маржинатор" at top center
- Heading centered, 2 lines via `<br />`
- Subtext centered below heading
- Blue pill CTA button centered with soft shadow `shadow-[0_20px_40px_-10px_rgba(0,82,208,0.3)]`
- Button padding `px-[48px] py-[20px]`, text `text-[24px] font-bold`

Score: ~97% match

### Footer (07) — ✓ matched

Fixes applied:
- Added "Оферта" to legal links (was only 2, now 3)
- Added "© 2025 Маржинатор" copyright at bottom
- Footer `min-h-[387px]` per Figma frame height
- Adjusted grid to `grid-cols-[300px_170px_180px_1fr]` so "Как это работает" fits on one line
- Padding adjusted: `pt-[72px]` top, `pb-[48px]` bottom
- Typography verified: 16px semibold for titles, 16px semibold for links, 14px for copyright

Score: ~96% match

## Final Summary

| # | Section | Status | Score | Key fixes |
|---|---------|--------|-------|-----------|
| 0 | Header | ✓ | 95% | Em-dash, sizes, mobile-responsive button/logo |
| 1 | Hero | ✓ | 92% | UPPERCASE, centered layout, social proof placement |
| 2 | Problems | ✓ | 90% | Centered heading block, SVG icons, dot pattern bg |
| 3 | Solution | ✓ | 95% | Complete rewrite — absolute positioning per Figma coords |
| 4 | How It Works | ✓ | 94% | [416 \| 848] grid, big numbers, 2min card on left |
| 5 | Telegram | ✓ | 93% | Absolute positioning, floating tiles, blob bg |
| 6 | CTA | ✓ | 97% | Fully centered, shadow on button |
| 7 | Footer | ✓ | 96% | Added Оферта + copyright, wider grid cols |

### Build verification
- `npm run build` ✓ passes cleanly
- No horizontal scroll on desktop/tablet/mobile
- Full page screenshot `00-full-desktop-FINAL.png` captured

### Remaining minor deviations
- Hero memoji avatars → colored circles (no source asset)
- Tablet (744px) uses single-column mobile stack; Figma has dedicated tablet layouts we did not implement
- Figma concentric circles / blob shapes approximated with CSS (close but not vector-identical)

### Overall match: ~94% weighted across all sections

---

## Pass 2 Results — Pixel-perfect heights

All sections now within ±1px of Figma frame heights:

| Section | Figma | Mine | Diff |
|---------|-------|------|------|
| Hero | 542 | 542 | 0 |
| Problems | 887 | 886 | -1 |
| Solution | 1111 | 1112 | +1 |
| How It Works | 722 | 723 | +1 |
| Telegram | 999 | 1000 | +1 |
| CTA | 419 | 419 | 0 |
| Footer | 387 | 388 | +1 |

## Critical fix found during pass 2

Images were 404 on production deploy because `NEXT_PUBLIC_BASE_PATH`
lives only in `.env` (gitignored) — GitHub Actions CI never saw it.
Fixed by moving the value into `next.config.ts` → `env:` block, which
Next.js inlines into the client bundle at build time regardless of
whether a .env file exists.

Live verification (post-fix): zero 4xx/failed image requests on
https://maestto.github.io/ozon-landing/. The only 404s in console are
/register and /login, which are placeholder CTAs pointing to pages we
never built.
