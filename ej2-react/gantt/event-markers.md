---
layout: post
title: Event markers in React Gantt Component | Syncfusion
description: Learn here all about Event markers in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Event markers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Event Markers in React Gantt Component

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

## Managing event marker overlapping in react gantt component

In the EJ2 Gantt control, it is possible to customize multiple [`eventMarkers`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/) for the same date. However, by default, in such scenarios, these markers may overlap each other, resulting in visual clutter. To manage this, the following sample code demonstrates how to utilize the Gantt dataBound function to obtain label and arrow classes. It performs a loop action to fulfill the current requirement and to avoid overlapping. For further clarification, the code snippet below illustrates the flow of its implementation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs-1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs-1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/eventmarkeroverlap-cs-1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/eventmarkeroverlap-cs-1" %}

>Note: The above-provided sample will only be applicable when using more than one [`eventMarkers`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/) for the same date. However, it is not applicable for default scenarios.

## Label positions in react gantt control

The EJ2 Gantt chart offers powerful features for customizing various labels position within the chart, enabling users to present relevant project information clearly. In EJ2 Gantt chart, labelSettings feature provides three key options for label customization: [`rightLabel`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/#rightlabel), [`taskLabel`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/#tasklabel), and [`leftLabel`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/#leftlabel). Label positions can be initialized by using the [`labelSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/labelSettings/) property. 

The following code example shows how to add label positions in the gantt control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/labelposition-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/labelposition-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/labelposition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/labelposition-cs1" %}

## Displaying eventMarkers in stacked manner

When [`eventMarkers`](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/) are given in consecutive dates and zoomToFit is performed, they may overlap. To avoid this, you can update the position of the eventMarkers in the [dataBound](https://ej2.syncfusion.com/react/documentation/api/gantt/#databound) and [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/gantt/#actioncomplete) events so that they are not overlapped and are visible to read.

The following code example demonstrates how to display event markers in a stacked manner in the Gantt control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/event-markers-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/event-markers-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/event-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/event-markers-cs2" %}