---
layout: post
title: Refresh the data source in React Treegrid component | Syncfusion
description: Learn here all about Refresh the data source in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Refresh the data source 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Refresh the data source in React Treegrid component

You can add/delete the datasource records through an external button. To reflect the datasource changes in treegrid, you need to assign the modified data to dataSource property.

Please follow the below steps to refresh the treegrid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```ts

    const dataSource: object = extendArray(treegridObj.dataSource as object[]);

    // Added New Record.
    (dataSource as object[]).unshift({ TaskID: 99, TaskName: "New Data", StartDate: new Date('02/03/2017'), Duration: 10 });

    // Delete record.
    (dataSource as object[]).splice(selectedRow, 1);

```

**Step 2**:

Refresh the treegrid after the datasource change by assign the modified data to dataSource property.

```ts
    treegridObj.dataSource = dataSource; // Refresh the TreeGrid.

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs8" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
