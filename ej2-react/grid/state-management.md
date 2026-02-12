---
layout: post
title: State management in React Grid component | Syncfusion
description: Learn here all about State management in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: State management 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State Management in React Grid Component

State management in the React Grid component enables maintaining the grid's state across browser refreshes and during navigation within the same browser session. This capability helps retain the grid's configuration and data after a page reload.

Enable state persistence in the grid using the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) property. When this property is set to `true`, the grid automatically saves its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#), preserving the state across page reloads.
```ts
<GridComponent dataSource={data} enablePersistence={true}></ejs-GridComponent>
```

> The Grid stores state using the combination of the component name and component ID in storage. For example, if the component name is "grid" and the ID is "OrderDetails", the state is stored as **gridOrderDetails**.

When enabling state persistence, the following grid settings will persist in the local storage.

Grid Settings |Properties persist |Ignored properties
-------|-------|-------|
pageSettings |currentPage<br>pageCount<br>pageSize<br>pageSizes<br>totalRecordsCount |template<br>enableQueryString
groupSettings |allowReordering<br>columns<br>disablePageWiseAggregates<br>enableLazyLoading<br>showDropArea<br>showGroupedColumn<br>showToggleButton<br>showUngroupButton |captionTemplate
columns |allowEditing<br>allowFiltering<br>allowGrouping<br>allowReordering<br>allowResizing<br>allowSearching<br>allowSorting<br>autoFit<br>disableHtmlEncode<br>enableGroupByFormat<br>field<br>foreignKeyField<br>index<br>showColumnMenu<br>showInColumnChooser<br>sortDirection<br>type<br>uid<br>visible<br>width |clipMode<br>commands<br>customAttributes<br>dataSource<br>defaultValue<br>displayAsCheckBox<br>editeditemplate<br>editType<br>filter<br>filterBarTemplate<br>filterTemplate<br>foreignKeyValue<br>format<br>formatter<br>freeze<br>headerTemplate<br>headerText<br>headerTextAlign<br>headerValueAccessor<br>hideAtMedia<br>isFrozen<br>isIdentity<br>isPrimaryKey<br>lockColumn<br>maxWidth<br>minWidth<br>sortComparer<br>template<br>textAlign<br>validationRules<br>valueAccessor
sortSettings |- |-
filterSettings |- |-
searchSettings |- |-
selectedRowIndex |- |-

The grid will persist only the last selected row index.

## Restore initial Grid state

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component, restoring the grid to its initial state reverts all changes. This is useful for returning the grid to original settings, removing applied filters, sorting, or column reordering.

The following steps describe the process of resetting the grid to its initial state, even when the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) property is enabled.

### Changing component id

Restoring the initial state of the grid can be achieved by changing the component ID. This causes the grid to be treated as a new instance, reverting to default settings.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/state-persistance-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/state-persistance-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/state-persistance-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/state-persistance-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/state-persistance-cs1" %}


### Clearing local storage

Clearing the local storage associated with the grid component resets the grid by removing stored state information and returning the grid to its original configuration.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs34/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs34/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs34/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs34" %}

## Restore to specific state version

Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports version-based persistence for restoration to a specific state. 

Steps to enable version-based persistence in the React Grid:

1. Import `enableVersionBasedPersistence` from `@syncfusion/ej2-base`.
2. Call `enableVersionBasedPersistence(true)` to turn on version-based persistence for the application.
3. Define the grid with the required properties and bind the data source.
4. Set the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) property on the grid to store and restore its state automatically.
5. Use the [ej2state-persistenceVersion](https://ej2.syncfusion.com/react/documentation/api/grid#ej2state-persistenceversion) property on the grid to define the version of the persisted state.

The example below assigns the targeted version to the grid's `ej2statepersistenceVersion` dynamically in a `clickHandler` method. The code checks local storage for a persisted state for the selected version; if found, the grid is updated with settings retrieved from local storage (columns, filterSettings, groupSettings, sortSettings, pageSettings, and selectedRowIndex). If no persisted state is found, the current grid state is saved to local storage using the [getPersistData](https://ej2.syncfusion.com/react/documentation/api/grid#getpersistdata) method.

The example below demonstrates integration of version-based persistence and restoration to a specific state version:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/state-persistance-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/state-persistance-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/state-persistance-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/state-persistance-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/state-persistance-cs2" %}

## Restore to previous state

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component supports saving and restoring state using local storage. This feature preserves the current state of the grid, such as column order, sorting, and filtering, enabling a return to previous configurations.

Implement this functionality using the `getItem` and `setItem` methods for local storage, along with the Grid component's `setProperties` and [getPersistData](https://ej2.syncfusion.com/react/documentation/api/grid#getpersistdata) methods.

The code below demonstrates saving and restoring the previous state of a Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component using local storage.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/state-persistance-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/state-persistance-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/state-persistance-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/state-persistance-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/state-persistance-cs3" %}

## Maintaining custom query in a persistent state

When [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) is enabled, the grid does not automatically maintain custom query parameters after a page load because the grid refreshes its query params on every load. Maintain custom query params by resetting the [addParams](https://ej2.syncfusion.com/documentation/api/data/query#addparams) method in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs35/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs35/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs35/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs35" %}

## Observable binding with state persistence

The Syncfusion React Grid supports state persistence with observable binding, ensuring the grid retains state across sessions. This is useful for real-time data updates or asynchronous data sources while preserving interactions such as sorting, filtering, paging, and grouping.

Implementing state persistence with observables requires manual handling of the initial query state. This involves:

* Retrieving the initial query using the grid’s [getDataModule](https://ej2.syncfusion.com/react/documentation/api/grid#getdatamodule) method with `generateQuery`.
* Obtaining the state from the query via `getStateEventArgument` method.
* Sending the retrieved state to the service to fetch data accordingly.

Except for the initial render, state persistence retains manually performed actions by storing the state in the browser’s `localStorage`, allowing persistence across page reloads. 

The following example demonstrates using the [created](https://ej2.syncfusion.com/react/documentation/api/grid#created) event to send the persisted state to the service at initial render:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/state-persistence-cs4/app/App.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/state-persistence-cs4/app/App.tsx %}
{% endhighlight %}

{% highlight js tabtitle="order-service.jsx" %}
{% include code-snippet/grid/state-persistence-cs4/app/order-service.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="order-service.tsx" %}
{% include code-snippet/grid/state-persistence-cs4/app/order-service.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/state-persistence-cs4" %}

## Get or set local storage value

If the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) property is set to `true`, the grid property value is saved in **window.localStorage** for reference. Get or set the localStorage value using the `getItem` and `setItem` methods in **window.localStorage**.

Retrieve the grid model from Local Storage as follows:

```typescript
// get the Grid model.
let value: string = window.localStorage.getItem('gridOrders'); // "gridOrders" is component name + component id.
let model: Object = JSON.parse(value);

```

```typescript
// set the Grid model.
window.localStorage.setItem('gridOrders', JSON.stringify(value)); // "gridOrders" is component name + component id.

```

## Prevent columns from persisting

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component, certain settings may need to be excluded from being saved when the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) feature is turned on. When the `enablePersistence` property is `true`, grid properties such as [Grouping](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings) [Paging](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings), [Filtering](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings), [Sorting](https://ej2.syncfusion.com/react/documentation/api/grid/sortSettings), and [Columns](https://ej2.syncfusion.com/react/documentation/api/grid/column) persist. To prevent specific properties from being persisted, the `addOnPersist` method can be used.

The following example demonstrates preventing grid columns from persisting. Override the `addOnPersist` method in the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event and remove the columns from the key list given for persistence.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs33/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs33/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs33/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs33/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs33" %}

## Add to persist

Persistence can be added to a Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component to enhance the application experience. Persistence allows saving and restoring the state of the grid, including column layouts, sorting, filtering, and other settings. This section describes the process of persisting column templates, header templates, and header text settings in the React Grid.

### Add a new column in persisted columns list

When the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) property is set to `true` in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component, column configurations are automatically persisted. To add new columns to an already persisted state, the grid’s built-in methods such as `push` can be used, followed by calling the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid#refreshcolumns) method to update the UI with the newly added columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs36/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs36/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs36/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs36/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs36" %}

> * Adding new columns using `ColumnDirectives` directly in the grid initialization is not recommended when intending to persist new columns with the existing columns list. 

### Persist the column template, header template and header text

By default, when the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid#enablepersistence) property is `true` in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted because these properties can be customized at the application level.

Restoring these column properties and achieving persistence requires cloning the grid's columns property using JavaScript Object's assign method and manually storing it along with the persist data. When restoring the settings, assign this cloned column object to the grid's columns property to restore the column settings. The sample below demonstrates this process:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs32/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs32/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs32/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs32/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs32" %}