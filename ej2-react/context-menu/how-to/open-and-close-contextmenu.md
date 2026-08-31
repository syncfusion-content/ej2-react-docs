---
layout: post
title: How to open and close Context Menu in React | Syncfusion
description: Open and close the React Context Menu programmatically by calling the `open` and `close` methods with `top` and `left` coordinates.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to open and close ContextMenu in React


The ContextMenu component can be opened and closed programmatically using the [`open`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#open) and [`close`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#close) methods. This programmatic control is useful for creating custom trigger events or implementing context menu functionality in response to specific user interactions.

The [`open`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#open) method accepts three parameters:
- `top`: To specify ContextMenu vertical positioning.
- `left`: To specify ContextMenu horizontal positioning.
- `target`: To calculate z-index for ContextMenu based upon the specified target.

In the following example, the ContextMenu is opened using the [`open`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#open) method at the specified position using `top` and `left` coordinates. The ContextMenu is closed using the [`close`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#close) method on ContextMenu item click or document click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/how-to-cs1" %}
