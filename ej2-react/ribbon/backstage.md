---
layout: post
title: Backstage in React Ribbon component | Syncfusion
description:  Checkout and learn about Backstage in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Backstage

The Ribbon supports backstage view which is an addition to the traditional file menu. It displays information like application settings, user details, etc. The backstage view can be enabled by setting the [backStageMenu](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenu/) property.

The backstage view options are displayed on the left, while the content of each option is shown on the right.

## Adding backstage items

The menu items can be added to the backstage view by using the [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageItem/) property. You can show the backstage view by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`. By default, the backstage view is hidden.

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

You can use the [isFooter](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageItemModel/#isfooter) property in the `items` collection to add the backstage view footer items. By default, the value is false.

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

## Adding separator

The separators are horizontal lines used to separate the backstage view items. You can use the [separator](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageItemModel/#separator) property to split the menu items.

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

## Back button

You can use the [backButton](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButton/) property to customize the text and icon of the close button using the [text]((https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButton/#text)) and [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButton/#iconcss) property. You can show the back button by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageBackButtonModel/#visible) property to `true`.

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

## Backstage target

The [target](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#target) property specifies the element selector in which backstage will be displayed. The target element should have the position as relative, else the backstage will be positioned nearest to the relative element. By default, the backstage is positioned to ribbon element.

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

## Template

You can use the [template](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#template) property to modify the backstage view menu items and their contents.

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

You can customize the height and width of the backstage view using the [height](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenuModel/#width) property. By default, dimensions are set based on the content added.

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