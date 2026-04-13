---
layout: post
title: Accessibility in React Skeleton component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Skeleton component of Syncfusion Essential JS 2 and more.
control: Skeleton
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Skeleton component

The Skeleton component follows WCAG 2.2, Section 508, and ADA accessibility standards to ensure all users, including those using assistive technologies, receive meaningful feedback during content loading periods. The component provides semantic markup and ARIA attributes that communicate loading state to screen readers and assistive devices.

The accessibility compliance levels for the Skeleton component are outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The Skeleton component implements [WAI-ARIA status pattern](https://www.w3.org/WAI/ARIA/apg/patterns/status/) semantics to communicate loading state to assistive technologies. The following ARIA attributes are applied in the Skeleton component:

| Attribute | Purpose |
| --- | --- |
| `role="status"` | Identifies the Skeleton as a status region where loading state is communicated. |
| `aria-label` | Provides an accessible label describing the Skeleton's purpose or the content being loaded. |
| `aria-live="polite"` | Announces content updates to screen readers when the skeleton is replaced with actual content. |
| `aria-busy="true/false"` | Set to `true` during loading to indicate pending content; changed to `false` when content loads or the skeleton is removed. |

## Motion and animation accessibility

The Skeleton component supports shimmer effects that include animations. Users who prefer reduced motion can configure their operating system or browser settings, and the component respects the `prefers-reduced-motion` media query to minimize animations for accessibility compliance.

## Ensuring accessibility

Syncfusion validates the Skeleton component's accessibility compliance using industry-standard tools including [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during continuous automated testing.

The following sample demonstrates the accessibility features of the Skeleton component. Open the [sample](https://ej2.syncfusion.com/accessibility/skeleton.html) in a new window to evaluate the component's accessibility using your preferred accessibility testing tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/skeleton.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)