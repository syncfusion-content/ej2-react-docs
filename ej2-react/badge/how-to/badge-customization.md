---
layout: post
title: Badge customization in React Badge component | Syncfusion
description: Learn here all about Badge customization in Syncfusion React Badge component of Syncfusion Essential JS 2 and more.
control: Badge
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Badge customization in React Badge component

The Badge component offers multiple customization options to match application design requirements. This guide covers color, size, and position customization techniques to help you create badges that integrate seamlessly with your UI.

## Color customization

The Badge component includes eight predefined color variants. Beyond these preset options, you can customize the badge color to match your specific branding or design needs by applying custom CSS classes.

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
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/color-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/color-cs1" %}

## Customize badge size

The Badge component automatically scales based on its content. To adjust the badge size, modify the `font-size` CSS property of the badge element. This allows the badge dimensions to respond proportionally to different text sizes.

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
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/size-cs1" %}

## Custom position

The Badge component provides built-in support for standard positioning (`top` and `bottom`). For more flexible positioning requirements, apply a custom CSS class to the badge element to override the default positioning styles and achieve your desired layout.

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
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/custom-position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/custom-position-cs1" %}
