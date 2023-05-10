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

The rating component supports tooltip to show additional information in rating items by setting the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/rating#showtooltip) property. If enabled, the tooltip appears when the user hovers over a rating item.

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

You can use the [`tooltipTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating#tooltiptemplate) tag directive to specify a custom template for the `tooltip` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the tooltip. This allows you to include dynamic information about the rating in the template.

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

You can customize the appearance of the tooltips using the `cssClass` property of the rating component and by defining the custom styles for tooltip elements like the below example.

> You can find more information about customizing the appearance of the tooltip in the [Tooltip Customization](https://ej2.syncfusion.com/react/documentation/tooltip/style/) documentation.

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
