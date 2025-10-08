---
layout: post
title: Accessibility in React TreeGrid | Syncfusion
description: Learn here all about Accessibility in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Accessibility
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React TreeGrid

The TreeGrid follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles), which are commonly used to evaluate accessibility.

The accessibility compliance for the TreeGrid component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
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
The TreeGrid component follows [WAI‑ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/) patterns. The following ARIA attributes are used in the TreeGrid component:

| Attributes | Purpose |
| --- | --- |
| `role=treegrid` | Used to convey a significant and contextual message. |
| `aria-selected` | Reflects the selection state for single or multiple selection. |
| `aria-expanded` | Indicates whether a hierarchical row is expanded or collapsed. |
| `aria-sort` | Conveys the current sort direction for a column. |
| `aria-busy` | Announces a loading state while data is being processed. |
| `aria-invalid` | Indicates that the current input value is invalid. |
| `aria-grabbed` | Provides accessibility information for interacting with draggable elements |
| `aria-owns` | Establishing relationships between an element and the elements it owns or controls |
| `aria-label` | Provides an accessible name for the close icon. |

## Keyboard interaction

The TreeGrid follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported.

Interaction Keys | Description
-----|-----
<kbd>PageDown</kbd> | Navigates to the next page.
<kbd>PageUp</kbd> | Navigates to the previous page.
<kbd>Ctrl + Alt + PageDown</kbd> | Navigates to the last page.
<kbd>Ctrl + Alt + PageUp</kbd> | Navigates to the first page.
<kbd>Alt + PageDown</kbd> | Navigates to the next page.
<kbd>Alt + PageUp</kbd> | Navigates to the previous page.
<kbd>Home</kbd> | Moves focus to the first cell in the row.
<kbd>End</kbd> | Moves focus to the last cell in the row.
<kbd>Ctrl + Home</kbd> | Moves focus to the first row.
<kbd>Ctrl + End</kbd> | Moves focus to the last row.
<kbd>DownArrow</kbd> | Moves focus down one cell.
<kbd>UpArrow</kbd> | Moves focus up one cell.
<kbd>LeftArrow</kbd> | Moves focus left one cell.
<kbd>RightArrow</kbd> | Moves focus right one cell.
<kbd>Shift + DownArrow</kbd> | Extends row/cell selection downward.
<kbd>Shift + UpArrow</kbd> | Extends row/cell selection upward.
<kbd>Shift + LeftArrow</kbd> | Extends cell selection to the left.
<kbd>Shift + RightArrow</kbd> | Extends cell selection to the right.
<kbd>Enter</kbd> | Moves the row/cell selection downward. If current cell is in edit state, then completes the editing. If the current cell is a header then performs sorting.
<kbd>Shift + Enter</kbd> | Moves the row/cell selection upward. If the current cell is a header then clears sorting for the selected column.
<kbd>Ctrl + Enter</kbd> | Applies multi-sorting when focused on a header.
<kbd>Tab</kbd> | Moves focus to the cell selection right side.
<kbd>Shift + Tab</kbd> | Moves focus to the cell selection left side.
<kbd>Esc</kbd> | Clears selection.
<kbd>Ctrl + A</kbd> | Selects all rows or cells.
<kbd>UpArrow</kbd> | Moves up a row/cell selection.
<kbd>DownArrow</kbd> | Moves down a row/cell selection.
<kbd>RightArrow</kbd> | Moves to the right cell selection.
<kbd>LeftArrow</kbd> | Moves to the left cell selection.
<kbd>Ctrl + Shift + DownArrow</kbd> | Expands the selected group.
<kbd>Ctrl + DownArrow</kbd> | Expands all visible groups.
<kbd>Ctrl + Shift + UpArrow</kbd> | Collapses the selected group.
<kbd>Ctrl + UpArrow</kbd> | Collapses all visible groups.
<kbd>Ctrl + P</kbd> | Prints the TreeGrid.

## Ensuring accessibility

Accessibility is validated using automated tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core). The following sample demonstrates TreeGrid accessibility. Open the [sample](https://ej2.syncfusion.com/accessibility/tree-grid.html) in a new window to evaluate accessibility with these tools.
{% previewsample "https://ej2.syncfusion.com/accessibility/tree-grid.html" %}

## See also
* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.