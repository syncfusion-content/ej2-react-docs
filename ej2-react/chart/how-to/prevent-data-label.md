---
layout: post
title: Prevent data label in React Chart component | Syncfusion
description: Learn here all about Prevent data label in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Prevent data label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent data label in React Chart component

To prevent the chart data label when the data value is 0, follow the given steps:

**Step 1**:

Get the point value and check whether the `args.point.y` value is zero or not by using the [`textRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#textrender) event. If the value is zero, then set the `args.cancel` to true.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs8" %}