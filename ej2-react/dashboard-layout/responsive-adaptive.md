---
layout: post
title: Responsive adaptive in React Dashboard Layout  component | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Responsive adaptive 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in React Dashboard Layout component

The component is provided with built-in responsive support, where panels within the layout adjust based on their parent element's dimensions. This accommodates any resolution, relieving the burden of building responsive dashboards manually.

The Dashboard Layout  is designed to automatically adapt with lower resolutions by transforming the entire layout into a stacked one, so that, the panels will be displayed in a vertical column. By default, this layout transformation occurs whenever the screen resolution reaches 600 px or lower resolutions this layout transformation occurs. This transformation can be modified for any user-defined resolution by setting the [mediaQuery](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#mediaquery) property of the component.

The following sample demonstrates the usage of the [mediaQuery](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#mediaquery) property to transform the layout into a stacked one at a user-defined resolution. In this example, whenever the window size reaches 700 px or less, the layout becomes a stacked layout.

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

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to learn how to present and manipulate data.