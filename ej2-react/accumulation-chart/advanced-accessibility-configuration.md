---
layout: post
title: Accessibility customization | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion React Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Accessibility customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility customization

The Syncfusion® React Accumulation Chart control is structured to visualize data in a graphical manner. It provides robust customization options for accessibility, allowing you to enhance the user experience for those with disabilities. The main attributes of the React Accumulation Chart control's accessibility customization are briefly explained in this section.

The accumulation chart control has a number of characteristics that enable accessibility features to be customized, including:

* `accessibilityDescription` - Provides a text description for the accumulation chart, improving support for screen readers.
* `accessibilityRole` - Specifies the role of the accumulation chart, helping screen readers to identify the element appropriately.
* `focusable` - Allows the accumulation chart to receive focus, making it accessible via keyboard navigation.
* `focusBorderColor` - Sets the color of the focus border, enhancing visibility when the accumulation chart is focused.
* `focusBorderMargin` - Defines the margin around the focus border.
* `focusBorderWidth` - Specifies the width of the focus border.
* `tabIndex` - Specifies the tab order for the accumulation chart element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs43/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs43/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs43" %}

## Series

The [`series`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* `accessibilityDescription` - Provides a text description for the series root element, enhancing support for screen readers.
* `accessibilityRole` - Specifies the role of the series, helping screen readers to identify the element appropriately.
* `focusable` - Allows the series to receive focus, making it accessible via keyboard navigation.
* `tabIndex` - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs44/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs44/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs44" %}

## Legend

The [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#legendsettings) provide information about the series shown in the accumulation chart. The following `accessibility` properties in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart#legendsettings) can be used to alter the accessibility of the accumulation chart's legend:

* `accessibilityDescription` - Provides a text description for the legend root element, enhancing support for screen readers..
* `accessibilityRole` - Specifies the role of the legend items to screen readers, providing appropriate context.
* `focusable` - Specifies whether legend items are focusable via keyboard navigation.
* `tabIndex` - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/pie-cs45/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/pie-cs45/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs45" %}