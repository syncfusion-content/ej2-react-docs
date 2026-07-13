---
layout: post
title: React Grid - Cell Editing | Syncfusion
description: React Grid cell editing provides streamlined edit workflows, server integration examples, and reliable strategies for saving updates.
control: Cell editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell editing in React Grid Component

Cell editing provides a streamlined way to update individual cell values directly within the grid. Cell editing is designed for quick, inline modifications, making data entry and corrections more efficient. This approach ensures that changes are applied seamlessly to large datasets while maintaining consistency with the Grid’s overall editing experience.
 
To enable cell editing in the Data Grid, configure the [editSettings->mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property to `Cell` and allow editing through the [editSettings->allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowediting) property. This setup provides a seamless inline editing experience, letting users quickly update individual cell values directly within the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/cell-edit-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/cell-edit-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/cell-edit-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/cell-edit-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/cell-edit-cs1" %}

> When editing is enabled, it is necessary to set the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#isprimarykey) property value to `true` for the unique column to ensure accurate data updates.

## Cancel edit based on condition

The Grid provides the ability to cancel the edit operations for particular cell based on specific conditions. This feature allows controlling whether editing should be allowed or prevented for certain cells in the grid. This functionality is achieved by leveraging the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event of the Grid component. This event is triggered when a CRUD (Create, Read, Update, Delete) operation is initiated in the grid.

This customization is useful when restricting editing for certain cells, such as read-only data, calculated values, or protected information. It helps maintain data integrity and ensures that only authorized changes can be made in the grid.

To cancel the edit operation based on a specific condition, handle the `actionBegin` event of the Grid component and check the `requestType` parameter. This parameter indicates the type of action being performed:

| Request Type | Description |
|--------------|-------------|
| `beginEdit` | Editing an existing record |
| `add` | Creating a new record |
| `save` | Updating a new or existing record |
| `delete` | Deleting an existing record |

Apply the desired condition and cancel the operation by setting the `args.cancel` property to `true`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/cell-edit-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/cell-edit-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/cell-edit-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/cell-edit-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/cell-edit-cs2" %}

## Single-click editing
 
Enabling single-click editing in the Syncfusion® React Grid’s `Cell` editing mode is a valuable and intuitive feature that makes a cell editable with just one click. This seamless experience is achieved by using the `editCell` method for rapid, efficient data modification.
 
To implement this, bind the `onClick` event for the grid and, within the event handler, call the `editCell` method based on the clicked target element. This ensures that the editing mode is triggered when clicking on a specific element within the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/cell-edit-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/cell-edit-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/cell-edit-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/cell-edit-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/cell-edit-cs3" %}