---
layout: post
title: Resizing of panels in React Dashboard Layout  component | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resizing of panels in React Dashboard Layout  component

The Dashboard Layout component provide resizing functionality that can be enabled using the [`allowResizing`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#allowresizing) property. This functionality allows users to dynamically resize panels using resizing handles that control panel dimensions in various directions.

By default, panels can be resized only in the south-east direction. However, panels can also be resized in east, west, north, south, and south-west directions by specifying the required directions with the [`resizableHandles`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizablehandles) property.

## Resize events

When resizing a panel in the Dashboard Layout, the following events are triggered in sequence:


| API Reference | Description | Use Case |
|---------------|-------------|----------|
|[resizeStart](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizestart) | Triggers when panel resize begins | Useful for capturing initial panel dimensions |
|[resize](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resize) | Triggers continuously during panel resizing | Ideal for real-time updates or validation |
|[resizeStop](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizestop) | Triggers when panel resize completes | Perfect for saving final panel state |


The following sample demonstrates how to enable and disable panel resizing in the Dashboard Layout component with different directional handles:
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

## Programmatic panel resizing

Dashboard Layout panels can be resized programmatically using the [resizePanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#resizepanel) method. The method is invoked as follows,

### Method signature

```js
resizePanel(id, sizeX, sizeY)

```

### Parameters
* [**id**](https://helpej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#id)  - ID of the panel which needs to be resized.
* [**sizeX**](https://helpej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#sizex) - New panel width in cells count for resizing the panel.
* [**sizeY**](https://helpej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel/#sizey) - New panel height in cells count for resizing the panel.

The following sample demonstrates how to resize panels programmatically during the Dashboard Layout's [created](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#created) event:

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

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to knows how to present and manipulate data.