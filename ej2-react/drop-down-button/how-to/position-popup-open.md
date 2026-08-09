---
layout: post
title: How to position popup in React DropDownButton | Syncfusion
description: Reposition the React DropDownButton popup at custom coordinates by adjusting the top and left values in the open event handler.
control: Position popup open 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to position popup in React DropDownButton

Control the popup position by adjusting the `top` and `left` coordinates in the [`open`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#open) event. This allows you to position the dropdown popup at custom locations relative to the button or viewport.

The following example demonstrates how to reposition the popup by modifying its `top` position in the `open` event:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/position-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/position-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/position-cs1" %}