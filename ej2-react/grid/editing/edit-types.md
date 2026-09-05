---
layout: post
title: React Grid Edit Types | Syncfusion
description: Learn how to configure edit types in React Data Grid, choose appropriate cell editors, customize editing behavior, and manage column editing efficiently.
control: Edit types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Edit Types and Custom Editors in React Data Grid

The Data Grid supports built-in edit types and custom editors for editing data within grid cells. It provides editor interfaces for different data types and supports custom editing experiences to meet specific application requirements.

> For grid basic editing setup and configuration prerequisites, refer to the [Edit Feature Setup](./edit#set-up-editing). 

## Built-in cell editors

The Data Grid includes built-in cell editors that provide an appropriate editing interface based on the column data type. For example, a date column can use a `DatePicker` editor, while a numeric column can use a `NumericTextBox` editor. This helps ensure that data is entered in a format that matches the column's data type.

Cell editors can be enabled by setting the [editType](https://ej2.syncfusion.com/react/documentation/api/grid/editType) property in the grid column definition. Supported editors include `TextBox`, `NumericTextBox`, `DatePicker`, `DateTimePicker`, `CheckBox`, and `DropDownList` editors, enabling data entry and validation that align with the column's requirements. The available default edit types are as follows:

The available default edit types are as follows:

Component|Edit Type value |Description
----|-----|-----
[TextBox](../../textbox/getting-started)|`stringedit`|  Renders a TextBox component for string data type columns. 
[NumericTextBox](../../numerictextbox/getting-started)|`numericedit`| Renders a NumericTextBox component for integers, double, float, short, byte, long, long double, and decimal data types.
[DropDownList](../../drop-down-list/getting-started)|`dropdownedit`| Renders a DropDownList component for string data type columns with predefined options.
[CheckBox](../../check-box/getting-started)|`booleanedit`| Renders a CheckBox component for boolean data type columns.
[DatePicker](../../datepicker/getting-started)|`datepickeredit`| Renders a DatePicker component for date data type columns.
[DateTimePicker](../../datetimepicker/getting-started)|`datetimepickeredit`| Renders a DateTimePicker component for date-time data type columns.

The following example demonstrates how to define the `editType` for grid columns:

```ts
    <ColumnDirective field="CustomerName" headerText="Customer Name" editType="stringedit"></ColumnDirective>
    <ColumnDirective field="Freight" headerText="Freight" editType="numericedit"></ColumnDirective>
    <ColumnDirective field="ShipCountry" headerText="Ship Country" editType="dropdownedit"></ColumnDirective>
    <ColumnDirective field="OrderDate" headerText="Order Date" editType="datepickeredit"></ColumnDirective>
    <ColumnDirective field="OrderTime" headerText="Order Time" editType="datetimepickeredit"></ColumnDirective>
    <ColumnDirective field="Verified" headerText="Verified" editType="booleanedit"></ColumnDirective>
```

> When the edit type is not defined for a column, the Data Grid defaults to the `stringedit` edit type and displays a `TextBox` editor for editing values.

## Customize built-in TextBox editor 

The [TextBox](../../textbox/getting-started) editor can be customized by configuring its component properties through the [columns.edit.params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) option. This allows TextBox features, behavior, and appearance to be customized during editing.

Component|Edit Type |Description|Example Customized edit params
-----|---|-----|-----|
[TextBox](../../textbox/getting-started) |stringedit| The `stringedit` type renders a TextBox component for string data type columns. To customize the `TextBox` component, refer to the [TextBox API documentation](https://ej2.syncfusion.com/react/documentation/api/textbox) for detailed information on available properties | params: { showClearButton : true}

The following sample code demonstrates the customization applied to `TextBox` component of "Customer ID" grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs9" %}

## Customize built-in NumericTextBox editor

The [NumericTextBox](../../numerictextbox/getting-started) editor can be customized by configuring its component properties through the grid [columns->edit->params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit)  property. This allows `NumericTextBox` features, behavior, and appearance to be customized during editing.

Component| Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[NumericTextBox](../../numerictextbox/getting-started)|numericedit| The `numericedit` type renders a NumericTextBox component for integers, double, float, short, byte, long, long double and decimal data types columns. To customize the `NumericTextBox` component, refer to the [NumericTextBox API documentation](https://ej2.syncfusion.com/react/documentation/api/numerictextbox) for detailed information on available properties. | params: { decimals: 2, value: 5 }

The following sample code demonstrates the customization applied to `NumericTextBox` component of "Freight" grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs1" %}

### Restrict decimal input in NumericTextBox while editing

[NumericTextBox](../../numerictextbox/getting-started) allows decimal input by default. To restrict entries to whole numbers, use the [validateDecimalOnType](https://ej2.syncfusion.com/react/documentation/api/numerictextbox#validatedecimalontype) (set to `true` to block decimals) and [decimals][decimals](https://ej2.syncfusion.com/react/documentation/api/numerictextbox#decimals) properties.

In this demo, while editing a row, decimal values are restricted when typing into the `NumericTextBox` of the "Freight" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs4" %}

## Customize built-in DropDownList editor

Customize the [DropDownList](../../drop-down-list/getting-started) editor via [columns->edit->params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit). This allows configuration of DropDownList properties for string columns.

Component|Edit Type |Description| Example Customized edit params
-----|-----|-----|----|
[DropDownList](../../drop-down-list/getting-started)|dropdownedit|  The `dropdownedit` type renders a DropDownList component for string data type columns. To customize the DropDownList component, refer to the [DropDownList API documentation](https://ej2.syncfusion.com/react/documentation/api/drop-down-list) for detailed information on available properties.  | params: { value: 'Germany' }

The following sample code demonstrates the customization applied to `DropDownList` component of "Ship City" grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs2" %}

### Bind external data to DropDownList

The Data Grid provides a custom data source for the `DropDownList` component in the edit form. This feature allows you to define a specific set of values for the `DropDownList`.

To achieve this, utilize the [columns->edit->params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property. This property allows definition of the edit params for the column within the grid.

When setting a new data source using the edit params, specify a new [query](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#query) property for the DropDownList. The `query` property allows definition of custom queries for data retrieval and filtering.

In the below demo, `DropDownList` is rendered with custom data source for the "Ship Country" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/cascade-drop-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/cascade-drop-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/cascade-drop-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/cascade-drop-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/cascade-drop-cs1" %}

### DropDownList editor with filter support

The Data Grid component provides filtering for the `DropDownList` within the edit form. This feature enables selection of options from a predefined list and easier search for specific items using the built-in filtering feature.

Enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#allowfiltering) property to `true` within the edit params. This enables the filtering feature in the `DropDownList`.

In the following demo, filtering is enabled for the "Ship Country" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs3" %}

### DropDownList popup on focus

Open the dropdown edit popup with a single click by focusing the dropdown element. This feature enables quick access and interaction with the dropdown options without the need for an additional click.

To achieve this, utilize the [showPopup](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#showpopup) method provided by the EJ2 DropDownList component. This method can be invoked within the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event of the grid, which triggers when an action, such as editing, is completed. By calling the `showPopup` method in this event, open the popup for the dropdown edit.

To ensure that the dropdown column is the clicked edit target, set a global flag variable in the `mouseup` event along with `load` event. This flag variable determines if the clicked element corresponds to the dropdown column.

The following sample demonstrates how to open the popup when focusing on the edit cell using the `actionComplete` and `load` events:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs4" %}

## Customize built-in CheckBox editor

Customize the [CheckBox](../../check-box/getting-started) component using the  [columns->edit->params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property.

Component| Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[CheckBox](../../check-box/getting-started)| booleanedit | The `booleanedit` type renders a `CheckBox` component for boolean data type. To customize the CheckBox component, refer to the [CheckBox API documentation](https://ej2.syncfusion.com/react/documentation/api/check-box) for detailed information on available properties. | params: { checked: true}

The following sample code demonstrates the customization applied to `CheckBox` component of "Verified" grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs5" %}

## Customize built-in DatePicker editor

Enhance the [DatePicker](../../datepicker/getting-started) component in grid edit form by customizing its properties. This enables configuration of various DatePicker features, tailoring its behavior and appearance to match specific requirements within the grid. Fine-tune the editor component behavior through the [columns->edit->params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property for date selection behavior.

Component| Edit Type |Description|Example Customized edit params
-----|-----|-----|----|
[DatePicker](../../datepicker/getting-started)| datepickeredit | The `datepickeredit` type renders a `DatePicker` component for date data type columns. To customize the DatePicker component, refer to the [DatePicker API documentation](https://ej2.syncfusion.com/react/documentation/api/datepicker) for detailed information on available properties. | params: { format:'dd.MM.yyyy' }
 
The following sample code demonstrates the customization applied to `DatePicker` component of "Order Date" grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs6" %}

### Restrict minimum selectable date in DatePicker

Set a minimum selectable date dynamically in the DatePicker editor by configuring the minimum property in `edit` params. This prevents selection of dates prior to a specified value.

Example with dynamic min date:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hide-dates-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hide-dates-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hide-dates-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hide-dates-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/hide-dates-cs1" %}

## Customize built-in DateTimePicker editor

Enhance the `DateTimePicker` component in grid edit form by customizing its properties. This enables configuration of various DateTimePicker features, tailoring its behavior and appearance to match specific requirements within the grid. Fine-tune the editor component behavior through the [columns->edit->params](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property for powerful date-time selection control.

Component|Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[DateTimePicker](../../datetimepicker/getting-started)| datetimepickeredit | The `datetimepickeredit` type renders a `DateTimePicker` component for date time data type columns. Customize the DateTimePicker component by referring to the [DateTimePicker API documentation](https://ej2.syncfusion.com/react/documentation/api/datetimepicker) for detailed information on available properties. | params: { value: new Date() }
 
The following sample code demonstrates the customization applied to DateTimePicker component of "Order Date" grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs7" %}

## Render custom editor components

Render custom editors for grid columns using the [editTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#edittemplate) property, and for advanced scenarios, by using custom create, write, read, and destroy methods in the [edit](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property.

> For custom components in `editTemplate`, use two-way binding (@bind-Value) to ensure updates propagate to the Grid.

### Render TextArea in the edit form

The React Data Grid allows rendering a multiline [TextBox](../../textbox/multiline.md) component within the grid's edit form for a specific column. This enables editing and displaying multi-line text content, providing an efficient way to manage extensive text data.

> When using a multiline textbox, use <kbd>Shift+Enter</kbd> to move to the next line. By default, pressing <kbd>Enter</kbd> will trigger a record update while in edit mode.

The following example demonstrates rendering a `TextArea` component in the "Ship Address" column of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid. The [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid/valueAccessor) property is utilized to split the text into multiple lines within the grid column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs9" %}

**Prevent Enter key from saving edits in a multiline textbox**

Edit operation behavior in normal or dialog edit modes causes the current edit to be committed when the <kbd>ENTER</kbd> key is pressed. This behavior also applies to columns rendered with a multiline [TextBox](../../textbox/multiline.md), resulting in the edit operation being saved instead of inserting a new line. In multiline text input scenarios, inserting a line break within the text content is typically the expected behavior.

Support for this behavior requires handling the keyboard event at the TextBox component level and preventing it from propagating to the grid. This approach allows the multiline TextBox to process the <kbd>ENTER</kbd> key independently of the grid editing workflow.

The following example demonstrates preventing the <kbd>ENTER</kbd> key action in a multiline TextBox during grid editing by handling the `keydown` event during the TextBox component’s `created` lifecycle event and stopping event propagation using the `stopPropagation` method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs10" %}

### Render AutoComplete component in edit form 

The Data Grid allows rendering an [AutoComplete](../../auto-complete/getting-started) component within the grid's edit form for a specific column. This feature is especially valuable for providing dropdown-like auto-suggestion and input assistance for data entry in the grid's columns.

The following example demonstrates rendering an `AutoComplete` component in the "Customer ID" column of the grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs11" %}

### Render MaskedTextBox in edit form 

The Data Grid allows rendering a [MaskedTextBox](../../maskedtextbox/getting-started) component within the grid's edit form for a specific column. This provides masked input fields for specific formats such as phone numbers or postal codes.

The following example demonstrates rendering a `MaskedTextBox` component in the "Customer Number" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs13" %}

### Render DropDownList in edit form 

The Data Grid allows rendering a [DropDownList](../../drop-down-list/getting-started) component within the grid's edit form for a specific column. This provides convenient selection of options from a predefined list during editing.

The following example demonstrates rendering a `DropDownList` component in the "Ship Country" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs13" %}

### Render images in the DropDownList using the item template

The React Data Grid allows rendering images in the [DropDownList](../../drop-down-list/getting-started) editor component, enhancing visual representation by displaying images for each dropdown item.

Use the [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#itemtemplate) property to customize the content of each item in the dropdown list.

The following example demonstrates rendering images in the `DropDownList` editor component using the `itemTemplate` within the "Employee Name" column of the grid. Additionally, the `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs14" %}

### Render multiple columns in DropDownList  

The React Data Grid allows rendering a [DropDownList](../../drop-down-list/getting-started) component with multiple columns during editing, displaying detailed information for each item.

Use the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#headertemplate) and [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#itemtemplate) properties of the `DropDownList` component to render multiple columns.

The following example demonstrates rendering a `DropDownList` component with multiple columns within the "Ship Country" column. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/multicolumn-dropdown-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/multicolumn-dropdown-cs1" %}

### Render ComboBox in edit form 

The Data Grid allows rendering a [ComboBox](../../combo-box/getting-started) component within the grid's edit form for a specific column. This provides drop-down selection with auto-suggestions for data entry.

The following example demonstrates rendering a `ComboBox` component in the "Ship Country" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs12" %}

### Render TimePicker in edit form 

The Data Grid allows rendering a [TimePicker](../../timepicker/getting-started) component within the Grid's edit form for a specific column. This provides time input for appointment times, event schedules, or other time-related data.

The following example demonstrates rendering a `TimePicker` component in the "Order Date" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs10" %}

> The `TimePicker` component displays only the time portion. However, all grid data operations—including editing, validation, and CRUD actions—are performed using a Date object value. The displayed time format does not change the underlying data type used by the grid.

### Render MultiSelect in edit form 

The React Data Grid allows rendering a [MultiSelect](../../multi-select/getting-started) component within the grid's edit form, enabling selection of multiple values from a dropdown list when editing a specific column.

The following example demonstrates rendering a `MultiSelect` component in the "Ship City" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs12" %}

> When a `MultiSelect` editor is used, values are stored as a comma‑separated string in the grid data source. All grid data operations are performed based on this combined string value, as grid columns do not support array‑type values

### Render RichTextEditor in edit form

The React Data Grid allows rendering the [RichTextEditor](../../rich-text-editor/getting-started) component within the edit form. This enables formatting and styling text content using bold, italic, underline, bullet lists, numbered lists, and other formatting options.

Set the [allowTextWrap](https://ej2.syncfusion.com/react/documentation/api/grid#allowtextwrap) property of the corresponding grid column to `true` to allow the rich text editor component to automatically adjust its width and wrap text content to fit within column boundaries.

The following example demonstrates rendering a `RichTextEditor` component in the "Ship Address" column of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid. The `actionBegin` event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs14" %}

### Render Uploader in edit form  

The React Data Grid allows rendering an [Uploader](../../uploader/getting-started) component within the grid's edit form. This enables uploading and managing files or images in a specific column during data editing.

The following example demonstrates rendering an `Uploader` component in the "Order Image" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs15" %}

> By default, the grid saves the cell when clicking outside the editor component. If components, like multiple popups, are dynamically rendered, the grid may not recognize them, causing the editor to close when the popup is clicked. To prevent this, apply the `edit-custom-template` class to both the main component and sub-components. If Syncfusion<sup style="font-size:70%">&reg;</sup> components are being used, set their `cssClass` property to include the `edit-custom-template` class.

## Rendering custom cell editors using external functions

The Data Grid provides powerful capabilities for rendering custom cell editors, enabling the addition of specialized custom components to specific columns. This feature is essential for editing cell values using custom input elements or controls tailored to specific data types or workflows.

To utilize the custom cell editor template feature, implement these four essential functions:

| Function | Purpose | When Triggered |
|----------|---------|--------|
| `create` | Create the DOM element or component container | During component initialization |
| `write` | Create the custom component and assign default values | When editing begins on the cell |
| `read` | Extract and return the edited value from the component | When saving changes to the cell |
| `destroy` | Clean up and remove the component | When exiting edit mode or closing the editor |

### Render AutoComplete in edit form

The Syncfusion React Grid allows rendering the [AutoComplete](../../auto-complete/getting-started) within the edit form by using the cell edit template feature. This feature enables selection of values from a predefined list during the editing of a specific column. It is especially valuable for providing a dropdown-like auto-suggestion and input assistance for data entry in the grid's columns.

Define the cell edit template for the column using the [edit](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property. This property specifies the necessary functions for creating, reading, and writing the AutoComplete into the specific column.

The following example demonstrates how to render a `Autocomplete` in the "Customer ID" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

{% include code-snippet/grid/editing-cs11/app/App.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/grid/editing-cs11/app/App.tsx %}
{% endhighlight %}

{% highlight js tabtitle="datasource.jsx" %}

{% include code-snippet/grid/editing-cs11/app/datasource.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.tsx" %}

{% include code-snippet/grid/editing-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs11" %}

### Render cascading DropDownList in edit form 

The React Data Grid allows rendering the cascading [DropDownList](../../drop-down-list/getting-started) within the edit form by using the cell edit template feature. This feature is especially useful for establishing a hierarchy of options, such as choosing a country and then selecting a state based on the chosen country.

Define the cell edit template for the column using the [edit](https://ej2.syncfusion.com/react/documentation/api/grid/column#edit) property. This property specifies the necessary functions for creating, reading, and writing the cascading DropDownList.

In the below demo, cascading `DropDownList` rendered for "Ship Country" and "Ship State" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

{% include code-snippet/grid/cascade-drop-cs2/app/App.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/grid/cascade-drop-cs2/app/App.tsx %}
{% endhighlight %}

{% highlight js tabtitle="datasource.jsx" %}

{% include code-snippet/grid/cascade-drop-cs2/app/datasource.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.tsx" %}

{% include code-snippet/grid/cascade-drop-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/cascade-drop-cs2" %}

## Access editor components using instances

Accessing editor components in the React Data Grid enables seamless interaction with editor instances associated with cells during editing or adding actions. This feature is especially valuable when performing custom actions, retrieving data from the editor, or manipulating its properties during editing or adding operations in the grid.

Access the component instance from the component element using the `ej2_instances` property. This property provides access to the instance of the editor component associated with a cell.

In the below demo, access the editor component instance while adding or editing actions in the `actionComplete` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/edit-type-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/edit-type-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/edit-type-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/edit-type-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/edit-type-cs8" %}