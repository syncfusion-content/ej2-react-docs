---
layout: post
title: How to show stacking series total in React Chart | Syncfusion
description: Learn how to show the total value on top of stacked Syncfusion React Chart series using annotations at each x point.
control: Stacking total
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show stacking series total in React Chart

To show the stacked total on top of each category, declare one `<AnnotationDirective>` per x point and assign the total to its `content` as a JSX function. The annotation sits above the topmost stack segment so the user sees both the per-segment breakdown and the running total.

## Define one annotation per x point

Each annotation is a child of `<AnnotationsDirective>` inside `<ChartComponent>`. Set `coordinateUnits='Point'` so the `x` value is treated as a category label and `y` is a numeric value on the y-axis:

```
<AnnotationsDirective>
    <AnnotationDirective content={template1} coordinateUnits='Point' x='Jamesh' y={14.5} />
    <AnnotationDirective content={template2} coordinateUnits='Point' x='Michael' y={12} />
    <AnnotationDirective content={template3} coordinateUnits='Point' x='John'    y={12} />
</AnnotationsDirective>
```

`y` should be just above the topmost stack segment for that category. The example uses values slightly larger than the actual totals (`14.5`, `12`, `12`) so the label sits clear of the chart's edge.

## Use a JSX function for the annotation content

The `content` prop of `<AnnotationDirective>` is a JSX function reference, not an id string. Declare a regular React function that returns the JSX you want to display, and pass that function as `content`:

```
function chartTemplate1() {
    return (
        <div className='template'>
            <div style={{ color: 'gray', fontSize: '11px', fontWeight: 'bold' }}>
                <span>11</span>
            </div>
        </div>
    );
}
```

Repeat the function once per annotation (the example defines `chartTemplate1`, `chartTemplate2`, `chartTemplate3` — one per category) and assign each to a different annotation's `content`.

## Stacked series and Datasource note

The example's series are all `type='StackingColumn'`, with three series mapped to a single data row via `yName='y0'`, `yName='y1'`, `yName='y2'`. 

```
{ x: 'Jamesh',  y0: 5, y1: 4, y2: 5 },   // total = 14
{ x: 'Michael', y0: 4, y1: 3, y2: 4 },   // total = 11
{ x: 'John',    y0: 5, y1: 4, y2: 2 }    // total = 11
```

The example configures a `Category` x-axis and a numeric y-axis with `minimum: 0`, `maximum: 15`, and `interval: 5`. The `y` value of each annotation is set just above the corresponding row's total.

### When totals change

The example hard-codes the totals inside the JSX template functions. If the data values change at runtime, the templates still show the same numbers. To make the totals reflect live data, compute the value from the data source instead:

```
const total = data.find(row => row.x === 'Jamesh').y0
           + data.find(row => row.x === 'Jamesh').y1
           + data.find(row => row.x === 'Jamesh').y2;
```

or wire the [`annotationRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel#annotationrender) event on `<ChartComponent>` and assign the new total to `args.content` inside the handler.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs10" %}

## Troubleshooting

* **"The total label is hidden behind the stack"** — the annotation's `y` value is too low. Increase it (the example uses `y={14.5}` for a stack that tops at 14) so the label sits clear of the segments.
* **"The label position drifts when the chart is resized"** — `coordinateUnits='Pixel'` would tie the label to a fixed offset; switch back to `coordinateUnits='Point'` so the label follows the data.
* **"The totals are wrong after the data changes"** — the example hard-codes the totals inside the JSX template functions. Compute the value from the data source at render time, or use the `annotationRender` event to override `args.content` dynamically.

## See also

* [Getting started](../getting-started)
* [Chart annotations](../chart-annotations)
* [Stacked column](../chart-types/stack-column)