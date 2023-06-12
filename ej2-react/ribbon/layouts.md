---
layout: post
title: Layouts in React Ribbon component | Syncfusion
description:  Checkout and learn about Layouts in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in Ribbon component

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In classic layout, the Ribbon component organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon component renders in `Classic` layout.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Classic/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Classic/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Classic/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Classic" %}

## Simplified layout

In simplified layout, the Ribbon component organize the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Simplified/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Simplified/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Simplified/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Simplified" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon component expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon component to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/react/documentation/api/ribbon/#isminimized) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Minimized/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Minimized/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Minimized/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Minimized" %}