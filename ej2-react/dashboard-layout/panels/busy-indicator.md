---
layout: post
title: Busy Indicator in React Dashboard Layout | Syncfusion
description: Show a busy indicator on individual React Dashboard Layout panels during data loading using the showBusyIndicator and busyIndicatorTemplate properties.
control: Dashboard Layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Busy Indicator in React Dashboard Layout

The React Dashboard Layout component provides built-in support for displaying a busy indicator over individual panels while data is being fetched or processed. This feature is useful in dashboards where different panels load data from independent network calls and need to visually communicate their loading state to the user.

The busy indicator functionality is controlled by two panel-level properties: [`showBusyIndicator`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel#showbusyindicator) and [`busyIndicatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel#busyindicatortemplate).

## showBusyIndicator

The [`showBusyIndicator`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel#showbusyindicator) property is used to enable or disable the busy indicator overlay on a panel. When set to `true`, the panel content area is covered with a default loading indicator until the property is set back to `false`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `showBusyIndicator` | `boolean` | `false` | When set to `true`, displays a loading indicator overlay on the panel. |

When the `showBusyIndicator` is enabled on a panel:

- A loading overlay is rendered on top of the panel content.
- The panel content remains intact beneath the overlay and is shown once the indicator is hidden.
- The property can be toggled dynamically to reflect the asynchronous lifecycle of data fetching.

## busyIndicatorTemplate

The [`busyIndicatorTemplate`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/panelModel#busyindicatortemplate) property allows you to customize the appearance of the busy indicator by providing a custom HTML string or template content. This is helpful when the default indicator needs to be styled to match the application's branding or replaced with a more descriptive loading message.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `busyIndicatorTemplate` | `string` | `null` | Custom HTML template used to render the busy indicator overlay on the panel. |

When the `busyIndicatorTemplate` is provided:

- The custom template replaces the default loading indicator.
- Any valid HTML markup, including inline SVG, CSS, or icons, can be used as the template content.
- The template is applied only when `showBusyIndicator` is set to `true`.

## Implementation example

The following sample demonstrates how to use the `showBusyIndicator` and `busyIndicatorTemplate` properties to display a custom loading indicator on each panel. After a simulated delay, the indicators are hidden and the panel content is replaced with the loaded data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/busy-indicator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/busy-indicator-cs1" %}

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to learn how to present and manipulate data.
