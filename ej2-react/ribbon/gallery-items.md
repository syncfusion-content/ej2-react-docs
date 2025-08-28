---
layout: post
title: Ribbon Gallery Items in React Ribbon component | Syncfusion
description:  Checkout and learn about Gallery Items in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Gallery Items in React Ribbon component

The Ribbon component supports a gallery feature that displays a collection of related items, such as icons, content, or images, to allow users to perform specific actions. To render a gallery in the Ribbon, use the `<e-ribbon-item>` tag directive with the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property set to `Gallery`.
The gallery can be configured through the [RibbonGallerySettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/), which provides options to manage `groups`, `itemCount`, `popupHeight`, `popupWidth`, and more.

## Groups

The gallery can be organized into logical groups using the [groups](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#groups) property. Each group can be customized using the [RibbonGalleryGroupModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/), which includes options for `items`, `cssClass`, `header`, and more.

### Adding Gallery Items

Gallery items are defined using the [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#items) property. Each item can be configured with the [RibbonGalleryItemModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/), which provides options like `content`, `iconCss`, and `disabled`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryItems" %}

#### Defining Item Content

The [content](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#content) property specifies the text to be displayed for a gallery item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/itemContent/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/itemContent/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/itemContent" %}

#### Defining Item Icons

To associate an icon with a gallery item, use the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#iconcss) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryIcon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryIcon/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryIcon" %}

#### Adding HTML Attributes to Items

The [htmlAttributes](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#htmlattributes) property allows you to add custom HTML attributes to a gallery item's element.

The following sample shows how to add a `title` attribute to a gallery item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/htmlAttributes/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/htmlAttributes/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/htmlAttributes" %}

#### Customizing Item Appearance

To apply a custom style to a gallery item, use the [cssClass](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#cssclass) property.

The following sample demonstrates how to customize the appearance of a gallery item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/classCustomization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/classCustomization/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Gallery/classCustomization/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/classCustomization" %}

#### Disabling a Gallery Item

To disable a gallery item and prevent user interaction, set its [disabled](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#disabled) property to `true`. By default, this value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/disabledItem/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/disabledItem/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/disabledItem" %}

### Defining a Group Header

The [header](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#header) property sets a title for a group of items within the gallery popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryItems" %}

### Setting Item Dimensions

The size of gallery items can be controlled using the [itemWidth](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#itemwidth) and [itemHeight](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#itemheight) properties. When an `itemHeight` is set, items are aligned in rows according to the specified [itemCount](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount).

The following sample demonstrates how to set custom dimensions for gallery items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/itemHeightAndWidth/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/itemHeightAndWidth/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/itemHeightAndWidth" %}

### Customizing Group Appearance

To apply custom styles to a gallery group container, use the group's [cssClass](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#cssclass) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/groupCustomization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/groupCustomization/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Gallery/groupCustomization/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/groupCustomization" %}

## Setting the Displayed Item Count

To control the number of items displayed inline in the Ribbon gallery, use the [itemCount](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default, the `itemCount` is `3`.

The following example showcases a gallery with `4` items displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/itemCount/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/itemCount/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/itemCount" %}

## Pre-selecting an Item

The [selectedItemIndex](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property allows you to define the initially selected item in the gallery.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/selectedItemIndex/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/selectedItemIndex/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/selectedItemIndex" %}

## Setting Popup Dimensions

The dimensions of the gallery popup can be explicitly set using the [popupHeight](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#popupheight) and [popupWidth](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#popupwidth) properties.

This sample demonstrates how to configure a custom size for the gallery popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/popupHeightWidth/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/popupHeightWidth/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/popupHeightWidth" %}

## Template

You can completely redefine the appearance and content of gallery items by using the [template](../api/ribbon/ribbonGallerySettingsModel/#template) property.

### Popup Template

To customize the gallery's popup container, use the [popupTemplate](../api/ribbon/ribbonGallerySettingsModel/#popuptemplate) property.

The example below demonstrates how to implement both an `template` and a `popupTemplate`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryTemplate/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/ribbon/Gallery/galleryTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryTemplate" %}

> To learn more about other built-in Ribbon item types, refer to the [Ribbon Items](./items) documentation.