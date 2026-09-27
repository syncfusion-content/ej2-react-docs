---
layout: post
title: Open Editor Window Manually in React Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion React Scheduler on cell or event click, including on a single click.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open Editor Window Programmatically in React Scheduler

## Open editor window externally

The [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) allows you to manually open the event editor at a specific time or in response to certain events by using the [`openEditor`](https://ej2.syncfusion.com/react/documentation/api/schedule#openeditor) method, as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-open-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-open-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-open-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-open-cs1" %}

## Open editor window on single click

By default, the Scheduler editor window opens when you double-click cells or appointments. To open the editor window with a single click, use the [`openEditor`](https://ej2.syncfusion.com/react/documentation/api/schedule#openeditor) method in the [`eventClick`](https://ej2.syncfusion.com/react/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/react/documentation/api/schedule#cellclick) event handlers, and set the [`showQuickInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule#showquickinfo) property to `false`. The following example shows how to open the editor window on a single click of cells and appointments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-open-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-open-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-open-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-open-cs2" %}

## See Also

* [Open editor window from external element](./open-event-editor-manually#open-editor-window-externally)
* [Schedule events](../events)

