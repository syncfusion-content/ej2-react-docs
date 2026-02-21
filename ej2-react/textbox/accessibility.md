---
layout: post
title: Accessibility in React TextBox component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React TextBox component

The TextBox component is built to meet the highest accessibility standards, ensuring that all users—including those using assistive technologies—can interact with the component effectively. It complies with [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles) that are essential for evaluating digital accessibility.

The accessibility compliance for the TextBox component is outlined in the table below. A checkmark (✓) indicates full feature compliance, while partial or absent support is noted accordingly.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

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

The TextBox includes comprehensive ARIA accessibility support to enable seamless interaction with screen readers and other assistive technologies. This component implements the practices outlined in [WAI-ARIA Textbox specifications](https://www.w3.org/TR/wai-aria/#textbox), ensuring users with disabilities can access all functionality.

The TextBox uses the `textbox` role and following ARIA properties for its element based on its state.

| **Property** | **Functionality** |
| --- | --- |
| aria-placeholder | The `aria-placeholder` is a short hint to help the users with data entry when the TextBox has no value. |
| aria-labelledby | The `aria-labelledby` property indicates the floating label element of the TextBox. |

## Ensuring accessibility

The TextBox component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the TextBox component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/textbox.html) in a new window to evaluate the accessibility of the TextBox component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/textbox.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)