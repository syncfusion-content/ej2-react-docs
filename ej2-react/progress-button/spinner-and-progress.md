---
layout: post
title: Spinner and progress in React Progress button component | Syncfusion
description: Learn here all about Spinner and progress in Syncfusion React Progress button component of Syncfusion Essential JS 2 and more.
control: Spinner and progress 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD002 MD022 -->
# Spinner and progress in React Progress button component

## Spinner

Control the appearance and behavior of the animated spinner indicator shown during progress operations.

### Change spinner position

Customize the spinner's location relative to button content by modifying the [`position`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel/#position) property in [`spinSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel). By default, the spinner appears on the left side of the button text. Reposition it to `left`, `right`, `top`, `bottom`, or `center` based on your layout preferences.

### Change spinner size

Adjust the spinner dimensions by modifying the [`width`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel/#width) property in [`spinSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel). This allows you to scale the spinner icon up or down to match your button size and visual hierarchy. In the demo below, the `width` is set to `20` pixels to create a smaller spinner.

### Spinner template

Create a custom spinner design by specifying the [`template`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel/#template) property in [`spinSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel). Use HTML or SVG markup with custom CSS styles to replace the default animated spinner with your own branded animation or icon.

The following sample demonstrates the above functionalities of the spinner.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs8/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs8" %}

## Progress

Visual progress indicators and animations provide feedback during long-running operations.

### Content animation

Animate the ProgressButton text or content during progress operations using the [`effect`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel/#effect) property in [`animationSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel). Control animation timing with the [`duration`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel/#duration) and [`easing`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel/#easing) properties. 

Available animation effects are:
* **None** - No animation
* **SlideLeft** - Content slides from right to left
* **SlideRight** - Content slides from left to right
* **SlideUp** - Content slides upward
* **SlideDown** - Content slides downward
* **ZoomIn** - Content scales up (zooms in)
* **ZoomOut** - Content scales down (zooms out)

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs9" %}

### Change step of the ProgressButton

Control the granularity of progress visualization by modifying the [`step`](https://ej2.syncfusion.com/react/documentation/api/progress-button/progressEventArgs/#step) property in the [`begin`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#begin) event. The step value determines how much the progress bar advances on each update. For example, setting `step` to `20` displays progress in 5% increments (100 ÷ 20), creating a smooth visual progression for the user.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs10/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs10/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs10" %}

> The class `e-hide-spinner` hides the spinner in the ProgressButton, For more information, see [hide spinner](./how-to/hide-spinner) section.

### Change progress dynamically

Update the progress percentage in real-time by modifying the [`percent`](https://ej2.syncfusion.com/react/documentation/api/progress-button/progressEventArgs/#percent) property during ProgressButton events. This technique enables conditional progress adjustments based on application logic. For example, you can jump the progress to 90% when a particular milestone is reached at 40% completion, allowing for non-linear progress visualization.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs11/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs11/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs11" %}

> The method [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#databind) applies the property changes immediately to the component.

### Start and stop methods

Control progress playback by invoking the [`start`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#start) and [`stop`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#stop) methods. Use these methods to pause long-running operations or allow users to resume interrupted tasks. In the example below, clicking the ProgressButton toggles between paused and active states.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs12/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs12/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs12" %}

## See Also

* [How to hide spinner](./how-to/hide-spinner)
* [Customize ProgressButton using cssClass](how-to/customize-progress-using-cssclass)