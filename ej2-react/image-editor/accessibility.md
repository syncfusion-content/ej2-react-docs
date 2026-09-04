---
layout: post
title: Accessibility in React Image Editor | Syncfusion
description: Learn how the React Image Editor meets WCAG 2.2, Section 508, ADA, and keyboard navigation standards with screen reader and RTL support.
control: Accessibility
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Image Editor

The React Image Editor component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) commonly used to evaluate accessibility.

The accessibility compliance for the React Image Editor component is outlined below.

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#wcag-22-web-content-accessibility-guidelines) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#section-508) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](https://ej2.syncfusion.com/react/documentation/common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](https://ej2.syncfusion.com/react/documentation/common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](https://www.npmjs.com/package/accessibility-checker) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](https://www.npmjs.com/package/axe-core) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## Keyboard interaction

The React Image Editor component follows keyboard interaction guidelines to support assistive technologies and keyboard-only users. The following keyboard shortcuts are supported by the React Image Editor component (enabled by default).

| **Press** | **Action** |
| --- | --- |
| <kbd>Ctrl + Z</kbd> | Undo last action |
| <kbd>Ctrl + Y</kbd> | Redo last action |
| <kbd>Ctrl + S</kbd> | Save image |
| <kbd>Ctrl + O</kbd> | Open image |
| <kbd>Delete</kbd> | Delete selected shape |
| <kbd>Enter</kbd> | Apply selection crop or resize image |
| <kbd>Escape</kbd> | Discard current operation |

## Ensuring accessibility

Verify accessibility using automated tools and manual testing. Common test packages include `axe-core` (used via test integrations like `jest-axe`) and the `accessibility-checker` tools.

You can also run the `accessibility-checker` CLI against the live sample to get a report.

The accessibility compliance of the React Image Editor component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/image-editor.html) in a new window to evaluate the component with accessibility tools.

{% previewsample "page.domainurl/code-snippet/image-editor/default-cs6" %}

## See also

* [Accessibility in Syncfusion React components](../common/accessibility)
