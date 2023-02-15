---
layout: post
title: Smithchart dimensions in React Smithchart component | Syncfusion
description: Learn here all about Smithchart dimensions in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart dimensions in React Smithchart component

You can render the Smith chart corresponding to its container size. To set the size for the Smith chart, use the width and height properties.

## Size for container

To render the Smith chart to its container size, specify the width and height of the Smith chart's container using inline or CSS as demonstrated in the following code sample.

```ts
    <div id='container'>
        <div id='smithchart' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs11" %}

## Size for Smith chart

<!-- markdownlint-disable MD036 -->

You can also set the size for Smith chart in pixels or percentage directly using the [`width`] and [`height`] properties.

### In pixel

In the width and height properties of Smith chart, directly set the values in pixels as demonstrated in the following code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs12" %}

### In percentage

You can also specify the width and height properties of the Smith chart in percentage. If you mention the width and height in percentage, then Smith chart will be rendered to its container size. The following code sample demonstrates how to set the width and height properties of the Smith chart in percentage.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs13" %}