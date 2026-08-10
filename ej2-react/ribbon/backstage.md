---
layout: post
title: Backstage in React Ribbon component | Syncfusion
description:  Checkout and learn about Backstage in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Backstage in React Ribbon Component

The React Ribbon component includes a Backstage view, which serves as a comprehensive replacement for the traditional file menu. It is designed to display application-level information and settings, such as user details, document properties, or options pages. The Backstage view is enabled by configuring the [backStageMenu](https://ej2.syncfusion.com/react/documentation/api/ribbon/#backstagemenu) property.

When active, backstage options are displayed in a list on the left, and the content for the selected option appears on the right.

## Adding backstage items

Define and add items to the Backstage view by populating the [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#items) property. To display the Backstage, set the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#visible) property to `true`. By default, the Backstage view is hidden.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackstageItem/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackstageItem/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackstageItem/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackstageItem" %}

## Adding footer items

To designate an item as a footer menu item, set its [isFooter](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageItemModel/#isfooter) property in the [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#items) collection to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackStageFooterItem/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackStageFooterItem/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackStageFooterItem/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackStageFooterItem" %}

## Adding a separator

Separators are horizontal lines used to visually group related items within the Backstage view. To add a separator, set the [separator](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageItemModel/#separator) property of a Backstage item to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackStageSeperator/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackStageSeperator/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackStageSeperator/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackStageSeperator" %}

## Back button customization

Customize the text and icon of the Backstage view's close button using the [backButton](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#backbutton) property. The button's text is set with the [text](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButtonModel/#text) property and its icon with the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButtonModel/#iconcss) property. The back button is displayed by setting its [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackstageBackButton/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackstageBackButton/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackstageBackButton/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackstageBackButton" %}

## Backstage target element

The [target](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#target) property specifies the selector for the element where the Backstage view will be displayed. The target element must have its CSS `position` set to `relative`. If it does not, the Backstage will be positioned relative to the nearest parent element that has this styling. By default, the Backstage is positioned relative to the Ribbon element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackstageTarget/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackstageTarget/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackstageTarget/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackstageTarget" %}

## Customizing with templates

The [template](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#template) property allows for complete customization of the Backstage view's menu items and their corresponding content area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackstageTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackstageTemplate/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackstageTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackstageTemplate" %}

## Setting width and height

The height and width of the Backstage view can be explicitly set using the [height](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#width) properties. If not set, the dimensions are calculated automatically based on the content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/BackstageCustomization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/BackstageCustomization/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/BackstageCustomization/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/BackstageCustomization" %}

> [Adding Backstage events](./events#backStageItemClick)