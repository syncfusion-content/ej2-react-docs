---
layout: post
title: Shapes in React Skeleton component | Syncfusion
description: Learn here all about Shapes in Syncfusion React Skeleton component of Syncfusion Essential JS 2 and more.
control: Skeleton
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in React Skeleton component

The Skeleton component supports multiple shape variants that enable you to create skeletal previews matching your content layout. Use the [`shape`](https://ej2.syncfusion.com/react/documentation/api/skeleton/#shape) property to display placeholder loading states for different content types. Shape selection affects both visual appearance and perceived loading context, helping users understand what content is loading.

## Available skeleton shapes

The Skeleton component supports four shape types:

### Circle

Circular shapes are ideal for avatar placeholders, profile images, or circular icon areas. Use circle skeletons to represent round content containers or profile photos loading.

### Square

Square shapes work well for small icon placeholders, thumbnails, or uniform grid items. Square skeletons provide balanced proportions for compact content areas.

### Rectangle

Rectangular shapes accommodate standard content areas such as images, cards, or text blocks. Rectangles are the most versatile shape for various layout patterns and content sizes.

### Text

Text shapes create horizontal line placeholders representing text content or headlines. Text skeletons help users anticipate paragraph or heading loading, providing clear visual indication of text-based content flow.

## Shape usage examples

The following example demonstrates implementing various skeleton shapes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/shapes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/shapes-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/shapes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/shapes-cs1" %}