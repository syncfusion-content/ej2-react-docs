---
layout: post
title: Task bar editing in React Gantt Chart component | Syncfusion
description: Learn here all about Task bar editing in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Task bar editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Taskbar editing in React Gantt Chart component

## Taskbar editing

Modify the task details through user interaction, such as resizing and dragging the taskbar, by enabling the [allowTaskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings#allowtaskbarediting) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/taskbaredit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/taskbaredit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/taskbaredit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/taskbaredit-cs2" %}

## Prevent editing for specific tasks

On taskbar edit action, the [taskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt#taskbarediting) event will be triggered. You can prevent the taskbar from editing using the [taskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt#taskbarediting) event. This can be done by setting cancel property of [taskbarEditing](https://ej2.syncfusion.com/react/documentation/api/gantt#taskbarediting) event argument to true. And we can hide the taskbar editing indicators like taskbar resizer, progress resizer and connector points by using [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt#querytaskbarinfo) event.  The following code example shows how to achieve this.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/preventtaskbaredit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/preventtaskbaredit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/preventtaskbaredit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/preventtaskbaredit-cs1" %}

