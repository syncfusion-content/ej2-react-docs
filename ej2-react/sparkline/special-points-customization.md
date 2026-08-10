---
layout: post
title: Special Points Customization in React Sparkline | Syncfusion
description: Customize the start, end, positive, negative, low, and tie point colors in the Syncfusion React Sparkline for line, column, and area types.
control: Special points customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Special Points Customization in React Sparkline

You can customize the points by initializing the point colors. The customization options allows to differentiate the [`start`], [`end`], [`positive`], [`negative`], and [`low`] points. This customization is only applicable for line, column, and area type sparklines.

<!-- markdownlint-disable MD036 -->

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/specialpoint-customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/specialpoint-customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/specialpoint-customization-cs1" %}

**Tie point color**

Tie point color is used to configure the win-loss series type sparkline's y-value point color. The following code sample shows the tie point color of sparkline series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/specialpoint-customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/specialpoint-customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/specialpoint-customization-cs2" %}
