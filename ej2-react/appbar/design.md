---
layout: post
title: Design in React AppBar | Syncfusion
description: Use Spacer, Separator, and Media Query helpers to lay out the Syncfusion React AppBar and make it responsive to screen size.
control: Design 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Design in React AppBar

## Spacer

`Spacer` is used to provide spacing between the React AppBar contents which gives additional space to the content layout.

The following example depicts the code to provide spacing between the home and pan buttons in the React AppBar:

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

`Separator` shows a vertical line to visually group or separate the React AppBar contents.

The following example depicts the code to provide a vertical line between a group of buttons in the React AppBar.

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

Media Query is used to adjusting the React AppBar for different screen sizes. Resize the screen to observe the responsive layout of the React AppBar.

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

React AppBar is rendered with a Menu component in its React AppBar header area. Menu component's styles are inherited from the React AppBar component using the `e-inherit` CSS class.

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

The React AppBar is rendered with a Button and DropDownButton component in its React AppBar header area. Button and DropDownButton components’ styles are inherited from the React AppBar component using the `e-inherit` CSS class.

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

The React AppBar is rendered with the SideBar component below the React AppBar. Click on the menu icon to expand/collapse the Sidebar. In the following sample, the `toggle` method has been used to show or hide the Sidebar on the React AppBar button click.

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