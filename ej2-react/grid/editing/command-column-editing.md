---
layout: post
title: React Grid - Command Column Editing | Syncfusion
description: Learn how to implement command column editing in React Grid for streamlined CRUD operations with built-in and custom command buttons.
control: Command column editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Command Column Editing in React Grid Component

The command column editing feature enables seamless CRUD (Create, Read, Update, Delete) action buttons in a column for performing operations on individual rows. This powerful feature is particularly useful when inline editing, deletion, or saving of row changes is required directly within the grid interface.

> For basic editing setup and configuration, refer to the [Editing Feature Setup](../editing#set-up-editing).

## Enable command column editing

Command column editing is activated through the [commands](https://ej2.syncfusion.com/react/documentation/api/grid/column#commands) property. This property specifies which command buttons display in the command column, such as `Edit`, `Delete`, `Save`, and `Cancel`.

The `CommandColumn` module must be injected into the grid to enable command column functionalities. Inject the service as shown in the following code:

```ts
import { GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { CommandColumn } from '@syncfusion/ej2-react-grids';

<GridComponent>
  <Inject services={[CommandColumn]} />
  {/* Grid configuration */}
</GridComponent>
```

The available built-in command buttons are: 

| Command Button | Actions |
|----------------|---------|
| `Edit` | Enables inline editing for the current row |
| `Delete` | Removes the current row from the grid |
| `Save` | Updates changes made to the edited row |
| `Cancel` | Discards changes and exits edit mode |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs6" %}

## Custom command column

The custom command column feature extends the Grid component's capabilities by enabling custom command buttons in a column to perform specific actions on individual rows. This is particularly powerful when specialized functionality for editing, deletion, or custom operations is required beyond the built-in command set.

Custom command buttons utilize the [commands](https://ej2.syncfusion.com/react/documentation/api/grid/column#commands) property for definition. The [commandClick](https://ej2.syncfusion.com/react/documentation/api/grid#commandClick) event handles the custom button click actions, enabling any operation such as displaying grid details in a dialog or triggering custom workflows.

The following code demonstrates how to implement custom command buttons with the `commands` property and handle custom actions through the `commandClick` event to display grid details in a dialog:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/editing-cs7" %}