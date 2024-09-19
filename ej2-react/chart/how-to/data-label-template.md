---
layout: post
title: Data label template in React Chart component | Syncfusion
description: Learn here all about Data label template in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Data label template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data label template in React Chart component

You can bind text and interior information for a point from dataSource other than x and y value. To change color for the background in the datalabel template, you can use `${point.text}`.
To use point.text, you have to bind the property from dataSource to name in the datalabel options.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the datalabel template div as shown in the following html page,

```
    <script id="index" type="text/x-template">
    <div id='templateWrap' style="background-color: ${point.text}; border-radius: 3px;"><span>${point.y}</span></div>
    </script>
```

**Step 2**:

To show that datalabel template, set the element id to the `template` property in datalabel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/datalabel-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/datalabel-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/datalabel-cs1" %}