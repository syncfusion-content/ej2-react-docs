---
layout: post
title: Data labels in React Chart component | Syncfusion
description: Learn here all about Data labels in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Data labels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in React Chart component

Data labels display the values of data points directly on the chart, reducing the need to reference axes for exact values. Enable data labels by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings#visible) option to `true` in the `dataLabel` configuration. Labels automatically adjust to avoid overlapping and maintain readability.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs1" %}

> Note: To use the data label feature, the `DataLabel` module must be injected into the `services`.

## Position

Use the [`position`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings#position) property to place data labels at `Top`, `Middle`, `Bottom`, or `Outer` (applicable to column and bar series). Appropriate label positioning enhances clarity and preserves chart readability.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel1-cs1" %}

> Note: The `Outer` position applies only to column and bar series types.

## Data label template

Customize label content using templates. Use placeholders such as `${point.x}` and `${point.y}` to display data point values. The [`template`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings#template) property enables fully customizable and visually rich labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-template-cs1" %}

## Text mapping

Display custom text using the `name` property, which maps label text from a specific field in the data source. This feature is useful for descriptive or category‑based labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs2" %}

## Format

Apply number or date formatting using the [`format`](https://ej2.syncfusion.com/react/documentation/api/chart/dataLabelSettings#format) property. Global formatting symbols include:

- `n` – number format  
- `p` – percentage format  
- `c` – currency format  

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs3" %}

<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>Rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
    <td>Rounded to 2 decimal places.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>Rounded to 3 decimal places.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
    <td>Converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>Converted to percentage with 2 decimal places.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
    <td>Converted to percentage with 3 decimal places.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>Currency with 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>Currency with 2 decimal places.</td>
  </tr>
</table>

## Margin

Adjust spacing around labels using the `margin` property, which includes `left`, `right`, `bottom`, and `top` values. Margins help prevent labels from overlapping chart elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs4" %}

## Data label rotation

Rotate data labels using the `angle` property. Rotation improves readability when labels are long or when space is limited.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/marker-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/marker-cs1" %}

## Customization

Enhance label appearance using properties such as `fill` (background), `border`, and corner radius (`rx`, `ry`). Refine text appearance using the `font` settings, which support `color`, `fontFamily`, `fontWeight`, and `size`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs5" %}

> Note: The `rx` and `ry` properties require non‑null `border` values.

## Customizing Specific Point

Customize individual markers or labels using the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#pointrender) and [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#textrender) events.  
- `pointRender` modifies shape, color, or border of a point.  
- `textRender` customizes the label text for specific points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel1-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel1-cs2" %}

## Show percentage based on each series points

Calculate and display percentage values based on each series’ total using the `seriesRender` and `textRender` events.  
- In `seriesRender`, compute the total of `y` values.  
- In `textRender`, calculate the percentage for each point and update the label text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/data-marker/datalabel-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/data-marker/datalabel-cs6" %}

## Last value label

The `lastValueLabel` feature highlights the final data point in a series, making the latest trend or value easy to identify.

### Enable last value label

Enable the label by setting the `enable` property inside the `lastValueLabel` configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/last-value-label/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/last-value-label/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/last-value-label/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/last-value-label/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label" %}

> Note: To use the last value label feature, inject the `LastValueLabel` module into the `services`.

### Customization

Customize the appearance using properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/last-value-label-customization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/last-value-label-customization/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/last-value-label-customization/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/last-value-label-customization/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label-customization" %}

## See Also

* [Show total stacking values in data label](./how-to#show-the-total-value-for-stacking-series-in-data-label)
* [Prevent the data label when the data value is 0](./how-to#prevent-the-data-label-when-the-data-value-is-0)
* [Display data labels in lakh](https://support.syncfusion.com/kb/article/21250/how-to-display-data-labels-in-lakh-in-react-accumulation-chart)