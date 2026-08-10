---
layout: post
title: Data Labels in React Bullet Chart | Syncfusion
description: Learn how to show point values on the Syncfusion React Bullet Chart Component using data labels with customization.
control: Data label
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Labels in React Bullet Chart

Data Labels are used to identify the value of actual bar in the Bullet Chart component. The Data Labels will be shown by specifying the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#datalabel) setting's [`enable`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletDataLabelModel#enable) property to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/working-with-data/local-data-cs2" %}

## Data Label Customization

Data Labels color, opacity, font size, font family, font weight, and font style can be customized using the [`labelStyle`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletDataLabelModel#labelstyle).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/working-with-data/local-data-cs3" %}