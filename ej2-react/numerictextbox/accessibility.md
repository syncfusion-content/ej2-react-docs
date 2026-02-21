---
layout: post
title: Accessibility in React Numerictextbox component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React NumericTextBox component

The NumericTextBox component adheres to the highest accessibility standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles). These standards ensure the component is accessible to all users, including those using assistive technologies.

The accessibility compliance for the NumericTextBox component is outlined in the table below. A checkmark (✓) indicates full feature compliance, while partial or absent support is noted accordingly.

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

The NumericTextBox features comprehensive ARIA accessibility support, enabling seamless interaction with screen readers and other assistive technologies. This component implements the practices outlined in [WAI-ARIA Spinbutton specifications](https://www.w3.org/TR/wai-aria/#spinbutton), ensuring users with disabilities can access all functionality.

The NumericTextBox uses the `spinbutton` role and following ARIA properties to its element based on its state.

| **Property** | **Functionality** |
| --- | --- |
| aria-live | The `aria-live` attribute indicates the priority of updates to a live region |
| aria-valuemin | The `aria-valuemin` property specifies the minimum allowable range of the NumericTextBox.|
| aria-valuemax | The `aria-valuemax` property specifies the maximum allowable range of the NumericTextBox. |
| aria-disabled | The `aria-disabled` property indicates disabled state of the NumericTextBox. |
| aria-readonly | The `aria-readonly` property indicates the read-only state of the NumericTextBox. |
| aria-valuenow | The `aria-valuenow` property specifies the current value of the NumericTextBox. |
| aria-invalid | The `aria-invalid` property indicates that the user input is incorrect or not within acceptable ranges. |
| aria-label | The `aria-label` property indicates a string value that labels the NumericTextBox. |

## Keyboard interaction

The NumericTextBox keyboard interactions follow [WAI-ARIA Spinbutton practices](https://www.w3.org/TR/wai-aria/#spinbutton), providing full accessibility via keyboard without requiring a mouse. Users can navigate and control the component entirely through keyboard input.

The following table describes the keyboard shortcuts and their corresponding actions:

| Keyboard Shortcut | Action |
| --- | --- |
| <kbd>Arrow Up</kbd> | Increments the numeric value |
| <kbd>Arrow Down</kbd> | Decrements the numeric value |

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/getting-started-cs2" %}

## Ensuring accessibility

The NumericTextBox component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the NumericTextBox component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/numeric-textbox.html) in a new window to evaluate the accessibility of the NumericTextBox component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/numeric-textbox.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)