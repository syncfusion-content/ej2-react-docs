---
layout: post
title: Percentage tool tip in React Chart component | Syncfusion
description: Learn here all about Percentage tool tip in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Percentage tool tip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Percentage tool tip in React Chart component

By using the [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#tooltiprender) event, you can show the percentage value for each point of pie series in tooltip.

To show the percentage value in pie tooltip, follow the given steps:

**Step 1**:

By using the [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#tooltiprender) event, you can get the `args.point.y` and `args.series.sumOfPoints` values. You can use these values to calculate the percentage value for each point of pie series. To display the percentage value in tooltip, use the `args.content` property.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/how-to-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/how-to-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/how-to-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/how-to-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/how-to-cs7" %}