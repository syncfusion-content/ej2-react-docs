---
layout: post
title: Size and Color in React AppBar | Syncfusion
description: Choose Regular, Prominent, or Dense height modes and light, dark, or primary color variants for the Syncfusion React AppBar.
control: Size and color 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Size and Color in React AppBar

## Size

The size of the React AppBar can be set using the [mode](https://ej2.syncfusion.com/react/documentation/api/appbar#mode) property. The available types of the React AppBar are as follows:

* Regular AppBar
* Prominent AppBar
* Dense AppBar

### Regular AppBar

This mode is the default one in which the React AppBar is displayed with the default height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/regular-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/regular-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/regular-cs1" %}

### Prominent AppBar

This height mode can be set to the React AppBar by setting `Prominent` to the property [mode](https://ej2.syncfusion.com/react/documentation/api/appbar#mode). The prominent AppBar is displayed with a longer height and can be used for larger titles, images, or texts. It is also longer than the regular AppBar. In the following example, we have customized the prominent text using align-self and white-space CSS properties. You can change the prominent AppBar height if larger titles, images, or texts are used.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/prominent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/prominent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/prominent-cs1" %}

### Dense AppBar

This height mode can be set to the React AppBar by setting `Dense` to the property [mode](https://ej2.syncfusion.com/react/documentation/api/appbar#mode). Dense AppBar is displayed with shorter height which is denser to accommodate all the React AppBar content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/dense-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/dense-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/dense-cs1" %}

## Color

The background and font colors can be set using the [colorMode](https://ej2.syncfusion.com/react/documentation/api/appbar#colormode) property. The available types of background color for the AppBar are as follows:

* Light AppBar
* Dark AppBar
* Primary AppBar
* Inherit AppBar

### Light AppBar

This color mode is the default one in which the React AppBar can be displayed with a light background and its corresponding font color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/light-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/light-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/light-cs1" %}

### Dark AppBar

This color mode can be set to the React AppBar by setting `Dark` to the property [colorMode](https://ej2.syncfusion.com/react/documentation/api/appbar#colormode). A dark AppBar can be displayed with a dark background and its corresponding font color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/dark-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/dark-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/dark-cs1" %}

### Primary AppBar

This color mode can be set to the React AppBar by setting `Primary` to the property [colorMode](https://ej2.syncfusion.com/react/documentation/api/appbar#colormode). The primary AppBar can be displayed with primary colors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/primary-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/primary-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/primary-cs1" %}

### Inherit AppBar

This color mode can be set to the React AppBar by setting `Inherit` to the property [colorMode](https://ej2.syncfusion.com/react/documentation/api/appbar#colormode). The AppBar inherits the background and font color from its parent element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/inherit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/inherit-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/inherit-cs1" %}