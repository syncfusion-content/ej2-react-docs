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

The Avatar comes with default background color (Grey). This can be easily customized to the desired color by adding custom class or directly selecting the Avatar class from the CSS.

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

Even though the Avatar comes with five predefined sizes, sometimes it's not enough. So, the Avatar is designed in such a way that the width and height will be relative to font-size. By changing the `font-size` of the Avatar element, you can change the width and height automatically.

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

## Dynamic Avatar rendering from datasource

We can render the Avatar component dynamically from a data-source. In this sample we have rendered the Avatar component using a data-source which contains the image source in different sizes dynamically. This is applicable also for data-source from the server or remote data or AJAX. We have also rendered the Avatar using `CSS` property `background-image` and using image tag.

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