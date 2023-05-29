---
layout: post
title: Style and appearance in React Appbar component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion React Appbar component of Syncfusion Essential JS 2 and more.
control: Style and appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in React Appbar component

To modify the AppBar appearance, you need to override the default CSS of the AppBar component. Please find the list of CSS classes and their corresponding sections in the AppBar component. Also, you have an option to create your own custom theme for the controls using our [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

|CSS Class | Purpose of Class |
|-----|----- |
|.e-appbar|To customize the appbar.|
|.e-appbar.e-prominent|To customize the prominent appbar.|
|.e-appbar.e-dense|To customize the dense appbar.|
|.e-appbar.e-light|To customize the light appbar.|
|.e-appbar.e-dark|To customize the dark appbar.|
|.e-appbar.e-primary|To customize the dark appbar.|
|.e-appbar.e-inherit|To customize the inherit appbar.|

>Note: You can change the prominent AppBar height if larger titles, images, or texts are used.

## CssClass

CssClass is used for AppBar customization based on the custom class. In the example below, the AppBar background and color are customized using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/appbar#cssclass) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/cssclass-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/cssclass-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/cssclass-cs1" %}

## HtmlAttributes

It can be used for additional inline attributes by specifying as inline attributes or by specifying htmlAttributes directive. In the code example below, the aria-label of the AppBar is customized by specifying as attributes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/appbar/htmlattributes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/appbar/htmlattributes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/appbar/htmlattributes-cs1" %}