---
layout: post
title: Z-Order in ##Platform_Name## Image Editor component | Syncfusion
description: Learn here all about Z-Order in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Finetune 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Z-Order in Image Editor component

We are excited to introduce `z-order` support in the Image Editor. It's a powerful tool that allows users to adjust the positioning of annotations. This feature is particularly useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is crucial for a polished final product.
 
Types of adjustment in the Image Editor `z-order` support.

* [Bring forward](https://ej2.syncfusion.com/react/documentation/api/image-editor/#bringforward) - Switch the selected annotation with the annotation one layer ahead of it.

* [Sent Backward](https://ej2.syncfusion.com/react/documentation/api/image-editor/#sendbackward) - Switch the selected annotation with the annotation one layer behind it.

* [Bring to Front](https://ej2.syncfusion.com/react/documentation/api/image-editor/#bringtofront) - Move the selected annotation to ahead of all other annotations.

* [Send to Back](https://ej2.syncfusion.com/react/documentation/api/image-editor/#sendtoback) - Move the selected annotation to behind all other annotations.

In the following example, you can use the `z-order` support.

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