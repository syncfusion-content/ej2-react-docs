---
layout: post
title: Orientations in React Stepper | Syncfusion
description: Display the Syncfusion React Stepper horizontally or vertically by setting the `orientation` property to `Horizontal` or `Vertical`.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Orientations in React Stepper

The Stepper component supports the display of steps in both horizontal and vertical orientations by using the [orientation](https://ej2.syncfusion.com/react/documentation/api/stepper#orientation) property.

## Horizontal

In horizontal orientation, the steps are displayed in a side-by-side manner by setting the [orientation](https://ej2.syncfusion.com/react/documentation/api/stepper#orientation) property to `Horizontal`. By default, the steps are displayed in the horizontal orientation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/horizontal/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/horizontal/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/horizontal/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/horizontal" %}

## Vertical

You can display the steps one below the other vertically by setting the [orientation](https://ej2.syncfusion.com/react/documentation/api/stepper#orientation) property to `Vertical`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/vertical/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/vertical/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/vertical/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/vertical" %}