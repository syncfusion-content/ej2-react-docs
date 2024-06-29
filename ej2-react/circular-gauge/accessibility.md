---
layout: post
title: Accessibility in React Circular Gauge component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Circular Gauge component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Circular Gauge component

The Circular Gauge component follows commonly used accessibility guidelines and standards, such as [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles).

The accessibility compliance for the Circular Gauge component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | Not Applicable |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the control meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the control do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The control does not meet the requirement.</div>

## WAI-ARIA attributes

The Circular Gauge component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Circular Gauge component:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It is specified in the pointer where the interactive drag and drop function is supported to update the pointer value. |
| `aria-label` | Provides an accessible name for the axis labels, legend title, legend item label, text pointer and annotation. |

## Screen reading in Circular Gauge

Accessibility in the Circular Gauge component ensures that all users, regardless of ability or disability, can use screen reading. The following Circular Gauge elements will be read aloud using screen reading software, such as Narrator for Windows.

| Elements | Description |
| --- | --- |
| Axis labels | Reads the axis labels of the Circular Gauge. |
| Legend title | Reads the title of the legend in the Circular Gauge. |
| Legend item label | Reads the label of the legend item in the Circular Gauge. |
| Text pointer | Reads the text content shown as a pointer in Circular Gauge. |
| Annotation | Reads the content specified in the annotation. |

## Ensuring accessibility

The Circular Gauge component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Circular Gauge component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/circular-gauge.html) in a new window to evaluate the accessibility of the Circular Gauge component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/circular-gauge.html" %}

## See also

* [Accessibility in Syncfusion React components](../common/accessibility)
