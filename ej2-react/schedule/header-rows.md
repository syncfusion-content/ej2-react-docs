---
layout: post
title: Timeline Header Rows in React Scheduler | Syncfusion
description: Learn how to add additional header rows in timeline views of the Syncfusion React Scheduler, including year, month, week, and date rows.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Timeline Header Rows in React Scheduler

The Timeline views can have additional header rows other than their default date and time header rows. It is possible to show individual header rows for displaying year, month, and week separately using the [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows). This is applicable only on the Timeline views.

**Available header row types:**

| Header Row | Description | Timeline Views |
|------------|-------------|----------------|
| `Year` | Displays year information | All Timeline views |
| `Month` | Displays month information | All Timeline views |
| `Week` | Displays week numbers | All Timeline views |
| `Date` | Displays date information | All Timeline views |
| `Hour` | Displays hour information | Not applicable for Timeline month view |

> **Note:** The `Hour` row is not applicable for the Timeline month view because the month-level granularity doesn't require hour-level details.

See how to add and customize header rows in the Timeline views of the React Scheduler in this video:

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

> **Important:** Importing `HeaderRowsDirective` and `HeaderRowDirective` is mandatory in your component file to use the header row functionality. Without these imports, the header rows will not be rendered.

> **Tip:** The order in which you specify the header row types in the `HeaderRowsDirective` array determines their display order from top to bottom in the Scheduler.

## Display year and month rows in Timeline views

To display only the year and month header rows in the Scheduler, specify `Year` and `Month` in the [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows). This configuration is useful for high-level views where users need to navigate by year or month without seeing day-level details.

> **Note:** When you specify only `Year` and `Month` rows, the default date and time header rows are replaced with the custom configuration. This provides a cleaner interface for long-term scheduling views.

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

The week number can be displayed in a separate header row of the Timeline Scheduler by setting the `Week` option within [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows). Week numbers follow the ISO 8601 standard, where week 1 is the first week with the majority of days in the new year.

> **Tip:** Week numbers are particularly useful for project management scenarios where tracking progress by week is essential. Combine with month and year rows for a comprehensive timeline view.

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

You can display a full year in a Timeline view by setting the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#interval) to 12 and including the **TimelineMonth** view in the `ViewDirective` of Scheduler. This configuration is ideal for annual planning, resource allocation across the year, and long-term scheduling scenarios.

> **Note:** Setting `interval` to 12 divides the Timeline view into 12 equal segments, each representing one month of the year. The Scheduler automatically adjusts the timescale to show 12 months when this configuration is applied.

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

You can customize the text of the header rows and display any images or formatted text on each individual header row using the built-in [`template`](https://ej2.syncfusion.com/react/documentation/api/schedule/headerRows#template) option available within the [`HeaderRowDirective`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerrows). Templates provide full flexibility to render custom HTML content, including images, icons, badges, and formatted text.

**Template customization options:**

| Template Element | Use Case |
|------------------|----------|
| Custom text | Display localized or formatted date information |
| Images | Show company logos, event icons, or status indicators |
| HTML content | Add complex layouts with multiple elements |
| Conditional rendering | Display different content based on date or view |

> **Tip:** Use template context properties like `type` (header row type), `date` (current cell date), and `view` (current view) to create dynamic and context-aware header row content.

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

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Header Bar Customization](./header-bar.md)
* [Views Configuration](./views.md)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [HeaderRowDirective API](https://ej2.syncfusion.com/react/documentation/api/schedule/headerRowDirective)
* [Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
* [Timeline View Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/timeline)
