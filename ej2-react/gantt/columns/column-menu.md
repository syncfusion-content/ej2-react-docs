---
layout: post
title: Column menu in React Gantt component | Syncfusion
description: Learn here all about Column menu in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Column menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column menu in React Gantt component

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click the Multiple icon of the column. To enable the column menu, you should set the [`showColumnMenu`](https://ej2.syncfusion.com/react/documentation/api/gantt/#showcolumnmenu) property to true. The default items are displayed in the following table:

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `Filter` | Show the filter option as given in the `filterSettings.type` property. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/columnmenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/columnmenu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/columnmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columnmenu-cs1" %}

> You can disable column menu for a particular column by defining the `columns.showColumnMenu` as `false`.

## Column menu Events

During the resizing action, the gantt component triggers the below two events.

1. The [`columnMenuOpen`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columnmenuclick) event triggers when the user clicks the column menu of the gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/colmenu-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/colmenu-events-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/colmenu-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/colmenu-events-cs1" %}

## Custom Column Menu Item

Custom column menu items can be added by defining the [`columnMenuItems`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columnmenuitems). Actions for this customized items can be defined in the [`columnMenuClick`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columnmenuclick) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/colmenu-item-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/colmenu-item-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/colmenu-item-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/colmenu-item-cs1" %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](https://ej2.syncfusion.com/react/documentation/api/grid/columnMenuOpenEventArgs) as true in the [`columnMenuOpen`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **Task Name** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/colmenu-action-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/colmenu-action-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/colmenu-action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/colmenu-action-cs1" %}