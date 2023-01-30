---
layout: post
title: Customized checkbox in React Check box component | Syncfusion
description: Learn here all about Customized checkbox in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: Customized checkbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customized checkbox in React Check box component

## Customize CheckBox Appearance

You can customize the appearance of the CheckBox component using the CSS rules. Define own CSS rules according to your requirement and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/check-box#cssclass) property.

The background and border color of the CheckBox is customized through custom classes to create primary, success, warning, danger, and info type of checkbox.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/howto-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/howto-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/howto-cs1" %}

## Custom Frame

CheckBox frame can be customized as per the requirement by adding CSS rules.

In the following example, to-do list is displayed with round checkbox by changing `border-radius` as `100%` by adding `e-custom` class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/custom-frame-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/custom-frame-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/custom-frame-cs1" %}

## Custom Check Icon

CheckBox check icon can be customized as per the requirement by adding CSS rules.

In the following example, the check icon can be customized by changing check icon content, background and border color in focus and hovered states by adding `e-checkicon` class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/custom-frame-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/custom-frame-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/custom-frame-cs2" %}