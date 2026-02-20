---
layout: post
title: Types in React Badge component | Syncfusion
description: Learn here all about Types in Syncfusion React Badge component of Syncfusion Essential JS 2 and more.
control: Badge
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Badge component

This section details the predefined style variants and shape types available in the Badge component. Understanding these options helps you select the appropriate badge for your use case and ensures consistent UI patterns throughout your application.

## Badge style variants

The Syncfusion Badge component provides eight predefined color variants using the `.e-badge` class. Each variant serves a specific semantic purpose and can be applied to communicate different states or message types to users.

| Class Name        | Description
| :-------------    |:-------------
| e-badge-primary   | Indicates primary or default state; use for general notifications.
| e-badge-secondary | Indicates secondary actions or supplementary information.
| e-badge-success   | Indicates successful completion, confirmation, or positive outcomes.
| e-badge-danger    | Indicates errors, warnings, or critical issues requiring immediate attention.
| e-badge-warning   | Indicates caution or potential issues that need review.
| e-badge-info      | Indicates informational messages or helpful guidance.
| e-badge-light     | Represents a light theme variant for subtle notifications on dark backgrounds.
| e-badge-dark      | Represents a dark theme variant for prominent notifications on light backgrounds.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/types-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/types-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/types-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/types-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/types-cs1" %}

## Badge shape types

The Syncfusion Badge component supports the following shape and layout types to suit different design patterns and use cases:

* Circle
* Pill
* Link
* Notification
* Dot
* Overlap
* Position

### Circle

The circle badge style can be applied by adding the modifier class `.e-badge-circle` to the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/circle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/circle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/circle-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/circle-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/circle-cs1" %}

### Pill

The pill badge style can be applied by adding the modifier class `.e-badge-pill` to the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/pill-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/pill-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/pill-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/pill-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/pill-cs1" %}

### Link

When badge modifier classes are applied to an anchor tag, the badge's appearance will change from its normal state to a hover state on mouseover.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/link-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/link-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/link-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/link-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/link-cs1" %}

### Notification

Apply the `.e-badge-notification` modifier class to create a notification badge. Notification badges are used to highlight important content or contexts that require immediate attention—such as alert counts or status changes. When using notification badges, ensure the parent element has `position: relative` to maintain proper positioning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/notification-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/notification-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/notification-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/notification-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/notification-cs1" %}

### Dot

Create a minimalist dot badge by adding the `.e-badge-dot` modifier class. Dot badges convey status or presence information in a compact, non-intrusive manner—ideal for showing online status, activity indicators, or subtle alerts. Like notification badges, set the parent element to `position: relative` for proper positioning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/dot-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/dot-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/dot-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/dot-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/dot-cs1" %}

### Overlap

Combine the `.e-badge-overlap` modifier class with notification or dot badges to create an overlapping effect on the target element. This pattern is useful for positioning badges on the edges of avatars, icons, or other UI components while maintaining visual hierarchy. Ensure the parent element has `position: relative` for correct badge positioning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/overlap-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/overlap-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/overlap-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/overlap-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/overlap-cs1" %}

### Position

Notification and dot badges default to top positioning. Change the badge position to the bottom by applying the `.e-badge-bottom` modifier class. This is particularly useful for avatar components where a bottom position communicates status or availability information more intuitively, as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/position-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/position-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/position-cs1" %}
