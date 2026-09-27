---
layout: post
title: Scheduler Dimensions in React Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion React Scheduler using pixel, percentage, or auto values for responsive layouts.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in React Scheduler

Scheduler dimensions refer to the height and width of the entire layout and support three types of values:

* `auto`
* `pixel`
* `percentage`

## Auto height and width

When the [height](https://ej2.syncfusion.com/react/documentation/api/schedule#height) and [width](https://ej2.syncfusion.com/react/documentation/api/schedule#width) of the Scheduler are set to `auto`, it will adapt to fit the parent container's dimensions. The Scheduler's width and height will be the sum of its children elements, ensuring responsive layout behavior.

> **Note:** By default, the Scheduler is assigned with `auto` values for both height and width properties, making it responsive to its parent container.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs43/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs43/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs43/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs43" %}

## Height and width in pixels

The Scheduler height and width will render exactly as per the given pixel values.

> **Note:** Pixel values can be provided either as numbers (for example, `500`) or as strings with a `px` suffix (for example, `'500px'`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs44/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs44/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs44/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs44" %}

## Height and width in percentages

When the height and width of the Scheduler are specified as percentages, the Scheduler will scale proportionally to the parent container's dimensions.

> **Tip:** Percentage-based dimensions are useful for responsive designs that need to adapt to different screen sizes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs45/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs45/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs45" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Cell Customization Guide](./cell-customization)
* [Setting Cell Dimensions in All Views](./cell-customization#setting-cell-dimensions-in-all-views)
* [Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
