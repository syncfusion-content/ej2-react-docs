---
layout: post
title: Customization in React Range navigator component | Syncfusion
description: Learn here all about Customization in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Range navigator component

## Navigator appearance

The Range Selector can be customized by using the [`navigatorStyleSettings`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#navigatorstylesettings). The [`selectedRegionColor`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/styleSettingsModel#selectedregioncolor) property is used to specify the color for the selected region, whereas the [`unselectedRegionColor`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/styleSettingsModel#unselectedregioncolor) property is used to specify the color for the unselected region.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs1" %}

## Thumb

The thumb property allows to customize the border, fill color, size, and type of thumb. Thumbs can be of two shapes: **Circle** and **Rectangle**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs2" %}

## Border customization

Using the [`navigatorBorder`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/thumbSettingsModel#border), the [`width`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/borderModel#width) and [`color`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/borderModel#color) of the Range Selector border can be customized.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs3" %}

## Deferred update

If the [`enableDeferredUpdate`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#enabledeferredupdate) property is set to **true**, then the changed event will be triggered after dragging the slider. If the [`enableDeferredUpdate`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#enabledeferredupdate) is **false**, then the changed event will be triggered when dragging the slider. By default, the [`enableDeferredUpdate`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#enabledeferredupdate) is set to **false**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs4" %}

## Allow snapping

The [`allowSnapping`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#allowsnapping) property toggles the placement of the slider exactly to the left or on the nearest interval.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs5" %}

## Animation

The speed of the animation can be controlled using the [`animationDuration`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#animationduration) property. The default value of the [`animationDuration`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#animationduration) property is **500** milliseconds.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs6" %}

## See Also

* [Grid and Tick Lines](./grid-tick)
* [Labels](./labels)