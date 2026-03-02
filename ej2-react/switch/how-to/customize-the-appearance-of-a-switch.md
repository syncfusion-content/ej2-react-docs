---
layout: post
title: Customize the appearance of a switch in React Switch component | Syncfusion
description: Learn here all about Customize the appearance of a switch in Syncfusion React Switch component of Syncfusion Essential JS 2 and more.
control: Customize the appearance of a switch 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the appearance of a switch in React Switch component

Apply custom CSS styling to Switch components by defining CSS rules and assigning them via the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/switch/#cssClass) property. This approach enables complete visual control over Switch appearance without modifying component functionality.

## Customize Switch bar and handle

Reshape and restyle the Switch track (bar) and thumb (handle) elements by applying custom CSS through the `cssClass` property. In the following example, the `border-radius` CSS property transforms the Switch bar (`e-switch-inner`) and handle (`e-switch-handle`) from circular to square appearance, demonstrating corner radius customization.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/customize-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/customize-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/customize-cs1" %}

## Color the Switch

Customize Switch colors by modifying the background and border properties of the track and handle elements through the `cssClass` property. In the following example, the Switch bar (`e-switch-inner`) element receives custom background and border colors, overriding the default color scheme for branded styling.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/customize-color-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/customize-color-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/customize-color-cs1" %}