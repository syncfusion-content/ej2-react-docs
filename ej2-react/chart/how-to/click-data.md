---
layout: post
title: How to handle point click in React Chart | Syncfusion
description: Learn how to handle point-click events on Syncfusion React Chart and read the clicked data point values in your app.
control: Click data
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to handle point click in React Chart

By using the [`pointClick`](https://ej2.syncfusion.com/react/documentation/api/chart#pointclick) event, you can get the chart data of clicked area.

To show the clicked area data from pie, follow the given steps:

**Step 1**:

By using the [`pointClick`](https://ej2.syncfusion.com/react/documentation/api/chart#pointclick) event, you can get the `args.point.x` and `args.point.y` values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs1" %}