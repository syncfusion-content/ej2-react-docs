---
layout: post
title: React Grid - Enable disable grid and its actions | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Enable disable grid and its actions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable grid and its actions in React Grid component

Enabling or disabling the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid and its actions is essential for managing interaction based on application state. This approach enhances usability and ensures controlled access to grid operations.

To toggle the Grid's interactivity, apply or remove a custom CSS class conditionally. The example below demonstrates how to use the "is-disabled" class to visually and functionally disable the grid:

```css
.is-disabled {
  pointer-events: none;
  opacity: 0.5;
}
```

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

> - To enable or disable specific grid actions, such as editing, sorting, or filtering, please refer to this [section](../columns/columns#controlling-grid-actions) in the documentation.
> - CSS disable blocks UI interaction but not programmatic access (e.g., `grid.updateRow()` still works).