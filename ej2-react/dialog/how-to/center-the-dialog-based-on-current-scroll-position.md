---
layout: post
title: How to center the dialog on scroll in React Dialog | Syncfusion
description: Learn here all about Center the dialog based on current scroll position in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Center the dialog based on current scroll position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to center the dialog on scroll in React Dialog

By default, the React Dialog is centered based on the target container. If the target is not specified, the React Dialog is rendered in the body and centered according to the current viewport.

Use the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog#position) property to place the dialog, and the [`open`](https://ej2.syncfusion.com/react/documentation/api/dialog#open) event to recalculate the position on scroll. The `position` property accepts `X` and `Y` values (numbers in pixels, or strings such as `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`).

| Property | Description |
| --- | --- |
| X | Horizontal position (e.g., `'center'`, `'left'`, `'right'`, or a pixel value). |
| Y | Vertical position (e.g., `'center'`, `'top'`, `'bottom'`, or a pixel value). |

> The [`overlayClick`](https://ej2.syncfusion.com/react/documentation/api/dialog#overlayclick) event is raised when the modal overlay is clicked. In the sample below, `onOverlayClick` and `dialogClose` both hide the React Dialog; this duplication is intentional so the React Dialog closes whether the user clicks the overlay, the close icon, or a programmatic close action.

In the following sample, the modal React Dialog is centered based on the page's current scroll position, ensuring the React Dialog stays visible as the user scrolls the page content.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dialog/center-the-dialog-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dialog/center-the-dialog-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/center-the-dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/center-the-dialog-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dialog/center-the-dialog-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dialog/center-the-dialog-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/center-the-dialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/center-the-dialog-cs2" %}