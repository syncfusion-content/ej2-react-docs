---
layout: post
title: Annotation in React Image editor component | Syncfusion
description: Learn here all about Annotation in Syncfusion React Image editor component of Syncfusion Essential JS 2 and more.
control: Annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in React Image editor component

The Image Editor has multiple annotations support including text, freehand drawings, and shapes such as rectangles, ellipses, and lines.

## Text

The Text annotation can be inserted and customized by changing its color, font family, font size, and font styles such as bold and italic. The text annotation can be made by either using a toolbar or [`drawText`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawtext) method.

In [`drawText`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawtext) method, the text annotation can be inserted by specifying the text, font family, font size, and font styles. The [`drawText`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawtext) method has the following parameters.

* x - Specifies x-coordinate of the text

* y - Specifies y-coordinate of the text

* text - Specifies the text to add to an image

* fontFamily - Specifies the font family of the text.

* fontSize - Specifies the font size of the text.

* bold - Specifies whether the text is bold or not.

* italic - Specifies whether the text is italic or not.

* color - Specifies font color of the text.

In the toolbar, the text annotation can be inserted by clicking the Annotation dropdown button and picking the Add Text option from that popup. Once the text is inserted, the contextual toolbar will be enabled for customizing its color, font family, font size, and font styles such as bold and italic.

In the following example, you can using the drawText method in the button click event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs1" %}

## Freehand Draw

This annotation can be customized by changing the pen color and stroke width and it can be made by either using a toolbar or the [`freeHandDraw`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#freehanddraw) method.

The [`freeHandDraw`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#freehanddraw) method is used to enable or disable a freehand drawing option in an Image Editor.

In the toolbar, the freehand draw annotation can be inserted by clicking the Annotation dropdown button and picking the Pen option from that popup. Once the freehand draw is enabled, the contextual toolbar will be enabled.

In the following example, the [`freeHandDraw`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#freehanddraw) method is used to toggle the freehand drawings.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs2" %}

## Shapes

The shape annotations include rectangles, ellipses, and lines. The border color, fill color, and border width of the shapes can be customized.

### Rectangle

The Rectangle shape can be inserted and customized by changing its border color, fill color, and border width. The Rectangle shape can be made by either using a toolbar or the [`drawRectangle`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawrectangle) method.

In the [`drawRectangle`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawrectangle) method, the rectangle shape can be inserted by specifying fillcolor, stroke color and stroke width. The [`drawRectangle`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawrectangle) method has the following parameters.

     *  x - Specifies the x-coordinate of the rectangle.

     *  y - Specifies the y-coordinate of the rectangle.

     *  width - Specifies the width of the rectangle.

     *  height - Specifies the height of the rectangle.

     *  strokeWidth - Specifies the stroke width of the rectangle.

     *  strokeColor - Specifies the stroke color of the rectangle.

     *  fillColor - the fill color of the rectangle.

In the toolbar, the Rectangle shape can be inserted by clicking the Annotation dropdown button and picking the Rectangle option from that popup. Once the shape is inserted, the contextual toolbar will be enabled for customizing its fill color, stroke color, and stroke width.

In the following example, the [`drawRectangle`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawrectangle) method is used to draw the rectangle.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs3" %}

### Ellipse

The Ellipse shape can be inserted and customized by changing its border color, fill color, and border width. The Ellipse shape can be made by either using a toolbar or the [`drawEllipse`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawellipse) method.

In the [`drawEllipse`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawellipse) method, the ellipse shape can be inserted by specifying fillcolor, stroke color and stroke width. The [`drawEllipse`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawellipse) method has the following parameters.

     * x - Specifies the x-coordinate of the ellipse.

     * y - Specifies the y-coordinate of the ellipse.

     * radiusX - the radius x point for the ellipse.

     * radiusY - the radius y point for the ellipse.

     * strokeWidth - the stroke width of the ellipse.

     * strokeColor - the stroke color of the ellipse.

     * fillColor - the fill color of the ellipse.

In the toolbar, the Ellipse shape can be inserted by clicking the Annotation dropdown button and picking the Ellipse option from that popup. Once the shape is inserted, the contextual toolbar will be enabled for customizing its fill color, stroke color, and stroke width.

In the following example, the [`drawEllipse`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawellipse) method is used to draw the ellipse.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs4" %}

### Line

The line shape can be inserted and customized by changing its border color, and border width. The Line shape can be made by either using a toolbar or the [`drawLine`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawline) method.

In the [`drawLine`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawline) method, the line shape can be inserted by specifying, stroke color and stroke width. The [`drawLine`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawline) method has the following parameters:

     *  startX – Specifies start point x-coordinate of line.

     *  startY – Specifies start point y-coordinate of line.

     *  endX - Specifies endpoint x-coordinates of line.

     *  endY - Specifies end point y-coordinates of the line.

     *  strokeWidth - Specifies the stroke width of the line.

     *  strokeColor - Specifies the stroke color of the line.

In the toolbar, the Line shape can be inserted by clicking the Annotation dropdown button and picking the Line option from that popup. Once the line shape is inserted, the contextual toolbar will be enabled for customizing its stroke color, and stroke width.

In the following example, the [`drawLine`](https://ej2.syncfusion.com/react/documentation/api/image-editor/#drawline) method is used to draw the line.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs5" %}
