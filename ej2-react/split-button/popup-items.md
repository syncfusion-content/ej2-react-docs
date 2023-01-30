---
layout: post
title: Popup items in React Split button component | Syncfusion
description: Learn here all about Popup items in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Popup items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in React Split button component

## Icons

The Popup action item have an icon or image to provide visual representation of the action. To place the icon on a popup item,set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/split-button#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the popup action item.

In the following sample, the icons for Cut, Copy, and Paste menu items are added using the iconCss property

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/popup-icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/popup-icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/popup-icon-cs1" %}

## Template

### Item Templating

Popup items can be customized by using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/split-button#beforeitemrender) event. The item render event triggers while rendering each Popup action item. The event argument will be used to identify the action item and customize it based on the requirement.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/template-cs1" %}

### Popup Templating

The whole popup can be customized as per the requirement. In the following example, the popup can be customized by handling it in [`target`](https://ej2.syncfusion.com/react/documentation/api/split-button#target) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/popup-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/popup-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/popup-template-cs1" %}

## See Also

* [Popup items grouping](./how-to/group-items-in-popup)
* [SplitButton popup with separator](./icons-and-separator#separator)