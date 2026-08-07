---
layout: post
title: How to customize empty value cells in React Pivot Table | Syncfusion
description: Step-by-step example showing how to customize empty value cells in the React Pivot Table with custom text and styling.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize empty value cells in React Pivot Table

When working with the pivot table, certain combinations of row and column headers may not have corresponding data values, resulting in empty cells. The React Pivot Table component allows you to display custom text in these empty cells instead of leaving them blank, thereby improving the visual presentation and enhancing the user experience of your pivot table.

## Configuration

Use the [`emptyCellsTextContent`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#emptycellstextcontent) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) in the pivot table to define custom text for empty cells. This string option accepts any text value and applies it consistently across all empty cells in the pivot table.

### Basic Implementation

The following example demonstrates how to configure custom text for empty value cells during the initial rendering of the Pivot Table component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs160/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs160/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs160" %}
