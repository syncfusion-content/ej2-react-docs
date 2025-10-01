---
layout: post
title: Column menu in React TreeGrid | Syncfusion
description: Learn here all about Column menu in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Column menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in React TreeGrid

The column menu provides built-in actions such as sorting, filtering, and autofit. A menu with these actions appears when the column menu icon is clicked. Enable the column menu by setting the [showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showcolumnmenu) property to true.

To use the column menu, inject the **ColumnMenu** module in the TreeGrid.

The default items are listed below.

| Item | Description |
|-----|-----|
| **SortAscending** | Sorts the current column in ascending order. |
| **SortDescending** | Sorts the current column in descending order. |
| **AutoFit** | Fits the current column to the widest cell content. |
| **AutoFitAll** | Fits all columns to their widest cell content. |
| **Filter** | Displays the filter UI defined by [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettings/#type). |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs2" %}

> Disable the column menu for a specific column by setting [columns.showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#showcolumnmenu) to **false**.

## Customize the icon for column menu

Customize the column menu icon by overriding the default TreeGrid class `.e-icons.e-columnmenu` and setting a custom `content` value. A Unicode character or icon font class can be used to change the displayed icon.

```css
    .e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

Example demonstrating a custom column menu icon in the Syncfusion TreeGrid:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/custom-column-menu-icon-cs1" %}