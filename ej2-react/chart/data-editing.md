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

Data editing allows users to modify chart data points interactively by dragging and dropping the rendered points. This functionality is enabled by injecting the `DataEditing` module into the chart `services`, which adds drag-and-drop support for data points.
Once enabled, the position or value of a data point can be changed dynamically based on its `y` value. To activate data editing, set the `enable` property to **true** in the drag settings of the corresponding series.
In addition, the following properties can be used to customize the data editing behavior and appearance:
- Use the `fill` property to set the color of the editable data points.
- Use the `minY` and `maxY` properties to define the minimum and maximum allowable range for editing the data points.
These options help control both the visual feedback and the valid value range while editing data directly on the chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/data-editing-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/data-editing-cs1" %}
