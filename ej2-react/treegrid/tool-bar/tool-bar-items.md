---
layout: post
title: Tool bar items in React Treegrid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Tool bar items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar items in React Treegrid component

## Built-in toolbar items

Built-in toolbar items execute standard actions of the treegrid, and it can be added by defining the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar)
as a collection of built-in items. It renders the button with icon and text.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| ExpandAll | Expands all the rows.|
| CollapseAll | Collapses all the rows.|
| Add | Adds a new record.|
| Edit | Edits the selected record.|
| Update | Updates the edited record.|
| Delete | Deletes the selected record.|
| Cancel | Cancels the edit state.|
| Search | Searches the records by the given key.|
| Print | Prints the treegrid.|
| ExcelExport | Exports the treegrid to Excel.|
| PdfExport | Exports the treegrid to PDF.|
| WordExport | Exports the treegrid to Word.|
| Indent | Indents the record to one level of hierarchy.|
| Outdent | Outdents the record to one level of hierarchy.|

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs1" %}

> * The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added by defining the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) as a collection of [`ItemModels`](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel/). Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event.

By default, Custom toolbar items are in position **Left**. You can change the position by using the [`align`](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel/#align) property. In the below sample, we have applied position **Right** for the **Quick Filter** toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs2" %}

> * The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

TreeGrid have an option to use both built-in and custom toolbar items at same time.

In the below example, **ExpandAll**, **CollapseAll** are built-in toolbar items and *Click* is custom toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs3" %}

## Enable or disable toolbar items

You can enable/disable toolbar items by using the `enableItems` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs4" %}