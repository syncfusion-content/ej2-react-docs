---
layout: post
title: Date views in React Datepicker component | Syncfusion
description: Learn here all about Date views in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Date views 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date views in React Datepicker component

The DatePicker has the following predefined views that provides a flexible way to navigate back and forth to select the date.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month |
| year | Displays the months in a year |
| decade | Displays the years in a decade |

## Start view

You can use the [`start`](https://ej2.syncfusion.com/react/documentation/api/datepicker#start) property to define the initial rendering view.

The following example demonstrates how to create a DatePicker with [`decade`](https://ej2.syncfusion.com/react/documentation/api/datepicker#depth) as initial rendering view.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs8" %}

## Depth view

The [`depth`](https://ej2.syncfusion.com/react/documentation/api/datepicker#depth) property restricts the deepest view level that users can navigate to within the calendar.

> The depth value must be smaller than the start value; otherwise, the view restriction will not apply as intended.

The following example demonstrates how to create a DatePicker that allows users to select a month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs10" %}

> To know more about Calendar views refer the Calendar's [Calendar Views](../calendar/calendar-views/) section.