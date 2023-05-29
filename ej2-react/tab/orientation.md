---
layout: post
title: Orientation in React Tab component | Syncfusion
description: Learn here all about Orientation in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Orientation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in React Tab component

This section explains about modifying the position and modes of Tab header.

It allows placing the header section inside the Tab component at different positions by using the  [`headerPlacement`](https://ej2.syncfusion.com/react/documentation/api/tab#headerplacement) property. The available positions are as follows:

* **Top**: Tab header items can be arranged horizontally, and their content can be placed after the header.
* **Bottom**: Tab header items can be arranged horizontally, and their content can be placed before the header.
* **Left**: Tab header items can be arranged vertically, and their content can be placed after the header.
* **Right**: Tab header items can be arranged vertically, and their content can be placed before the header.

It is also adaptable to the available space when the tab items exceed the view space. You can customize the modes by using `overflowMode` property. The available modes are as follows:

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
