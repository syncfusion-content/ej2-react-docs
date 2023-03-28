---
layout: post
title: Annotations in React Linear gauge component | Syncfusion
description: Learn here all about Annotations in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Annotations 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in React Linear gauge component

<!-- markdownlint-disable MD013 -->

Annotations are used to mark the specific area of interest in the Linear Gauge with text, HTML elements, or images. Any number of annotations can be added to the Linear Gauge component.

## Adding annotation

To render the custom HTML elements in the Linear Gauge component, use the [`content`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#content) property in the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation). The annotation can be rendered either by specifying the id of the element or specifying the code to create a new element that needs to be displayed in the gauge area.

<!-- markdownlint-disable MD036 -->

 ```
<head>
    <script id='fruits' type="text/x-template">
        <div id='apple'>
           <img src='src/lineargauge/images/apple.png'>
        </div>
    </script>
</head>
```

```ts

import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AnnotationsDirective, AnnotationDirective, Annotations, Inject } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent>
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content="#fruits" x={100} zIndex='1' y={100}>
            </AnnotationDirective>
        </AnnotationsDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```

## Customization

The following properties are used to customize the annotation.

* [`zIndex`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#zindex) - Bring the annotation to the front or back, when annotation overlaps with another element.
* [`axisValue`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#axisvalue) - To place the annotation in the specified axis value with respect to the provided axis index.
* [`axisIndex`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#axisindex) - To place the annotation in the specified axis with respect to the provided axis value.
* [`horizontalAlignment`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation#horizontalalignment) - To place the annotation horizontally.
* [`verticalAlignment`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation#verticalalignment) - To place the annotation vertically.
* [`x`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#x-number), [`y`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#y-number) - To place the annotation in the specified location.

### Changing the z-index

To change the stack order of an annotation element, the [`zIndex`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#zindex) property of the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/) can be used.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/annotations-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/annotations-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/annotations-cs1" %}

### Positioning an annotation

The annotation can be placed anywhere in the Linear Gauge by setting the pixel value to the [`x`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#y) properties in the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/annotations-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/annotations-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/annotations-cs2" %}

<!-- markdownlint-disable MD036 -->

### Alignment of annotation

The annotation can be aligned horizontally and vertically by using the [`horizontalAlignment`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#verticalalignment) properties respectively. The possible values can be **Center**, **Far**, **Near**, and **None**. The [`horizontalAlignment`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#verticalalignment) properties are not applicable when the [`x`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/#y) properties are set in the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/annotations-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/annotations-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/annotations-cs3" %}

## Multiple annotations

Multiple annotations can be added to the Linear Gauge component by adding the multiple [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/) in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#annotations) and customization for the annotation can be done with the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/annotation/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/annotations-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/annotations-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/annotations-cs4" %}
