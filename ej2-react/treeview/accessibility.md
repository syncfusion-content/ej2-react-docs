---
layout: post
title: Accessibility in React Tree View | Syncfusion
description: WAI-ARIA treeitem roles, aria-expanded, aria-selected, and full arrow-key navigation support for the Syncfusion React TreeView.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Tree View

The React Tree View component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the React Tree View component is outlined below.

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

The TreeView component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/) patterns to meet the accessibility. The following ARIA attributes are used in the TreeView component:

| Attributes | Purpose |
| --- | --- |
| `role=tree` | All tree nodes are contained within the element. |
| `role=treeitem `| Specifies the role of each tree node in a selectable React Tree View and its containment within the tree. |
| `role=group` | Specifies the role of each parent node container. |
| `role=checkbox` | Indicates checkbox control along with treeitem element. |
| `aria-multiselectable` | Indicates whether the React Tree View enables multiple selection or not. |
| `aria-expanded` | Indicates whether the parent node has expanded or not. |
| `aria-selected` | Indicates the selected node. |
| `aria-grabbed` | Indicates the selected state on drag-and-drop of node. |
| `aria-level` | Indicates the level of node in React Tree View. |
| `aria-checked` | Indicates the current checked state of React Tree View checkbox. |
| `aria-label` | Indicates the contextual message for the React Tree View checkbox. |
| `aria-activedescendant` | Identifies the currently active element when focusing on the React Tree View. |
| `aria-disabled` | Indicates element is perceivable but disabled. |

## Keyboard interaction

The React Tree View component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the React Tree View component.

| Interaction Keys | Description |
|------|---------|
| <kbd>Arrow Up</kbd> | Goes to the previous node. |
| <kbd>Arrow Down</kbd> | Goes to the next node. |
| <kbd>Arrow Right</kbd> | Expands the current node. |
| <kbd>Arrow Left</kbd> | Collapses the current node. |
| <kbd>Home</kbd> | Goes to the first node. |
| <kbd>End</kbd> | Goes to the last node. |
| <kbd>F2</kbd> | Edits the focused node. |
| <kbd>Esc</kbd> | Focuses out the edit state without saving the edited text. |
| <kbd>Enter</kbd> | Selects the focused node/saves the edited text. |
| <kbd>Space</kbd> | Checks the current node. |
| <kbd>Ctrl + A</kbd> | Selects all nodes. |

## Ensuring accessibility

The React Tree View component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the React Tree View component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/treeview.html) in a new window to evaluate the accessibility of the React Tree View component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/treeview.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
