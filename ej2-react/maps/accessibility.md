---
layout: post
title: Accessibility in React Maps component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Maps component

The Maps component follows commonly used accessibility guidelines and standards, such as the [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles).

The accessibility compliance for the Maps component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> |
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

## WAI-ARIA attributes

To meet accessibility standards, the Maps component follows to the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) patterns. In the Maps component, the following ARIA attributes are used:

| Attributes | Purpose |
| --- | --- |
| `role=region` | It specifies the Maps areas that do not support interactive functions like selection and highlight. |
| `role=button` | It specifies the Maps areas where interactive functions such as selection and highlight are available. |
| `aria-label` | Provides an accessible name for the Maps container, title, subtitle and legend title. |

## Keyboard Navigation

All the Maps actions can be controlled via keyboard keys. The applicable key combinations and their relative functionalities are listed below for the appropriate UI features available in the component.

Interaction Keys |Description
-----|-----
<kbd>Tab</kbd> |Moves to the next focusable element on the map, such as the legend or shape.
<kbd>Shift</kbd> + <kbd>Tab</kbd> |Moves to the previous focusable element on the map, such as the legend or shape.
<kbd> + </kbd> |When zooming is enabled, zoom in operation can be performed.
<kbd> - </kbd> |When zooming is enabled, zoom out operation can be performed.
<kbd>Left arrow</kbd> |When zoomed in, the map can be scrolled to the left.
<kbd>Right arrow</kbd> |When zoomed in, the map can be scrolled to the right.
<kbd>Up arrow</kbd> |When zoomed in, the map can be scrolled upward.
<kbd>Down arrow</kbd> |When zoomed in, the map can be scrolled downward.
<kbd> R </kbd> |When zooming is enabled, reset operation can be performed.
<kbd>Enter</kbd> |The page can be navigated to the next and previous states in legend. Similarly, the selection can be made while navigating over the shape.

## Ensuring accessibility

The Maps component's accessibility levels are ensured using an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Maps component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/maps.html) in a new window to evaluate the accessibility of the Maps component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/maps.html" %}

## See also

* [Accessibility in Syncfusion React components](../common/accessibility)
