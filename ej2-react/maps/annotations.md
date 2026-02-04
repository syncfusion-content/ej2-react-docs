---
layout: post
title: Annotations in React Maps component | Syncfusion
description: Learn here all about Annotations in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Annotations 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in React Maps component

<!-- markdownlint-disable MD013 -->

Annotations allow marking specific areas of interest on a map by adding custom content such as text, shapes, images, or HTML elements. Unlike markers and data labels, annotations provide flexibility to overlay any custom HTML content at precise locations. Multiple annotations can be added to the Maps component.

## Adding an annotation

The [`content`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#content) property of [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel), accepts text content, the ID of an HTML element, or an HTML string to render custom content on the Maps.

<!-- markdownlint-disable MD036 -->

 ```
<script id='annotation' type="text/x-template">
    <div id='template'>
        <img style="width:50px;height:50px" src='https://ej2.syncfusion.com/react/demos/src/maps/images/weather-clear.png'>
    </div>
</script>

```

```ts
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { AnnotationsDirective, AnnotationDirective, Annotations} from '@syncfusion/ej2-react-maps';

export function App() {
    return(
        <MapsComponent >
        <Inject services={[Annotations]}/>
            <AnnotationsDirective>
                <AnnotationDirective content="#annotation" x="0%" y="50%"/>
            </AnnotationsDirective>
            <LayersDirective>
                <LayerDirective shapeData={world_map}>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
```

## Annotation customization

### Changing the z-index

The [`zIndex`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#zindex) property in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel) controls the stack order of annotation elements. A higher z-index value places the annotation above other Maps elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs1" %}

<!-- markdownlint-disable MD036 -->

### Positioning an annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#y) properties in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs2" %}

<!-- markdownlint-disable MD036 -->

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#verticalalignment) properties in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel). The supported values are **Center**, **Far**, **Near**, and **None**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs3" %}

## Multiple annotations

Multiple annotations can be added to the Maps component by defining an array of annotation objects in the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel) property. Each annotation can be customized individually using the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel) settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs4" %}

## Creating custom annotation templates

Initialize the Maps component with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#content) property. To specify the content position with [`x`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel#y) properties as mentioned in the following example.
	
```		
const logo = require('./compass.png');		
<img src={logo} height="75px" width="75px"/>		
```		
[`app.tsx`]		
{% tabs %}		
{% highlight js tabtitle="index.jsx" %}		
{% include code-snippet/maps/default-map-cs40/app/index.jsx %}		
{% endhighlight %}		
{% highlight ts tabtitle="index.tsx" %}		
{% include code-snippet/maps/default-map-cs40/app/index.tsx %}		
{% endhighlight %}		
{% endtabs %}		
 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs40" %}