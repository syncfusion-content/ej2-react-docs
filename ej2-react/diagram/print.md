---
layout: post
title: Print in React Diagram control | Syncfusion®
description: Check out and learn about getting started with print in React Diagram Component of Syncfusion Essential® JS 2 and more details.
control: Print
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Diagram control

The [`print`](https://ej2.syncfusion.com/react/documentation/api/diagram/#print) method helps to print the diagram as image.

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

The diagram can be customized while printing using the following properties of [`printOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/).

The available print options are listed in the table below.

| Name | Type | Description|
|-------- | -------- | -------- |
| region | enum | Sets the region of the diagram to be printed. |
| margin | object | Sets the margin of the page to be printed. |
| stretch| enum | Resizes the diagram content to fill its allocated space and printed.|
| multiplePage | boolean | Prints the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while printing the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while printing the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

### Region

Printing particular region of diagram is possible by using the [`region`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#region) property of the [`printOptions`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/).

The following code example illustrates how to print the diagram based on region.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/print/print-cs1/app/index.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/print/print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/print/print-cs1" %}

### Multiple page

Printing a diagram across multiple pages is possible by setting the [`multiplePage`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#multiplepage) property of `printOptions` to true.

The following code example demonstrates how to set multiplePage to true:

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

### Page width and Page height

The [`pageHeight`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#pageheight) and [`pageWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#pagewidth) property of `printOptions` is used to set the size of the printing image. The following example demonstrates how to set the pageWidth and pageHeight.

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

[`pageOrientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/iPrintOptions/#pageorientation) of `printOptions` is used to set the orientation of the page to be printed.

* Landscape - Display with page Width is more than the page Height.
* Portrait - Display with page Height is more than the page width.

The following example shows how to set pageOrientation for the printOptions.

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


Currently, printing diagram with native and HTML nodes is not supported. To overcome this limitation, we make use of the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> PDF library. This library incorporates the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> HTML converter, which employs the advanced Blink rendering engine. This converter seamlessly transforms HTML content into images. Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/15530/how-to-print-or-export-the-html-and-native-node-into-image-format-using-react-diagram) kb for more information.

## See Also

* [How to Print multiple diagrams in single click](https://support.syncfusion.com/kb/article/15164/how-to-print-multiple-diagrams-in-a-single-shot-in-react)