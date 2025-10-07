---
layout: post
title: Icons in React Breadcrumb component | Syncfusion
description: Learn here all about Icons in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Breadcrumb 
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Breadcrumb component

The Breadcrumb component supports icons and images to provide visual representation and enhance navigation context for each item. Icons can be implemented using font icons, custom images, or SVG graphics through the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property, with flexible positioning options to suit different design requirements.

## Loading icon in Breadcrumb items

To load icons on breadcrumb items, configure the `iconCss` property with the appropriate CSS class or styling.

### Breadcrumb with Font Icon

To place font icons on breadcrumb items, set the `iconCss` property to `e-icons` with the required icon CSS class. By default, icons are positioned to the left side of the item text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs1" %}

### Breadcrumb with Image

In the Breadcrumb component, images can be added to items using the `iconCss` property. In the following example, an image is added to the breadcrumb item using the iconCss class `e-image-home` with specified height and width dimensions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/breadcrumb-image-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/breadcrumb-image-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/breadcrumb-image-cs1" %}

### Breadcrumb with SVG Image

In the Breadcrumb component, SVG images can be added to items using the `iconCss` property. In the following example, an SVG image is added to the breadcrumb item using the iconCss class `e-svg-home` with specified height and width dimensions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/breadcrumb-svg-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/breadcrumb-svg-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/breadcrumb-svg-cs1" %}

## Icon Position

By default, icons are positioned to the left side of the item text in the Breadcrumb component. To position icons to the right of breadcrumb items, add the `e-icon-right` class to the required item. In the following example, the `e-icon-right` class is added to breadcrumb items using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#beforeitemrender) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs2" %}

## Icon Only

To display only icons for items without text, add icons using the `iconCss` property while omitting the `text` property. In the following example, breadcrumb items are demonstrated with only icons by providing the `iconCss` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs3" %}

## Show icon only for first item

To display an icon only for the first item in the Breadcrumb component, add icons to the first item using the `iconCss` property while leaving other items without icons. In the following example, the icon is provided only for the first item by setting the `iconCss` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs4" %}