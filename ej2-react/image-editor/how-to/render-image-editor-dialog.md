---
layout: post
title: Render image editor dialog in React Image editor component | Syncfusion
description: Learn here all about Render image editor dialog in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
control: Render image editor dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Render image editor dialog in React Image editor component

Image Editor is rendered within a dialog and opens an image by passing its URL path to the [`open`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#open) method of the Image Editor control.

The following operations are supported in the Image Editor:

* Selection : Multiple selection options are available. The selection region can be a square or circle, customized to various aspect ratios, and customized by dragging and resizing.
* Crop : The image can be cropped based on the selection.
* Rotate : The image can be rotated both clockwise and anticlockwise by 90 degrees.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/image-editor/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/image-editor/default-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs7" %}
