---
layout: post
title: Tooltip with React Rating component | Syncfusion
description:  Learn here all about Tooltip in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Tooltip
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Tooltip in React Rating Component

Display tooltips in rating items by setting the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/rating/#showtooltip) property to `true`. When enabled, tooltips appear when users hover over rating items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/tooltip/showtooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/tooltip/showtooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/tooltip/showtooltip-cs1" %}

## Tooltip template

Customize the Rating tooltip using the [`tooltipTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating/#tooltiptemplate) tag directive. The current rating value is passed as the `value` property in the template context, allowing you to display dynamic information about the rating.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/tooltip/tooltip-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/tooltip/tooltip-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/tooltip/tooltip-template-cs1" %}

## Tooltip customization

Customize tooltip appearance using the `cssClass` property and defining custom styles for tooltip elements.

> For more information about customizing tooltip appearance, refer to the [Tooltip Customization](https://ej2.syncfusion.com/react/documentation/tooltip/style/) documentation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/tooltip/custom-tooltip-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/tooltip/custom-tooltip-cs1" %}
