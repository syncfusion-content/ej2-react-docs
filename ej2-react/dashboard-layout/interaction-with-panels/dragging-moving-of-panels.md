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

The Dashboard Layout component provides dragging functionality to reorder panels within the layout. While dragging a panel, a highlighted holder appears beneath it, providing a visual preview of where the panel will be placed upon release. This visual feedback helps determine whether to drop the panel in the new position or return it to its original location without disrupting the layout.

When panels collide during dragging, the Dashboard Layout automatically pushes the colliding panels in available directions—left, right, top, or bottom. These position adjustments update dynamically during the drag operation, providing real-time feedback about the final layout configuration before dropping the panel.

While dragging a panel in Dashboard layout, the following dragging events will be triggered:
* [dragStart](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#dragstart) - Triggered when panel dragging begins
* [drag](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#drag) - Triggered continuously while panel is being dragged
* [dragStop](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#dragstop) - Triggered when panel dragging ends

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

By default, the entire panel serves as the drag handle, allowing dragging from any point within the panel. Customize this behavior using the  [`draggableHandle`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#draggablehandle) property to restrict the dragging action within a particular element in the panel.

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

Panel dragging is enabled by default in the Dashboard Layout. Disable this functionality using the  [allowDragging](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#allowdragging) API. Setting [allowDragging](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#allowdragging) to false disables the dragging functionality in Dashboard Layout.

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

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its comprehensive feature representations. Also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to see practical implementations of panel manipulation.