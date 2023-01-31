---
layout: post
title: Marker customization in React Chart component | Syncfusion
description: Learn here all about Marker customization in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Marker customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Marker customization in React Chart component

By using the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#pointrender), you can customize the marker shape.

To Customize the marker shape, follow the given steps:

**Step 1**:

Customize the marker shape in each data point by using the [`pointRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#pointrender) event.
Using this event, you can set the `shape` value to the argument.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/how-to-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/how-to-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/how-to-cs6" %}