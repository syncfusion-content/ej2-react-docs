---
layout: post
title: Column menu in React Treegrid component | Syncfusion
description: Learn here all about Column menu in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Column menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in React Treegrid component

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showcolumnmenu) property as true.

To use the column menu, inject the **ColumnMenu** module in the treegrid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **AutoFit** | Auto fit the current column. |
| **AutoFitAll** | Auto fit all columns. |
| **Filter** | Show the filter option as given in [`filterSettings.type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings/#type) |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs2" %}

> You can disable column menu for a particular column by defining the [`columns.showColumnMenu`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#showcolumnmenu) as **false**.