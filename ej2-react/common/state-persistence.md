---
layout: post
title: State persistence in React Common control | Syncfusion
description: Learn about state persistence for Syncfusion React components (localStorage-based persistence and `enablePersistence`).
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence in Syncfusion<sup style="font-size:70%">&reg;</sup> React components

Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components support persisting their state across page refreshes and navigation events. Enable this behavior by setting the `enablePersistence` property to `true` on the desired component instance. When enabled, the component serializes supported state to the browser's `localStorage` during the page unload lifecycle (for example, the `beforeunload` or `unload` events) and restores it when the component initializes. Persisted keys are namespaced by component and instance. To reset persisted state, remove the corresponding key from `localStorage` or set the `enablePersistence` property to `false` to disable persistence. For example, persistence can be enabled for the Grid component as shown below:

{% tabs %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/common/state-persistence-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/common/state-persistence-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/state-persistence-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/state-persistence-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/common/state-persistence-cs1" %}

## Components and properties supported for state persistence

The following table lists the Syncfusion<sup style="font-size:70%">&reg;</sup> React components that support state persistence and the properties stored in `localStorage`.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>component Name</b></td>
<td><b>Properties</b></td>
</tr>
<tr>
<td>Grid</td>
<td>
<ul>
<li>Columns (order, visibility, width, headerText, field)</li>
<li>filterSettings (applied filter descriptors and operators)</li>
<li>searchSettings (search text and target fields)</li>
<li>groupSettings (grouping columns and order)</li>
<li>pageSettings (current page, pageSize)</li>
<li>selectedRowIndex</li>
<li>scrollPosition (vertical and horizontal offsets)</li>
</ul>
</td>
</tr>
<tr>
<td>Accordion</td>
<td>
<ul>
<li>expandedIndices (array of expanded panel indices)</li>
</ul>
</td>
</tr>
<tr>
<td>Tabs</td>
<td>
<ul>
<li>selectedItem (selected tab index or identifier)</li>
</ul>
</td>
</tr>
<tr>
<td>Schedule</td>
<td>
<ul>
<li>currentView (Day/Week/WorkWeek/Month and custom views)</li>
<li>selectedDate</li>
<li>scrollLeft (horizontal pixel offset)</li>
<li>scrollTop (vertical pixel offset)</li>
</ul>
</td>
</tr>
<tr>
<td>Kanban</td>
<td>
<ul>
<li>columns (column order and headers)</li>
<li>dataSource (card ordering and data)</li>
<li>swimlaneToggleArray (swimlane collapsed/expanded states)</li>
</ul>
</td>
</tr>
<tr>
<td>Chart</td>
<td>
<ul>
<li>zoomFactor (numeric zoom scale)</li>
<li>zoomPosition (normalized zoom origin)</li>
</ul>
</td>
</tr>
<tr>
<td>Maps</td>
<td>
<ul>
<li>zoomSettings (level, center)</li>
</ul>
</td>
</tr>
<tr>
<td>Pivot Table</td>
<td>
<ul>
<li>dataSourceSettings (rows, columns, values, filters, field mappings)</li>
<li>pivotValues (aggregated values array and summary settings)</li>
<li>gridSettings (layout and formatting for generated pivot grid)</li>
<li>chartSettings (pivot chart configuration)</li>
<li>displayOption (grid/chart display preferences)</li>
</ul>
</td>
</tr>
<tr>
<td>TreeGrid</td>
<td>
<ul>
<li>columns (order, visibility, and column-specific options)</li>
<li>pageSettings (current page, pageSize)</li>
<li>searchSettings (search text and target fields)</li>
<li>filterSettings (filter descriptors and conditions)</li>
<li>selectedRowIndex</li>
<li>sortSettings (sort column and direction)</li>
</ul>
</td>
</tr>
<tr>
<td>Switch, Checkbox</td>
<td>
<ul>
<li>checked</li>
</ul>
</td>
</tr>
<tr>
<td>RadioButton</td>
<td>
<ul>
<li>checked</li>
<li>value (selected option value)</li>
</ul>
</td>
</tr>
<tr>
<td>ColorPicker, ListBox, In-placeEditor, RichTextEditor, <br>
Autocomplete, Calendar, ComboBox, DatePicker, DropDownList, <br>
MaskedTextBox, NumericTextBox, Textbox, TimePicker, Multiselect, <br> 
DateTimePicker, Slider, Dropdown Tree</td>
<td>
<ul>
<li>value (current value or selected item; type varies by component)</li>
</ul>
</td>
</tr>
<tr>
<td>QueryBuilder</td>
<td>
<ul>
<li>rule (array of rule objects defining conditions and logical operators)</li>
</ul>
</td>
</tr>
<tr>
<td>Splitter</td>
<td>
<ul>
<li>paneSettings (sizes, minimum/maximum, collapsible state)</li>
</ul>
</td>
</tr>
<tr>
<td>DateRangePicker</td>
<td>
<ul>
<li>startDate</li>
<li>endDate</li>
<li>value (selected date range)</li>
</ul>
</td>
</tr>
<tr>
<td>Uploader</td>
<td>
<ul>
<li>filesData (file metadata and upload status)</li>
</ul>
</td>
</tr>
<tr>
<td>ListView</td>
<td>
<ul>
<li>cssClass</li>
<li>enableRtl</li>
<li>htmlAttributes</li>
<li>enable</li>
<li>fields (data mapping for text, id, and other bindings)</li>
<li>animation</li>
<li>headerTitle</li>
<li>sortOrder</li>
<li>showIcon</li>
<li>height</li>
<li>width</li>
<li>showCheckBox</li>
<li>checkBoxPosition</li>
</ul>
</td>
</tr>
<tr>
<td>TreeView</td>
<td>
<ul>
<li>selectedNodes (array of selected node ids)</li>
<li>checkedNodes (array of checked node ids)</li>
<li>expandedNodes (array of expanded node ids)</li>
</ul>
</td>
</tr>
<tr>
<td>Dashboard Layout</td>
<td>
<ul>
<li>panels (panel positions, sizes, and widget settings)</li>
</ul>
</td>
</tr>
<tr>
<td>File Manager</td>
<td>
<ul>
<li>view (details/thumbnail list mode)</li>
<li>path (current folder path)</li>
<li>selectedItems (selected file/folder identifiers)</li>
</ul>
</td>
</tr>
<tr>
<td>Sidebar</td>
<td>
<ul>
<li>type</li>
<li>position</li>
<li>isOpen</li>
</ul>
</td>
</tr>
</table>

<!-- markdownlint-enable MD033 -->

See the following component documents to learn more about state persistence.

* [Grid](https://ej2.syncfusion.com/react/documentation/grid/state-persistence/state-persistence)
* [TreeGrid](https://ej2.syncfusion.com/react/documentation/treegrid/state-persistence/state-persistence)
* [Pivot Table](https://ej2.syncfusion.com/react/documentation/pivotview/state-persistence)
* [Gantt](https://ej2.syncfusion.com/react/documentation/gantt/state-persistence)
* [Kanban](https://ej2.syncfusion.com/react/documentation/kanban/persistence)
* [Schedule](https://ej2.syncfusion.com/react/documentation/schedule/state-persistence)
* [QueryBuilder](https://ej2.syncfusion.com/react/documentation/query-builder/how-to/state-persistence)
* [Tabs](https://ej2.syncfusion.com/react/documentation/tab/how-to/set-state-persistence-of-the-tab-component)