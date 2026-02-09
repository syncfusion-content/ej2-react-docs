---
layout: post
title: Page settings in React Diagram Component | Syncfusion®
description: Learn here all about Page settings in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Page settings 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Page Settings in React Diagram Component

Page settings allow customization of the appearance, size, and orientation of the diagram page.

To customize the diagram page settings, insert page breaks, display multiple pages, and change the orientation of the canvas in the EJ2 React Diagram, refer to the video link below.

{% youtube "https://www.youtube.com/watch?v=pn02S_rwupw" %}

## Page Size and Appearance

The diagram page dimensions are controlled through the [`width`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pageSettings/#width) and [`height`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pageSettings/#height) properties in page settings. The page appearance can be customized using the [`background`](https://helpej2.syncfusion.com/react/documentation/api/diagram/backgroundModel/) property, which includes options for setting the background [`color`](https://helpej2.syncfusion.com/react/documentation/api/diagram/backgroundModel/#color) and other visual properties. The [`margin`](https://helpej2.syncfusion.com/react/documentation/api/diagram/marginModel/) property defines spacing around the page content.

For comprehensive details on all available properties, refer to the [`Page Settings`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pageSettingsModel/)

The following example shows the customization of page settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5pagesettings-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/reactCurlyExamples/es5pagesettings-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/pagesettings/es5pagesettings-cs1" %}

## Set Background Image

A background image can be attached to the page by using the [`source`](https://helpej2.syncfusion.com/react/documentation/api/diagram/backgroundModel/#source) property of `background` . The [`scale`](https://helpej2.syncfusion.com/react/documentation/api/diagram/backgroundModel/#scale) property adjusts how the background image stretches, while the [`align`](https://helpej2.syncfusion.com/react/documentation/api/diagram/backgroundModel/#align) property determines the image positioning within the diagram page boundaries.

The following code illustrates how to set background image to the diagram page.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/pagesettings/es5BGImage-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/pagesettings/es5BGImage-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/pagesettings/es5BGImage-cs1" %}

## Page Orientation

The diagram supports two page orientations:

- **Landscape**: Wider than tall (default orientation).
- **Portrait**: Taller than wide.

When the orientation changes, the diagram automatically swaps the width and height values to maintain the specified page dimensions. For example, if a page is configured with width: 800 and height: 600 in landscape mode, switching to portrait orientation will result in width: 600 and height: 800.

The following example demonstrates how orientation affects page dimensions by switching from the default landscape to portrait mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/pagesettings/es5pagesettings-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/pagesettings/es5pagesettings-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/pagesettings/es5pagesettings-cs2" %}

## Multiple Page and Page Breaks

The diagram can extend across multiple pages when the content exceeds the defined page boundaries. When multiple pages are enabled, the total canvas size automatically expands in increments of the specified page width and height to accommodate all diagram elements. Page breaks provide visual indicators showing where one page ends and another begins, which is particularly useful for print layout planning.

The [`multiplePage`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pageSettingsModel/#multiplepage) and [`showPageBreak`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pageSettingsModel/#showpagebreaks) properties in page settings control the ability to enable multiple pages and display page break lines, respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/pagesettings/es5multiplepage-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/pagesettings/es5multiplepage-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/pagesettings/es5multiplepage-cs1" %}

The color of the page break lines can be customized by overriding the styles of the .e-diagram-page-break class. For more details refer to [`CSS customization`](https://ej2.syncfusion.com/react/documentation/diagram/style#customizing-the-page-breaks)

## Boundary Constraints

The appearance of page break lines can be customized by overriding the styles of the .e-diagram-page-break CSS class. For detailed styling options, refer to the [`boundaryConstraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/boundaryConstraints/) property in page settings.

The three types of boundary constraints are:

- **Infinity**: Elements can be moved without any boundary restrictions.
- **Diagram**: Elements are constrained within the overall diagram area.
- **Page**: Elements are restricted to the defined page boundaries.

For detailed information about each constraint type and their behavior, refer to the [`Boundary Constraints`](https://ej2.syncfusion.com/react/documentation/diagram/constraints#boundary-constraints).

The following example shows how to configure boundary constraints to restrict element movement within specific boundaries.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/pagesettings/es5boundaryconstraints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/pagesettings/es5boundaryconstraints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/pagesettings/es5boundaryconstraints-cs1" %}

## Fit Options

The [`fitOptions`](https://helpej2.syncfusion.com/react/documentation/api/diagram/fitOptionsModel/) in page settings control how diagram content is fitted within the diagram page. The [`canFit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/fitOptionsModel/#canfit) property within fitOptions centers the content within the viewport during diagram rendering. Additionally, the [`region`](https://helpej2.syncfusion.com/react/documentation/api/diagram/diagramRegions/) property specifies whether to fit the page or the content to the center of the viewport. Choosing CustomBounds for the [`region`](https://helpej2.syncfusion.com/react/documentation/api/diagram/diagramRegions/) allows fitting custom bounds within the diagram by defining them in the [`customBounds`](https://helpej2.syncfusion.com/react/documentation/api/diagram/fitOptionsModel/#custombounds) property of fitOptions. The [`canZoomIn`](https://helpej2.syncfusion.com/react/documentation/api/diagram/fitOptionsModel/#canzoomin) property enables zooming in to fit smaller content within the viewport. Additionally, the [`margin`](https://helpej2.syncfusion.com/react/documentation/api/diagram/marginModel/) property defines the space around the fitted content within the viewport, while the [`mode`](https://helpej2.syncfusion.com/react/documentation/api/diagram/fitModes/) property sets the fitting mode, typically defaulting to 'Page' but also offering options like 'Width' and 'Height' for specific dimension constraints.

The following example demonstrates the configuration and usage of fit options for automatic content positioning.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/pagesettings/es5FitOption-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/pagesettings/es5FitOption-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/pagesettings/es5FitOption-cs1" %}

