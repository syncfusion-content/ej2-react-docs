---
layout: post
title: How to apply conditional formatting in Pivot Table | Syncfusion
description: Step-by-step example showing how to apply conditional formatting to a specific row or column in the React Pivot Table using conditionalFormatSettings.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to apply conditional formatting in Pivot Table

Conditional formatting allows you to visually highlight important data and identify patterns in your React Pivot Table by applying formatting to specific rows or columns based on certain conditions. This feature helps to emphasize particular data values that meet defined criteria.

## Implementing Conditional Formatting

You can apply conditional formatting to specific rows or columns using the [`label`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalFormatSettingsModel#label) option in the Pivot Table. The formatting is configured through the [`conditionalFormatSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel#conditionalformatsettings) option during initial rendering.

The following configuration options are required:

* [`label`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalFormatSettingsModel#label): Specifies the header name to apply conditions for a specific row or column
* [`conditions`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalFormatSettingsModel#conditions): Defines the type of comparison operator such as `Equals`, `GreaterThan`, or `LessThan`.
* [`value1`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalFormatSettingsModel#value1): Sets the comparison start value
* [`value2`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalFormatSettingsModel#value2): Sets the comparison end value (used for `Between` and `NotBetween` conditions).
* [`style`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalFormatSettingsModel#style): Defines the CSS styling to apply when the condition is met (background color, font color, etc.)

To use the conditional formatting feature, you need to inject the `ConditionalFormatting` module in the pivot table.

The code example below shows how to apply conditional formatting to the **Germany** row, highlighting cells with values between 500 and 50,000 in a specific style.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs154/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs154/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs154" %} 