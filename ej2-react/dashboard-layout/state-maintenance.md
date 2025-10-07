---
layout: post
title: Save restore in React Dashboard Layout component | Syncfusion
description: Learn here all about Save restore in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Save and Restore Layout State in React Dashboard Layout Component

The Dashboard Layout component provides the ability to save the current layout configuration and restore it later, enabling users to persist their preferred panel arrangements across sessions or create reusable dashboard templates.

## Save Layout State

The current layout structure of the Dashboard Layout component can be obtained and saved using the [`serialize`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#serialize) public method of the component. This can be used to construct another dashboard with the same panel structure. This method returns the component's current panel settings which can be used to construct a dashboard with the same layout settings.

## Implementation Example

The following sample demonstrates how to save and restore panel states using the serialize method. The Save button stores the current panel settings, while the Restore button applies the previously saved configuration.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/state-maintenance-cs1" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.