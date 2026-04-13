---
layout: post
title: Accessibility in React Message component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Message component of Syncfusion Essential JS 2 and more.
control: Message
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Message component

The Message component follows WCAG 2.2, Section 508, and ADA accessibility standards. This ensures that applications using the Message component provide an accessible experience for all users, including those using assistive technologies such as screen readers and keyboard navigation.

The accessibility compliance levels for the Message component are outlined below.

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

The Message component implements the [WAI-ARIA alert pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) to ensure proper accessibility semantics. The following ARIA attributes are applied in the Message component:

| Attributes | Purpose |
| --- | --- |
| `role=alert` | Used to convey a significant and contextual message to the user. |
| `aria-label` | Provides an accessible name for the close icon. |

## Keyboard interaction

The Message component supports keyboard interaction according to the [WAI-ARIA alert pattern guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction). This enables users who rely on keyboard navigation or assistive technologies to interact with messages effectively. The following keyboard interactions are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab / Shift + Tab</kbd> | To focus the close icon in the message. |
| <kbd>Enter / Space</kbd> | Closes the focused close icon's message. |

## Ensuring accessibility

Syncfusion validates the Message component's accessibility compliance using industry-standard tools including [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during continuous automated testing.

The following sample demonstrates the accessibility features of the Message component. Open the [sample](https://ej2.syncfusion.com/accessibility/message.html) in a new window to evaluate the component's accessibility using your preferred accessibility testing tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/message.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
