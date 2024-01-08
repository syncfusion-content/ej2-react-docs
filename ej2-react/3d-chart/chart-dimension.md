---
layout: post
title: Chart dimensions in React 3D Chart component | Syncfusion
description: Learn here all about chart dimensions in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in React 3D Chart control

## Size for container

Chart can be rendered to its container size and it can be set via inline or CSS as demonstrated below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs1" %}

<!-- markdownlint-disable MD036 -->

## Size for Chart

<!-- markdownlint-disable MD036 -->

The size of the chart can be set directly through [`width`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/#width) and [`height`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/#height) properties.

**In Pixel**

The size of the chart can be set in pixel as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs2" %}

**In Percentage**

By setting the value in percentage, chart gets its dimension with respect to its container. For example, when the height is ‘50%’, chart renders to half of the container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/chart-dimensions/chart-dimensions-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.