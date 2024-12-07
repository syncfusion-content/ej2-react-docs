---
layout: post
title: Label Events in React Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Label Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Annotation events.

There are some events which will trigger while interacting with annotation.
* KeyDown.
* KeyUp.
* DoubleClick.
* TextEdit.

## KeyDown event


The [`keyDown`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iKeyEventArgs/) event is triggered whenever any key is pressed. The following example shows how to capture the keyDown event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs1" %}

## KeyUp event

The [`keyUp`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iKeyEventArgs/) event is triggered whenever we press and release any key. The following example shows how to capture the keyUp event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs2" %}

## Double click event

The [`doubleClick`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDoubleClickEventArgs/) event is triggered when you double-click on a node, connector, or the diagram surface. Double-clicking on a diagram element activates the annotation editing mode. The following code example shows how to capture the [`doubleClick`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDoubleClickEventArgs/) event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs3" %}

## TextEdit event

The [`textEdit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iTextEditEventArgs/) event triggers when you finish editing the annotation text and the focus is removed from the annotation text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs4" %}

You can prevent adding new text to the annotation by setting the `cancel` property of [`textEdit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iTextEditEventArgs/) to true.

``` javascript
textEdit: function (args) {
    // Prevents any new content from being added to the annotation
    args.cancel = true;
  },

```