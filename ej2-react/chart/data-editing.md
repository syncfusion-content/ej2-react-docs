---
layout: post
title: Data editing in React Chart component | Syncfusion
description: Learn here all about Data editing in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Data editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Data editing in React Chart component

## Enable Data Editing

We can use the data editing through inject the `DataEditing` module in the chart. It provides drag and drop support to the rendered points. Now, we can change the location or value of the point based on its `y` value.  To enable the data editing, set the `enable` property to true in the drag settings of the series. Also, we can set color using `fill` property and set the data editing minimum and maximum range using `minY` and `maxY` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/data-editing-cs1" %}
