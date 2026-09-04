---
layout: post
title: Accessibility in React Query Builder UI | Syncfusion
description: The React Query Builder UI meets WCAG 2.2, Section 508, and ADA accessibility standards, with screen reader, keyboard, and RTL support.
control: QueryBuilder
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Query Builder UI

The React Query Builder UI component adheres to accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) commonly used to evaluate web accessibility.

The following table outlines the accessibility compliance features of the React Query Builder UI component.

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

WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications) provides a framework for enhancing the accessibility of web applications. It defines semantic roles, states, and properties that communicate component purpose and current state to assistive technologies like screen readers.

The React Query Builder UI uses the following WAI-ARIA attributes:

| Attributes | Purpose |
| --- | --- |
| `role` | Identifies the React Query Builder UI region to assistive technologies. The root container uses `role="form"` while individual rule rows expose `role="group"`. |
| `aria-expanded` | Indicates whether the field, operator, or value dropdown is currently open or collapsed. |
| `aria-haspopup` | Conveys that the field, operator, and value editors open a popup (listbox) when activated. |
| `aria-label` | Provides an accessible name for icon buttons such as Add Group, Add Condition, Delete, Clone, and Lock. |
| `aria-disabled` | Reflects the locked or disabled state of a rule or group. |

## Keyboard interaction

The React Query Builder UI provides keyboard support for efficient navigation and interaction without requiring a mouse. Users can navigate between fields, operators, and values; manage rules and groups; and control the component using standard keyboard shortcuts and focus management.

The React Query Builder UI component follows the keyboard interaction guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the React Query Builder UI component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Tab / Shift + Tab</kbd> | Moves focus to the next or previous interactive element within the rule group. |
| <kbd>Arrow Up / Arrow Down</kbd> | Navigates between options inside an open field, operator, or value dropdown. |
| <kbd>Enter</kbd> | Commits the currently typed/selected value and moves focus to the next editor in the rule. |
| <kbd>Escape</kbd> | Closes any open dropdown without applying changes. |
| <kbd>Delete</kbd> | Removes the focused rule or group when focus is on the rule/container body. |

## Ensuring accessibility

The React Query Builder UI component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the React Query Builder UI component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/query-builder.html) in a new window to evaluate the accessibility of the React Query Builder UI component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/query-builder.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
