---
layout: post
title: Customization in React Timeline component | Syncfusion
description:  Checkout and learn about Customization with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Timeline component

The Timeline component offers extensive customization options for visual styling including dot appearance, connector lines, borders, spacing, and color schemes. This section demonstrates various approaches to customize Timeline items and create visually distinctive event displays.

## Connector styling
### Common styling

Define styles that apply to all Timeline item connectors for consistent visual presentation across the entire Timeline.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/connector-common/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/connector-common/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/connector-common/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/connector-common/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/connector-common" %}

### Individual styling

Apply unique styles to specific connectors to differentiate particular items within the Timeline sequence.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/connector-individual/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/connector-individual/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/connector-individual/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/connector-individual/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/connector-individual" %}

## Dot styling
### Dot color

You can modify the color of the dots to highlight the specific Timeline items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/dot-color/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/dot-color/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/dot-color/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-color/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-color" %}

### Dot size

Adjust dot dimensions using the `--dot-size` CSS custom property to create visual emphasis or maintain design consistency with different Timeline layouts.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/dot-size/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/dot-size/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/dot-size/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-size/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-size" %}

### Dot shadow

Create visually engaging Timeline dots by adding shadow effects using the `--dot-outer-space` and `--dot-border` CSS custom properties. These properties control the outer spacing and border appearance of Timeline dots.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/dot-shadow/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/dot-shadow/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/dot-shadow/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-shadow/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-shadow" %}

### Dot variant

Create different dot appearances by customizing border, outline, and background color properties of Timeline dots. This enables distinct visual styles for different types of events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/dot-variant/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/dot-variant/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/dot-variant/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-variant/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-variant" %}

### Dot outline

Apply the `e-outline` class to the Timeline [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/timeline/#cssclass) property to enable outline-style dots to have an outline state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/customization/dot-outline/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/customization/dot-outline/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/customization/dot-outline/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/customization/dot-outline/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/customization/dot-outline" %}