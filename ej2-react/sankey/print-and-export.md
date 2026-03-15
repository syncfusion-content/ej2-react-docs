---
layout: post
title: Print and Export in React Sankey Chart component | Syncfusion
description: Learn here all about Print and Export in Syncfusion React Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Print and Export
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in React Sankey Chart component

The Sankey Chart provides comprehensive print and export functionality, enabling users to generate static files in multiple formats (PNG, JPEG, SVG, PDF) or print the diagram directly. This is useful for reports, documentation, sharing, and offline access.

This guide covers printing the chart and exporting to various formats with customization options.

## Print

Print the Sankey Chart directly to paper or PDF using the `print()` method. This opens the browser's print dialog, allowing users to select printer settings and output format:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/print-export/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/print-export/print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/print-export/print-cs1" %}

## Export

Export the Sankey Chart to various file formats using the `export()` method. This allows you to generate standalone files suitable for sharing, archiving, or embedding in documents.

### Export Formats

The Sankey Chart supports exporting to the following formats:

- **PNG** - Portable Network Graphics (raster format, good for web)
- **JPEG** - Joint Photographic Experts Group (compressed raster, smaller file size)
- **SVG** - Scalable Vector Graphics (vector format, scalable without quality loss)
- **PDF** - Portable Document Format (ideal for printing and archiving)


Export the chart using default settings with a default filename:
### Export with Default Settings

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/print-export/export-formats-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/print-export/export-formats-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/print-export/export-formats-cs1" %}

## Export with Custom Options

Export the chart with a custom filename and format selection to control output file names and type:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/print-export/export-custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/print-export/export-custom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/print-export/export-custom-cs1" %}

## Export Events

### Before Export Event

Use the `beforeExport` event to customize the export process before the file is generated. This allows you to modify chart properties, add watermarks, or perform pre-export calculation

Use the `beforeExport` event to customize the export process:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/print-export/before-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/print-export/before-export-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/print-export/before-export-cs1" %}

## Export Completed Event

Handle the completion of export using the `exportCompleted` event:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/print-export/export-completed-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/print-export/export-completed-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/print-export/export-completed-cs1" %}

## Export Format Comparison

| Format | Use Case | Quality | File Size |
|--------|----------|---------|-----------|
| PNG | Web sharing, presentations | Raster (good quality) | Medium |
| JPEG | Web images, email | Raster (good quality) | Small |
| SVG | Scalable graphics, printing | Vector (scalable) | Medium |
| PDF | Documents, archival | Vector (scalable) | Medium |

## Best Practices

- **PNG/JPEG**: Best for quick sharing and web usage
- **SVG**: Best for scalable, print-ready exports
- **PDF**: Best for formal documents and archival purposes
- Choose format based on your distribution and usage requirements
- Test exports in different formats to ensure quality meets your needs
