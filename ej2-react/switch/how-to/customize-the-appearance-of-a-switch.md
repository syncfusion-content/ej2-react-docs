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

You can customize the appearance of the Switch component using the CSS rules. Define your own CSS rules according to your requirement and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/switch#cssClass) property.

## Customize Switch bar and handle

Switch bar and handle can be customized as per requirement using CSS rules. Switch bar and handle customized using `cssClass` property. In the following sample, the `border-radius` CSS property for the Switch bar (`e-switch-inner`) and handle (`e-switch-handle`) elements was changed border radius circle to square shape.

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

Switch colors can be customized as per the requirement using CSS rules. Switch bar and handle colors customized using `cssClass` property. In the following sample, the Switch bar (`e-switch-inner`) element background and border colors were changed from default colors.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/customize-color-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/customize-color-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/customize-color-cs1" %}