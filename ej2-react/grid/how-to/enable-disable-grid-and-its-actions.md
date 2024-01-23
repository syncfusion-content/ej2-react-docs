---
layout: post
title: Enable disable grid and its actions in React Grid component | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Enable disable grid and its actions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable grid and its actions in React Grid component

Enabling or disabling the Syncfusion React Grid and its associated actions is essential for controlling access and interaction with the grid based on specific scenarios. This can help to improve the user experience and application functionality.

You can enable or disable the grid by applying or removing corresponding CSS styles. In this example, ngClass directive is used to conditionally apply the CSS class `is-disabled` to the <div> containing the grid based on the value of **isDisabled**. You can define your custom CSS styles for the `is-disabled` class to visually enable or disable the grid and its actions as needed.

```css
.is-disabled {
  pointer-events: none;
  opacity: 0.5;
}
```

Here's an example demonstrating how to achieve this:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/enable-disable-actions-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/enable-disable-actions-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/enable-disable-actions-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/enable-disable-actions-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/enable-disable-actions-cs1" %}

> To enable or disable specific grid actions, such as editing, sorting, or filtering, please refer to this [section](https://ej2.syncfusion.com/react/documentation/grid/columns/columns#controlling-grid-actions) in the documentation.