---
layout: post
title: Print in React Diagram | Syncfusion®
description: Print the current React Diagram to produce a high-quality paper copy with customizable region, scale, page size, and orientation options.
control: Print
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Diagram

The React Diagram component provides comprehensive printing capabilities that allow users to generate high-quality printed outputs of their diagrams. The [`print`](https://ej2.syncfusion.com/react/documentation/api/diagram#print) method triggers the browser's print dialog to print the diagram, with extensive customization options for different printing scenarios.

N> To print a diagram, inject the `PrintAndExport` module into the `DiagramComponent`.

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, PrintAndExport } from '@syncfusion/ej2-react-diagrams';

function App() {
    let diagramInstance;
    let options = {};
    const handlePrint = () => {
        diagramInstance.print(options);
    };
    return (
        <div>
            <button onClick={handlePrint}>Print</button>
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

To print the React Diagram elements in various formats, refer to the video link below.

{% youtube "https://www.youtube.com/watch?v=IkWXjhRE-o0" %}

## Print Options

The diagram printing behavior can be extensively customized using the [`printOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions) parameter. These options provide control over the printed output's layout, size, and content selection.

The available print options are detailed in the table below:

| Name | Type | Default | Description | Example Values |
|-------- | -------- | -------- | -------- | -------- |
| region | `DiagramRegions` | 'PageSettings' | Specifies the region of the diagram to be printed using the [`DiagramRegions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#region) type. | 'PageSettings', 'Content', 'CustomBounds' |
| margin | `MarginModel` | { left: 0, top: 0, bottom: 0, right: 0 } | Sets the margin spacing around the printed content in pixels. | { left: 10, top: 10, bottom: 10, right: 10 } |
| stretch | `Stretch` | 'Stretch' | Resizes the diagram content to fit the allocated print space using the [`Stretch`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#stretch) type. | 'None', 'Stretch', 'Meet', 'Slice' |
| multiplePage | boolean | false | Enables printing the diagram across multiple pages when content exceeds single page dimensions. | true, false |
| pageWidth | number | null | Defines the width of each page in pixels when using multiple page printing. | 816, 1056 |
| pageHeight | number | null | Sets the height of each page in pixels for multiple page printing scenarios. | 1056, 816 |
| pageOrientation | `PageOrientation` | 'Landscape' | Controls the page orientation for the printed output using the [`PageOrientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#pageorientation) type. | 'Landscape', 'Portrait' |

N> Any print option that is omitted automatically uses the built-in default value shown in the **Default** column. Refer to the [`IPrintOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions) API reference for the full option details.

### Region

The [`region`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#region) property allows selective printing of specific diagram areas. This feature is particularly useful when working with large diagrams where only certain sections need to be printed.

The following code example illustrates how to print the diagram based on different regions:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/print/print-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/print/print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/print/print-cs1" %}

### Multiple Page

Large diagrams can be printed across multiple pages by setting the [`multiplePage`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#multiplepage) property to true. This feature automatically divides the diagram content across multiple print pages while maintaining proper scaling and alignment.

The following code example demonstrates how to enable multiple page printing:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/print/print-cs2/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/print/print-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/print/print-cs2" %}

### Margin

The margin for the print region can be set using the [`margin`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#margin) property of the `printOptions`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/print/print-cs3/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/print/print-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/print/print-cs3" %}

### Page Width and Page Height

The [`pageHeight`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#pageheight) and [`pageWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#pagewidth) properties control the dimensions of the printed output. These settings are particularly important when printing to specific paper sizes or when precise scaling is required.

N> The example values `816` and `1056` correspond to US Letter size (8.5" × 11") at 96 DPI. Use these values in landscape (`pageWidth: 1056`, `pageHeight: 816`) or portrait (`pageWidth: 816`, `pageHeight: 1056`) orientation accordingly.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/print/print-cs4/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/print/print-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/print/print-cs4" %}

### Page Orientation

The [`pageOrientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions#pageorientation) property determines how the diagram is oriented on the printed page:

* **Landscape** - Prints with page width greater than page height, ideal for wide diagrams
* **Portrait** - Prints with page height greater than page width, suitable for tall diagrams

The following example shows how to configure page orientation:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/print/print-cs5/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/print/print-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/print/print-cs5" %}

## Limitations

Currently, printing diagrams containing native and HTML nodes is not directly supported due to browser security restrictions. To address this limitation, Syncfusion provides integration with the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® PDF library. This library includes the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® HTML converter, which utilizes the advanced Blink rendering engine to convert HTML content into printable images. Refer to [`how to print or export the HTML and Native node`](https://support.syncfusion.com/kb/article/15530/how-to-print-or-export-the-html-and-native-node-into-image-format-using-react-diagram) KB for more information.

## See Also

* [How to Print multiple diagrams in a single shot](https://support.syncfusion.com/kb/article/15164/how-to-print-multiple-diagrams-in-a-single-shot-in-react)