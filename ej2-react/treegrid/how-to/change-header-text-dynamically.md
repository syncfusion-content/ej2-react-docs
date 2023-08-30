---
layout: post
title: Change header text dynamically in React Treegrid component | Syncfusion
description: Learn here all about Change header text dynamically in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Change header text dynamically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change header text dynamically in React Treegrid component

You can change the column [`headerText`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getcolumnbyfield) method.
Then change the header Text value.

```ts
      /** get the JSON object of the column corresponding to the field name */
      const column = treegrid.getColumnByField("Duration");
      /** assign a new header text to the column */
      column.headerText = "Changed Text";
```

**Step 2**:

To reflect the changes in the grid header, invoke the [`refreshColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#refreshcolumns) method.

```ts

      treegrid.refreshColumns();

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/change-headertext-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.