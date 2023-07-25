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

### Change spinner position

Spinner position can be changed by modifying the [`position`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel#position) property of [`spinSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel). By default, the spinner is positioned at the left of the ProgressButton. You can position it at the `left`, `right`, `top`, `bottom`, or `center` of the text content.

### Change spinner size

Spinner size can be changed by modifying the [`width`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel#width) property of [`spinSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel). In this demo, the `width` is set to `20` to change the spinner size.

### Spinner template

You can use custom spinner by specifying the [`template`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel#template) property of [`spinSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/spinSettingsModel) with custom styles.

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

### Content animation

The [`content`](https://ej2.syncfusion.com/react/documentation/api/progress-button#content) of the ProgressButton can be animated during progress using the [`effect`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel#effect) property of [`animationSettingsModel`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel). You can also set custom duration and timing function using the [`duration`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel#duration) and [`easing`](https://ej2.syncfusion.com/react/documentation/api/progress-button/animationSettingsModel#easing) properties. The possible `effect` values are `None`, `SlideLeft`, `SlideRight`, `SlideUp`, `SlideDown`, `ZoomIn`, and `ZoomOut`.

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

The progress can be visualized at the specified interval by changing the [`step`](https://ej2.syncfusion.com/react/documentation/api/progress-button/progressEventArgs#step) property in the [`begin`](https://ej2.syncfusion.com/react/documentation/api/progress-button#begin) event of the ProgressButton. In this demo, the `step` property is set to `20` to show progress at every 20% increment.

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

The progress can be changed dynamically by modifying the [`percent`](https://ej2.syncfusion.com/react/documentation/api/progress-button/progressEventArgs#percent) property in the ProgressButton events. In this demo, on 40% completion of progress, the `percent` property is set to `90` to show dynamic change of the progress.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs11/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs11/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs11" %}

> The method [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/progress-button#databind) applies the property changes immediately to the component.

### Start and stop methods

You can pause and resume the progress using the [`stop`](https://ej2.syncfusion.com/react/documentation/api/progress-button#start) and [`start`](https://ej2.syncfusion.com/react/documentation/api/progress-button#stop) methods, respectively. In this demo, clicking the ProgressButton will pause and resume the progress.

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