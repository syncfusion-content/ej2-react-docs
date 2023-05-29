---
layout: post
title: Dimensions in React Linear gauge component | Syncfusion
description: Learn here all about Dimensions in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in React Linear gauge component

<!-- markdownlint-disable MD013 -->

## Size for Linear Gauge

The height and width of the Linear Gauge can be set using the [`width`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#height) properties in [`LinearGaugeComponent`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/).

<!-- markdownlint-disable MD036 -->

### In Pixel

The size of the Linear Gauge can be set in pixel as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/dimensions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/dimensions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/dimensions-cs1" %}

### In Percentage

By setting value in percentage, Linear Gauge receives its dimension matching to its parent. For example, when the height is set as **50%**, Linear Gauge renders to half of the parent height. The Linear Gauge will be responsive when the width is set as **100%**.

```
    <div id='container'>
        <div id='element' style="width:1000px; height:600px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/dimensions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/dimensions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/dimensions-cs2" %}

>Note: When the component's size is not specified, the height will be **450px** and the width will be the same as the parent element's width.
