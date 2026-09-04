---
layout: post
title: Customization in React Calendar | Syncfusion
description: Customize the React Calendar day cells with CSS and the renderDayCell event to disable weekends or highlight specific dates.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Calendar

The React Calendar allows customization of the appearance using custom CSS and the [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/calendar/renderDayCellEventArgs#renderdaycelleventargs) event to modify each day cell.

This section demonstrates how to disable dates and highlight specific dates in the React Calendar.

## Disable Weekends

You can disable the weekends of every month in a React Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/calendar/renderDayCellEventArgs#renderdaycelleventargs) event. The `isDisabled` argument from this event allows you to define whether the date is to be disabled or not.

> Set [`isDisabled`](https://ej2.syncfusion.com/react/documentation/api/calendar/renderDayCellEventArgs#renderdaycelleventargs) to `true` to disable a date.

The `renderDayCell` event provides the following arguments that you can use to customize each day cell:

| **Argument** | **Description** |
| --- | --- |
| `date` | The date of the cell being rendered. |
| `isDisabled` | Specifies whether the date should be disabled. |
| `isOtherMonth` | Indicates whether the date belongs to a previous or next month. |
| `element` | The DOM element of the day cell which can be customized. |

The following example demonstrates how to disable weekends for every month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs10" %}

## Day Cell Format

You can highlight specific dates by adding custom CSS or elements to the day cell using the [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/calendar/renderDayCellEventArgs#renderdaycelleventargs) event.

The following classes provide options to customize the Calendar component.

**Header Classes**

| **Class Name** | **Description** |
| --- | --- |
| e-calendar | Applied to React Calendar. |
| e-header | Applied to header. |
| e-title | Applied to title. |
| e-icon-container | Applied to previous and next icon container. |
| e-prev | Applied to previous icon. |
| e-next | Applied to next icon. |

**Day Cell Classes**

| **Class Name** | **Description** |
| --- | --- |
| e-weekend | Applied to weekend dates. |
| e-other-month | Applied to other month dates. |
| e-day | Applied to each day cell. |
| e-selected | Applied to selected dates. |
| e-disabled | Applied to disabled dates. |

The following example highlights the world health date (7th April every year) and world forest day (21st March every year) in the React Calendar by using the custom icon and tooltip.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/highlight-special-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/highlight-special-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/highlight-special-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/highlight-special-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/highlight-special-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/highlight-special-cs2" %}

## Highlight Weekends

You can highlight the weekends of every month in a React Calendar by using the [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/calendar/renderDayCellEventArgs#renderdaycelleventargs) event. The following example demonstrates how to highlights the weekends of every month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/highlight-weekend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/highlight-weekend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/highlight-weekend-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/highlight-weekend-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/highlight-weekend-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/highlight-weekend-cs2" %}

## See Also

* [How to set clear button in Calendar](./how-to/set-clear-button-in-calendar)
* [How to skip a month in React Calendar](./how-to/skip-a-month-in-calendar)
* [How to change the first day of week](./how-to/change-the-first-day-of-week)
* [How to customize the React Calendar day header](./how-to/customize-the-calendar-day-header)
