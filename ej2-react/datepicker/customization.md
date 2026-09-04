---
layout: post
title: Customization in React DatePicker | Syncfusion
description: Customize the React DatePicker appearance with the cssClass property, renderDayCell event, and a full list of .e-* CSS classes.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React DatePicker

The React DatePicker appearance can be customized using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/datepicker#cssclass) property to apply custom styles to the input element and calendar. Additionally, the [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/datepicker/renderDayCellEventArgs#renderdaycelleventargs) event allows customization of individual day cell appearances within the calendar.

Below list of available classes are used to customize the entire React DatePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-wrapper | Applied to React DatePicker wrapper |
| e-datepicker | Applied to the React DatePicker element.|
| e-float-text | Applied to the floating label.  |
| e-date-icon | Applied to the React DatePicker icon. |
| e-popup-wrapper | Applied to React DatePicker popup wrapper.|
| e-calendar | Applied to Calendar element. |
| e-header | Applied to Calendar header.|
| e-title |Applied to Calendar title. |
| e-icon-container | Applied to Calendar previous and next icon container.|
| e-prev |  Applied to Calendar previous icon.|
| e-next | Applied to Calendar next icon.|
| e-weekend | Applied to Calendar weekend dates.|
| e-other-month |  Applied to Calendar other month dates.|
| e-day | Applied to each day cell of the Calendar.|
| e-selected | Applied to Calendar selected dates.|
| e-disabled | Applied to Calendar disabled dates.|

The following example highlights the textbox and calendars's weekend days by using custom CSS. Here we have used the `e-custom-style` class to highlight the textbox and disabled date and `renderDayCell` event to disable the weekends of every month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/customization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/customization-cs2" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/asterisk-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/asterisk-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/asterisk-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/asterisk-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/asterisk-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/asterisk-cs2" %}

## See Also

* [How to disable the React DatePicker component](./how-to/disabled-the-datepicker-component)
* [How to set read-only for React DatePicker](./how-to/set-the-readonly)
* [How to customize the React DatePicker day header](./how-to/customize-the-datepicker-day-header)