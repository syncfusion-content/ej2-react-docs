---
layout: post
title: Dimensions in React Heatmap chart component | Syncfusion
description: Learn here all about Dimensions in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in React Heatmap chart component

## Size for container

Heat map can be rendered to its container size. You can set the size through inline or CSS.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

## Size for heat map

You can  set the size of heat map directly by using the [width](https://ej2.syncfusion.com/react/documentation/api/heatmap/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/heatmap/#height) properties.

## In pixel

You can set the size for heat map in a pixel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/dimensions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/dimensions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/dimensions-cs1" %}

## In percentage

By setting value in percentage, heat map gets its dimension with respect to its container. For example, when the height is ‘50%’, heat map rendered to half of the container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/dimensions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/dimensions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/dimensions-cs2" %}
