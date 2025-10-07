---
layout: post
title: Types in React Avatar component | Syncfusion
description: Learn here all about Types in Syncfusion React Avatar component of Syncfusion Essential JS 2 and more.
control: Avatar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Avatar component

The React Avatar component provides different sizes and visual styles to suit various design requirements. This section covers the available avatar sizes and shape types that can be customized using CSS classes.

## Avatar size

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Avatar provides predefined sizes that can be applied using CSS classes with the base `.e-avatar` class to control the avatar's dimensions.

| Class Name         | Description
| :-------------     |:-------------
| e-avatar-xlarge    | Displays extra large size avatar.
| e-avatar-large     | Displays large size avatar.
| e-avatar           | Displays default size avatar.
| e-avatar-small     | Displays small size avatar.
| e-avatar-xsmall    | Displays extra small size avatar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/size-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/size-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/size-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/size-cs1" %}

## Avatar types

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Avatar supports two distinct shape styles to accommodate different design preferences:

* Default (rectangular  with rounded corners)
* Circle

### Default

The default Avatar style features a rectangular shape with rounded corners, providing a modern appearance suitable for most applications. This style is applied by adding the base class `.e-avatar` to the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/default-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/default-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/default-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/default-cs1" %}

### Circle

The circular Avatar style creates a perfectly round appearance, ideal for profile pictures and user representations. Apply this style by adding the modifier class `.e-avatar-circle` along with the base `.e-avatar` class to the target element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/avatar/circle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/avatar/circle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/avatar/circle-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/avatar/circle-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/avatar/circle-cs1" %}
