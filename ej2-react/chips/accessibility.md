---
layout: post
title: Accessibility in React Chips component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Chips component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Chips component

The Chips component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The following table outlines the accessibility compliance of the Chips component:

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

The Chips component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns to meet accessibility requirements. The following ARIA attributes are used in the Chips component:

| Attributes | Purpose |
| --- | --- |
| `role=listbox` | Marks the ChipList wrapper element as a listbox for screen readers. |
| `role=option` | Identifies selectable chips within the ChipList (for multiple selection). |
| `role=button` | Identifies a single chip that triggers actions or events. |
| `aria-label` | Provides an accessible name for the chip. |
| `aria-selected` | Indicates whether a chip is currently selected. |
| `aria-disabled` | Indicates that a chip is perceivable but disabled and not operable. |
| `aria-multiselectable` | Indicates that multiple chips can be selected from the list. |

## Keyboard interaction

The Chips component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/button/#keyboardinteraction) guideline, making it accessible for people who use assistive technologies and those who rely entirely on keyboard navigation. The following keyboard shortcuts are supported:

| Keyboard shortcut | Action |
| --- | --- |
| <kbd>Enter / Space</kbd> | Selects the focused chip in the ChipList or ChipCollection. |
| <kbd>Delete / Backspace</kbd> | Deletes the focused chip from the ChipList or ChipCollection. |

## Ensuring accessibility

The Chips component's accessibility is validated using [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Chips component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/chips.html) in a new window to evaluate the Chips component's accessibility with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/chips.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React Components](../common/accessibility)
