---
layout: post
title: Select cells and get selection info in React Pivotview | Syncfusion
description: Learn here all about Perform cell selection and get selected cells information in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Perform cell selection and get selected cells information 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Select cells and get selection info in React Pivotview component

The React Pivot Table component allows users to select cells or rows by enabling the [allowSelection](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#allowselection) property in the [gridSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/) configuration. Once enabled, users can highlight selected cells using a mouse click or arrow keys. This guide explains how to configure selection modes, types, and handle the [cellSelected](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselected) event to retrieve selected cell information.

## Selection modes

The Pivot Table supports four selection modes, which can be set using the [mode](https://ej2.syncfusion.com/react/documentation/api/pivotview/selectionSettings/#mode) property in [gridSettings.selectionSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/selectionSettings/). These modes determine what parts of the table can be selected:

- **Row**: This is the default mode. It allows users to select entire rows only.
- **Column**: This mode allows users to select entire columns only.
- **Cell**: This mode allows users to select individual cells only.
- **Both**: This mode allows users to select both rows and columns simultaneously.

## Selection types

The Pivot Table offers two selection types, configurable through the [type](https://ej2.syncfusion.com/react/documentation/api/pivotview/selectionSettings/#type) property in [gridSettings.selectionSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/selectionSettings/). These types define how many items can be selected:

- **Single**: This is the default type. It allows users to select only one row, column, or cell at a time.
- **Multiple**: This type allows users to select multiple rows, columns, or cells. To select multiple items, hold the **Ctrl** key and click the desired rows, columns, or cells. To select a range, hold the **Shift** key and click the start and end rows, columns, or cells.

## Handling the cellSelected event

The [`cellSelected`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselected) event triggers whenever a cell, row, or column is selected or deselected. This event provides details about the selected cells, including their corresponding row and column headers, through the [`selectedCellsInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotCellSelectedEventArgs/#selectedcellsinfo) property. Additionally, the [`pivotValues`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pivotvalues) property provides access to the Pivot Table's data structure.

## Code example

The following example demonstrates how to enable multiple cell selection in the Pivot Table and handle the [cellSelected](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselected) event to retrieve selected cell information.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs166/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs166/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs166" %}