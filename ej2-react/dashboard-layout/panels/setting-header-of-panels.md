---
layout: post
title: Set Panel Headers in React Dashboard Layout | Syncfusion
description: Learn here all about Setting header of panels in Syncfusion React Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Setting header of panels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Setting header of panels in React Dashboard layout component

The dashboard layout component is primarily used to represent data for monitoring or managing processes. This data or any HTML template can be placed as the content of a panel using the content property. Additionally, a word or phrase that summarizes the panel's content can be added as a header at the top of each panel using the [header](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#header) property.

The following sample demonstrates how to add content and headers for each panel using the [content](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#content) and [header](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#header) properties of the panels.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/header-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/header-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/header-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/header-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/header-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/header-cs1" %}

## Placing components as content of panels

In a dashboard, components such as charts, grids, maps, gauges, and more can be used to present complex data. These components can be placed as panel content by assigning the corresponding component element to the [content](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#content) property of the panel.

The following sample demonstrates how to add EJ2 Chart components as the [content](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#content) for each panel in the dashboard layout component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/header-content-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/header-content-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/header-content-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/header-content-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/header-content-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/header-content-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/header-content-cs1" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to learn how to present and manipulate data.