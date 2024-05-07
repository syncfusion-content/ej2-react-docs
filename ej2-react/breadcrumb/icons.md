---
layout: post
title: Icons in React Breadcrumb component | Syncfusion
description: Learn here all about Icons in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Breadcrumb component

The Breadcrumb component contains an icon/image to provide a visual representation of an item.

## Loading Icons in Breadcrumb Item

To load the icon on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

### Breadcrumb with font icons

To place the font icon on the breadcrumb item, set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs1" %}

### Breadcrumb with image

In the Breadcrumb component, images can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, an image was added to the breadcrumb item by using the iconCss class `e-image-home` and specifying height and width.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/breadcrumb-image-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/breadcrumb-image-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/breadcrumb-image-cs1" %}

### Breadcrumb with SVG image

In the Breadcrumb component, SVG image can be added for the items using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, SVG image was added to the breadcrumb item by using the iconCss class `e-svg-home` and specifying height and width.

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

By default, the icon is positioned to the left side of the item in the Breadcrumb component. If you need to add the icon right to the breadcrumb item, add the `e-icon-right` class to the required item. In the following example, the `e-icon-right` class was added to the breadcrumb items using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#beforeitemrender) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs2" %}

## Icons only

To display only icons for the items, add icons using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, breadcrumb items were demonstrated with only icons by providing the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

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

To show icon only for the first item in the Breadcrumb component, add icons to the first item using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property. In the following example, the icon was provided only for the first item by setting the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem/#iconcss) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/icon-position-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/icon-position-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/icon-position-cs4" %}