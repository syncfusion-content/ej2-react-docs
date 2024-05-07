---
layout: post
title: Gauge dimensions in React Circular gauge component | Syncfusion
description: Learn here all about Gauge dimensions in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Gauge dimensions in React Circular gauge component

## Size for Container

Circular gauge can render to its container size. You can set the size via inline or CSS as demonstrated below.

```
    <div id='container'>
        <div id='circular-container' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-dimensions-cs1" %}
<!-- markdownlint-disable MD036 -->

## Size for Circular Gauge

<!-- markdownlint-disable MD036 -->

You can also set size for the gauge directly through [`width`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/#width-string) and [`height`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/#height-string) properties.

**In Pixel**

You can set the size of the gauge in pixel as demonstrated below.

<<
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-dimensions-cs2" %}

**In Percentage**

By setting value in percentage, gauge gets its dimension with respect to its container. For example, when the height is ‘50%’, gauge renders to half of the container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/circulargauge/gauge-dimensions-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.