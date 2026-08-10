---
layout: post
title: React TreeGrid DropDownList Data & Filtering | Syncfusion
description: Learn how to provide a custom data source and enable filtering for DropDownList in the React TreeGrid with column edit parameters.
control: Provide custom data source and enabling filtering to drop down list 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Data Source and Filtering for DropDownList in React TreeGrid

Provide a data source to the DropDownList by using the **params** of the [columns.edit](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#edit) property.

When setting a new data source using edit params, specify a new **query** property for the DropDownList as shown below.

```ts
  const priority : IEditCell = {
    params:   {
      actionComplete: () => false,
      allowFiltering: true,
      dataSource: new DataManager(this.priorityData),
      fields: { text: "countryName", value: "countryName"},
      query: new Query()
    }
  };
```

Enable filtering for the DropDownList by passing [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#allowfiltering) as **true** in the edit params.

In the following demo, the DropDownList is rendered with a custom [dataSource](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#datasource) for the **Priority** column, and filtering is enabled to search DropDownList items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cascade-drop-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cascade-drop-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/cascade-drop-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/cascade-drop-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cascade-drop-cs2" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.