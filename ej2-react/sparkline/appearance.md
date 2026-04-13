---
layout: post
title: Appearance in React Sparkline component | Syncfusion
description: Learn here all about Appearance in Syncfusion React Sparkline component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Sparkline component

The appearance of the sparkline can be customized using margin, container Area border, and container Area background.

## Sparkline border

The `containerArea border` of the sparkline is used to render border to cover sparkline area.

The following code example shows the sparkline with overall border.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/appearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/appearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs1" %}

## Sparkline padding

Padding is used to specify padding value between container and sparkline. By default, padding value of the sparkline is 5. Sparkline `padding` values are specified by the left, right, top, and bottom.

The following code example shows the sparkline with overall padding is set to 20.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/appearance-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/appearance-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs2" %}

## Sparkline area customization

The background color of the sparkline area can be customized using the `containerArea background` color. By default, the sparkline background color is `transparent`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/appearance-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/appearance-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs3" %}

## Sparkline theme

Datalabel and track line colors of the sparkline will be changed based on theme. For example, for dark theme, the color of datalabel and track line should be white; for light theme, their value should be black. The possible values for sparkline theme are `Material`, `Fabric`, `Bootstrap`, and `Highcontrast`.

The following code example shows the color for datalabel and track line is set to white for dark theme.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/appearance-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/appearance-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/appearance-cs4" %}