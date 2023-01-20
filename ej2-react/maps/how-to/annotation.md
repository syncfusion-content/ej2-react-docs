---
layout: post
title: Annotation in React Maps component | Syncfusion
description: Learn here all about Annotation in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in React Maps component

Annotations are used to mark the specific area of interest in the Maps with texts, shapes, or images. Any number of annotations can be added to the Maps component.

Initialize the Maps component with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#content) property. To specify the content position with [`x`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#x) and [`y`](https://ej2.syncfusion.com/react/documentation/api/maps/annotationModel/#y) properties as mentioned in the following example. In annotation, import the image in the specified Map area by using require function as mentioned in the below example.

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