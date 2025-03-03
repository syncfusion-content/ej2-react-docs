---
layout: post
title: Resizing of panels in React Dashboard Layout  component | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Resizing of panels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resizing of panels in React Dashboard Layout  component

The Dashboard Layout component is also provided with the panel resizing functionality which can be enabled or disabled by setting the [allowResizing](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#allowresizing) property. This functionality allows you to resize the panels dynamically through UI interactions using the resizing handlers which controls the panel resizing in various directions.

By default, panels can be resized only in the south-east direction. However, panels can also be resized in east, west, north, south, and south-west directions by specifying the required directions with the [resizableHandles](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizablehandles) property.

On resizing a panel in the Dashboard Layout , the following events will be triggered,
* [resizeStart](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizestart) - Triggers when panel resize starts
* [resize](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resize) - Triggers when panel is being resized
* [resizeStop](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizestop) - Triggers when panel resize stops

The following sample demonstrates how to enable and disable the resizing of panels in the Dashboard Layout component in different directions.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/resizing-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/resizing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/resizing-cs1" %}

## Resizing panels programmatically

The Dashboard Layout panels can also be resized programmatically by using [resizePanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizepanel) method. The method is invoked as follows,

```js
resizePanel(id, sizeX, sizeY)

```

Where,
* [**id**](https://helpej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#id) - ID of the panel which needs to be resized.
* [**sizeX**](https://helpej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#sizex) - New panel width in cells count for resizing the panel.
* [**sizeY**](https://helpej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#sizey) - New panel height in cells count for resizing the panel.

The following sample demonstrates how to resize panels programmatically in the Dashboard Layout's [created](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#created) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/resize-programmatically-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/resize-programmatically-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/resize-programmatically-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/resize-programmatically-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/resize-programmatically-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/resize-programmatically-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/resize-programmatically-cs1" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to learn how to present and manipulate data.