---
layout: post
title: Print in React Diagram Component | Syncfusion®
description: Check out and learn about getting started with print in React Diagram Component of Syncfusion Essential® JS 2 and more details.
control: Print
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Diagram Component

The React Diagram component provides comprehensive printing capabilities that allow users to generate high-quality printed outputs of their diagrams. The [`print`](https://ej2.syncfusion.com/react/documentation/api/diagram/#print) method enables printing the diagram as an image with extensive customization options for different printing scenarios.

```JavaScript

 function App() {
    let diagramInstance;
    let options = {};
    diagramInstance.print(options);
    return (
        < DiagramComponent 
        id="container" 
        width={'1500'} 
        height={'1500'}
        ref={(diagram) => (diagramInstance = diagram)}
        > </DiagramComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


```

>Note: To Print diagram you need to inject `PrintAndExport` in the diagram.

To print the React Diagram elements in various formats, refer to the video link below.

{% youtube "https://www.youtube.com/watch?v=IkWXjhRE-o0" %}

## Print Options

The diagram printing behavior can be extensively customized using the [`printOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/)parameter. These options provide control over the printed output's layout, size, and content selection.

The available print options are detailed in the table below:

| Name | Type | Description| Example Values |
|-------- | -------- | -------- | -------- |
| region | enum | Specifies the region of the diagram to be printed. Options include 'Content', 'PageSettings'. | 'Content', 'PageSettings' |
| margin | object | Sets the margin spacing around the printed content in pixels. | { left: 10, top: 10, bottom: 10, right: 10 } |
| stretch| enum | Resizes the diagram content to fit the allocated print space. Options include 'Stretch', 'Meet', 'Slice'. | 'Stretch', 'Meet' |
| multiplePage | boolean | Enables printing the diagram across multiple pages when content exceeds single page dimensions. | true, false |
| pageWidth | number | Defines the width of each page in pixels when using multiple page printing. | 816, 1056 |
| pageHeight| number | Sets the height of each page in pixels for multiple page printing scenarios. | 1056, 816 |
| pageOrientation | enum | Controls the page orientation for the printed output. | 'Landscape', 'Portrait' |

### Region

The [`region`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#region) property allows selective printing of specific diagram areas. This feature is particularly useful when working with large diagrams where only certain sections need to be printed.

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

Large diagrams can be printed across multiple pages by setting the [`multiplePage`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#multiplepage) property to true. This feature automatically divides the diagram content across multiple print pages while maintaining proper scaling and alignment.

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

The margin for the print region can be set using the [`margin`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#margin) property of the `printOptions`

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

The [`pageHeight`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#pageheight) and [`pageWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#pagewidth) properties control the dimensions of the printed output. These settings are particularly important when printing to specific paper sizes or when precise scaling is required.

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

[`pageOrientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#pageorientation)property determines how the diagram is oriented on the printed page:

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

Currently, printing diagrams containing native and HTML nodes is not directly supported due to browser security restrictions. To address this limitation, Syncfusion provides integration with the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® PDF library. This library includes the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® HTML converter, which utilizes the advanced Blink rendering engine to convert HTML content into printable images.Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/15530/how-to-print-or-export-the-html-and-native-node-into-image-format-using-react-diagram) kb for more information.

## See Also

* [How to Print multiple diagrams in single click](https://support.syncfusion.com/kb/article/15164/how-to-print-multiple-diagrams-in-a-single-shot-in-react)