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

This section explains the customization of styles, leading icons, avatar, and trailing icons in Chip control.

## Styles

The Chip control has the following predefined styles that can be defined using the `cssClass` property.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs1" %}

## Leading Icon

You can add and customize the leading icon of chip using the `leadingIconCss` property.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs2" %}

## Avatar

You can add and customize the avatar of chip using the `avatarIconCss` property.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs3" %}

## Avatar Content

You can add and customize the avatar content of chip using the `avatarText` property.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs4" %}

## Trailing Icon

You can add and customize the trailing icon of chip using the `trailingIconCss` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs5/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs5" %}

## Outline Chip

Outline chip has the border with the background transparent. It can be set using the `cssClass` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/avatar-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/avatar-cs6/app/app.tsx %}
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/avatar-cs7" %}
