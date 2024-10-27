---
layout: post
title: Straight Connectors in React Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Straight 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

## Straight in EJ2 React Diagram Control

To create a straight line, specify the [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#type) of the segment as **straight** and add a straight segment to [`segments`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#segments) collection and need to specify [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#type) for the connector. 

The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsSegments-cs1" %}

 The [`point`](https://ej2.syncfusion.com/react/documentation/api/diagram/straightSegment/#point) property of straight segment allows you to define the end point of it. 
 
 The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1" %}

 ### Straight segment editing

 End point of each straight segment is represented by a thumb that enables to edit the segment.
Any number of new segments can be inserted into a straight line by clicking when Shift and Ctrl keys are pressed (Ctrl+Shift+Click).
Straight segments can be removed by clicking the segment end point when Ctrl and Shift keys are pressed (Ctrl+Shift+Click). You can also add/remove segments by using the [`editSegment`](https://ej2.syncfusion.com/react/documentation/api/diagram/#editsegment) method of diagram.

The following example shows how to add segments at runtime for the straight connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5StraightSegEdit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5StraightSegEdit-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5StraightSegEdit-cs1" %}

![Straight Segment editing GIF](images/StraightSegEdit.gif)
