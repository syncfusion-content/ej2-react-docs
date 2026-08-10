---
layout: post
title: How to add dynamic badge content in React Badge | Syncfusion
description: Update React Badge values at runtime using React state and hooks to reflect real-time notification counts or status changes.
control: Badge
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add dynamic badge content in React Badge

Many applications require badges to reflect real-time data changes—such as notification counts, status indicators, or activity counters. This guide demonstrates how to update badge content dynamically using React state management. The following example uses React hooks to maintain state and update the badge value when user actions occur, such as clicking an increment button. This pattern is fundamental for building interactive, responsive UI components.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/dynamic-badge-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/dynamic-badge-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/dynamic-badge-cs1" %}
