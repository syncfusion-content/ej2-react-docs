---
layout: post
title: Tooltip in React Rating | Syncfusion
description: Show tooltips on React Rating items by enabling showTooltip so users see hints like Poor, OK, or Good when hovering.
control: Tooltip
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Tooltip in React Rating

Display tooltips in React items by setting the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/rating/#showtooltip) property to `true`. When enabled, tooltips appear when users hover over rating items.

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

Customize the React tooltip using the [`tooltipTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating/#tooltiptemplate) tag directive. The current rating value is passed as the `value` property in the template context, allowing you to display dynamic information about the rating.

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
