---
layout: post
title: Customization in React Chips component | Syncfusion
description: Learn here all about Customization in Syncfusion React Chips component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Chips component

This section explains how to customize styles, leading icons, avatar, and trailing icons in the Chip component.

## Styles

The Chip component has the following predefined styles that can be defined using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/chips/#cssclass) property.

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary chip. |
| e-success | Represents a positive chip. |
| e-info |  Represents an informative chip. |
| e-warning | Represents a chip with caution. |
| e-danger | Represents a negative chip. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs1" %}

## Leading Icon

You can add and customize the leading icon of a chip using the [leadingIconCss](https://ej2.syncfusion.com/react/documentation/api/chips/#leadingiconcss) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/avatar-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/avatar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs2" %}

## Avatar

You can add and customize the avatar of a chip using the [avatarIconCss](https://ej2.syncfusion.com/react/documentation/api/chips/#avatariconcss) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/avatar-cs3/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/avatar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs3" %}

## Avatar Content

You can add and customize the avatar content of a chip using the [avatarText](https://ej2.syncfusion.com/react/documentation/api/chips/#avatartext) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/avatar-cs4/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/avatar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs4" %}

## Trailing Icon

You can add and customize the trailing icon of a chip using the [trailingIconCss](https://ej2.syncfusion.com/react/documentation/api/chips/#trailingiconcss) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/avatar-cs5/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/avatar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs5" %}

## Outline Chip

An outline chip has a border with a transparent background. It can be set using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/chips/#cssclass) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/avatar-cs6/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/avatar-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs6" %}

## Template

The [`template`](https://helpej2.syncfusion.com/react/documentation/api/chips/#template) property of the Chips component allows users to fully customize the layout and design of each chip. By using the `template` property, users can include custom HTML elements, such as links, icons, or additional content.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs7/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/avatar-cs7/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/avatar-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs7" %}
