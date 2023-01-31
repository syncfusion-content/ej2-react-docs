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

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

## Annotation

By using the [`content`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#content) property of [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel), text content or id of an element or an HTML string can be specified to render a new HTML element in Maps.

<!-- markdownlint-disable MD036 -->

 ```
<script id='annotation' type="text/x-template">
    <div id='template'>
        <img src='src/maps/images/flight.png'>
    </div>
</script>

```

```ts
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';
import { AnnotationsDirective, AnnotationDirective, Annotations} from '@syncfusion/ej2-react-maps';


ReactDOM.render(
            <MapsComponent id="maps">
            <Inject services={[Annotations]}/>
                <AnnotationsDirective>
                    <AnnotationDirective content="#annotation" x="0%" y="50%"/>
                </AnnotationsDirective>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);
```

## Annotation customization

### Changing the z-index

The stack order of an annotation element can be changed using the [`zIndex`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#zindex) property in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel).

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

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#y) properties in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel).

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

Annotations can be aligned using the [`horizontalAlignment`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#verticalalignment) properties in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel). The possible values can be **Center**, **Far**, **Near** and **None**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs3" %}

## Multiple Annotation

Multiple annotations can be added to the Maps by adding multiple [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel) in the [`AnnotationsDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/#annotations) and customization for the annotations can be done with the [`AnnotationDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs4" %}