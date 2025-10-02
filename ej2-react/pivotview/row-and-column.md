---
layout: post
title: Row and column in React Pivot Table component | Syncfusion
description: Learn here all about Row and column in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Row and column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row and column in React Pivot Table component

To learn about how to use the row and column options effectively in the React Pivot Table, watch this video:

{% youtube "https://www.youtube.com/watch?v=eZipGFIYI7E" %}

## Width and Height

Setting appropriate dimensions for the Pivot Table ensures optimal display and better user experience across different screen sizes and layouts. You can define the Pivot Table's dimensions using the [`height`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#width) properties to meet your specific requirements.

These dimension properties support multiple formats to accommodate various layout scenarios and provide flexibility in how you define the component's size:

**Supported formats:**

* **Pixel**: Specify exact dimensions using numeric values or pixel units. For example: `100`, `200`, `"100px"`, or `"200px"`.
* **Percentage**: Set dimensions relative to the parent container. For example: `"100%"` or `"200%"`.
* **Auto**: This option is available only for the [`height`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#height) property. When set to **auto**, the Pivot Table expands beyond its parent container height without showing a vertical scrollbar within the component. Instead, the parent container displays its vertical scrollbar once the component exceeds its boundaries.

> **Note:** The Pivot Table maintains a minimum width of **400px** to ensure proper display and functionality, even if a smaller width is specified.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs250/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs250/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs250/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs250/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs250" %}

## Row Height

Adjusting the row height in the Pivot Table helps make your data easier to view and interact with, especially when there are many rows or large amounts of content. To make these adjustments, you can use the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#rowheight) property within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) options. This property allows you to control how much space each row occupies, so the Pivot Table remains clear and readable according to your needs.

> By default, the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#rowheight) is set to **36** pixels for desktop layouts and **48** pixels for mobile layouts. However, if you enable the grouping bar option, note that only the column header height may change, while the rest of the rows maintain the specified height.

For example, in the sample code below, the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#rowheight) property is set to **60** pixels. This increases the space for each row, making the data easier to read and compare.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs251/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs251/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs251/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs251/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs251" %}

## Column Width

Controlling the width of columns allows users to view their data in the Pivot Table more clearly, making each column easy to read and ensuring that information is not cut off. To achieve this, you can use the [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#columnwidth) property, which is available under the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings).

> By default, the [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#columnwidth) is set to **110** pixels for all columns except the first one. The first column is assigned a width of **250** pixels if the grouping bar is enabled, or **200** pixels when it is not. This ensures that the data in the row header is always easily visible.

In the following example, the [`columnWidth`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#columnwidth) property is set to **200** pixels for all columns to provide a wider view.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs252/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs252/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs252/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs252/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs252" %}

### Adjust width based on columns

By default, when the component width exceeds the total width of all columns, the columns are automatically stretched to fill the available space. To prevent this stretching behavior, set the [`allowAutoResizing`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#allowautoresizing) property to **false** within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings). This ensures that the Pivot Table adjusts its overall width to match the combined width of all columns, maintaining their original proportions and improving data readability.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs253/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs253/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs253/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs253/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs253" %}

## Reorder

The reorder option provides users with the flexibility to reorganize column headers within the Pivot Table by dragging and dropping them to different positions. This allows users to customize the layout of their data for better analysis and presentation.

To enable this option, set the [`allowReordering`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#allowreordering) property to **true** within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) configuration. Once enabled, users can simply click and drag any column header to move it to their desired position within the table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs254/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs254/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs254/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs254/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs254" %}

## Column Resizing

Column resizing in the Pivot Table helps users adjust the column widths to better view and compare data. Users can easily resize columns by clicking and dragging the right edge of any column header. As the user drags, the column’s width is updated immediately, offering a responsive and comfortable viewing experience.

This option is enabled by default. To control column resizing, set the [`allowResizing`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#allowresizing) property in the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) object to **true** or **false** as needed.

> In right-to-left (RTL) mode, users should click and drag the left edge of the header cell to resize the column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs255/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs255/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs255/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs255/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs255" %}

## Text Wrap

The Pivot Table allows users to wrap cell content to the next line when the content exceeds the boundary of the cell width. To enable text wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#allowtextwrap) property to **true** within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) configuration.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs256/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs256/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs256/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs256/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs256" %}

## Text Align

Text alignment provides flexibility in positioning content within cells, making the data presentation more organized and visually appealing. You can align the content of the Pivot Table's row headers, column headers, and value cells using the [`textAlign`](https://ej2.syncfusion.com/react/documentation/api/grid/gridColumn/#textalign) and [`headerTextAlign`](https://ej2.syncfusion.com/react/documentation/api/grid/gridColumn/#headertextalign) properties in the [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnrender) event under [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings). The available alignment options are:

* `Left` - Positions the content on the left side of the cell.
* `Right` - Positions the content on the right side of the cell.
* `Center` - Positions the content in the center of the cell.
* `Justify` - Distributes the content evenly across the cell width for optimal space utilization.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs257/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs257/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs257/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs257/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs257" %}

## AutoFit

The AutoFit option allows users to easily adjust Pivot Table columns so that each column matches the width of its content, making the data easier to read without cell content being cut off or wrapped unnecessarily. To accomplish this, you can use the [`autoFitColumns`](https://ej2.syncfusion.com/react/documentation/api/grid/#autofitcolumns) method from the grid instance, which automatically resizes all Pivot Table columns based on the content of their cells.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs258/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs258/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs258/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs258/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs258" %}

> When the grouping bar is enabled, the first column in the Pivot Table has a minimum width of **250** pixels, which cannot be decreased. In such cases, if you want to auto fit the remaining columns, you can call the [`autoFitColumns`](https://ej2.syncfusion.com/react/documentation/api/grid/#autofitcolumns) method from the grid instance, passing the field names of the Pivot Table columns except the first column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs259/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs259/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs259/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs259/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs259" %}

### Autofit Specific Columns

The autofit option for specific columns enables users to precisely control which columns automatically resize to fit their content, rather than adjusting all columns simultaneously. This targeted approach allows for greater customization of the Pivot Table layout based on specific content needs.

To implement this functionality during the initial rendering of the Pivot Table, set the `autoFit` parameter to **true** in the [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnrender) event. This event, available under the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) property, allows you to selectively apply autofit to columns based on your requirements.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs260/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs260/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs260/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs260/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs260" %}

## Grid Lines

The grid lines option provides visual structure to the Pivot Table by displaying cell borders, making it easier for users to read and analyze data. You can control the display of grid lines using the [`gridLines`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#gridlines) property within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) configuration.

The following grid line modes are available:

| Mode | Description |
|------|-------------|
| Both | Shows both horizontal and vertical grid lines around each cell |
| None | Hides all grid lines for a clean appearance |
| Horizontal | Shows only horizontal grid lines between rows |
| Vertical | Shows only vertical grid lines between columns |
| Default | Shows grid lines based on the applied theme settings |

> The Pivot Table displays grid lines in **Both** mode by default.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs261/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs261/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs261/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs261/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs261" %}

## Selection

Selection in the Pivot Table allows users to easily highlight rows, columns, or individual cells for better data focus and visualization. This makes it simple to compare and analyze specific data points within your table.

To enable selection, set the [`allowSelection`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#allowselection) property to **true** within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) configuration. This allows users to select table elements using a mouse click or arrow keys.

The Pivot Table provides two selection modes, controlled by the [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#type) property in [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#selectionsettings):

- **Single**: Allows you to select only one row, column, or cell at a time. This is the default mode.
- **Multiple**: Lets you select several rows, columns, or cells. To select multiple items, hold down the "CTRL" key and click the rows or cells you wish to select. To select a range, hold the "SHIFT" key and click the first and last item in the range.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs262/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs262/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs262/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs262/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs262" %}

### Selection mode

You can choose how selection works by setting the [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#mode) property within the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#selectionsettings) configuration. The Pivot Table offers four simple options for selection mode:

- **Row**: This is the default mode. It lets the user select an entire row with a single click.
- **Column**: In this mode, only entire columns can be selected.
- **Cell**: This mode allows the user to select one or more individual cells.
- **Both**: This option lets users select both rows and columns at the same time, providing more flexibility.

By choosing the right selection mode, users can quickly highlight and review the data that matters most to them.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs263/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs263/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs263/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs263/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs263" %}

### Cell Selection Mode

To set the cell selection mode, use the [`cellSelectionMode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#cellselectionmode) option within the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#selectionsettings). The available modes are:

- **Flow** (default): Selects a continuous range of cells from the starting cell to the ending cell, including all rows in between.
- **Box**: Selects a rectangular block of cells that spans from the starting cell to the ending cell, covering all intermediate rows and columns within the selected range.
- **BoxWithBorder**: This mode works like Box mode but also highlights the selected cells with borders for better visibility.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs264/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs264/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs264/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs264/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs264" %}

> To use cell selection modes, ensure that the [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#mode) property in [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#selectionsettings) is set to **Cell** or **Both** and the [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#type) property is set to **Multiple**. This allows users to select more than one cell at a time for better comparison and review.

### Changing background color of the selected cell

Highlighting selected cells in the Pivot Table with a different background color helps users quickly identify and focus on important data. To achieve this effect seamlessly, you can apply built-in CSS classes that customize the appearance of selected cells.

In the example below, selected cells appear with a **green-yellow** background. Simply add the custom styles to your stylesheet, and they will be applied when you select a cell using the mouse or arrow keys.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/selection-css-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/selection-css-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% include code-snippet/pivot-table/selection-css-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/selection-css-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/selection-css-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/selection-css-cs1" %}

### Event

#### CellSelected

When a user finishes selecting cells, the [`cellSelected`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselected) event is triggered. This event provides details about the selected cells, including the related row and column headers. The event holds three important parameters: [`selectedCellsInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotCellSelectedEventArgs/#selectedcellsinfo), [`currentCell`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotCellSelectedEventArgs/#currentcell), and [`target`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#target). Users can use this information to easily identify the selected data and share it with other parts of their application, such as for data binding or additional processing.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs265/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs265/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs265/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs265/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs265" %}

#### CellSelecting

The [`cellSelecting`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselecting) event triggers before a cell selection is completed. It helps users preview the details of the cell, including the related row and column headers, before making a final selection. The event also allows users to cancel the selection action if needed. This event includes the following parameters:

- [`currentCell`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotCellSelectedEventArgs/#currentcell): Contains information about the cell that the user is about to select.
- [`data`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotCellSelectedEventArgs/#data): Displays the data linked to the current cell, along with its row and column headings.
- [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotCellSelectedEventArgs/#cancel): Allows users to stop the cell from being selected if certain conditions are met.

You can use these parameters to decide whether or not the cell should be selected, or to update other parts of your application based on the selection about to happen.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs266/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs266/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs266/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs266/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs266" %}

### Limitations

The [grouping](./grouping) feature is applied based on the selected row or column headers using the following [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#selectionsettings): selection [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#mode) set to **Cell**, selection [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#type) set to **Multiple**, and [`cellSelectionMode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#cellselectionmode) set to **Box** by default. When using the selection and [grouping](./grouping.md) features together, cell selection is limited to row or column headers with these settings. Other settings, such as selection [`mode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#mode) set to **Row** or **Column**, selection [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#type) set to **Single**, or [`cellSelectionMode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/#cellselectionmode) set to **Flow**, are incompatible with [grouping](./grouping.md) in the pivot table.

## Clip Mode

The clip mode option in the Pivot Table determines how cell content is displayed when it exceeds the cell’s boundaries. You can set this option using the [`clipMode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#clipmode) property within the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings) configuration. The Pivot Table provides the following clip mode options:

- **Clip**: Cuts off any part of the cell content that does not fit within the cell.
- **Ellipsis**: Shows an ellipsis (`...`) at the end of the cell if the content is too long to fit.
- **EllipsisWithTooltip**: Shows an ellipsis (`...`) for overflowing content, and also displays the full content in a tooltip when the user hovers over the ellipsis.

> By default, the [`clipMode`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#clipmode) property is set to **Ellipsis**. This helps users quickly identify when there is more content hidden and easily view the complete information by hovering over the cell.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs267/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs267/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs267/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs267/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs267" %}

## Cell Template

You can change how each cell in the Pivot Table looks by using the [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#celltemplate) option. With [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#celltemplate), you can use either an HTML string or the ID of an HTML element to add custom content to every cell. This helps you display cell values in any format you prefer, such as adding icons, colors, or other elements for better understanding.

For example, in the following sample, each year's revenue cost is shown along with trend icons. This gives users a clear and quick way to see changes in data at a glance.

> The [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#celltemplate) property is triggered whenever the Pivot Table report configuration is updated through code-behind or UI actions such as sorting, filtering, and more. Therefore, binding a large dataset to the Pivot Table while defining a template for this property, or assigning a complex template to it, may lead to flickering issues in the Pivot Table UI.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs268/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs268/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs268/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs268/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs268" %}

## Events

### QueryCellInfo

The [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#querycellinfo) event is triggered when a row or value cell is rendered in the Pivot Table. This event gives users the ability to change the appearance or content of each table cell according to their needs. The following parameters are available within the event:

- [`cell`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#cell): Provides information about the specific cell currently being rendered.
- [`data`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#data): Contains all data related to the row in which the cell appears.
- [`column`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#column): Offers information about the column for the current cell.
- `pivotview`: Refers to the current instance of the Pivot Table.
- [`colSpan`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#colspan): Indicates how many columns the cell should span.
- [`rowSpan`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#rowspan): Indicates how many rows the cell should span.
- [`foreignKeyData`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#foreignkeydata): Displays any related row data linked through a foreign key for this column.
- [`requestType`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#requesttype): Shows the type of action or request currently taking place.

By using these parameters in the event, users can highlight cells, format values, or display extra information to make data analysis clearer and easier in the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs269/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs269/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs269/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs269/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs269" %}

### HeaderCellInfo

The [`headerCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#headercellinfo) event is triggered when the Pivot Table renders a header cell. This event allows users to easily modify the appearance or content of each header cell as it is displayed. It includes the following parameters:

- [`node`](https://ej2.syncfusion.com/react/documentation/api/grid/headerCellInfoEventArgs/#node): Contains details about the current header cell’s content and structure.
- [`cell`](https://ej2.syncfusion.com/react/documentation/api/grid/headerCellInfoEventArgs/#cell): Represents the specific cell being rendered.

By using these parameters, users can update header cell styles, add tooltips, or include icons based on their needs.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs270/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs270/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs270/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs270/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs270" %}

### ColumnRender

The [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnrender) event occurs while creating each column for display in the Pivot Table. This event lets users change how individual columns appear and behave. For example, users can set the text alignment, show or hide specific columns, enable autofit, allow reordering, and set minimum or maximum widths for each column.

The event provides the following parameters:

- [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/columnRenderEventArgs/#columns): Contains information about leaf-level columns, also known as value headers.
- [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/columnRenderEventArgs/#datasourcesettings): Contains the current data source settings, such as the input data, rows, columns, values, filters, and format settings.
- [`stackedColumns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/columnRenderEventArgs/#stackedcolumns): Contains information about drilled columns, including both column and value headers.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs271/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs271/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs271/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs271/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs271" %}

### CellClick

The [`cellClick`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellclick) event occurs when a user clicks a cell in the Pivot Table. With this event, users can update the style of the selected cell, edit its value, or perform other actions on the cell's content. The event provides the following parameters:

- [`currentCell`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellClickEventArgs/#currentcell): Contains details about the clicked cell.
- [`data`](https://ej2.syncfusion.com/react/documentation/api/pivotview/cellClickEventArgs/#data): Contains the clicked cell’s information, such as the axis, formatted text, raw text, row header, column header, and value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs272/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs272/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs272/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs272/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs272" %}

## See Also

* [Show/hide tooltip](./how-to/show-hide-tool-tip)
* [Perform cell selection and get selected cells information](./how-to/perform-cell-selection-and-get-selected-cells-information)
* [How to position the columns in a React Pivot Table according to the current year and its quarter?](https://support.syncfusion.com/kb/article/15568/how-to-position-the-columns-in-a-react-pivot-table-according-to-the-current-year-and-its-quarter)
* [How to highlight a specific row in a Pivot Table?](https://support.syncfusion.com/kb/article/14492/how-to-highlight-a-specific-row-in-a-pivot-table)
* [How to hide specific rows in a Pivot Table?](https://support.syncfusion.com/kb/article/14489/how-to-hide-specific-rows-in-a-pivot-table)