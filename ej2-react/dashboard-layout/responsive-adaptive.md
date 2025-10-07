---
layout: post
title: Responsive adaptive in React Dashboard Layout component | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in React Dashboard Layout  component

The React Dashboard Layout component provides built-in responsive support that automatically adjusts panel positioning and sizing based on the parent element's dimensions. This responsive behavior accommodates various screen resolutions without requiring additional configuration for basic responsive dashboards.

## Adaptive Layout Behavior

The dashboard layout automatically transforms into a stacked layout when the screen resolution decreases. In a stacked layout, all panels are arranged vertically in a single column, ensuring optimal viewing on smaller screens. By default, this transformation occurs when the screen resolution reaches 600px or below.

## Customizing Responsive Breakpoints

The default responsive breakpoint can be customized using the [`mediaQuery`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#mediaquery) property. This property accepts a CSS media query string that defines when the layout should transform to its stacked state.

The following example demonstrates how to configure the [`mediaQuery`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#mediaquery) property to trigger the stacked layout at 700px screen width:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/responsive-adaptive-cs1" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.