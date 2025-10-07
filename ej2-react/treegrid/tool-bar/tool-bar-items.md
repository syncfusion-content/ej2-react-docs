---
layout: post
title: Tool bar items in React TreeGrid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Tool bar items
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Tool bar items in React TreeGrid

## Built-in toolbar items

Built-in toolbar items execute standard TreeGrid actions and can be added by defining the [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) property as a collection of built-in items. Each item renders as a button with an icon and text.

The following table lists built-in toolbar items and their actions.
| Built-in Toolbar Items | Actions |
|------------------------|---------|
| ExpandAll | Expands all rows. |
| CollapseAll | Collapses all rows. |
| Add | Adds a new record. |
| Edit | Edits the selected record. |
| Update | Updates the edited record. |
| Delete | Deletes the selected record. |
| Cancel | Cancels the edit state. |
| Search | Searches records by the given key. |
| Print | Prints the TreeGrid. |
| ExcelExport | Exports the TreeGrid to Excel. |
| PdfExport | Exports the TreeGrid to PDF. |
| WordExport | Exports the TreeGrid to Word. |
| Indent | Indents the record one hierarchy level. |
| Outdent | Outdents the record one hierarchy level. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs1" %}

> The [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) supports both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added by defining the [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) property as a collection of [ItemModels](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel/). Actions for custom items are handled in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event.

By default, custom items are aligned to the **Left**. The position can be changed using the [align](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel/#align) property. In the sample below, the position is set to **Right** for the **Quick Filter** toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs2" %}

> * The [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) supports both built-in and custom items.  
> * Any item that does not match a built-in name is treated as a custom toolbar item.

## Built-in and custom items in toolbar

TreeGrid supports using built-in and custom toolbar items together.  
In the example below, **ExpandAll** and **CollapseAll** are built-in items, and **Click** is a custom item.

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

Enable or disable toolbar items programmatically using the `enableItems` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/toolbar-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/toolbar-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar-cs4" %}