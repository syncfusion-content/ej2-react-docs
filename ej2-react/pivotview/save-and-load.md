---
layout: post
title: Save and load report in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table exports the current report to JSON and reloads it later through custom toolbar options.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Save and load report in React Pivot Table

The Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table component allows users to save and restore report settings—also known as [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings)—through custom toolbar options. This functionality simplifies report management by allowing users to export settings as a JSON file and import them later to restore the Pivot Table configuration.

## Customizing the Toolbar

To enable the export and import functionality, customize the Pivot Table's toolbar using the [toolbarTemplate](https://ej2.syncfusion.com/react/documentation/api/pivotview#toolbartemplate) property. Add **Save** and **Open** buttons as described below. The sample also requires the `Toolbar` service, which must be injected into the `PivotViewComponent` via `<Inject services={[Toolbar]} />`.

> The template referenced by `toolbarTemplate` (for example, `#template`) must be a `div` that is a sibling of the `PivotViewComponent` in the DOM. The sample below places the `<div id="template">` immediately after the component.

### Save Button

The **Save** button is rendered as an anchor element. When clicked, the current report settings are retrieved using the [`getPersistData`](https://ej2.syncfusion.com/react/documentation/api/pivotview#getpersistdata) method, converted into a base64-encoded JSON string, and assigned to the anchor's `href` attribute so the browser downloads a file named `pivot.JSON`. The downloaded file contains the full `dataSourceSettings`, including rows, columns, values, and filters.

### Open Button

The **Open** button is rendered as a label-wrapped file input. When a file is selected, the [change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event reads the file as text and assigns the parsed JSON to the Pivot Table's `dataSourceSettings`, restoring the saved report.

Here is an example demonstrating how to add **Save** and **Open** buttons to the toolbar and handle exporting and importing report configurations in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs328/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs328/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs328/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs328/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs328" %}

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/save-and-load-report-through-the-toolbar-in-react-pivotview-component)

## See Also

* [Pivot Table Toolbar](https://ej2.syncfusion.com/react/documentation/pivotview/tool-bar#see-also)

* [Toolbar Component](https://ej2.syncfusion.com/react/documentation/toolbar/getting-started)
