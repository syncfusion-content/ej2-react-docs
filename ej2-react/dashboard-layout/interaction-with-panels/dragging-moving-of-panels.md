---
layout: post
title: Dragging panels in React Dashboard Layout component | Syncfusion
description: Learn here all about Dragging moving of panels in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dragging and Moving Dashboard Layout Panels in React

The Dashboard Layout component provides dragging functionality to reorder panels within the layout. While dragging a panel, a holder will be highlighted below the panel indicating the panel placement on panel drop. This helps the user to decide whether to place the panel in the current position or revert to previous position without disturbing the layout.

If one or more panels collide while dragging, the colliding panels will be pushed in the direction where space is available. This can be towards the left, right, top, or bottom. The position changes of these collided panels will be updated dynamically during dragging of a panel, so the user can conclude whether to place the panel in the current position or not.

While dragging a panel in Dashboard layout, the following dragging events will be triggered:
* [dragStart](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#dragstart) - Triggered when panel dragging begins
* [drag](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#drag) - Triggered continuously while panel is being dragged
* [dragStop](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#dragstop) - Triggered when panel dragging ends

The following sample demonstrates dragging and pushing of panels. For example, while dragging the panel 0 over panel 1, these panels get collided and push the panel 1 towards the feasible direction, so that, the panel 0 gets placed in the panel 1 position.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/drag-pushing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/drag-pushing-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/drag-pushing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/drag-pushing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/drag-pushing-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/drag-pushing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/drag-pushing-cs1" %}

## Customizing the Drag Handle

By default, the entire panel acts as the handler for dragging, allowing the dragging action to occur when clicking anywhere on the panel. However, this dragging handler for the panels can be customized using the [`draggableHandle`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#draggablehandle) property to restrict the dragging action within a particular element in the panel.

The following sample demonstrates customizing the dragging handler of the panels, where the dragging action occurs only when interacting with the panel's header.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/draggable-handler-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/draggable-handler-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/draggable-handler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/draggable-handler-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/draggable-handler-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/draggable-handler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/draggable-handler-cs1" %}

## Disabling Panel Dragging

By default, the dragging of panels is enabled in Dashboard Layout. It can also be disabled with the help of [allowDragging](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#allowdragging) API. Setting [allowDragging](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#allowdragging) to false disables the dragging functionality in Dashboard Layout.

The following sample demonstrates Dashboard Layout with dragging support disabled.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/disable-dragging-cs1" %}

> You can refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its comprehensive feature representations. You can also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to see practical implementations of panel manipulation.