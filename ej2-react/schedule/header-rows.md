---
layout: post
title: Header rows in React Schedule component | Syncfusion
description: Learn here all about Header rows in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Header rows in React Schedule component

The Timeline views can have additional header rows other than its default date and time header rows. It is possible to show individual header rows for displaying year, month and week separately using the [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows). This is applicable only on the Timeline views. The possible rows which can be added using [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows) are as follows.

* `Year`
* `Month`
* `Week`
* `Date`
* `Hour`

> The `Hour` row is not applicable for the Timeline month view.

See how to add and customize header rows in the Timeline views of the Angular Scheduler in this video:

{% youtube "https://www.youtube.com/watch?v=uV5Axqj5UsI" %}

The example below shows the Scheduler displaying all available header rows in Timeline views.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs2" %}

> Importing `HeaderRowsDirective` and `HeaderRowDirective` is mandatory.

## Display year and month rows in Timeline views

To display only the year and month header rows in the Scheduler, specify `Year` and `Month` in the [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs3" %}

## Display week numbers in Timeline views

The week number can be displayed in a separate header row of the Timeline Scheduler by setting `Week` option within [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs4" %}

## Timeline view displaying dates of a complete year

You can display a full year in a Timeline view by setting the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#interval) to 12 and including the **TimelineMonth** view in the `ViewDirective` of Scheduler.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs5" %}

## Customizing header rows with templates

You can customize the text of the header rows and display any images or formatted text on each individual header rows using the built-in [`template`](https://ej2.syncfusion.com/react/documentation/api/schedule/headerRows#template) option available within the [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs6" %}

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.
