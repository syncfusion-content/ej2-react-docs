---
layout: post
title: Accessibility in React Checkbox | Syncfusion
description: Learn how the React Checkbox meets WCAG 2.2, Section 508, and ADA standards. Includes WAI-ARIA roles, keyboard interaction, and validation tools.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Checkbox

The React Checkbox component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The following table outlines the accessibility compliance of the React Checkbox component:

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
**Legend:**

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The React Checkbox component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) patterns to meet accessibility requirements. The following ARIA attributes are used in the React Checkbox component:

| Attributes | Purpose |
| --- | --- |
| `aria-disabled` | Indicates that the React Checkbox element is perceived but disabled, so it is not editable or operable by the user. |

## Keyboard interaction

The React Checkbox component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/#keyboardinteraction) guideline, making it accessible for people who use assistive technologies and those who rely entirely on keyboard navigation. The following keyboard shortcut is supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Space</kbd> | When the React Checkbox has focus, pressing the Space key toggles the React Checkbox between checked and unchecked states. |

## Ensuring accessibility

The React Checkbox component's accessibility is validated using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the React Checkbox component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/checkbox.html) in a new window to evaluate the React Checkbox component's accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/checkbox.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
