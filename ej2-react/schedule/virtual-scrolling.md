---
layout: post
title: Virtual scrolling in React Schedule component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Virtual scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in React Schedule component

To achieve better performance in the Scheduler when loading a large number of resources and events, we have added virtual scrolling support to load a large set of resources and events instantly as you scroll. You can dynamically load large number of resources and events in the Scheduler by setting `true` to the [`allowVirtualScrolling`](https://ej2.syncfusion.com/react/documentation/api/schedule/viewsModel/#allowvirtualscrolling) property within the view specific settings. The virtual loading of events is possible in Agenda view, by setting [`allowVirtualScrolling`](https://ej2.syncfusion.com/react/documentation/api/schedule/viewsModel/#allowvirtualscrolling) property to `true` within the agenda view specific settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs48/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs48/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs48" %}

> For now, the virtual loading of resources and events is not supported in `MonthAgenda`, `Year` and `TimelineYear` (Horizontal Orientation) views.

## See Also

* [Virtual scrolling in Agenda view](./views/#agenda-view)

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-ui-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/material/schedule/overview) to knows how to present and manipulate data.
