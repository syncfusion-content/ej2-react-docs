---
layout: post
title: Accessibility in React Scheduler | Syncfusion
description: Learn how the Syncfusion React Scheduler meets WAI-ARIA, WCAG 2.2, and Section 508 accessibility standards with screen reader and keyboard support.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Scheduler

The Scheduler is designed based on the WAI-ARIA specifications and applies the appropriate ARIA roles, states, and properties to Scheduler elements. It also includes built-in keyboard navigation support, which improves usability for users of assistive technologies or keyboard-only input. As part of accessibility support, navigated dates, views, and other interactive actions performed within the Scheduler are announced to screen readers.

The Scheduler uses essential ARIA attributes such as `aria-label` and `role` to ensure accessibility. For accurate interpretation, use it with an ARIA-compliant browser and a running screen reader.

The accessibility compliance for the Schedule component is outlined below.

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

## ARIA attributes

The Scheduler's parent element is assigned with a role of `main`, to denote it as the main content of a component as well as a unique element of the entire document.

The following ARIA attributes are used in the Scheduler:

| Attributes | Description |
|-------|---------|
| role="main" | Added to the Scheduler element to identify it as the main content of the document. |
| role="button" | Assigned to Scheduler appointments to identify them as clickable elements. |
| aria-label | Set on the Scheduler parent element. Its default value is the Scheduler's current date, and it updates whenever the date changes. It is also assigned to other Scheduler UI elements such as previous and next navigation buttons, the date range text in the header bar, and appointment elements. |
| aria-labelledby | Indicates the editor dialog title to assistive technologies. |
| aria-describedby | Indicates the editor dialog content description to assistive technologies. |
| aria-disabled | Set on appointment elements to indicate the disabled state of the Scheduler. |

The Syncfusion® React Scheduler component uses a complex table structure to render calendar views such as Day, Week, and Month. As a result, automated accessibility tools such as IBM Equal Access Accessibility Checker may report the following warnings:

- **Table has no headers identified:** Some tables rendered by the Scheduler do not have headers explicitly identified, which may trigger warnings in accessibility checkers.
- **Complex table does not have headers for each cell properly defined with 'header' or 'scope':** The Scheduler's internal table structure may not define headers for every cell using the `header` or `scope` attributes, leading to additional warnings.

- **Label text is located after its associated text input or &lt;select&gt; element:** Certain form fields and dropdowns within the built-in editor windows place the label after the input control, which may flag standard layout order validation.

- **The 'for' attribute is not the 'id' of a valid element:** In the built-in Scheduler editor window with multiple resources enabled, internal reference links between a label and its input component may trigger missing reference warnings in automated checkers.

- **Accessible name does not match or contain the visible label text:** Certain interactive elements within the component may have mismatched programmatic names compared to their displayed labels, which can be flagged by label-matching verification tools. This behavior occurs specifically in the Month view date headers and the Agenda view appointment elements.

- **Text contrast does not meet the minimum WCAG AA requirements:** Certain elements with specific text sizes and weights may fail standard color contrast ratio checks under default theme settings. This behavior occurs specifically in Adaptive mode when using multiple resources.

- **The combobox 'aria-expanded' attribute is false, but the combobox popup is visible:** The `aria-expanded` attribute remains false even when the combobox popup is visible in the editor window drop-down components because the component uses a custom composite layout to render standard dropdown elements. Automated verification tools may flag this as a layout or state mismatch.

- **The tabbable element's role 'cell' is not a widget role:**  
The tabbable element's `cell` role is not a widget role, which can trigger errors in automated accessibility checkers because a standard cell role is not recognized as an interactive widget by default. This behavior occurs specifically in multiple resource Timeline views.

## Keyboard interaction

All Scheduler actions can be controlled via keyboard using the `allowKeyboardInteraction` property, which is `true` by default. The following standard keys are supported within the Scheduler:

| Keys | Description |
|-----|-----|
| <kbd>Alt</kbd> + <kbd>j</kbd> | Focuses the Scheduler element provided by the application. |
| <kbd>Tab</kbd> | Focuses the first or active item on the Scheduler header bar and then moves to the next available event elements. If no events are present, focus moves out of the component. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Reverses the focus order of the `Tab` key. It moves from the last event element to the first or active item on the Scheduler header bar and then moves out of the component. |
| <kbd>Enter</kbd> | Opens the quick info popup on the selected cells or events. |
| <kbd>Escape</kbd> | Closes any open popup. |
| <kbd>Arrow</kbd> | Moves to the next available cell in the required direction. |
| <kbd>Shift</kbd> + <kbd>Arrow</kbd> | Selects multiple cells in either direction. |
| <kbd>Delete</kbd> | Deletes one or more selected events. |
| <kbd>Ctrl</kbd> + <kbd>Click</kbd> on events | Selects multiple events. |
| <kbd>Alt</kbd> + <kbd>Number</kbd> (1 to 6) | Switches between Scheduler views. |
| <kbd>Ctrl</kbd> + <kbd>Left Arrow</kbd> | Navigates to the previous date period. |
| <kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd> | Navigates to the next date period. |
| <kbd>Left</kbd> or <kbd>Right Arrow</kbd> | When focus is on the Scheduler header bar, moves focus to the previous or next item in the header bar. |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | Activates the focused item. |
| <kbd>Page Up</kbd> and <kbd>Page Down</kbd> | Scrolls through the work cells area. |
| <kbd>Home</kbd> | Moves the selection to the first cell of the Scheduler. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> | Navigates to today. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | Opens the editor window. |

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for a quick overview of its capabilities. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to learn how to present and manipulate data.

## Ensuring accessibility

The Scheduler component's accessibility levels are verified through automated testing using tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core).

The accessibility compliance of the Scheduler component is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/schedule.html) in a new window to evaluate the Scheduler component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/schedule.html" %}

## See also

- [Accessibility in React components](../common/accessibility)