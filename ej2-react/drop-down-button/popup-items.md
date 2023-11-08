---
layout: post
title: Popup items in React Drop Down Button Component | Syncfusion
description: Learn here all about Popup items in Syncfusion React Drop Down Button Component of Syncfusion Essential JS 2 and more.
control: Popup items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in React Drop down button component

## Icons

The Popup action item have an icon/image in it to provide visual representation of the action. To place the icon on a popup item,
set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is
positioned to the left side of the popup action item.

In the following sample, the icons for Edit, Delete, Mark As Read  and Like Message menu items are
added using the iconCss property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/popup-icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/popup-icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/popup-icon-cs1" %}

## Navigations

Actions in DropDownButton is usage to navigate to the other web page when action item is clicked. This can be achieved by providing link to the action item using the `url` property. In the following sample, Navigation URL for Flipkart, Amazon, and Snapdeal action items are added using the `url` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/action-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/action-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/action-cs1" %}

## Template

### Item Templating

Popup items can be customized by using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeitemrender) event. The item render event triggers while rendering each Popup action item. The event argument will be used to identify the action item and customize it based on the requirement.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/template-cs1" %}

### Popup Templating

The whole popup can be customized as per the requirement and it can be customized by handling it in [`target`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#target) property.

In the following sample, the whole popup item is customized as table template by giving `div` as target and it can be achieved
using `target` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/popup-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/popup-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/popup-cs1" %}

## Separator

The Separators are the horizontal lines that are used to separate the popup items. You `cannot` select the separators. You can enable separators to group the popup items using the `separator` property.

In the following sample, cut, copy, and paste popup items are grouped using the separator property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/accessibility-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/accessibility-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/accessibility-cs2" %}

## See Also

* [Integration with ListView component](./how-to/group-popup-items-with-listview-component)