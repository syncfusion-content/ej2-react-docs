---
layout: post
title: In dent and out dent in React Gantt component | Syncfusion
description: Learn here all about In dent and out dent in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: In dent and out dent 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Indent and outdent in React Gantt component

Indent and Outdent of a task are used to update the level of the task in hierarchical order of the task. It can be performed bu enabling the ['editSettings.allowEditing'](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowediting) property.

`Indent` - Selected task can be indented to the level of task to the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `indent` method dynamically on any action like external button click. The following code example shows how to enable indent option in the Gantt chart.

`Outdent` - Selected task can be outdented to the level of task from the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `outdent` method dynamically on any action like external button click. The following code example shows how to enable outdent option in the Gantt chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/indent-outdent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/indent-outdent-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/indent-outdent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/indent-outdent-cs1" %}