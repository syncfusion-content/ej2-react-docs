---
layout: post
title: How to use a data label template in React Chart | Syncfusion
description: Learn how to render a custom HTML template for data labels in Syncfusion React Chart with field-driven content.
control: Data label template
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to use a data label template in React Chart

You can render a custom HTML template for each data label to display richer content than plain text or numeric values. The template is assigned as a renderer function to the `template` property of [`DataLabelSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettingsModel#template), where it receives an `args` object with the current data point.

Typical use cases include per-point color coding, progress chips, status badges, and rich content such as images inside data labels.

## Define the template rendering function

Declare a regular React function that returns the JSX you want inside each label. The function receives an `args` object whose `args.point` describes the current data point (for example, `args.point.x` and `args.point.y`). Keep the function defined inside the same component so it can read component-scope variables.

In this example, the template wraps a colored chip around the x and y values. The color comes from the data source itself, so each label can be styled per-point.

## Bind the template to the data label

Map a field from your data source to the data label's [`name`](https://ej2.syncfusion.com/react/documentation/api/chart/datalabelsettingsmodel#name) property so the template can read it from `args.point`, and assign the JSX function to the data label's [`template`](https://ej2.syncfusion.com/react/documentation/api/chart/datalabelsettingsmodel#template) property. Because data label configuration in this example is declared under `marker`, set both properties on `marker.dataLabel` and pass the resulting `marker` object to the series.

In the example below, the `color` field of each data row is mapped via `marker.dataLabel.name`, and the inline `chartTemplate` function is passed to `marker.dataLabel.template`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/datalabel-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/datalabel-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/datalabel-cs1" %}

### Available arguments

Inside the template renderer (the function you pass to `dataLabel.template`), you can read the following fields from the `args.point` object:

| Argument | Description |
| --- | --- |
| `args.point.x` | The x value of the current data point (matches the bound axis data type). |
| `args.point.y` | The y value of the current data point. |
| `args.point.index` | The zero-based index of the point in its series. |
| `args.point.text` | The text resolved from the field mapped to `dataLabel.name`. |

## Troubleshooting

- **"The data-label template is blank"**: Confirm that `visible` is set to `true` in `marker.dataLabel`, the `DataLabel` module is included in the injected services, and the renderer function is assigned to `dataLabel.template`.

- **"`args.point.text` is `undefined`"**: Confirm that `dataLabel.name` contains the name of a valid data-source field and that each applicable data item contains that field.

## See also

* [Getting started](../getting-started)
* [Data label](../data-labels)
* [Tooltip template](../tool-tip)

