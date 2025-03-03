---
layout: post
title: Add remove panels in React Dashboard Layout  component | Syncfusion
description: Learn here all about Add remove panels in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Add remove panels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Add remove panels in React Dashboard Layout  component

In real-time scenarios, the data presented within the Dashboard should be updated frequently, which includes dynamically adding or removing data within the dashboard. This can be easily achieved using the [addPanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#addpanel) and [removePanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#removepanel) public methods of the component.

## Add or remove panels dynamically

Panels can be added dynamically using the [addPanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#addpanel) public method by passing the [panel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#panels) property as a parameter. Also, they can be removed dynamically using the [removePanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#removepanel) public method by passing the [panel id](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#id) value as a parameter.

It is also possible to remove all the panels in a Dashboard Layout by calling the [removeAll](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#removeall) method.

```js
dashboard.removeAll();
```

The following sample demonstrates how to add and remove the panels dynamically in the Dashboard Layout  component. Here, panels can be added in any desired position with the required size by selecting them in the numeric boxes and clicking the add button. They can be removed by selecting the ID of the panel.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/add-remove-panels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/add-remove-panels-cs1" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to learn how to present and manipulate data.