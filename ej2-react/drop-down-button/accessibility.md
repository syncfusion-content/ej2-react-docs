---
layout: post
title: Accessibility in React DropDownButton component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React DropDownButton component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React DropDownButton component

The DropDownButton component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The following table outlines the accessibility compliance of the DropDownButton component:

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

The DropDownButton component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns to meet accessibility requirements. The following ARIA attributes are used in the DropDownButton component:

| Attributes | Purpose |
| --- | --- |
| `role` | Identifies the DropDownButton as a `button`, the popup as a `menu`, and popup items as `menuitem` elements. |
| `aria-haspopup` | Indicates that the button triggers a popup menu. |
| `aria-expanded` | Indicates whether the popup is currently expanded or collapsed. |
| `aria-owns` | Defines the relationship between the button and its popup menu in the accessibility tree. |
| `aria-disabled` | Indicates that a button is disabled and not operable. |

## Keyboard interaction

The DropDownButton component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/button/#keyboardinteraction) guideline, making it accessible for people who use assistive technologies and those who rely entirely on keyboard navigation. The following keyboard shortcuts are supported:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Enter / Space</kbd> | Opens the dropdown popup. |
| <kbd>Down / Up</kbd> | Navigates through popup items. |
| <kbd>Escape</kbd> | Closes the dropdown popup. |

## Ensuring accessibility

The DropDownButton component's accessibility is validated using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DropDownButton component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/dropdown-button.html) in a new window to evaluate the DropDownButton component's accessibility with accessibility tools.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
| --- | --- |
| <kbd>Esc</kbd> | Closes the popup. |
| <kbd>Enter</kbd> | Opens the popup, or activates the highlighted item and closes the popup. |
| <kbd>Space</kbd> | Opens the popup. |
| <kbd>Up</kbd> | Navigates up or to the previous action item. |
| <kbd>Alt + Up Arrow</kbd> | Closes the popup. |
| <kbd>Alt + Down Arrow</kbd> | Opens the popup. |

## Ensuring accessibility

The Drop down component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DropDownButton component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/drop-down-button.html) in a new window to evaluate the accessibility of the DropDownButton component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/drop-down-button.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
