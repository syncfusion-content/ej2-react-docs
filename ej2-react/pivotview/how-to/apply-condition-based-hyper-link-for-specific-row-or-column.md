---
layout: post
title: How to apply a condition-based hyperlink in React Pivot Table | Syncfusion
description: Step-by-step example showing how to apply a condition-based hyperlink in the React Pivot Table using conditionalSettings in hyperlinkSettings.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to apply a condition-based hyperlink in React Pivot Table

In the Pivot Table, you can display hyperlinks in specific rows or columns by setting up certain conditions. This can be done using the [`conditionalSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#conditionalsettings) property, which is available within the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettings/) object.

The following options are available under the [`conditionalSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#conditionalsettings) to configure the hyperlinks:

*   [`label`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#label): Defines the specific row or column header where the hyperlink should appear.
*   [`conditions`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#conditions): Sets the condition type, such as `Equals`, `GreaterThan`, or `LessThan`.
*   [`value1`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#value1): Sets the starting value for the condition.
*   [`value2`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#value2): Sets the ending value for the condition (used for `Between` and `NotBetween` conditions).
*   [`measure`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#measure): Defines the measure, or value field, to which the hyperlink should be applied.

In the following example, the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettings/) property is configured to show a hyperlink for cells under the **Germany** header. The hyperlink will only appear if the cell's value is greater than 500. This is achieved by setting the [`label`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#label) to **Germany**, the [`conditions`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#conditions) to **GreaterThan**, and [`value1`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#value1) to **500**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs153/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs153/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs153" %}
