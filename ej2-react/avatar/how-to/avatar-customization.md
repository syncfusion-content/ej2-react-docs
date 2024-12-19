---
layout: post
title: Avatar customization in React Avatar component | Syncfusion
description: Learn here all about Avatar customization in Syncfusion React Avatar component of Syncfusion Essential JS 2 and more.
control: Avatar customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Avatar customization in React Avatar component

## Color customization

The avatar comes with default background color (Grey). This can be easily customized to the desired color by adding custom class or directly selecting the avatar class from the CSS.

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

## Customize avatar sizes

Even though the avatar comes with five predefined sizes, sometimes it's not enough. So, the avatar is designed in such a way that the width and height will be relative to font-size. By changing the `font-size` of the avatar element, you can change the width and height automatically.

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

## Use various media in avatar

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

## Dynamic avatar rendering from datasource

We can render the avatar component dynamically from a data-source. In this sample we have rendered the avatar component
using a data-source which contains the image source in different sizes dynamically. This is applicable also for data-source from the server or remote data or AJAX. We have also rendered the avatar using `CSS` property `background-image` and using image tag.

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