---
layout: post
title: Error Bar Chart in React Chart component | Syncfusion
description: Learn here all about Error Bar in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Error Bar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Error Bar in React Chart component

## Error Bar

Error bars are graphical representations of the variability of data and used on graphs to indicate the error or uncertainty in a reported measurement. To render the error bar for the series, set [`visible`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#visible) as `true` and inject `ErrorBar` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs1" %}

## Error Bar Type

To change the error bar rendering type using [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#type) option of error bar. To change the error bar line length you can use [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#verticalerror) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs2" %}

## Customizing error bar type

To customize the error bar type, set error bar [`type`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#type) as `Custom` and then change the horizontal/vertical positive and negative error of error bar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs3" %}

## Error bar mode

Error bar mode is used to define whether the error bar line has to be drawn horizontally, vertically or in both side. To change the error bar mode use [`mode`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#mode) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs4" %}

## Error bar direction

To change the error bar direction to plus, minus or both side using [`direction`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#direction) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs5" %}

## Customizing error bar cap

To customize the error bar cap length, width and fill color, you can use [`errorBarCap`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettings/#errorbarcap) option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs6" %}

## Customizing error bar color

To customize the error bar color for individual errors, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error and vertical negative and positive error for an individual point using [`verticalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#verticalerror), [`horizontalError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#horizontalerror), [`horizontalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#horizontalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#horizontalpositiveerror), [`verticalNegativeError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#verticalnegativeerror) and [`verticalPositiveError`](https://ej2.syncfusion.com/react/documentation/api/chart/errorBarSettingsModel/#verticalpositiveerror) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/errorbar-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs7" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
