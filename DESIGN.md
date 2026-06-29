# Refero Phone Catalog

Primary reference: [Nothing Tech Catalog Page UI](https://refero.design/pages/1e477637-d7a6-4264-8892-a056587b9232?query=phone%20store%20website%20design&source=search).

## Reference Lock

Preserve from the reference: light retail canvas, large real product/lifestyle media, asymmetric hero composition, thin borders, neutral surfaces, short spec-led product copy, and a black primary purchase action.

Adapt for GadgetHub: Russian consumer storefront, real smartphone photos, delivery and warranty trust signals, clear price blocks, catalog filters, product detail gallery, cart, checkout, and required commercial/legal pages.

Reject: poster-like ad images for product cards, heavy black/red brutalist styling, decorative grids, fake CSS phone illustrations, internal prototype language, and generic card-heavy landing-page sections.

## Tokens

Background: `#F4F5F6`.
Canvas: `#FFFFFF`.
Surface: `#F8F8F8`, strong surface `#ECEFF1`.
Text: `#111315`, secondary `#5B616B`, tertiary `#8A929D`.
Borders: `#DFE3E7`, strong `#C6CCD2`.
Primary CTA: `#111315`, hover `#2A2F35`.
Sale/accent: `#E94D5F`, only for discounts and promo labels.
Success: `#16845B`, only for positive status/actions.
Radius: 8px.
Elevation: subtle retail shadow only on hero media, mobile bar, and product hover.

## Typography

Use `Inter` across the site. Headlines rely on tight weight and scale, not decorative font pairing. Body text stays readable at 16-18px with secondary text no lighter than the muted token.

## Component Rules

Product cards are interactive inventory containers, so cards are appropriate there. Informational sections use restrained blocks and dividers instead of nested cards. Product imagery remains real photo/render assets and must stay front/back/product-focused.

Buttons use black for the primary purchase path. Sale red is never used as a general brand color. Filter chips and memory/color options are pill controls with selected state using black.

## Checkout Flow

Research method: Refero MCP flow tools were not exposed in the current Codex environment, so the flow follows the Refero methodology with browser-researched ecommerce checkout references and the bundled craft rules for forms, focus states, mobile touch targets, and copy.

Primary flow: cart -> contacts/account -> delivery/address -> payment -> review -> order accepted.

Registration rule: account creation is optional. Guest checkout stays first because forcing registration before payment increases friction for a smartphone purchase. The account path only asks for a password after the buyer chooses to create an account.

Delivery rule: show concrete RF-market choices as cards: pickup point, courier, and self-pickup. City and address fields use explicit labels and autocomplete attributes. The final delivery interval is confirmed by manager because inventory and logistics are prototype/static.

Payment rule: show payment choices as cards: SBP, online card, pay on receipt, and installment. Money is not described as charged immediately; copy says the payment link/options come after stock confirmation.

Confirmation rule: before submitting, the buyer sees selected account mode, delivery, payment, and manager callback. Legal consent remains visible near the final CTA.
