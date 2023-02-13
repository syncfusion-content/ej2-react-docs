---
layout: post
title: Deleting tasks in React Gantt component | Syncfusion
description: Learn here all about Deleting tasks in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Deleting tasks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Deleting tasks in React Gantt component

A task delete option in the Gantt component can be enabled by enabling the [`ediSettings.allowDeleting`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowdeleting) property. Tasks can be deleted by clicking the delete toolbar item or using the `deleteRow` method. You can call this method dynamically on any custom actions like button click. The following code example shows how to enable the delete option in the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/taskdelete-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/taskdelete-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/taskdelete-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/taskdelete-cs1" %}

> NOTE: You should select any one of the rows in the Gantt component to perform task delete action.
> You should set the [`allowDeleting`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowdeleting) value to `true` to delete the record dynamically.

## Delete confirmation message

Delete confirmation message is used to get the confirmation from users before deleting a task. This confirmation message can be enabled by setting the [`editSettings.showDeleteConfirmDialog`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#showdeleteconfirmdialog) property to true.

The following code snippet explains how to enable the delete confirmation message in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/deleteconfirm-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/deleteconfirm-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/deleteconfirm-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/deleteconfirm-cs1" %}