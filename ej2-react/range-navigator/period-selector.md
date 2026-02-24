---
layout: post
title: Period selector in React Range navigator component | Syncfusion
description: Learn here all about Period selector in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Period selector 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Period selector in React Range navigator component

The period selector allows to select a range with specified periods.

## Periods

An array of objects that allows the users to specify pre-defined time intervals. The [`interval`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#interval) property specifies the count value of the button, and the `text` property specifies the text to be displayed on the button. The [`intervaltype`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#intervaltype) property allows the users to customize the interval type, and it supports the following types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs24" %}

>To use the period selector feature, inject the `PeriodSelector` module using the `RangeNavigator.Inject(PeriodSelector)` method.

## Positioning period selector

The [`position`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/periodSelectorSettingsModel#position) property allows the users to position the period selector at the **Top** or **Bottom**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs25" %}

## Height

The [`height`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/periodSelectorSettingsModel#height) property allows the users to specify the height of the period selector. The default value of the height property is **43px**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs26" %}

## Visibility of range navigator

The [`disableRangeSelector`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#disablerangeselector) property allows the users to display only the period selector and not the Range Selector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs27" %}

## See Also

* [LightWeight](./lightweight)