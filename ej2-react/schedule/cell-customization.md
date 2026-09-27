---
layout: post
title: Cell Customization in React Scheduler | Syncfusion
description: Learn how to customize work cells in the Syncfusion React Scheduler for vertical, timeline, and month views with custom content and styling.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell Customization in React Scheduler

The cells of the Scheduler can be customized using a template or the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event.

## Setting cell dimensions in all views

The height and width of the Scheduler cells can be customized to increase or reduce their size through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/schedule#cssclass) property, which overrides the default CSS applied on cells.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/cell-dimension-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/cell-dimension-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/cell-dimension-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs1" %}

## Check for cell availability

You can check whether the given time range slots are available for event creation or already occupied by other events using the [`isSlotAvailable`](https://ej2.syncfusion.com/react/documentation/api/schedule#isslotavailable) method. In the following code example, if a specific time slot already contains an appointment, no more appointments can be added to that cell.

>Note: The **isSlotAvailable** is centered around verifying appointments within the present view's date range. Yet, it does not encompass an evaluation of availability for recurrence occurrences that fall beyond this particular date range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs1" %}

## Customizing cells in all views

It is possible to customize the appearance of cells using both template options and [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event in all views.

### Using template

The [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#celltemplate) option accepts a template string and is used to customize the cell background with specific images or text for the given date values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/cell-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/cell-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/cell-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-cs1" %}

### Using renderCell event

An alternative to the [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#celltemplate) option is the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event, which can also be used to customize cells with images or formatted text. Use `renderCell` for dynamic, condition-based cell customization; use `cellTemplate` for static template-based content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/cell-dimension-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/cell-dimension-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/cell-dimension-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs2" %}

You can customize specific cell types using the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event by checking the [`elementType`](https://ej2.syncfusion.com/react/documentation/api/schedule/renderCellEventArgs#elementtype) property. This allows you to apply different customization logic to different cell types. Check `elementType` against these values:

| Element type | Views | Description |
|-------|-------|---------|
| dateHeader | All | Header cell containing date |
| monthDay | Month | Date header in month view |
| resourceHeader | All | Resource column header |
| alldayCells | Week/Workweek | All-day event cells |
| emptyCells | All | Empty header bar cells |
| resourceGroupCells | All | Work cells grouped by resource |
| workCells | Week/Workweek | Standard time slot cells |
| monthCells | Month | Calendar date cells |
| majorSlot | Week/Workweek | Major time divisions |
| minorSlot | Week/Workweek | Minor time divisions |
| weekNumberCell | Week/Workweek | Week number column |

**Example usage:**
```typescript
const onRenderCell = (args) => {
  if (args.elementType === 'workCells' && args.date) {
    // Apply styling to work cells
  }
  if (args.elementType === 'monthCells') {
    // Apply styling to month view cells
  }
};
```

## Customizing cell header in month view

The month header of each date cell in the month view can be customized using the [`cellHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#cellheadertemplate) option, which accepts a string or `HTMLElement`. The corresponding date can be accessed within the template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/cell-dimension-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/cell-dimension-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/cell-dimension-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs3" %}

## Customizing the minimum and maximum date values

Set the [`minDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#mindate) and [`maxDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#maxdate) properties to restrict the date range available for scheduling. Dates outside this range are disabled and prevent navigation beyond the specified boundaries.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/cell-dimension-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/cell-dimension-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/cell-dimension-cs4/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs4" %}

**Default ranges:**
- `minDate`: January 1, 1900 (new Date(1900, 0, 1))
- `maxDate`: December 31, 2099 (new Date(2099, 11, 31))

You can customize these values to your application's date range requirements. Dates outside the specified range become disabled and cannot be navigated.

## Customizing the weekend cells background color

You can customize the background color of weekend cells in two ways:

**Option 1: Using the renderCell event** (dynamic, for week/workweek views)
Use [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) to dynamically check the day of week and apply styling. Days are numbered 0–6 where 0=Sunday and 6=Saturday.

```ts
const onRenderCell = (args) => {
    if (args.elementType === "workCells" && args.date) {
      // Check if date is Saturday (6) or Sunday (0)
      if ([0, 6].includes(args.date.getDay())) {
        args.element.style.background = '#ffdea2';
      }
    }
};

// Attach to Scheduler:
// <Scheduler onRenderCell={onRenderCell} ... />
```

**Option 2: Using CSS** (static, for month view)
For month view, use [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/schedule#cssclass) to override default cell styling with custom CSS:

```css
/* Apply to month view weekend cells */
.e-schedule .e-month-view .e-work-cells:not(.e-work-days) {
    background-color: #f08080;
}
```

This selector targets all non-workday cells in the month view. Adjust the class prefix based on your `cssClass` property value if needed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/weekend-cell-color/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/weekend-cell-color/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/weekend-cell-color/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/weekend-cell-color" %}

## Disabling multiple cell and row selection

By default, the [`allowMultiCellSelection`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowmulticellselection) and [`allowMultiRowSelection`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowmultirowselection) properties are set to `true`, allowing users to select multiple cells or rows. To restrict selection to a single cell or row, set these properties to `false`:

```js
<Scheduler 
  allowMultiCellSelection={false}
  allowMultiRowSelection={false}
  // ... other properties
/>
```

**Common use cases for disabling multi-selection:**
- Single appointment entry workflows
- Resource booking with one appointment per slot
- Mobile-optimized interfaces with single-cell interaction

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler Views](https://ej2.syncfusion.com/react/documentation/schedule/scheduler-interactions)
* [Resources](https://ej2.syncfusion.com/react/documentation/schedule/resources)
* [Templates](https://ej2.syncfusion.com/react/documentation/schedule/cell-customization)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
