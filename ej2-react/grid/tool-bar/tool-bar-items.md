---
layout: post
title: Tool bar items in React Grid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Tool bar items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar items in React Grid component

## Built-in toolbar items

Built-in toolbar items execute standard actions of the grid, and it can be added by defining the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar)
as a collection of built-in items. It renders the button with icon and text.

The following table shows Built-in toolbar items and its action.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new record.|
| Edit | Edits the selected record.|
| Update | Updates the edited record.|
| Delete | Deletes the selected record.|
| Cancel | Cancels the edit state.|
| Search | Searches the records by the given key.|
| Print | Prints the grid.|
| ExcelExport | Exports the grid to Excel.|
| PdfExport | Exports the grid to PDF.|
| WordExport | Exports the grid to Word.|
| ColumnChooser | Shows column chooser dialog |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/toolbar-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/toolbar-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbar-cs1" % }

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.

### Show only icons in built-in toolbar items

By default, the built-in toolbar items render as buttons with an icon and text. It is possible to hide the text and show only the icon using the following CSS style.

```css
.e-toolbar .e-tbar-btn-text, .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    display: none;
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/toolbaricon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/toolbaricon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbaricon-cs1" % }

## Custom toolbar items

Custom toolbar items can be added by defining the [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) as a collection of [`itemModel`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel).
Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbarclick) event.

By default, Custom toolbar items are in position **Left**. You can change the position by using the [`align`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel/#align) property. In the below sample, we have applied position **Right** for the **Collapse All** toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/toolbar-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs2/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/toolbar-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs2/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbar-cs2" % }

> * The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Grid have an option to use both built-in and custom toolbar items at same time.

In the below example, **Add**, **Edit**, **Delete**, **Update**, **Cancel** are built-in toolbar items and **Click** is custom toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/toolbar-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs3/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/toolbar-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs3/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbar-cs3" % }

## Custom toolbar component in a specific position

By default, Custom toolbar items are in the Left position. You can change the position by using the [align](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) property. In the following sample, we have applied the Right position for the Collapse All toolbar item, Left for the Expand All toolbar item, and Center for the Search toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/toolbar-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs4/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/toolbar-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs4/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbar-cs4" % }