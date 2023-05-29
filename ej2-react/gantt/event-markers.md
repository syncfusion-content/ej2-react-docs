---
layout: post
title: Event markers in React Gantt component | Syncfusion
description: Learn here all about Event markers in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Event markers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Event markers in React Gantt component

The event markers in the Gantt component is used to highlight the important events in a project. Event markers can be initialized by using the [`eventMarkers`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/) property, and you can define date and label for the event markers using the [`day`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/#day) and [`label`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/#label) properties. You can also customize it using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/#cssclass) properties. The following code example shows how to add event markers in the Gantt component.

To highlight the days, inject the [`DayMarkers`](https://ej2.syncfusion.com/react/documentation/api/gantt/#daymarkersmodule) module into the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/event-markers-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/event-markers-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/event-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/event-markers-cs1" %}