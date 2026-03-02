---
layout: post
title: Accessibility in React Floating action button component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Floating action button component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Floating action button component

The Floating Action Button component adheres to accessibility standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles). These standards ensure the component is usable by all users, including those using assistive technologies.

The following table outlines the accessibility compliance for the Floating Action Button component.

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

Legend:
<img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - Fully supported

The Floating Action Button component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/button/) patterns to ensure accessibility. The following ARIA attributes are implemented in the Floating Action Button component:

| Attributes | Purpose | Support |
| --- | --- | --- |
| `aria-label` | Provides an accessible name for the icon-only Floating Action Button, essential for screen reader users. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-disabled` | Indicates the disabled state of the Floating Action Button to assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `role="button"` | Defines the button semantic role for assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## Keyboard interaction

The Floating Action Button component implements [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/button/#keyboardinteraction) guidelines to support users relying on keyboard navigation or assistive technologies. The following keyboard shortcuts are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Enter</kbd> | Activates the Floating Action Button when it has focus. |
| <kbd>Space</kbd> | Activates the Floating Action Button when it has focus. |
| <kbd>Tab</kbd> | Moves focus to the next focusable element; shift+Tab moves to previous element. |
| <kbd>Escape</kbd> | Closes any open tooltip or popup associated with the Floating Action Button. |

## Ensuring accessibility

The Floating action button component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Floating action button component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/floating-action-button.html) in a new window to evaluate the accessibility of the Floating action button component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/floating-action-button.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)