---
layout: post
title: Row auto height in React Schedule component | Syncfusion
description: Learn here all about Row auto height in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row auto height in React Schedule component

By default, the height of the Scheduler rows in Timeline views is static. Therefore, when the same time ranges hold multiple overlapping appointments, a `+n more` text indicator is displayed. With this feature enabled, you can now view all overlapping appointments in a specific time range by auto-adjusting the row height according to the number of appointments, instead of displaying the `+n more` text indicators.

To enable auto row height adjustments on Scheduler Timeline views and the Month view, set the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) property to `true` (default is `false`).

> This auto row height adjustment applies only to all Timeline views and the calendar Month view.

Now, let us see how it works on those applicable views with examples.

## Calendar month view

By default, the rows of the calendar Month view can hold only a limited number of appointments based on its row height, and the rest of the overlapping appointments are indicated with a `+n more` text indicator. The following example shows how the month view row auto-adjusts based on the number of appointments when this [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs23/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs23" %}

## Timeline views

When the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled in Timeline views, the row height auto-adjusts based on the number of overlapping events in the same time range, as demonstrated in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs24/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs24" %}

## Timeline views with multiple resources

The following example shows how the auto row adjustment feature works on Timeline views with multiple resources.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs25/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs25" %}

## Appointments occupying entire cell

By default, with the feature [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight), there will be a space in the bottom of the cell when appointment is rendered. To avoid this space, we can set true to the property [`ignoreWhitespace`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings#ignorewhitespace) with in [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings) whereas its default property value is false. In the following code example, the whitespace below the appointments has been ignored.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/ignore-whitespace-cs1" %}

**Note**: The [`ignoreWhitespace`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings#ignorewhitespace) property applies only when the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled in the Scheduler.

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.
