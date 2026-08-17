---
layout: post
title: Print and Export in React Chart | Syncfusion
description: Learn how to print and export Syncfusion React Chart to PDF, image, Excel, and CSV formats with multiple Chart on one page.
control: Chart print
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in React Chart

## Print

You can print the rendered chart directly from the browser by calling the public `print` method. The method accepts an optional array of element IDs or `HTMLElement` references to include in the print output. By default, the `print` method prints the chart element itself.

**Method signature**

```typescript
chartInstance.print(ids?: string[] | HTMLElement[]);
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs3" %}

## Export

You can export the rendered chart to `JPEG`, `PNG`, `SVG`, `PDF`, `XLSX`, or `CSV` using the chart's `export` method. To use the export feature, inject the `Export` module into the chart's `services` array (as shown in the samples below).

**Method signature**

```typescript
chartInstance.exportModule.export(
  type: 'PNG' | 'JPEG' | 'SVG' | 'PDF' | 'XLSX' | 'CSV',
  fileName: string,
  orientation?: 'portrait' | 'landscape',
  controls?: ChartModel[],
  width?: number,
  height?: number,
  isMultiplePage?: boolean,
  header?: PdfHeaderFooterContent,
  footer?: PdfHeaderFooterContent,
  exportToMultiplePage?: boolean
);
```

**Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | `string` | The export format. Valid values: `PNG`, `JPEG`, `SVG`, `PDF`, `XLSX`, `CSV`. |
| `fileName` | `string` | The name of the downloaded file (without extension). |
| `orientation` | `string` | The page orientation for PDF export. Valid values: `portrait`, `landscape`. |
| `controls` | `ChartModel[]` | An array of chart instances for multi-control export to a single page. |
| `width` | `number` | The width of the exported image or PDF, in pixels. |
| `height` | `number` | The height of the exported image or PDF, in pixels. |
| `isMultiplePage` | `boolean` | When `true`, exports each chart in `controls` to a separate page (PDF only). |
| `header` | `PdfHeaderFooterContent` | Header content for the exported PDF. |
| `footer` | `PdfHeaderFooterContent` | Footer content for the exported PDF. |
| `exportToMultiplePage` | `boolean` | When `true`, exports each chart in `controls` to a separate page (PDF only). |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs4" %}

### Adding Header and Footer in PDF Export

Use the `header` and `footer` parameters of the `export` method to add header and footer text to the exported PDF document. Each parameter accepts a `PdfHeaderFooterContent` object with the following properties:

* `content` — The text that appears at the top (`header`) or bottom (`footer`) of the exported PDF document.
* `fontSize` — The font size of the header or footer text.
* `fontFamily` — *(Optional)* The font family for the text.
* `color` — *(Optional)* The color of the text.
* `x`, `y` — *(Optional)* The position of the text in the PDF.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs6/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs6" %}

### Exporting Charts to Separate Pages in PDF

During PDF export, set the `exportToMultiplePage` parameter to `true` to export each chart to a separate page in the resulting PDF document. The chart instances are passed in the `controls` array.

> **Note:** Each chart in the `controls` array must also have the `Export` module injected in its `services` array for multi-page export to work.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs7/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs7" %}

### Multiple Chart Export

You can export multiple charts to a single page by passing an array of chart objects to the chart's `export` method. Follow these steps:

1. Render more than one chart on the page.
2. Add a button to trigger the export.
3. In the button's click handler, call the `export` method on the first chart instance, passing the additional chart instances in the `controls` array.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs5/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs5" %}

### Exporting Chart Using a Base64 String

> **Note:** This is a custom approach that uses an HTML canvas. The built-in `export` method does not return a base64 string.

The chart can be exported as an image in the form of a base64 string by utilizing HTML canvas. This process involves rendering the chart onto a canvas element and then converting the canvas content to a base64 string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs8/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs8" %}

### Excel Export

You can export the chart data in `XLSX` or `CSV` format by setting the `type` parameter of the `export` method to `XLSX` or `CSV`. The [`excelProperties`](https://ej2.syncfusion.com/react/documentation/api/chart/iExportEventArgs#excelproperties) property in the [`beforeExport`](https://ej2.syncfusion.com/react/documentation/api/chart/iExportEventArgs) event allows you to customize the exported sheet before the file is generated. You can modify row titles, column titles, cell values, and row or column widths.

> **Note:** The `beforeExport` event fires for all export formats, but `excelProperties` is only populated when `type` is `XLSX` or `CSV`. The `Export` module must be injected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs9/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/print-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/print-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs9" %}