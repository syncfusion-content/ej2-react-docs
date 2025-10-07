---
layout: post
title: Floating of panels in React Dashboard Layout  component | Syncfusion
description: Learn here all about Floating of panels in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Floating of panels in React Dashboard Layout component

The floating functionality enables panels to move upward automatically to fill empty spaces left by panels in previous rows, maximizing space utilization within the dashboard layout. When floating is enabled, panels dynamically reposition themselves to eliminate gaps and create a more compact layout arrangement.

This behavior can be controlled using the [`allowFloating`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#allowfloating) property, which accepts a boolean value (default: `true`).

## How floating works

When `allowFloating` is set to `true`:
- Panels automatically move upward to occupy available space in previous rows
- Empty cells are filled dynamically as panels are added, removed, or repositioned
- The layout maintains a compact appearance without gaps between rows

When `allowFloating` is set to `false`:
- Panels remain in their designated row positions
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

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to know how to present and manipulate data.