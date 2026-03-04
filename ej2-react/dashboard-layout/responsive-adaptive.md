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

The React Dashboard Layout component includes built-in responsive behavior that automatically adapts panel layouts to the viewport. This accommodates various screen sizes without additional configuration for typical responsive dashboards.

## Adaptive Layout Behavior

The dashboard layout automatically transforms into a stacked layout when the viewport width decreases. In a stacked layout, all panels are arranged vertically in a single column to ensure optimal viewing on smaller screens. By default, this transformation occurs at or below 600px viewport width.

## Customizing Responsive Breakpoints

The default responsive breakpoint can be customized using the [`mediaQuery`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#mediaquery) property. This property accepts a CSS media query string that defines when the layout should transform to its stacked state.

The following example demonstrates how to configure the [`mediaQuery`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#mediaquery) property to trigger the stacked layout at 700px viewport width:

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

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to learn how to present and manipulate data.