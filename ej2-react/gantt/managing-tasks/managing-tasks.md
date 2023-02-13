---
layout: post
title: Managing tasks in React Gantt component | Syncfusion
description: Learn here all about Managing tasks in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Managing tasks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Managing tasks in React Gantt component

The Gantt component has options to dynamically insert, delete, and update tasks in a project. The primary key column is necessary to manage the tasks and perform CRUD operations in Gantt. To define the primary key, set the [`columns.isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) property to `true` in the column.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module into the Gantt component.

`Note:` If the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the tasks through TreeGrid cells.

The following code example shows you how to enable the cell editing in Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs3" %}

## Read-only Gantt

In Gantt, all create, update, delete operations can be disabled by setting the `readOnly` property as `true`. The following sample demonstrates, rendering the Gantt chart as read only.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/readOnly-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/readOnly-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/readOnly-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/readOnly-cs1" %}

## Troubleshoot: Editing works only when primary key column is defined

Editing feature requires a primary key column for CRUD operations.
While defining columns in Gantt using the [`columns`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) column will be the primary key column.  If [`id`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) column is not defined, we need to enable [`isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) for any one of the columns defined in the [`columns`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbarRowadding-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbarRowadding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbarRowadding-cs2" %}
