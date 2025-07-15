---
layout: post
title: State maintenance in React Dashboard Layout  component | Syncfusion
description: Learn here all about State maintenance in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: State maintenance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State maintenance in React Dashboard Layout  component

The current layout structure of the Dashboard Layout component can be obtained and saved to construct another Dashboard with the same panel structure using the [serialize](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#serialize) public method of the component. This method returns the component's current panel settings which can be used to construct a Dashboard with the same layout settings.

The following sample demonstrates how to save and restore the state of the panels using the serialize method. Click Save to store the panel's settings and click Restore to restore the previously saved panel settings.

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

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/dashboard-layout/default) to learn how to present and manipulate data.