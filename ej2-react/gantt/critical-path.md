---
layout: post
title: Critical path in React Gantt component | Syncfusion
description: Learn here all about Critical path in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Critical path 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Critical path in React Gantt component

The critical path in a project is indicated by a single task or a series of tasks. If a task in critical path is delayed, the entire project will be delayed. A task is considered to be critical if any delay to this task would affect the project end date.

The critical path can be enabled in Gantt by using the built-in toolbar button or [enableCriticalPath](https://ej2.syncfusion.com/react/documentation/api/gantt/#enablecriticalpath) property.

The following code example shows how to display the critical path taskbar in the Gantt control:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/criticalpath-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/criticalpath-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/criticalpath-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/criticalpath-cs1" %}

## Customize taskbar in critical path

The taskbar in critical path can be customized by using [queryTaskbarInfo](https://ej2.syncfusion.com/react/documentation/api/gantt/#querytaskbarinfo) event and [isCritical](https://ej2.syncfusion.com/react/documentation/api/gantt/iGanttData/#iscritical) property of row [data](https://ej2.syncfusion.com/react/documentation/api/gantt/iQueryTaskbarInfoEventArgs/#data) in the event argument.

The following code example shows how to customize the critical path taskbar in the Gantt control:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customizeCriticalPath-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customizeCriticalPath-cs1" %}
