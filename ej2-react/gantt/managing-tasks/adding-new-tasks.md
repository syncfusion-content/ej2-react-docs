---
layout: post
title: Adding New Tasks in React Gantt Chart Component | Syncfusion
description: Learn here all about Adding new tasks in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Adding new tasks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding New Tasks in React Gantt Chart Component

Tasks can be dynamically added to the Gantt project by enabling the [editSettings.allowAdding](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowadding) property.

## Toolbar

A row can be added to the Gantt Chart component from the toolbar while the [editSettings.allowAdding](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowadding) property is set to `true`. After clicking the toolbar add icon, you should provide the task information in the add dialog.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbarRowadding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbarRowadding-cs1" %}

> By default, a new row will be added to the top-most row in the Gantt Chart component.

## Context menu

A row can also be added above, below or child of the selected row by using context menu support. For this, we need to enable the property[enableContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#enablecontextmenu) and inject the [ContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmodule) module into the Gantt control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/contextMenuRowAdding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/contextMenuRowAdding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/contextMenuRowAdding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/contextMenuRowAdding-cs1" %}

## Using method

You can add rows to the Gantt Chart component dynamically using the [addRecord](https://ej2.syncfusion.com/react/documentation/api/gantt#addrecord) method and you can define the add position of the default new record by using the [rowPosition](https://ej2.syncfusion.com/react/documentation/api/gantt/rowPosition/) property. You can also pass the `rowIndex` as an additional parameter.

* Top of all the rows.
* Bottom to all the existing rows.
* Above the selected row.
* Below the selected row.
* As child to the selected row.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customRowadding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customRowadding-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customRowadding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customRowadding-cs1" %}