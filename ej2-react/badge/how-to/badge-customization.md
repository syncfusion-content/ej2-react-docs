---
layout: post
title: How to customize badge in React Badge | Syncfusion
description: Customize React Badge color, size, and position with CSS classes to match your application's design and layout needs.
control: Badge
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize React Badge in React Badge

The React Badge component supports color, size, and position customization through CSS classes.

## Color customization

The React Badge component includes eight predefined color variants. To apply a custom color, override the React Badge styles with a custom CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/color-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/color-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/color-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/color-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/color-cs1" %}

## Size customization

The React Badge component scales with its content. To adjust the size, modify the `font-size` property on the badge element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/size-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/size-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/size-cs1" %}

## Position customization

The React Badge component supports `top` and `bottom` positioning out of the box. For other positions, override the React Badge styles with a custom CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/custom-position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/custom-position-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/custom-position-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/custom-position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/custom-position-cs1" %}
