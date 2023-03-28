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

The rating component allows users to rate something using a visual scale, and the selection state can be changed by the user clicking or tapping on the stars in the rating scale or through code. The rating component has a minimum value and a reset button, and provides customization options for the selected rating value and selection behavior.

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

You can use the [`min`](https://ej2.syncfusion.com/react/documentation/api/rating#min) property of the rating component to set the minimum possible rating value the user can select. If you set the `min` property to 2, then you will not be able to select a rating lower than 2.

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

You can use the [`enableSingleSelection`](https://ej2.syncfusion.com/react/documentation/api/rating#enablesingleselection) property of the rating component to select only one item at a time. When the `enableSingleSelection` property is set to `true`, only the selected item will be considered to be in the selected state, while all other items will be unselected.

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

You can reset the rating value to its default by using the [`allowReset`](https://ej2.syncfusion.com/react/documentation/api/rating#allowreset) property of the rating component. When the `allowReset` property is set to `true`, a reset button will be shown that allows the user to reset the rating value to its default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/selection/allow-reset-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/selection/allow-reset-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/selection/allow-reset-cs1" %}
