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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a built-in column menu that offers quick access to essential column operations such as sorting, grouping, filtering, column chooser, and autofit. This menu appears when the menu icon in a column header is clicked, enabling streamlined interaction with grid data. The column menu can be enabled by setting the [showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/grid#showcolumnmenu) property to "true" in the Grid configuration and injecting the `ColumnMenu` module.

The default column menu items are displayed in the following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Autofit the current column. |
| **AutoFitAll** | Autofit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#type). |

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

## Prevent column menu for particular column

The column menu in Grid can be controlled at both the Grid level and the column level. When the Grid's `showColumnMenu` property is enabled, every column will display its menu by default. To prevent the menu from appearing for a particular column, the column definition itself must explicitly set the `showColumnMenu` property to "false".

The following example demonstrates disabling the column menu for the "OrderID" column by setting the `showColumnMenu` property to "false".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-prevent-menu/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-prevent-menu/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-prevent-menu/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-prevent-menu/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-prevent-menu" %}

## Adding custom column menu items

The custom column menu item feature in Syncfusion® Grid allows extending the default column menu with additional options or replacing it entirely with custom items, depending on requirements. These items are defined using the [columnMenuItems](https://ej2.syncfusion.com/react/documentation/api/grid#columnmenuitems) property, which accepts a collection of [columnMenuItemModel](https://ej2.syncfusion.com/react/documentation/api/grid/columnMenuItemModel) objects. Each object specifies attributes such as `text`, `id`, and `iconCss` to represent the custom menu item.

The functionality of these items is implemented through the [columnMenuClick](https://ej2.syncfusion.com/react/documentation/api/grid#columnmenuclick) event. This event is triggered whenever a menu item is selected, enabling identification of the item by its `id` and execution of the corresponding action.

The following example demonstrates how to add a custom column menu item to clear the sorting of the Grid.

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

The Grid allows menu items to be shown or hidden for individual columns, ensuring that only relevant options are displayed. This customization is achieved through the [columnMenuOpen](https://ej2.syncfusion.com/react/documentation/api/grid#columnmenuopen) event, where the [ColumnMenuOpenEventArgs.ColumnMenuItemModel.hide](https://ej2.syncfusion.com/react/documentation/api/grid/columnmenuitemmodel) property can be set to "true" for any item that should not appear in the menu of a particular column. This approach provides fine-grained control, making the column menu context-aware and preventing unnecessary actions from being presented in columns where they are not applicable.

The following example demonstrates how to hide the "Filter" item in the column menu for the "Order ID" column.

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

## Render nested column menu

Nested column menus in the Syncfusion® Grid provide an organized way to display extended options within column headers. Instead of listing all actions at the same level, items can be grouped into sub-menus, making the menu easier to navigate and more structured. This feature is enabled through the `columnMenuItems` property, which accepts an array of built-in menu item strings or custom menu item objects. By defining items with nested structures, additional actions related to a column can be grouped logically under sub-menus.

The `columnMenuItems` property can be set up to include a nested menu, such as "Sub Menu", alongside the existing default column menu items. This allows the column menu to display both the standard options and additional grouped actions within a structured sub-menu.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-menu-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-menu-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-menu-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-menu-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-menu-cs1" %}

## Customize the column menu icon

The column menu icon in Grid can be changed by overriding the default CSS class **.e-icons.e-columnmenu**. This is done using the CSS `content` property, where either a Unicode character or an icon font class can be specified to replace the default icon.

**Customization steps:**

1. Add the CSS code to override the default grid class:

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
    content: "\e99a";
}
```

2. Import the required icon stylesheets (material or bootstrap5 style):

```html
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
```

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

## Column menu events

Column menu events in the Syncfusion® Grid provide ways to customize behavior when the menu is opened or when an item is clicked. These events make it possible to extend functionality or apply specific logic based on user interactions.


| Event | Description |
|-------|-------------|
| [columnMenuOpen](https://ej2.syncfusion.com/react/documentation/api/grid#columnmenuopen) | Triggers before the column menu opens. |
| [columnMenuClick](https://ej2.syncfusion.com/react/documentation/api/grid#columnmenuclick) | Triggers when clicking the column menu items. |

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
