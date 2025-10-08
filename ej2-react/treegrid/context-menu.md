---
layout: post
title: Context menu in React TreeGrid | Syncfusion
description: Learn here all about Context menu in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Context menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in React TreeGrid

The TreeGrid displays a context menu on right-click. Enable this feature by configuring default or custom items in the [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/treegrid/#contextmenuitems) property.  
To use the context menu, inject the **ContextMenu** module in the TreeGrid.

The default items are listed below.
Items | Description
----|----
**AutoFit** | Auto-fit the current column.
**AutoFitAll** | Auto-fit all columns.
**Edit** | Edit the current record.
**Delete** | Delete the current record.
**Save** | Save the edited record.
**Cancel** | Cancel the edited state.
**PdfExport** | Export TreeGrid data as a PDF document.
**ExcelExport** | Export TreeGrid data as an Excel document.
**CsvExport** | Export TreeGrid data as a CSV document.
**SortAscending** | Sort the current column in ascending order.
**SortDescending** | Sort the current column in descending order.
**FirstPage** | Go to the first page.
**PrevPage** | Go to the previous page.
**LastPage** | Go to the last page.
**NextPage** | Go to the next page.
**AddRow** | Add a new row to the TreeGrid.
**Indent** | Indent the record by one hierarchy level.
**Outdent** | Outdent the record by one hierarchy level.

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
Custom context menu items can be defined by setting [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/treegrid/#contextmenuitems) as a collection of [contextMenuItemModel](https://ej2.syncfusion.com/react/documentation/api/grid/contextMenuItemModel/). Handle item actions in the [contextMenuClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#contextmenuclick) event.

In the following sample, a context menu item is added for parent rows to expand or collapse child rows.

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
Enable or disable context menu items using the [enableItems](https://ej2.syncfusion.com/documentation/api/menu/#enableitems) method within the [contextMenuOpen](https://ej2.syncfusion.com/documentation/api/treegrid/#contextmenuopen) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/contextmenu-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/contextmenu-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/contextmenu-cs3" %}

> Hide or show a context menu item for a specific area of the TreeGrid by configuring the [target](https://ej2.syncfusion.com/react/documentation/api/grid/contextMenuItemModel/#target)t) property.  
> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.