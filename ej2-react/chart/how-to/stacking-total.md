---
layout: post
title: Stacking total in React Chart component | Syncfusion
description: Learn here all about Stacking total in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Stacking total 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Stacking total in React Chart component

By using the `annotation`, you can show any element in desired view.

To show the total value in data points, follow the given steps:

**Step 1**:

Define annotation for each x point in chart, now change the annotation value in chart by using the [`annotationRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#annotationrender) event.
In this event, assign the stacked value of the last series to the annotation to show the total value of the
stacking series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/how-to-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/how-to-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/how-to-cs10" %}