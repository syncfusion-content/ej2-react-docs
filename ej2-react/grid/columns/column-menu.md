---
layout: post
title: Column menu in React Grid component | Syncfusion
description: Learn here all about Column menu in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in React Grid component

The column menu has options to integrate features like sorting, grouping, filtering, column chooser, and autofit.
It will show a menu with the integrated feature when users click on multiple icon of the column.
To enable column menu, you need to define the [`showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnmenu) property as true.

To use the column menu, inject the **ColumnMenu** module in the grid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Auto fit the current column. |
| **AutoFitAll** | Auto fit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in **filterSettings.type** |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs7" %}

> You can disable column menu for a particular column by defining the [`columns.showColumnMenu`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showcolumnmenu) as **false**.
> You can customize the default items by defining the
[`columnMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) with required items.

## Column menu events

During the resizing action, the grid component triggers the below two events.

1. The [`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs8" %}

## Custom column menu item

Custom column menu items can be added by defining the [`columnMenuItems`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuitems) as collection of the [`columnMenuItemModel`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel).
Actions for this customized items can be defined in the
[`columnMenuClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuclick) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs9" %}

## Customize menu items for particular columns

Sometimes, if you need to hide an item from column menu for particular columns, define the
[`items.hide`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuItemModel/#items) as **true** of the argument interface [`columnMenuOpenEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnMenuOpenEventArgs) in the
[`columnMenuOpen`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs10" %}

## Customize the icon of column menu

You can customize the column menu icon by overriding the default grid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below,

```css
    .e-grid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/custom-column-menu-icon-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/custom-column-menu-icon-cs1" %}