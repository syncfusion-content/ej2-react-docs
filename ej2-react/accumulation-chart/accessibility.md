---
layout: post
title: Accessibility in React Accumulation chart component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Accumulation chart component

The Accumulation chart component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Accumulation chart component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
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


## WAI-ARIA attributes

The Accumulation chart component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns to meet the accessibility. The following ARIA attributes are used in the Accumulation chart component:

| Element | Default description |
| --- | --- |
| Title | Reads the accumulation chart's title |
| Legend | Reads the series point name |
| Series Points | Reads the Point x :  Point y value |

## Keyboard interaction

The Accumulation chart component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Accumulation chart component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt + J</kbd> | Moves the focus to the Accumulation chart element. |
| <kbd>Tab</kbd> | Moves the focus to the next element in the Accumulation chart. |
| <kbd>Shift + Tab</kbd> | Moves the focus to the previous element in the Accumulation chart. |
| <kbd>Down Arrow</kbd> | Moves the focus to the data point left side from the selected point. |
| <kbd>Up Arrow</kbd> | Moves the focus to the data point right side from the selected point. |
| <kbd>Down/Left Arrow</kbd> | Moves the focus to the legend left side from the selected legend. |
| <kbd>Up/Right Arrow</kbd> | Moves the focus to the legend right side from the selected legend. |
| <kbd>Enter/Space</kbd> | Toggles the visibility of the corresponding series. |
| <kbd>Ctrl + P</kbd> | Prints the Accumulation chart. |

## Ensuring accessibility

The Accumulation chart component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Accumulation chart component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/accumulation-chart.html) in a new window to evaluate the accessibility of the Accumulation chart component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/accumulation-chart.html" %}

## See also

* [Accessibility in Syncfusion React components](../common/accessibility)