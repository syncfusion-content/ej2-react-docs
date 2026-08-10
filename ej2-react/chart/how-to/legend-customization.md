---
layout: post
title: How to customize legend in React Chart | Syncfusion
description: Learn how to customize legend per series in Syncfusion React Chart for a more meaningful legend display.
control: Legend customization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize legend in React Chart

By using the [`legendRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#legendrender), you can customize the legend shape.

To Customize the legend shape, follow the given steps:

**Step 1**:

Set the shape value for each legend using `args.shape` in
[`legendRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#legendrender) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs4" %}
