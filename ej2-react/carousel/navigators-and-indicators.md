---
layout: post
title: Navigators and indicators in React Carousel component | Syncfusion
description: Learn here all about Navigators and indicators in Syncfusion React Carousel component of Syncfusion Essential JS 2 and more.
control: Navigators and indicators 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Navigators and indicators in React Carousel component

The navigators and indicators are used to transition the slides manually.

To have a glance at how to customize the React Carousel component’s navigator buttons, play button, and indicators, watch this video:

{% youtube "https://www.youtube.com/watch?v=hVeXkSCuu5k" %}

## Navigators

### Show or hide previous and next button

In navigators, the previous and next slide transition buttons are used to perform slide transitions manually. You can show/hide the navigators using the [`buttonsVisibility`](https://ej2.syncfusion.com/react/documentation/api/carousel/#buttonsvisibility) property. The possible property values are as follows:

* `Hidden` – the navigator’s buttons are not visible.
* `Visible` – the navigator’s buttons are visible.
* `VisibleOnHover` – the navigator’s buttons are visible only when hovering over the carousel.

The following example depicts the code to show/hide the navigators in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs8" %}

### Show previous and next button on hover

In the carousel, you can show the previous and next buttons only on mouse hover using the [`buttonsVisibility`](https://ej2.syncfusion.com/react/documentation/api/carousel/#buttonsvisibility) property. The following example depicts the code to show the navigators on mouse hover in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs9" %}

### Previous and next button template

Template options are provided to customize the previous button using [`previousButtonTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/#previousbuttontemplate) and the next button using [`nextButtonTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/#nextbuttontemplate). The following example depicts the code for applying the template to previous and next buttons in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs10" %}

## Indicators

### Show or hide indicators

In indicators, the total slides and current slide state have been depicted. You can show/hide the indicators using the [`showIndicators`](https://ej2.syncfusion.com/react/documentation/api/carousel/#showindicators) property. The following example depicts the code to show/hide the indicators in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs11" %}

### Indicators Template

Template option is provided to customize the indicators by using the [`indicatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/#indicatorstemplate) property. The following example depicts the code for applying a template to indicators in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/indicator-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/indicator-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/indicator-cs1" %}

### Showing preview of slide in indicator

You can customize the indicators by showing the preview image of each slide using the [`indicatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/#indicatorstemplate) property. The following example depicts the code for showing the preview image using a template for indicators in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/indicator-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/indicator-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/indicator-template-cs1" %}

### Indicators Types

Choose different types of indicators available using the [`indicatorsType`](../api/carousel/#indicatorstype) property. The indicator types are categorized as follows:

* [Default Indicator](#default-indicator)
* [Dynamic Indicator](#dynamic-indicator)
* [Fraction Indicator](#fraction-indicator)
* [Progress Indicator](#progress-indicator)

#### Default Indicator

A default indicator in a carousel is a set of dots that indicate the current position of the slide in the carousel. The Default indicator can be achieved by setting the [`indicatorsType`](../api/carousel/#indicatorstype) to `Default`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/indicators-type-cs0/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/indicators-type-cs0/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/indicators-type-cs0" %}

#### Dynamic Indicator

A dynamic indicator in a carousel provides visual cues or markers that dynamically change or update to indicate the current position. The Dynamic indicator can be achieved by setting the [`indicatorsType`](../api/carousel/#indicatorstype) to `Dynamic`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/indicators-type-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/indicators-type-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/indicators-type-cs1" %}

#### Fraction Indicator

The fraction indicator type displays the current slide index and total slide count as a fraction. The Fraction indicator can be achieved by setting the [`indicatorsType`](../api/carousel/#indicatorstype) to `Fraction`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/indicators-type-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/indicators-type-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/indicators-type-cs2" %}

#### Progress Indicator

The Progress Indicator type displays the current slide as a progress bar. The Progress indicator can be achieved by setting the [`indicatorsType`](../api/carousel/#indicatorstype) to `Progress`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/indicators-type-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/indicators-type-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/indicators-type-cs3" %}

## Play button

### Show or hide the play button

In the carousel, [`autoPlay`](https://ej2.syncfusion.com/react/documentation/api/carousel/#autoplay) actions have been controlled by using the [`showPlayButton`](https://ej2.syncfusion.com/react/documentation/api/carousel/#showplaybutton) property in the user interface. When you enable this property, the slide transitions are controlled using this play and pause button. This property depends on the [`buttonsVisibility`](https://ej2.syncfusion.com/react/documentation/api/carousel/#buttonsvisibility) property. The following example depicts the code to show the play button in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs12" %}

### Play button template

Template option is provided to customize the play button by using the [`playButtonTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/#playbuttontemplate) property. The following example depicts the code for applying a template to play Button in the carousel.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs13" %}
