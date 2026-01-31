---
layout: post
title: Drag and Drop from Another in React Gantt Chart component | Syncfusion
description: Learn here all about Drag and drop from another in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Drag and drop from another 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop From Another in React Gantt Chart component

In Gantt, it is possible to drag a record from another component and drop it in Gantt chart with updating the Gantt record. Here, dragging an item from `TreeView` component to Gantt and that item is updated as a resource for the Gantt record, we can achieve this, by using [nodeDragStop](https://ej2.syncfusion.com/react/documentation/api/treeview#nodedragstop) event of `TreeView` control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-draganddrop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-draganddrop-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-draganddrop-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-draganddrop-cs1" %}

The following screenshot shows dropping record from another component in to Gantt, and **Rose Fuller** is added as resource for the task **Develop floor plan estimation**.

![Dropping Record](../images/dropping.png)