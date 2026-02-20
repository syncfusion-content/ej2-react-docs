---
layout: post
title: Customization in React Signature component | Syncfusion
description: Learn here all about Customization in Syncfusion React Signature component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Signature component

The Signature component draws strokes using moveTo() and lineTo() methods to create smooth paths on the canvas. You can customize the stroke width, color, and background color or image.

## Stroke Width

The variable stroke width is based on [`maxStrokeWidth`](https://ej2.syncfusion.com/react/documentation/api/signature/#maxstrokewidth), [`minStrokeWidth`](https://ej2.syncfusion.com/documentation/react/api/signature/#minstrokewidth), and [`velocity`](https://ej2.syncfusion.com/react/documentation/api/signature/#velocity) for a smoother and more realistic signature. Default values: minimum width is 0.5, maximum width is 2.5, and velocity is 0.7.

The following example sets minimum stroke width to 0.5, maximum width to 3, and velocity to 0.7.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/customization-cs1" %}

## Stroke Color

Specify the stroke color using the [`strokeColor`](https://ej2.syncfusion.com/react/documentation/api/signature/#strokecolor) property, which accepts hexadecimal code, RGB, or text values. The default value is "#000000".

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/customization-cs2" %}

## Background Color

Specify the background color using the [`backgroundColor`](https://ej2.syncfusion.com/react/documentation/api/signature/#backgroundcolor) property, which accepts hexadecimal code, RGB, or text values. The default value is "#ffffff".

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/customization-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/customization-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/customization-cs3" %}

## Background Image

Specify the background image using the [`backgroundImage`](https://ej2.syncfusion.com/documentation/api/signature/#backgroundimage) property. The image can be hosted locally or accessed from an online URL.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/customization-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/customization-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/customization-cs4" %}

## See Also

* [Save With Background](./open-save#save-with-background)