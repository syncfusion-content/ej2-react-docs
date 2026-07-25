---
layout: post
title: Title subtitle in React Smithchart component | Syncfusion
description: Learn here all about Title subtitle in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Title subtitle 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Title subtitle in React Smithchart component

## Enable title

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartmodel#title) property to provide quick information to the user about the data plotted in the Smith Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs3" %}

## Trim title

Both the title and subtitle of the Smith chart can be trimmed if they exceed the certain length. Trimming is enabled using the [`enableTrim`] property for title and subtitle. The length for title and subtitle can be changed using the [`maximumWidth`] property. You can also customize the font, alignment, and visibility of title and subtitle using the [`font`], [`textAlignment`], and [`visibility`] properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs29" %}