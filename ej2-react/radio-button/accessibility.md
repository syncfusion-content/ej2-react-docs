---
layout: post
title: Accessibility in React RadioButton component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React RadioButton component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React RadioButton component

The RadioButton component adheres to accessibility standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles). These standards ensure the component is usable by all users, including those using assistive technologies.

The following table outlines the accessibility compliance for the RadioButton component.

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

The RadioButton component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) patterns to ensure accessibility. The following ARIA attributes are implemented in the RadioButton component:

| Attributes | Purpose | Support |
| --- | --- | --- |
| `role="radio"` | Defines the radio button semantic role for assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-checked` | Indicates the checked state of the RadioButton to screen readers. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-disabled` | Indicates the disabled state to assistive technologies. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-label` | Provides an accessible name for the RadioButton when no visible label is present. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## Keyboard interaction

The RadioButton component implements [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/radio/#keyboardinteraction) guidelines to support users relying on keyboard navigation or assistive technologies. The following keyboard shortcuts are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the next RadioButton group or focusable element. |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable element. |
| <kbd>Up Arrow / Left Arrow</kbd> | Selects the previous RadioButton option in the group. |
| <kbd>Down Arrow / Right Arrow</kbd> | Selects the next RadioButton option in the group. |

## Ensuring accessibility

The RadioButton component's accessibility levels are ensured through [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the RadioButton component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/radiobutton.html) in a new window to evaluate the accessibility of the RadioButton component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/radiobutton.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
