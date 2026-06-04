---
layout: post
title: React Grid - Check box selection | Syncfusion
description: React Grid check box selection explains enabling checkbox columns, select-all behavior, and integration with selection APIs to manage multi-select scenarios.
control: Check box selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check box Selection in React Grid Component

Checkbox selection provides functionality to select multiple grid records through checkboxes in each row. This selection method allows efficient bulk operations on selected records within the grid.

To render checkboxes in each grid row, configure a checkbox column by setting the column [type](https://ej2.syncfusion.com/react/documentation/api/grid/column#type) property to `checkbox`.

Here's an example of enabling checkbox selection using the `type` property in the Grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs3" %}

> Selection can be persisted on all the operations using [selectionSettings.persistSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#persistselection) property. For persisting selection on the grid, any one of the column should be defined as a primary key using [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) property.

## Checkbox selection mode

The checkbox selection mode provides two options that can be configured through the [selectionSettings.checkboxMode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#checkboxmode) property:

* `Default`: This mode allows multiple row selection by clicking rows sequentially. When a row is clicked, the associated checkbox switches to the "checked" state.
* `ResetOnRowClick`: This mode resets previously selected rows when a new row is clicked. Multiple selections remain possible using <kbd>CTRL</kbd> **+ Click** for individual rows or <kbd>SHIFT</kbd> **+ Click** for row ranges.

In the following example, it demonstrates dynamically configuring the `checkboxMode` using the `DropDownList` component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const dropdownData = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' },

  ];
  const valueChange = (args) => {
    grid.selectionSettings.checkboxMode = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }} >Choose checkbox selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50' />
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dropdownData: { [key: string]: Object; }[] = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' },

  ];
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionSettings.checkboxMode = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }} >Choose checkbox selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50' />
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs4" %}

## Hide select-all checkbox

When the column type is set to [checkbox](https://ej2.syncfusion.com/react/documentation/api/grid/column#type), a select-all checkbox appears in the column header by default. To hide the select-all checkbox, define an empty [HeaderTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertemplate) directive in the grid column.

Here's an example of hiding selectall checkbox in column header using empty `HeaderTemplate` directive in the Grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/selection-checkbox-cs1" %}

## Conditional row selection

The `isRowSelectable` callback determines which rows can be selected by evaluating each row's data and returning `true` for selectable rows and `false` for those that should not be selectable.

**Local data:** The callback executes once during grid initialization, evaluating all records because the full dataset is available on the client side.

**Remote data:** The callback executes only for rows displayed on the current page when the grid first loads. The callback re-executes whenever the grid fetches new data, such as during paging, filtering, or sorting operations, to re-evaluate newly visible rows.

The example below prevents selection of rows with canceled orders:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/prevent-checkbox-selection/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/prevent-checkbox-selection/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/prevent-checkbox-selection/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/prevent-checkbox-selection/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/prevent-checkbox-selection" %}

## Select single row in checkbox selection mode

Single-row selection in checkbox mode ensures that only one row remains selected at a time, with any previous selections cleared when a new row is selected.

To configure single-row selection in checkbox mode, handle the [rowSelecting](https://ej2.syncfusion.com/react/documentation/api/grid#rowselecting) event and use the [clearSelection](https://ej2.syncfusion.com/react/documentation/api/grid#clearselection) method to clear previous selections before selecting a new row.

> When the [checkboxMode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#checkboxmode) property is set to `ResetOnRowClick`, clicking a new row automatically resets the previously selected row. This behavior applies to row clicks rather than checkbox clicks and represents the default grid behavior.

Here's an example of selecting a single row in checkbox selection mode using the `clearSelection` method along with the `rowSelecting` event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-checkbox-cs2" %}

## Checkbox only selection

By default, the Grid component allows selection by clicking either a grid row or the checkbox within that row. To restrict selection to checkbox clicks only, set the [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings#checkboxonly) property to `true`.
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-checkbox-cs3" %}

## See also
- [Selection overview](./selection)
- [Row selection](./row-selection)
- [Cell selection](./cell-selection)
- [Column selection](./column-selection)
- [Selection API](https://ej2.syncfusion.com/react/documentation/api/grid/selection)
