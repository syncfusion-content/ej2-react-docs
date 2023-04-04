---
layout: post
title: High Low Open Close Chart in React Chart component | Syncfusion
description: Learn here all about High Low Open Close Chart in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: High Low Open Close
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# High Low Open Close in React Chart component

## High Low Open Close

To render a HiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#type) as `HiloOpenClose` and inject `HiloOpenCloseSeries` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs1" %}

## Series customization
In HiloOpenClose series, [`bullFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series#bullfillcolor) is used to fill the segment when the open value is greater than the close value and [`bearFillColor`](https://ej2.syncfusion.com/react/documentation/api/chart/series/#bearfillcolor) is used to fill the segment when the open value is less than the close value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/hiloOpenClose-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/series/hiloOpenClose-cs2" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)