---
layout: post
title: Custom tool tip for columns in React Treegrid component | Syncfusion
description: Learn here all about Custom tool tip for columns in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Custom tool tip for columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom tool tip for columns in React Treegrid component

You can achieve the custom tooltip([`EJ2 Tooltip`](https://ej2.syncfusion.com/react/documentation/tooltip/getting-started)) for TreeGrid by using the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event.

Render the ToolTip component for the treegrid cells by using the following code in the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event.

```ts

  const tooltip = (args: QueryCellInfoEventArgs) => {
    const tooltip: Tooltip = new Tooltip({
      content: getValue((args.column as Column).field, args.data as object).toString()
    });
    tooltip.appendTo(args.cell as HTMLElement);
  }

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/custom-tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/custom-tooltip-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.