---
layout: post
title: State management in React Grid component | Syncfusion
description: Learn here all about State management in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: State management 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State Management in React Grid component

State management in the React Grid component allows you to maintain the grid's state even after a browser refresh or when navigating to a different page within the same browser session. This feature is particularly useful for retaining the grid's configuration and data even after a page reload.

To enable state persistence in the Grid, you can utilize the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) property. When this property is set to **true**, the grid will automatically save its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#), ensuring that the state is preserved across page reloads.

```ts
<GridComponent dataSource={data} enablePersistence={true}></ejs-GridComponent>
```

> The grid will store the state using the combination of the component name and component ID in the storage. For example, if the component name is **grid** and the ID is **OrderDetails**, the state will be stored as **gridOrderDetails**.

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

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component, you have the capability to restore the grid to its initial state, reverting all changes and configurations made during the interaction. This feature can be particularly useful when you want to reset the grid to its original settings, eliminating any applied filters, sorting, or column reordering.

Here are the steps to reset the grid to its initial state, even when the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) property is enabled:

### Changing component id

If you want to restore the initial state of the grid, consider changing the component ID. This step ensures that the grid is treated as a new instance, effectively reverting to its default settings.

Here is an example code to change the component id dynamically to restore initial grid state.

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

Another method to reset the grid is by clearing the local storage associated with the grid component. This action removes any stored state information, allowing the grid to return to its original configuration.

Here is an example code on how to clear local storage to retain its default state.

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

Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports version-based persistence for easy restoration to a specific state. To enable version based persistence, import `enableVersionBasedPersistence` from `@syncfusion/ej2-base` and set it globally to **true**. Define the grid in the template with properties, bind data, and configure persistence using [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) and [ej2state-persistenceVersion](https://ej2.syncfusion.com/react/documentation/api/grid/#ej2state-persistenceversion). 

In the below example, the `clickHandler` method is responsible for handling button clicks corresponding to different versions. Inside this method, the targeted version is assigned to the grid's `ej2statepersistenceVersion` dynamically. The code checks if there is already a persisted state for the selected version in the local storage. If found, the grid is updated with the settings retrieved from the local storage, including columns, filter settings, group settings, sort settings, page settings, and selected row index. If no persisted state is found, the current grid state is persisted to the local storage using the [getPersistData](https://ej2.syncfusion.com/react/documentation/api/grid/#getpersistdata) method.

Here is an example of how to integrate version-based persistence into your React component and restore to specific state version:

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows you to save and restore its state using local storage. This feature is helpful when you want to preserve the current state of the Grid, such as column order, sorting, and filtering, so that you can return to your previous work or configurations.

To implement this functionality, use the `getItem` and `setItem` methods for local storage, along with the Grid component's `setProperties` and [getPersistData](https://ej2.syncfusion.com/react/documentation/api/grid/#getpersistdata) methods.

The provided code demonstrates how to save and restore the previous state of a Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component using local storage.

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

When [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) is enabled, the Grid does not automatically maintain custom query parameters after a page load. This is because the Grid refreshes its query params for every page load. You can maintain the custom query params by resetting the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event.

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

## Observables binding with state persistence

The Syncfusion React Grid supports state persistence when using observable binding, ensuring that the Grid retains its state across sessions. This is useful when dealing with real-time data updates or asynchronous data sources while preserving user interactions such as sorting, filtering, paging, and grouping.

To implement state persistence with observables, the initial query state must be manually handled. This involves:

    * Retrieving the initial query using the Grid’s [getDataModule](https://ej2.syncfusion.com/react/documentation/api/grid/#getdatamodule) method with `generateQuery`.

    * Obtaining the state from the query via `getStateEventArgument` method.

    * Sending the retrieved state to the service to fetch data accordingly.

Except for the initial render, state persistence ensures that manually performed actions are retained by storing the state in the browser’s `localStorage`, allowing it to persist across page reloads. The following example demonstrates how to use the [created](https://ej2.syncfusion.com/react/documentation/api/grid/#created) event to send the persisted state to the service at initial render:

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

If the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) property is set to **true**, the Grid property value is saved in the **window.localStorage** for reference. You can get or set the localStorage value by using the **getItem** and **setItem** methods in **window.localStorage**.

To retrieve the Grid model from Local Storage, follow these steps:

```typescript
//get the Grid model.
let value: string = window.localStorage.getItem('gridOrders'); //"gridOrders" is component name + component id.
let model: Object = JSON.parse(value);

```

```typescript
//set the Grid model.
window.localStorage.setItem('gridOrders', JSON.stringify(value)); //"gridOrders" is component name + component id.

```

## Prevent columns from persisting

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component, you may sometimes want to prevent certain settings from being persisted when using the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) feature. When the `enablePersistence` property is set to **true**, the Grid properties such as [Grouping](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings/), [Paging](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/), [Filtering](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/), [Sorting](https://ej2.syncfusion.com/react/documentation/api/grid/sortSettings/), and [Columns](https://ej2.syncfusion.com/react/documentation/api/grid/column/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

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

Persistence can be added to a Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component to enhance the user experience. Persistence allows saving and restoring the state of the grid, including column layouts, sorting, filtering, and other user-specific settings. In this documentation, you will explore how to persist column templates, header templates, and header text settings in the React Grid.

### Add a new column in persisted columns list

When the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) property is set to true in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component, column configurations are persisted. If you need to add new columns to the existing persisted state, you can achieve this by using the Grid's built-in methods like `push`, and then call the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#refreshcolumns) method to update the UI with the new columns.

Here's an example of how to add a new column to a list of persisted columns:

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

> * Adding new columns using `ColumnDirectives` directly in the grid initialization is not recommended if you intend to persist the new columns with the existing columns list 

### Persist the column template, header template and header text

By default, when the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/grid/#enablepersistence) property is set to **true** in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted. This is because these properties can be customized at the application level.

To restore these column properties and achieve persistence, you can follow the approach of cloning the grid's columns property using JavaScript Object's assign method and manually storing it along with the persist data. When restoring the settings, this cloned column object must be assigned to the grid's columns property to restore the column settings. The following sample demonstrates this process:

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