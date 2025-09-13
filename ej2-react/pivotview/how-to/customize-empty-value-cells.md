---
layout: post
title: Customize empty value cells in React Pivotview component | Syncfusion
description: Learn here all about Customize empty value cells in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize empty value cells 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize empty value cells in React Pivotview component

When working with pivot table, certain combinations of row and column headers may not have corresponding data values, resulting in empty cells. The React Pivot Table component allows you to display custom text in these empty cells instead of leaving them blank, thereby improving the visual presentation and enhancing the user experience of your pivot table.

## Configuration

Use the [`emptyCellsTextContent`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#emptycellstextcontent) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#datasourcesettings) in the pivot table to define custom text for empty cells. This string option accepts any text value and applies it consistently across all empty cells in the pivot table.

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
