---
layout: post
title: Export in React Diagram | Syncfusion®
description: Export the React Diagram to JPG, PNG, or SVG using the export API to save diagrams, documentation, or print-ready output programmatically.
control: Export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export in React Diagram

The React Diagram component provides comprehensive support for exporting diagram content as image files (JPG, PNG) or vector graphics (SVG). This functionality enables users to save diagrams for documentation, presentations, or further processing. The [`exportDiagram`](https://ej2.syncfusion.com/react/documentation/api/diagram#exportdiagram) method serves as the primary interface for all export operations.

N> To export diagrams, inject `PrintAndExport` in the diagram component. The following snippet shows the required imports and how to inject the module.

## Basic Export Example

The following code demonstrates a simple diagram export operation. The `exportDiagram` call is placed inside a button click handler so that the diagram instance is available (the ref is not assigned until after the component mounts).

<!-- markdownlint-disable MD033 -->

```

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, PrintAndExport } from '@syncfusion/ej2-react-diagrams';

function App() {
  let diagramInstance;

  function handleExport() {
    let options = {};
    options.mode = 'Download';
    diagramInstance.exportDiagram(options);
  }

  return (
    <div>
      <button onClick={handleExport}>Export</button>
      <DiagramComponent
        id="container"
        width={'1500'}
        height={'1500'}
        ref={(diagram) => (diagramInstance = diagram)}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```
To export the React Diagram elements in various formats, refer to below video link.

{% youtube "https://www.youtube.com/watch?v=IkWXjhRE-o0" %}

## Export Configuration Options

The diagram component supports extensive customization through the [`exportOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions) interface. The following table details all available configuration properties:

| Name | Type | Default | Description | Example Values |
|-------- | -------- | -------- | -------- | -------- |
| bounds | `Rect` | 0 | Defines specific bounds for the `CustomBounds` region export. | `new Rect(0, 0, 300, 300)` |
| region | `DiagramRegions` | 'PageSettings' | Specifies the area of the diagram to be exported using the [`DiagramRegions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#region) type. | 'PageSettings', 'Content', 'CustomBounds' |
| fileName | `string` | 'diagram' | Sets the name of the exported file. | 'Diagram', 'Export' |
| format | `FileFormats` | 'JPG' | Defines the format of the exported file using the [`FileFormats`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#format) type. | 'JPG', 'PNG', 'SVG' |
| mode | `ExportModes` | 'Download' | Controls how the exported content is delivered using the [`ExportModes`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#mode) type. | 'Download', 'Data' |
| margin | `MarginModel` | { left: 0, top: 0, bottom: 0, right: 0 } | Sets the margin spacing around the exported content in pixels. | { left: 10, top: 10, bottom: 10, right: 10 } |
| stretch | `Stretch` | 'Stretch' | Resizes the diagram content to fit the allocated export space using the [`Stretch`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#stretch) type. | 'None', 'Stretch', 'Meet', 'Slice' |
| multiplePage | `boolean` | false | Enables exporting the diagram across multiple pages when content exceeds single page dimensions. | true, false |
| pageWidth | `number` | null | Defines the width of each page in pixels when using multiple page export. | 816, 1056 |
| pageHeight | `number` | null | Sets the height of each page in pixels for multiple page export scenarios. | 1056, 816 |
| pageOrientation | `PageOrientation` | 'Landscape' | Controls the page orientation for the exported output using the [`PageOrientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#pageorientation) type. | 'Landscape', 'Portrait' |

## File Name Configuration

[`fileName`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#filename) property specifies the name for downloaded files. When not specified, the default name **diagram** is used.


## Export Formats

The [`Format`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#format) property determines the output file type. The component supports three formats with distinct characteristics:

* **JPG**: Compressed format suitable for photographs and complex diagrams with many colors.
* **PNG**: Lossless format ideal for diagrams with transparency or sharp edges.
* **SVG**: Vector format that maintains quality at any scale and supports text selection.

The default export format is JPG. The following example shows format specification:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/export/export-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/export/export-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/export/export-cs1" %}

## Margin Configuration

The [`margin`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#margin) property adds whitespace around the exported diagram content. This spacing improves presentation and prevents content from appearing cramped.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/export/export-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/export/export-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/export/export-cs2" %}

## Export Modes

The [`mode`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#mode) property controls how the exported content is delivered:

* **Download**: Automatically downloads the diagram as a file to the user's device.
* **Data**: Returns a base64 string representation for programmatic processing.

The Data mode is useful for applications that need to process or transmit the exported content programmatically:

The following code example demonstrates how to export the diagram as raw data.

<!-- markdownlint-disable MD033 -->

```

function App() {
  let diagramInstance;

  function handleExport() {
    let options = {};
    options.mode = 'Data';
    options.margin = { left: 10, right: 10, top: 10, bottom: 10};
    options.fileName = 'diagram';
    options.format = 'SVG';
    let base64data = diagramInstance.exportDiagram(options);
  }

  return (
    <div>
      <button onClick={handleExport}>Export as Data</button>
      <DiagramComponent
        id="container"
        width={'1500'}
        height={'1500'}
        ref={(diagram) => (diagramInstance = diagram)}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```

## Region-Based Export

Exporting a particular region of the diagram is possible by using the [`region`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#region) property of the [`exportOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions). The available export regions are listed in the table below.

| Region | Description |
|-------- | -------- |
| PageSettings | Exports based on the configured page dimensions and settings. |
| Content | Exports only the visible diagram elements, excluding empty space. | 
| CustomBounds | Exports a user-defined rectangular area. |

The following example demonstrates different region export options:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/export/export-cs3/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/export/export-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/export/export-cs3" %}

N> The [`bounds`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#bounds) property of `exportOptions` must be set when `region` is `CustomBounds`.

## Multi-Page Export

For large diagrams that exceed standard page dimensions, the [`multiplePage`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#multiplepage) option enables export across multiple pages:

* **false** (default): Export as a single image regardless of size
* **true**: Split the diagram across multiple pages based on specified dimensions

The following example shows multi-page export configuration:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/export/export-cs4/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/export/export-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/export/export-cs4" %}

## Direct Image Export

The [`exportImage`](https://ej2.syncfusion.com/react/documentation/api/diagram#exportimage)  method allows direct export of base64 image data without requiring a diagram instance. This method is useful for processing pre-existing image data.

**Method signature**: `exportImage(image: string, options: IExportOptions): void`

* `image` *(string)*: A string representing the image content to be exported (base64-encoded data URI).
* `options` *(IExportOptions)*: An object defining the properties of the image export (such as `fileName`, `format`, `margin`, and `region`).
* **Returns** *(void)*

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/export/export-cs5/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/export/export-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/export/export-cs5" %}

## Diagram Content Retrieval

The [`getDiagramContent`](https://ej2.syncfusion.com/react/documentation/api/diagram#getdiagramcontent) method retrieves the HTML representation of the diagram at runtime. This functionality supports dynamic content analysis and processing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/export/export-cs6/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/export/export-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/export/export-cs6" %}

## Stretch Option for Enhanced Quality

The [`stretch`](https://ej2.syncfusion.com/react/documentation/api/diagram/iExportOptions#stretch) property improves exported image quality by adjusting the aspect ratio. Images exported with stretch enabled are clearer but result in larger file sizes.

The following code example illustrates how to export the region occupied by the diagram elements.

```

function App() {
  let diagramInstance;

  function handleExport() {
    let options = {};
    options.mode = 'Download';
    options.margin = { left: 10, right: 10, top: 10, bottom: 10};
    options.fileName = 'diagram';
    options.format = 'SVG';
    options.region = 'Content';
    options.stretch = 'Stretch';
    diagramInstance.exportDiagram(options);
  }

  return (
    <div>
      <button onClick={handleExport}>Export</button>
      <DiagramComponent
        id="container"
        width={'1500'}
        height={'1500'}
        ref={(diagram) => (diagramInstance = diagram)}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


```

## Export Limitations

Currently, exporting diagram into image format with native and HTML nodes is not supported. To overcome this limitation, we make use of the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> PDF library. This library incorporates the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> HTML converter, which employs the advanced Blink rendering engine. This converter seamlessly transforms HTML content into images. Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/15530/how-to-print-or-export-the-html-and-native-node-into-image-format-using-react-diagram) kb for more information.
