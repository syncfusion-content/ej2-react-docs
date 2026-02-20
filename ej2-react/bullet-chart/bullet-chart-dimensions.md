---
layout: post
title: Bullet chart dimensions in React Bullet chart component | Syncfusion
description: Learn here all about Bullet chart dimensions in Syncfusion React Bullet chart component of Syncfusion Essential JS 2 and more.
control: Bullet chart dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bullet chart dimensions in React Bullet chart component

## Size for Container

The size of the Bullet Chart is determined by the container size, and it can be changed inline or via CSS as following.

```
 <div id="charts" style="width:650px; height:350px"></div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/bullet-chart-dimensions/container-cs1" %}

## Size for Bullet Chart

The [`width`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#height) properties are used to adjust the size of the Bullet Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/bullet-chart-dimensions/container-cs2" %}

### Pixel

Can set the size of the Bullet Chart in pixels as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/bullet-chart-dimensions/container-cs3" %}

### Percentage

By setting a value in percentage, the Bullet Chart gets its dimension with respect to its container. For example, when the height is **50%**, the Bullet Chart renders to half of the container’s height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/bullet-chart-dimensions/container-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/bullet-chart-dimensions/container-cs4" %}

>If the size is not specified, the Bullet Chart will be rendered with a height of **126px** and a width of the window.