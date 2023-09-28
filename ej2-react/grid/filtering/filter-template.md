---
layout: post
title: Filter template in React Grid component | Syncfusion
description: Learn here all about Filter template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Filter template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter template in React Grid component

Filter template provides an option to use the custom filter UI for a particular column by using the [columns.filterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filtertemplate) property. The custom filter UI provided by [columns.filterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filtertemplate) can be used by the filter bar, menu, and advanced filter from an excel filter.

> The [columns.filterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filtertemplate) property value should be a React functional component.

## Template context

The filter template should be a React Component. You can access the column information inside the component.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>column</kbd> | Get the current column information.|

In the below code example, we have enabled the DropDownList which is used as filter UI for **CustomerID** column based on the [columns.allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowfiltering) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs11" %}
