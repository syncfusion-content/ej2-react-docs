---
layout: post
title: Tooltip in React Progress bar component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Progress bar component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Progress bar component

## Tooltip

The tooltip for the progress bar is used to represent the progress value. During the initial load, it can be enabled by using the [`enable`](https://ej2.syncfusion.com/react/documentation/api/progressbar/tooltipSettings/#enable) property. The [`showTooltipOnHover`](https://ej2.syncfusion.com/react/documentation/api/progressbar/tooltipSettings/#showtooltiponhover) property can show the tooltip on mouseover.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-bar/default-cs16" %}

## Format

By default, the tooltip shows information about progress. In addition to that, show more information in the tooltip using the [`format`](https://ej2.syncfusion.com/react/documentation/api/progressbar/tooltipSettings/#format) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-bar/default-cs17" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/progressbar/tooltipSettings/#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/progressbar/tooltipSettings/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/progressbar/tooltipSettings/#textstyle) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/default-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-bar/default-cs18" %}
