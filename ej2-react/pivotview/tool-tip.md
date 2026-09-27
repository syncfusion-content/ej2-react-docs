---
layout: post
title: Tooltip in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table shows contextual tooltips on value cells and headers, with the showTooltip property to enable or disable them.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Pivot Table

The tooltip displays contextual information when users hover over value cells in the pivot table. It can be enabled or disabled by setting the [`showTooltip`](https://ej2.syncfusion.com/react/documentation/api/pivotview#showtooltip) property to **true** or **false**. By default, the tooltip is enabled in the pivot table and shows the cell value with its row and column headers.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs305/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs305/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs305/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs305/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs305" %}

## Tooltip template

Users can customize the tooltip in the Pivot Table component by setting the [`tooltipTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#tooltipTemplate) property with their own HTML elements. This property accepts either an HTML string or an element ID. Use the following placeholders within the HTML to display dynamic values:

- `${rowHeaders}` – Displays the row headers for the selected value cell.
- `${columnHeaders}` – Displays the column headers for the selected value cell.
- `${rowFields}` – Displays the row fields of the selected value cell.
- `${columnFields}` – Displays the column fields of the selected value cell.
- `${valueField}` – Displays the value field name of the selected cell.
- `${aggregateType}` – Specifies the aggregate type of the selected value cell.
- `${value}` – Displays the formatted value of the selected value cell.

You can apply tooltip customization to both the Pivot Table and Pivot Chart together, or to either one individually. To customize the Pivot Table tooltip, define the HTML template via the [`tooltipTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#tooltipTemplate) property as described above. To set a custom tooltip for the Pivot Chart only, use the [`template`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotTooltipSettingsModel#template) property within the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/pivotview/chartSettings#tooltip) object of the [`chartSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/chartSettings) property.

The example below shows how to define the Pivot Table tooltip template in `index.html` and assign it to the [`tooltipTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#tooltipTemplate) property. The Pivot Chart tooltip is customized by setting an HTML string in the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/pivotview/chartSettings#tooltip) property of [`chartSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/chartSettings).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/tooltipTemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/tooltipTemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/tooltipTemplate-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/tooltipTemplate-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/tooltipTemplate-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/tooltipTemplate-cs1" %}
