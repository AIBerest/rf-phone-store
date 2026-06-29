# Refero Phone Catalog

Primary reference: [Apple iPhone product catalog page](https://refero.design/pages/ab5dbc02-c985-43d2-8e20-33df77b743c0?query=phone%20store%20web%20design%20references&source=search).

## Reference Lock

Preserve from the reference: clean white retail canvas, compact horizontal product lineup, large product-led hero, stacked promotional product bands, four-column model comparison, concise buy/learn-more CTAs, real product imagery, and generous whitespace.

Adapt for GadgetHub: Russian consumer storefront, multi-brand smartphone selection, RF-market delivery/payment/warranty trust signals, ruble prices, catalog filters, product detail gallery, cart, checkout, account flows, and required commercial/legal pages.

Reject: copying Apple brand assets or text, poster-like ad images for product cards, heavy black/red brutalist styling, decorative grids, fake CSS phone illustrations, internal prototype language, and generic card-heavy landing-page sections.

## Tokens

Background: `#FFFFFF`.
Canvas: `#FFFFFF`.
Surface: `#F5F5F7`, strong surface `#E8E8ED`.
Text: `#1D1D1F`, secondary `#6E6E73`, tertiary `#86868B`.
Borders: `#D2D2D7`, strong `#B6B6BD`.
Primary CTA: `#0071E3`, hover `#0077ED`.
Sale/accent: `#E94D5F`, only for discounts and promo labels.
Success: `#16845B`, only for positive status/actions.
Radius: 18px for major sections and rounded CTA pills.
Elevation: subtle retail shadow only on hero media, floating overlays, mobile bar, and product hover.

## Typography

Use `Inter` across the site. Headlines rely on tight weight and scale, not decorative font pairing. Body text stays readable at 16-18px with secondary text no lighter than the muted token.

## Component Rules

Product cards are interactive inventory containers, so cards are appropriate there. Informational sections use restrained blocks and dividers instead of nested cards. Product imagery remains real photo/render assets and must stay front/back/product-focused.

Buttons use blue for the primary purchase path. Sale red is never used as a general brand color. Filter chips and memory/color options are pill controls with selected state using the primary action color or dark text where appropriate.

## Checkout Flow

Research method: Refero MCP flow and screen tools are connected. The checkout flow now uses these references:

- Nike Flow 2041: cart review, delivery mode selection, pickup-point list, address form, shipping speed, payment method, order review.
- adidas Flow 10243: contact/address step, selected address validation, shipping cards, payment entry, payment failure recovery, persistent order summary.
- Farfetch Flow 3550: two-column secure checkout, promo code in summary, payment method detail states, external payment interruption/retry pattern.
- Acne Studios Flow 4359: email-first sign-in/registration, short create-account form, password requirements, terms consent, post-submit account state.

Primary flow: cart -> contacts/account -> delivery/address -> payment -> review -> order accepted.

Registration rule: account creation is optional. Guest checkout stays first because forcing registration before payment increases friction for a smartphone purchase. The account path only asks for a password after the buyer chooses to create an account.

Account rule: a separate account page starts with email, then branches into sign-in, create account, password reset, or dashboard. This mirrors the Refero email-first account flow without blocking checkout.

Delivery rule: show concrete RF-market choices as cards: pickup point, courier, and self-pickup. City and address fields use explicit labels and autocomplete attributes. For pickup points, show selectable location cards; for delivery, show speed cards with price/ETA. The final interval is confirmed by manager because inventory and logistics are prototype/static.

Payment rule: show payment choices as cards: SBP, online card, pay on receipt, and installment. Card selection reveals card fields with payment autocomplete attributes. Non-card methods show clear next-step cards. Money is not described as charged immediately; copy says the payment link/options come after stock confirmation.

Confirmation rule: before submitting, the buyer sees selected account mode, delivery method, speed or pickup address, payment, and manager callback. Legal consent remains visible near the final CTA.
