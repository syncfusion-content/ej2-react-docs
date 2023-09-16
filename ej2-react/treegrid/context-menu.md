---
layout: post
title: Context menu in React Treegrid component | Syncfusion
description: Learn here all about Context menu in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in React Treegrid component

The TreeGrid has options to show the context menu when right clicked on it. To enable this feature, you need to define either default or custom item in the [`contextMenuItems`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#contextmenuitems).

To use the context menu, inject the **ContextMenu** module in the treegrid.

The default items are in the following table.

Items| Description
----|----
**AutoFit**|  Auto fit the current column.
**AutoFitAll** | Auto fit all columns.
**Edit**|  Edit the current record.
**Delete** | Delete the current record.
**Save** | Save the edited record.
**Cancel** | Cancel the edited state.
**PdfExport** | Export the treegrid data as Pdf document.
**ExcelExport** | Export the treegrid data as Excel document.
**CsvExport** | Export the treegrid data as CSV document.
**SortAscending** | Sort the current column in ascending order.
**SortDescending** | Sort the current column in descending order.
**FirstPage** | Go to the first page.
**PrevPage** | Go to the previous page.
**LastPage** | Go to the last page.
**NextPage** | Go to the next page.
**AddRow** | Add new row to the treegrid.
**Indent** | Indents the record to one level of hierarchy.|
**Outdent** | Outdents the record to one level of hierarchy.|

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/contextmenu-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/contextmenu-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs1" %}

## Custom context menu items

The custom context menu items can be added by defining the [`contextMenuItems`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#contextmenuitems) as a collection of [`contextMenuItemModel`](https://ej2.syncfusion.com/react/documentation/api/grid/contextMenuItemModel/). Actions for this customized items can be defined in the [`contextMenuClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#contextmenuclick) event.

In the below sample, we have shown context menu item for parent rows to expand or collapse child rows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/contextmenu-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/contextmenu-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs2" %}

## Enable and disable context menu items dynamically

You can enable and disable the context menu items using the [`enableItems`](https://ej2.syncfusion.com/documentation/api/menu/#enableitems) method in [`contextMenuOpen`](https://ej2.syncfusion.com/documentation/api/treegrid/#contextmenuopen) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/contextmenu-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/contextmenu-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs3" %}

> You can hide or show an item in context menu for specific area inside of treegrid by defining the [`target`](https://ej2.syncfusion.com/react/documentation/api/grid/contextMenuItemModel/#target) property.
> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.