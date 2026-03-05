---
layout: post
title: Avatar customization in React Avatar component | Syncfusion
description: Learn here all about Avatar customization in Syncfusion React Avatar component of Syncfusion Essential JS 2 and more.
control: Avatar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Avatar customization in React Avatar component

The Syncfusion React Avatar component provides a wide range of customization options, including color, size, and support for various media formats. This section explains how to tailor the Avatar's appearance to meet specific design requirements and integrate different content types.

## Color customization

By default, the Avatar displays with a grey background color. To apply a custom color, add a custom CSS class or directly target the avatar class in your stylesheet.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/color-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/color-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/color-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/color-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/color-cs1" %}

## Customize Avatar sizes

The Avatar provides five predefined sizes., sometimes these are not sufficient. So, the Avatar is designed in such a way that the width and height will be relative to font-size. By changing `font-size` updates both dimensions automatically.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/custom-size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/custom-size-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/custom-size-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/custom-size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/custom-size-cs1" %}

## Using various media formats

Avatars can be used with a wide variety of media formats like SVG, font-icons, images, letters, words, etc. Some of them are given below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/media-formats-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/media-formats-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/media-formats-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/media-formats-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/media-formats-cs1" %}

## Dynamic Avatar rendering from data source

Render the Avatar component dynamically from a data-source. In this sample we have rendered the Avatar component using a data-source which contains the image source in different sizes dynamically. This is applicable also for data-source from the server or remote data or AJAX. We have also rendered the Avatar using `CSS` property `background-image` and using image tag.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/react-avatar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/react-avatar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/react-avatar-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/react-avatar-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/react-avatar-cs1" %}