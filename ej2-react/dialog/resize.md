---
layout: post
title: Resize in React Dialog | Syncfusion
description: Make the React Dialog resizable by enabling a drag handle on any edge so users can dynamically adjust the dialog size within its target container.
control: Resize 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resize in React Dialog

The Dialog supports resizing functionality. Drag the dialog's resize handle (grip) or any edge/border to resize it.

## Enable resize

A resizable dialog can be created by setting the [enableResize](https://ej2.syncfusion.com/react/documentation/api/dialog#enableresize) property to `true`. This allows the dialog size to be changed dynamically, enabling users to view content in expanded mode.

## Configure resize handles

The [resizeHandles](https://ej2.syncfusion.com/react/documentation/api/dialog#resizehandles) property can be configured to specify the directions in which the dialog can be resized. Valid values include `SouthEast`, `SouthWest`, `NorthEast`, `NorthWest`, `East`, `West`, `North`, `South`, and `All`. For example, set `resizeHandles={['All']}` to allow resizing from any direction.

## Resize bounds

To constrain the dialog within minimum and maximum dimensions, use the [minHeight](https://ej2.syncfusion.com/react/documentation/api/dialog#minheight), [minWidth](https://ej2.syncfusion.com/react/documentation/api/dialog#minwidth), [maxHeight](https://ej2.syncfusion.com/react/documentation/api/dialog#maxheight), and [maxWidth](https://ej2.syncfusion.com/react/documentation/api/dialog#maxwidth) properties.

## Constrain resize within a target

When the [target](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property is configured along with [enableResize](https://ej2.syncfusion.com/react/documentation/api/dialog#enableresize), the dialog will be confined to the area of the specified `target` container.

## Resize events

The following events are raised while resizing the dialog:

* [resizeStart](https://ej2.syncfusion.com/react/documentation/api/dialog#resizestart) — Triggered when resizing begins.
* [resizing](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#resizing) — Triggered continuously while the dialog is being resized.
* [resizeStop](https://ej2.syncfusion.com/react/documentation/api/dialog/index-default#resizestop) — Triggered when resizing ends.

The following example demonstrates how to enable resize and configure the resize handles. Note that `allowDragging` and `showCloseIcon` are included in the sample only to showcase a full-featured dialog; they are not required for resize to work.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs19/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs20" %}

## See Also

* [Getting Started with React Dialog](./getting-started)
* [Style and Appearance in React Dialog](./style)
* [Dialog API Reference](https://ej2.syncfusion.com/react/documentation/api/dialog)
