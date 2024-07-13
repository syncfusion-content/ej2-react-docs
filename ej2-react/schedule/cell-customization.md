---
layout: post
title: Cell customization in React Schedule component | Syncfusion
description: Learn here all about Cell customization in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Cell customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell customization in React Schedule component

The cells of the Scheduler can be easily customized either using the cell template or [`RenderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event.

## Setting cell dimensions in all views

The height and width of the Scheduler cells can be customized either to increase or reduce its size through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/schedule#cssclass) property, which overrides the default CSS applied on cells.

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

You can check whether the given time range slots are available for event creation or already occupied by other events using the [`isSlotAvailable`](https://ej2.syncfusion.com/react/documentation/api/schedule#isslotavailable) method. In the following code example, if a specific time slot already contains an appointment, then no more appointments can be added to that cell.

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

## Customizing cells in all the views

It is possible to customize the appearance of the cells using both template options and [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event on all the views.

### Using template

The [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#celltemplate) option accepts the template string and is used to customize the cell background with specific images or appropriate text on the given date values.

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

An alternative to `cellTemplate`[`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#celltemplate) is the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event, which can also be used to customize the cells with appropriate images or formatted text values.

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

You can customize cells such as work cells, month cells, all-day cells, header cells, resource header cells using [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event by checking the [`elementType`](https://ej2.syncfusion.com/react/documentation/api/schedule/renderCellEventArgs/#elementtype) option within the event. You can check elementType with any of the following.

| Element type | Description |
|-------|---------|
| dateHeader | triggers on header cell rendering.|
| monthDay | triggers on header cell in month view rendering.|
| resourceHeader | triggers on resource header cell rendering.|
| alldayCells | triggers on all day cell rendering.|
| emptyCells | triggers on empty cell rendering on header bar.|
| resourceGroupCells | triggers on rendering of work cells for parent resource.|
| workCells | triggers on work cell rendering.|
| monthCells | triggers on month cell rendering.|
| majorSlot | triggers on major time slot cell rendering.|
| minorSlot | triggers on minor time slot cell rendering.|
| weekNumberCell | triggers on cell displaying week number.|

## Customizing cell header in month view

The month header of each date cell in the month view can be customized using the [`cellHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#cellheadertemplate) option which accepts the string or HTMLElement. The corresponding date can be accessed with the template.

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

Providing the [`minDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#mindate) and [`maxDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#maxdate) property with some date values, allows the Scheduler to set the minimum and maximum date range. The Scheduler date that lies beyond this minimum and maximum date range will be in a disabled state so that the date navigation will be blocked beyond the specified date range.

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

>By default, the [`minDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#mindate) property value is set to new Date(1900, 0, 1) and [`maxDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#maxdate) property value is set to new Date(2099, 11, 31). The user can also set the customized [`minDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#mindate) and [`maxDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#maxdate) property values.

## Customizing the weekend cells background color

You can customize the background color of weekend cells by utilizing the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule/#rendercell) event and checking the [`elementType`](https://ej2.syncfusion.com/react/documentation/api/schedule/renderCellEventArgs/#elementtype) option within the event.

```ts

const onRendercell = (args) => {
    if (args.elementType == "workCells") {
      // To change the color of weekend columns in week view
      if (args.date) {
        if (args.date.getDay() === 6) {
          (args.element).style.background = '#ffdea2';
        }
        if (args.date.getDay() === 0) {
          (args.element).style.background = '#ffdea2';
        }
      }
    }
}

```

And, the background color for weekend cells in the Month view through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/schedule/#cssclass) property, which overrides the default CSS applied on cells.

```css

.schedule-cell-customization.e-schedule .e-month-view .e-work-cells:not(.e-work-days) {
    background-color: #f08080;
}

```

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

## How to disable multiple cell and row selection in Schedule

By default, the [`allowMultiCellSelection`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowmulticellselection) and [`allowMultiRowSelection`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowmultirowselection)  properties of the Schedule are set to `true`. So, the Schedule allows user to select multiple cells and rows. If the user want to disable this multiple cell and row selection. The user can disable this feature by setting up `false` to these properties.

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/material/schedule/overview) to knows how to present and manipulate data.
