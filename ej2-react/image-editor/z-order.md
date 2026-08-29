---
layout: post
title: Z-Order in React Image Editor | Syncfusion
description: Adjust annotation layering in the React Image Editor with bring forward, send backward, bring to front, and send to back operations.
platform: ej2-react
control: Z-Order
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Z-Order in React Image Editor

We are excited to introduce `z-order` support in the Image Editor. It's a powerful tool that allows users to adjust the positioning of annotations. This feature is particularly useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is crucial for a polished final product.
 
Types of z-order adjustments:

- [bringForward](https://ej2.syncfusion.com/react/documentation/api/image-editor/index-default#bringforward) - Switches the selected annotation with the annotation one layer ahead of it.

- [sendBackward](https://ej2.syncfusion.com/react/documentation/api/image-editor/index-default#sendbackward) - Switches the selected annotation with the annotation one layer behind it.

- [bringToFront](https://ej2.syncfusion.com/react/documentation/api/image-editor/index-default#bringtofront) - Move the selected annotation in front of all others.

- [sendToBack](https://ej2.syncfusion.com/react/documentation/api/image-editor/index-default#sendtoback) - Move the selected annotation behind all others.

The example below demonstrates z-order operations.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs40/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs40/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs40" %}