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

You can customize the Timeline items dot size, connectors, dot borders, dot outer space and more to personalize its appearance. This section explains the different ways for styling the items.

## Connector styling

### Common styling

You can define the styles applicable to the all the Timeline item connectors.

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

You can also apply unique styles to individual connectors, to differentiate specific items within the timeline.

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

You can adjust the size of the dot to make it larger or smaller by using the `--dot-size` variable.

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

You can add shadow effects to the Timeline dots to make it feel visually engaging by using the `--dot-outer-space` & `--dot-border` variables.

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

You can achieve the desired dot variant by customizing the border, outline and background colors of the Timeline dots.

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

By adding the `e-outline` class to the Timeline [`cssClass`](https://helpej2.syncfusion.com/react/documentation/api/timeline#cssclass) property, it enables the dots to have an outline state.

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