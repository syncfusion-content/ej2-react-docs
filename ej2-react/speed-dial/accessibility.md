---
layout: post
title: Accessibility in React Speed dial component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Speed dial component

The Speed Dial component adheres to accessibility standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles). These standards ensure the component is usable by all users, including those using assistive technologies.

The following table outlines the accessibility compliance for the Speed Dial component.

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

The Speed Dial component follows [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) patterns to ensure accessibility. The following ARIA attributes are implemented in the Speed Dial component:

| Attributes | Purpose | Support |
| ------------ | ----------------------- | --- |
| `role="menu"` | Defines the menu semantic role for the SpeedDial popup container. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `role="menuitem"` | Defines the menu item semantic role for individual SpeedDial action items. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-label` | Provides an accessible name for the SpeedDial button or action items. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-expanded` | Indicates whether the SpeedDial popup is currently open (true) or closed (false). | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-haspopup` | Indicates that the SpeedDial button has an associated popup menu. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-controls` | References the popup element controlled by the SpeedDial button for screen readers. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| `aria-disabled` | Indicates whether a SpeedDial action item is disabled and cannot be activated. | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## Keyboard interaction

The Speed Dial component implements [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/#keyboardinteraction) guidelines to support users relying on keyboard navigation or assistive technologies. The following keyboard shortcuts are supported:

| **Press** | **To do this** |
|------------|-------------------|
| <kbd>Enter</kbd> | Opens or closes the SpeedDial popup menu. |
| <kbd>Space</kbd> | Opens or closes the SpeedDial popup menu. |
| <kbd>Up Arrow</kbd> | Moves focus to the previous action item in the menu. |
| <kbd>Down Arrow</kbd> | Moves focus to the next action item in the menu. |
| <kbd>Left Arrow</kbd> | Moves focus to the previous action item in the menu. |
| <kbd>Right Arrow</kbd> | Moves focus to the next action item in the menu. |
| <kbd>Home</kbd> | Moves focus to the first action item in the menu. |
| <kbd>End</kbd> | Moves focus to the last action item in the menu. |
| <kbd>Escape</kbd> | Closes the SpeedDial popup menu. |

## Ensuring accessibility

The Speed Dial component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Speed Dial component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/speed-dial.html) in a new window to evaluate the accessibility of the Speed Dial component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/speed-dial.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)