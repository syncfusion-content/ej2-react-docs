---
layout: post
title: Provide custom data source and enabling filtering to drop down list in React Treegrid component | Syncfusion
description: Learn here all about Provide custom data source and enabling filtering to drop down list in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Provide custom data source and enabling filtering to drop down list 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Provide custom data source and enabling filtering to drop down list in React Treegrid component

You can provide data source to the DropDownList by using the **params** of [`columns.edit`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edit) property.

While setting new data source using edit params, you must specify a new **query** property for the DropDownList as follows,

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

You can also enable filtering for the DropDownList by passing the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#allowfiltering) as **true** to the edit params.

In the below demo, DropDownList is rendered with custom [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#datasource) for the *Priority* column and enabled filtering to search DropDownList items.

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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.