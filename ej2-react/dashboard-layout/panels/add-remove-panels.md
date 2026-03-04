---
layout: post
title: Add remove panels in React Dashboard Layout component | Syncfusion
description: Learn here all about Add remove panels in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Adding and Removing Panels in React Dashboard Layout Component

Dashboard applications frequently require updating displayed data, including dynamically dynamically adding or removing widgets for scenarios such as user customization, real-time data monitoring, or role-based content display. The Dashboard Layout component supports these scenarios through the [`addPanel`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#addpanel) and [`removePanel`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#removepanel) public methods of the component.

## Adding and Removing Panels Dynamically

### Adding Panels
Panels can be added dynamically using the [`addPanel`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#addpanel) public method by passing the [`panels`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#panels) property as parameter. 

### Removing Panels

Panels can be removed dynamically using the[`removePanel`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#removepanel) public method by passing the `panel id` value as a parameter.

### Removing All Panels

It is also possible to remove all the panels in a Dashboard Layout by calling the [removeAll](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#removeall) method.

```js
dashboard.removeAll();
```

The following sample demonstrates how to add and remove panels dynamically in the Dashboard Layout component. Panels can be added at any desired position with specified dimensions by entering values in the numeric inputs and clicking the add button. Panels can be removed by selecting their ID from the dropdown.

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

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to learn how to present and manipulate data.