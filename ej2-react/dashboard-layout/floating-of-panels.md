---
layout: post
title: Floating Panels in React Dashboard Layout | Syncfusion
description: Control whether Syncfusion React Dashboard Layout panels float upward to fill empty cells using the boolean allowFloating property.
control: Dashboard Layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Floating Panels in React Dashboard Layout

The floating functionality enables panels to move upward automatically to fill empty spaces in previous rows, maximizing space utilization within the dashboard layout. When floating is enabled, the layout automatically recalculates panel positions to eliminate gaps and maintain a compact arrangement.

This behavior can be controlled using the [`allowFloating`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#allowfloating) property, which accepts a boolean value (default: `true`).

## How floating works

When `allowFloating` is set to `true`:
- Panels automatically move upward to occupy available space in previous rows
- Empty cells are filled dynamically as panels are added, removed, or repositioned
- The layout maintains a compact appearance without gaps between rows

When `allowFloating` is set to `false`:
- Panels remain anchored to their designated row positions regardless of available space above them
- Empty spaces remain unfilled, preserving the original grid structure
- Panels maintain their exact row and column positions


The following sample demonstrates how to enable or disable the floating of panels in the Dashboard Layout component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/floating-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/floating-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/floating-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/floating-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/floating-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/floating-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/floating-cs1" %}

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to know how to present and manipulate data.