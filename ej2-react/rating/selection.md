---
layout: post
title: Selection with React Rating component | Syncfusion
description:  Learn here all about Selection in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Selection
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React Rating Component

The Rating component enables users to select a rating value through visual interaction or code. It supports a minimum value setting, reset functionality, and customization options for selection behavior.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/selection/selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/selection/selection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/selection/selection-cs1" %}

## Min value

Set the minimum possible rating value using the [`min`](https://ej2.syncfusion.com/react/documentation/api/rating/#min) property. For example, if `min` is set to 2, users cannot select a rating lower than 2.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/selection/min-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/selection/min-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/selection/min-cs1" %}

## Single selection

Enable single selection mode using the [`enableSingleSelection`](https://ej2.syncfusion.com/react/documentation/api/rating/#enablesingleselection) property. When set to `true`, only one item can be selected at a time; all other items are unselected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/selection/single-selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/selection/single-selection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/selection/single-selection-cs1" %}

## Show or hide reset button

Display a reset button by setting the [`allowReset`](https://ej2.syncfusion.com/react/documentation/api/rating/#allowreset) property to `true`. This allows users to reset the rating value to its default state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/selection/allow-reset-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/selection/allow-reset-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/selection/allow-reset-cs1" %}
