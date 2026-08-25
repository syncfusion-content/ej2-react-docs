---
layout: post
title: Mobile Panel Height in React Dashboard Layout | Syncfusion
description: Set per-panel mobilePanelHeight in React Dashboard Layout to control mobile-view heights independent of sizeY, reducing whitespace on small devices.
control: Custom panel height in mobile view
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mobile Panel Height in React Dashboard Layout

The Dashboard Layout component supports responsive mobile layout through the [`mediaQuery`](../../api/dashboard-layout#mediaquery) property. However, in mobile view, all panels use a uniform height calculation based on the [`sizeY`](../../api/dashboard-layout/panelModel#sizey) property. The [`mobilePanelHeight`](../../api/dashboard-layout/panelModel#mobilepanelheight) property allows specifying a custom height for individual panels in mobile view, enabling better optimization of responsive layouts.

The table below lists the new panel property and its functionality.

| **Property** | **Description** |
| --- | --- |
| `mobilePanelHeight` | Specifies the height of the panel in cells count for mobile view only. When set, this height overrides the default [`sizeY`](../../api/dashboard-layout/panelModel#sizey) value. If null or undefined, falls back to `sizeY`. |

## Setting mobile panel height

The [`mobilePanelHeight`](../../api/dashboard-layout/panelModel#mobilepanelheight) property allows defining a mobile-specific height for each panel in cells count. This property is applied only when the component is in mobile view (based on the [`mediaQuery`](../../api/dashboard-layout#mediaquery) condition).

Previously, panel heights in mobile view were calculated uniformly based on the viewport width, where all panels adhered to a fixed range from 0 to 1 in the calculation algorithm. The `mobilePanelHeight` property introduces decimal value support for more granular control over panel heights. Just as panel width adapts to the viewport, height can now be adjusted using decimal increments (e.g., 0.5, 1.5, 2.7) in addition to whole numbers, enabling independent height customization.

This helps:
- Reduce unnecessary whitespace in mobile layouts.
- Improve screen space utilization on smaller devices.
- Enhance the user experience by displaying more relevant content within the viewport without excessive scrolling.
- Independently control panel height without relying on the desktop `sizeY` configuration.

For panels without `mobilePanelHeight` defined, the `sizeY` value is used as the default height in mobile view. The `mobilePanelHeight` property is independent of the [`minSizeY`](../../api/dashboard-layout/panelModel#minsizey) and [`maxSizeY`](../../api/dashboard-layout/panelModel#maxsizey) constraints, which apply only to the desktop view.

The following sample demonstrates setting custom heights for panels in mobile view.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/custom-panel-height-in-mobileview-cs1" %}