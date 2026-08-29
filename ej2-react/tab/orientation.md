---
layout: post
title: Orientation in React Tab | Syncfusion
description: Place the Syncfusion React Tab header at the top, bottom, left, or right of the content area with the headerPlacement property.
control: Orientation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in React Tab

This section explains about modifying the position and modes of Tab header.

It allows placing the header section inside the Tab component at different positions by using the  [`headerPlacement`](https://ej2.syncfusion.com/react/documentation/api/tab#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items can be arranged horizontally, and their content can be placed after the header.
* **Bottom**: Tab header items can be arranged horizontally, and their content can be placed before the header.
* **Left**: Tab header items can be arranged vertically, and their content can be placed after the header.
* **Right**: Tab header items can be arranged vertically, and their content can be placed before the header.

It is also adaptable to the available space when the tab items exceed the view space. You can customize the modes by using the [`overflowMode`](https://ej2.syncfusion.com/react/documentation/api/tab#overflowmode) property. The default value is `Scrollable`. For detailed descriptions of each mode, see the [Responsive Modes](../tab/adaptive) section. The available modes are as follows:

* Scrollable
* Popup

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/orientation-tab-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/orientation-tab-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/orientation-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs1" %}
