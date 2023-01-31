---
layout: post
title: Tool tip format in React Chart component | Syncfusion
description: Learn here all about Tool tip format in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Tool tip format 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip format in React Chart component

Using [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#tooltiprender) event, you can able to format the datetime value instead of rendered value.

To format the datetime value,please follow the steps below

**Step 1**:

By using [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#tooltiprender) event we can able to get the current point x value. Using this value to format the tooltip by using `formatDate` method.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/how-to-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/how-to-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/how-to-cs12" %}
