---
layout: post
title: Design in React Appbar component | Syncfusion
description: Learn here all about Design in Syncfusion React Appbar component of Syncfusion Essential JS 2 and more.
control: Design 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Design in React Appbar component

## Spacer

`Spacer` is used to provide spacing between the AppBar contents which gives additional space to the content layout.

The following example depicts the code to provide spacing between the home and pan buttons in the AppBar:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/spacer-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/spacer-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/spacer-cs1" %}

## Separator

`Separator` shows a vertical line to visually group or separate the AppBar contents.

The following example depicts the code to provide a vertical line between a group of buttons in the AppBar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/separator-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/separator-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/separator-cs1" %}

## Media Query

Media Query is used to adjusting the AppBar for different screen sizes. Resize the screen to observe the responsive layout of the AppBar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/media-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/media-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/media-cs1" %}

## Designing AppBar with Menu

AppBar is rendered with a Menu component in its AppBar header area. Menu component's styles are inherited from the AppBar component using the `e-inherit` CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/menu-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/menu-cs1" %}

## Designing AppBar with Buttons

The AppBar is rendered with a Button and DropDownButton component in its AppBar header area. Button and DropDownButton components’ styles are inherited from the AppBar component using the `e-inherit` CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/buttons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/buttons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/buttons-cs1" %}

## Designing AppBar with SideBar

The AppBar is rendered with the SideBar component below the AppBar. Click on the menu icon to expand/collapse the Sidebar. In the following sample, the `toggle` method has been used to show or hide the Sidebar on the AppBar button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/sidebar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/sidebar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/appbar/sidebar-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/sidebar-cs1" %}