---
layout: post
title: Accessibility in React ProgressButton component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React ProgressButton component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React ProgressButton component

The ProgressButton component adheres to accessibility standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles). These standards ensure the component is usable by all users, including those using assistive technologies.

The following table outlines the accessibility compliance for the ProgressButton component.

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

The ProgressButton component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to ensure accessibility. The following ARIA attributes are implemented in the ProgressButton component:

| Attributes | Purpose | Support |
| --- | --- | --- |
| `aria-label` | Provides an accessible name for the icon-only ProgressButton, essential for screen reader users. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-disabled` | Indicates the disabled state of the button to assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-valuemin` | Specifies the minimum value for progress (0) to assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-valuemax` | Specifies the maximum value for progress (100) to assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-valuenow` | Indicates the current progress percentage to screen readers. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## Keyboard interaction

The ProgressButton component implements keyboard interaction guidelines to support users relying on keyboard navigation or assistive technologies. The following keyboard shortcuts are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Enter</kbd> | Starts the progress when the button has focus. |
| <kbd>Space</kbd> | Starts the progress when the button has focus. |
| <kbd>Tab</kbd> | Moves focus to the next focusable element; shift+Tab moves to previous element. |
| <kbd>Escape</kbd> | Stops or cancels the progress operation. |

## Ensuring accessibility

The ProgressButton component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the ProgressButton component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/progress-button.html) in a new window to evaluate the accessibility of the ProgressButton component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/progress-button.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
