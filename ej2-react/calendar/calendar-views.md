---
layout: post
title: Calendar views in React Calendar component | Syncfusion
description: Learn here all about Calendar views in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Calendar views 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Calendar views in React Calendar component

The Calendar provides predefined views that give a flexible way to navigate and select dates. Use the [`start`](https://ej2.syncfusion.com/react/documentation/api/calendar#start) property to change the default view of the Calendar.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month |
| year | Displays the months in a year |
| decade | Displays the years in a decade |

The following example demonstrates how to set the `year` as the start view of the calendar.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs4" %}

## ## View Restriction

You can restrict Calendar navigation by setting the [`start`](https://ej2.syncfusion.com/react/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/react/documentation/api/calendar#depth) properties.

Setting `start` and `depth` limits how far users can drill down or up. The Calendar will drill down to the view specified by `depth` and drill up to the view specified by `start`.

> The `depth` view must be lower (less granular) than the `start` view.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs6" %}

You can restrict the calendar's drill down navigation by defining the [`start`](https://ej2.syncfusion.com/react/documentation/api/calendar#start) and [`depth`](https://ej2.syncfusion.com/react/documentation/api/calendar#depth) property

The following example demonstrates how to select the date in `year` view.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs8" %}