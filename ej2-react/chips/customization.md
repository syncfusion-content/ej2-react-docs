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

This section explains how to customize chip styles, icons, avatars, and other visual elements to match your design requirements.

## Predefined styles

Apply predefined styles to chips using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/chips/#cssclass) property. These styles convey different semantic meanings and help users understand the chip's purpose at a glance.

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary action or important chip. |
| e-success | Represents a positive or successful status. |
| e-info | Represents informational or neutral content. |
| e-warning | Represents a cautionary or warning status. |
| e-danger | Represents a negative, error, or destructive action. |

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

## Leading icon

Add a leading icon to the left of chip text using the [leadingIconCss](https://ej2.syncfusion.com/react/documentation/api/chips/#leadingiconcss) property. Leading icons provide visual context and help identify chip types or categories at a glance.

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

Display an avatar image on the chip using the [avatarIconCss](https://ej2.syncfusion.com/react/documentation/api/chips/#avatariconcss) property. Avatars can represent users, profiles, or entities associated with the chip.

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

## Avatar text

Display text inside the avatar area using the [avatarText](https://ej2.syncfusion.com/react/documentation/api/chips/#avatartext) property. This is useful for initials, numbers, or short labels when displaying avatar images is not feasible.

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

## Trailing icon

Add an icon to the right of chip text using the [trailingIconCss](https://ej2.syncfusion.com/react/documentation/api/chips/#trailingiconcss) property. Trailing icons typically represent actions like close/delete or indicate interactive states.

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

## Outline chip

Create a chip with a visible border and transparent background using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/chips/#cssclass) property. Outline chips provide a lighter visual weight and are useful for secondary or alternative options.

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

The [`template`](https://ej2.syncfusion.com/react/documentation/api/chips/#template) property enables complete customization of chip layout and design. Use templates to include custom HTML elements, nested components, icons, or additional content within each chip for advanced use cases.


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
