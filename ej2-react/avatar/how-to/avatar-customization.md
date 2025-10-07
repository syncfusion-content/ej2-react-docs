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

The React Avatar component offers extensive customization options including colors, sizes, and media formats. This section demonstrates how to modify the Avatar's appearance to match specific design requirements and integrate various content types.

## Color customization

The Avatar displays with a default (Grey) background color. Customize this to any desired color by adding a custom CSS class or directly targeting the avatar class in the stylesheet.

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

Although the Avatar comes with five predefined sizes, sometimes these are not sufficient. So, the Avatar is designed in such a way that the width and height will be relative to font-size. By changing the `font-size` of the avatar element, you can change the width and height automatically.

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

We can render Avatar component dynamically from a data-source. In this sample we have rendered the Avatar component using a data-source which contains the image source in different sizes dynamically. This is applicable also for data-source from the server or remote data or AJAX. We have also rendered the Avatar using `CSS` property `background-image` and using image tag.

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