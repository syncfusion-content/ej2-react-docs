---
layout: post
title: Click data in React Chart component | Syncfusion
description: Learn here all about Click data in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Click data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Click data in React Chart component

By using the [`pointClick`](https://ej2.syncfusion.com/react/documentation/api/chart/#pointclick) event, you can get the chart data of clicked area.

To show the clicked area data from pie, follow the given steps:

**Step 1**:

By using the [`pointClick`](https://ej2.syncfusion.com/react/documentation/api/chart/#pointclick) event, you can get the `args.point.x` and `args.point.y` values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/how-to-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/how-to-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs1" %}