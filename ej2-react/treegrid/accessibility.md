---
layout: post
title: Accessibility in React Treegrid component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Treegrid component

The Tree Grid component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Tree Grid component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="intermediate"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA

WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript, and related technologies. ARIA provides additional semantics to describe the role, state, and functionality of web components.

The following ARIA attributes are used in the TreeGrid:
* grid (role)
* row (role)
* gridcell (role)
* aria-selected (attribute)
* aria-expanded (attribute)
* aria-sort (attribute)
* aria-busy (attribute)
* aria-invalid (attribute)
* aria-grabbed (attribute)
* aria-owns (attribute)
* aria-label (attribute)

## Keyboard navigation

TreeGrid functionalities can be interactive with keyboard shortcuts.

The following keyboard shortcuts are supported by TreeGrid.

Interaction Keys |Description
-----|-----
<kbd>PageDown</kbd> |Goes to the next page.
<kbd>PageUp</kbd> |Goes to the previous page.
<kbd>Ctrl + Alt +PageDown</kbd> |Goes to the last page.
<kbd>Ctrl + Alt + PageUp</kbd> |Goes to the first page.
<kbd>Alt + PageDown</kbd> |Goes to the next page.
<kbd>Alt + PageUp</kbd> |Goes to the previous page.
<kbd>Home</kbd> |Goes to the first cell.
<kbd>End</kbd> |Goes to the last cell.
<kbd>Ctrl + Home</kbd> |Goes to the first row.
<kbd>Ctrl + End</kbd> |Goes to the last row.
<kbd>DownArrow</kbd> |Moves the cell focus downward.
<kbd>UpArrow</kbd> |Moves the cell focus upward.
<kbd>LeftArrow</kbd> |Moves the cell focus left side.
<kbd>RightArrow</kbd> |Moves the cell focus right side.
<kbd>Shift + DownArrow</kbd> |Extends the row/cell selection downwards.
<kbd>Shift + UpArrow</kbd> |Extends the row/cell selection upwards.
<kbd>Shift + LeftArrow</kbd> |Extends the cell selection to the left side.
<kbd>Shift + RightArrow</kbd> |Extends the cell selection to the right side.
<kbd>Enter</kbd> | Moves the row/cell selection downward. If current cell is in edit state, then completes the editing. If the current cell is a header then performs sorting.
<kbd>Shift + Enter</kbd> | Moves the row/cell selection upward. If the current cell is a header then clears sorting for the selected column.
<kbd>Ctrl + Enter</kbd> | If the current cell is a header then performs multi-sorting.
<kbd>Tab</kbd> | Moves the cell selection right side.
<kbd>Shift + Tab</kbd> | Moves the cell selection left side.
<kbd>Esc</kbd> |Deselects all the rows/cells.
<kbd>Ctrl + A</kbd> |Selects all the rows/cells.
<kbd>UpArrow</kbd> |Moves up a row/cell selection.
<kbd>DownArrow</kbd> |Moves down a row/cell selection.
<kbd>RightArrow</kbd> |Moves to the right cell selection.
<kbd>LeftArrow</kbd> |Moves to the left cell selection.
<kbd>Ctrl + Shift + DownArrow</kbd> |Expands the selected group.
<kbd>Ctrl + DownArrow</kbd> |Expands all the visible groups.
<kbd>Ctrl + Shift + UpArrow</kbd> |Collapses the selected group.
<kbd>Ctrl + UpArrow</kbd> |Collapses all the visible groups.
<kbd>Ctrl + P</kbd> |Prints the TreeGrid.

## Ensuring accessibility

The Tree Grid component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Tree Grid component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/tree-grid.html) in a new window to evaluate the accessibility of the Tree Grid component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/tree-grid.html" %}

## See also
* [Accessibility in Syncfusion React components](../common/accessibility)

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
