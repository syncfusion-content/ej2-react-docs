---
layout: post
title: Tooltip in React Ribbon component | Syncfusion
description:  Checkout and learn about Tooltip in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip

The Ribbon supports tooltips, which give users more information when they hover over items and improving the user experience.

## Adding Title

The [title](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonTooltipModel/#title) property is used to set the tooltip title for each Ribbon item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/TooltipTitle/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/TooltipTitle/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/TooltipTitle/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/TooltipTitle" %}

## Adding Content

The [content](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonTooltipModel/#content) property can be used to set the tooltip content for each Ribbon item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/TooltipContent/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/TooltipContent/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/TooltipContent/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/TooltipContent" %}

## Adding Icon

In addition to the text and content, by using [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonTooltipModel/#iconcss) property you can define the custom style for the icons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/TooltipIcon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/TooltipIcon/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/TooltipIcon/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/TooltipIcon" %}

## Tooltip Customization

The [cssClass](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonTooltipModel/#cssclass) property can be used to customize the appearance of the tooltip with your own custom styles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/CustomTooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/CustomTooltip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/CustomTooltip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/CustomTooltip" %}