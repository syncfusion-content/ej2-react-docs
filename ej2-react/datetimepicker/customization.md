---
layout: post
title: Customization in React Datetimepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Datetimepicker component

The DateTimePicker component offers extensive UI customization through properties and events that enable flexible design adaptation to specific application needs.

## Day and Time Cell Format

The [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker/renderDayCellEventArgs/#renderdaycelleventargs) event provides an option to customize the appearance of each day cell during rendering. This allows for applying custom styles or disabling specific dates based on application logic.

The following example demonstrates disabling weekends in every month using the `renderDayCell` event:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs4" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/asterisk-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/asterisk-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/asterisk-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/asterisk-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/asterisk-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/asterisk-cs2" %}

## See Also

* [How to disable the DateTimePicker component](./how-to/disable-the-datetimepicker-component)
* [How to customize the DateTimePicker day header](./how-to/customize-the-datetimepicker-day-header)
