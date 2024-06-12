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

The Ribbon supports Gallery view which allows users to perform specific actions by displaying a collection of related items, including icons, content, or images. You can render the gallery Ribbon items by using the `RibbonItemDirective` tag, by specifying the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `Gallery` and customize it by using the [RibbonGallerySettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/), which provides options such as `groups`, `itemCount`, `popupHeight`, `popupWidth` and more.

## Groups

You can render the groups inside the gallery items by using [groups](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#groups) property and customize the groups using [RibbonGalleryGroupModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/), which provides options such as `items`, `cssClass`, `header` and more.

### Adding items

You can render the gallery items by using [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#items) property and customize using the [RibbonGalleryItemModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/), which provides options such as `content`, `iconCss`, `disabled` and more.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryItems" %}

#### Adding content

You can use the [content](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#content) property to define the text content for the gallery item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/itemContent/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/itemContent/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/itemContent" %}

#### Adding icons

You can use the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#iconcss) property to define the icons for the gallery item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryIcon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryIcon/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryIcon" %}

#### Adding html attributes

You can use the [htmlAttributes](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#htmlattributes) property to add HTML attributes to the Ribbon gallery item.

The following sample showcases how to add title attribute to the gallery item using `htmlAttributes` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/htmlAttributes/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/htmlAttributes/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/htmlAttributes" %}

#### CSS class

You can use the [cssClass](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#cssclass) property to customize the gallery item.

The following sample showcases how to customize the appearance of each gallery item using the `cssClass` property .

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

#### Disabled

You can use the [disabled](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryItemModel/#disabled) property to disable the Ribbon gallery item. It prevents the user interaction when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/disabledItem/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/disabledItem/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/disabledItem" %}

### Custom header

You can use the [header](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#header) property to set header for the group items in the Ribbon gallery popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/galleryItems/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/galleryItems" %}

### Setting item width

You can use the [itemWidth](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#itemwidth) property to specify the width of gallery items.

### Setting item height

You can use the [itemHeight](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#itemheight) property to set the height of the gallery items. If the `itemHeight` of the gallery item is smaller the remaining gallery items are aligned based on the [itemCount](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) specified.

The provided example demonstrates how to customize gallery items using the `itemWidth` and `itemHeight` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/itemHeightAndWidth/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/itemHeightAndWidth/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/itemHeightAndWidth" %}

### Group styling

You can use the [cssClass](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGalleryGroupModel/#cssclass) property to customize the appearance of gallery groups.

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

## Setting item count

You can customize the number if items to be displayed in Ribbon gallery by using the [itemCount](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#itemcount) property. By default the `itemCount` will be `3`.

The following example showcases the utilization of the `itemCount` property, displaying a ribbon gallery with `4` items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/itemCount/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/itemCount/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/itemCount" %}

## Setting selected item

You can use the [selectedItemIndex](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#selecteditemindex) property to define the currently selected item in the Ribbon gallery items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Gallery/selectedItemIndex/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Gallery/selectedItemIndex/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Gallery/selectedItemIndex" %}

## Setting popup height

You can specify the height of the gallery popup by using the [popupHeight](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#popupheight) property.

## Setting popup width

you can specify the width of the gallery popup by using the [popupWidth](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettingsModel/#popupwidth) property.

The example demonstrates the customization of popup with `popupHeight` and `popupWidth` properties.

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

You can customize the default appearance and content of Ribbon gallery items by using the [template](../api/ribbon/ribbonGallerySettingsModel/#template) property.

### Popup Template

You can customize the appearance of Ribbon gallery popup by using the [popupTemplate](../api/ribbon/ribbonGallerySettingsModel/#popuptemplate) property.

The below example demonstrates the customization of both the `template` and `popupTemplate` properties:

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

> To know more about the built-in Ribbon items, please refer to the [Ribbon Items](./items) section.