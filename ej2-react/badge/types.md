---
layout: post
title: Types in React Badge | Syncfusion
description: Choose from eight predefined color variants and seven shape types to render React Badges for any notification or status pattern.
control: Badge
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Badge

This section details the predefined style variants and shape types available in the React Badge component. Understanding these options helps you select the appropriate React Badge for your use case and ensures consistent UI patterns throughout your application.

## React Badge style variants

The Syncfusion React Badge component provides eight predefined style variants using the `.e-badge` class. Each variant serves a specific semantic purpose and can be applied to communicate different states or message types to users.

| Class Name        | Description                                                                    |
| :---------------- | :----------------------------------------------------------------------------- |
| e-badge-primary   | Indicates primary or default state; use for general notifications.             |
| e-badge-secondary | Indicates secondary actions or supplementary information.                      |
| e-badge-success   | Indicates successful completion, confirmation, or positive outcomes.           |
| e-badge-danger    | Indicates errors, warnings, or critical issues requiring immediate attention.  |
| e-badge-warning   | Indicates caution or potential issues that need review.                        |
| e-badge-info      | Indicates informational messages or helpful guidance.                          |
| e-badge-light     | Represents a light theme variant for subtle notifications on dark backgrounds. |
| e-badge-dark      | Represents a dark theme variant for prominent notifications on light backgrounds. |

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/types-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/types-cs1" %}

## React Badge shape types

The Syncfusion React Badge component supports the following shape and layout types to suit different design patterns and use cases:

* Circle
* Pill
* Link
* Notification
* Dot
* Overlap
* Position

### Circle

Apply the circle React Badge style by adding the `.e-badge-circle` class to the target element.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/circle-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/circle-cs1" %}

### Pill

Apply the pill React Badge style by adding the `.e-badge-pill` class to the target element.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/pill-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/pill-cs1" %}

### Link

When a React Badge class is applied to an anchor tag, the React Badge displays a hover state on mouseover.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/link-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/link-cs1" %}

### Notification

Apply the `.e-badge-notification` class to create a notification React Badge. Notification React Badges highlight content that requires immediate attention, such as unread counts or status changes. Ensure the parent element has `position: relative` to maintain proper positioning.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/notification-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/notification-cs1" %}

### Dot

Create a minimalist dot React Badge by adding the `.e-badge-dot` class. Dot React Badges convey presence information in a compact, non-intrusive manner—ideal for showing online indicators, activity signals, or subtle alerts. Like notification React badges, set the parent element to `position: relative` for proper positioning.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/dot-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/dot-cs1" %}

### Overlap

Combine the `.e-badge-overlap` class with notification or dot React Badges to create an overlapping effect on the target element. This pattern is useful for positioning React Badges on the edges of Avatars, icons, or other UI components while maintaining visual hierarchy. Ensure the parent element has `position: relative` for correct React Badge positioning.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/overlap-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/overlap-cs1" %}

### Position

Notification and dot React Badges default to top positioning. Change the React Badge position to the bottom by applying the `.e-badge-bottom` class. This is useful for Avatar components, where a bottom position communicates status or availability, as shown in the following example.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/position-cs1" %}
