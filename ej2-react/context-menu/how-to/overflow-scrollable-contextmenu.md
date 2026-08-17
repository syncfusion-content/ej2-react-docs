---
layout: post
title: How to make Context Menu overflow scrollable in React | Syncfusion
description: Make the React Context Menu overflow scrollable by restricting the `ul` height and setting CSS overflow auto on the menu list.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to make Context Menu overflow scrollable in React

Overflow Scrollable ContextMenu can be achieved by restricting the height of the `ul` element.

In the following example, the `height` of the ContextMenu is set as `150px` and `overflow` property is set as `auto`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/scroller-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/scroller-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/scroller-cs2" %}
