---
layout: post
title: Accessibility in React Toast component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Toast component

The Toast component follows WCAG 2.2, Section 508, and ADA accessibility standards to ensure notifications are accessible to all users, including those using assistive technologies. Toast notifications are announced to screen readers as live regions, enabling users to receive important updates without requiring focus or interaction.

The accessibility compliance for the Toast component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | Not Applicable |
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

The Toast component implements the [WAI-ARIA alert pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) to provide semantic meaning and accessibility features for screen readers and assistive technologies. The component applies proper ARIA roles and states to communicate notification importance and content changes to users with assistive devices.

| Attribute | Purpose |
| --- | --- |
| `role="alert"` | Identifies the Toast as an alert region, signaling important, time-sensitive information to screen readers |
| `aria-live="assertive"` | Announces toast content immediately when displayed, interrupting other announcements |
| `aria-label` | Provides an accessible name describing the toast content or purpose |

The Toast component has been tested with major screen readers including JAWS, NVDA, and VoiceOver to ensure compatibility and proper announcement of toast notifications.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs2" %}

## Ensuring accessibility

The Toast component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Toast component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/toast.html) in a new window to evaluate the accessibility of the Toast component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/toast.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
