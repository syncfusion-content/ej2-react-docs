---
layout: post
title: Series types in React Range navigator component | Syncfusion
description: Learn here all about Series types in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Series types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Series types in React Range navigator component

To render the data, the Range Selector supports three types of series.

<!-- markdownlint-disable MD036 -->

## Line

<!-- markdownlint-disable MD036 -->

To render a line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Line**  and inject the `LineSeries` module using `RangeNavigator.Inject(LineSeries)` method. By default, the line series is rendered in the Range Selector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs30" %}

## Area

To render an area series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Area** and inject `AreaSeries` module using `RangeNavigator.Inject(AreaSeries)` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs31" %}

## StepLine

To render a Step line series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Step Line** and inject `StepLineSeries` module using `RangeNavigator.Inject(StepLineSeries)` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs32" %}