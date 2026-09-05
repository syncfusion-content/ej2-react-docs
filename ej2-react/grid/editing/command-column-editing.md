---
layout: post
title: React Grid Command Column Editing | Syncfusion
description: Learn how to enable command column editing in React Data Grid with built-in edit, save, and delete actions, customizable buttons, and event handling.
control: Command column editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Command Column Editing in React Data Grid

The command column feature provides built‑in action buttons within a dedicated column, enabling direct interaction with individual rows. These commands can be configured for editing, saving, and deleting records, as well as for custom operations such as viewing details or integrating external actions. This approach streamlines row‑level interactions and ensures a consistent experience within the grid interface.

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

> For basic editing setup and configuration, refer to the [Editing Feature Setup](../editing#set-up-editing).

## Custom command column button

Custom command columns provide additional row-level actions beyond the built-in command buttons. This is particularly powerful when specialized functionality for editing, deletion, or custom operations is required beyond the built-in command set.

To define custom command buttons, use the [commands](https://ej2.syncfusion.com/react/documentation/api/grid/column#commands) property. Associate the desired actions with these buttons through the [commandClick](https://ej2.syncfusion.com/react/documentation/api/grid#commandClick) event, allowing custom logic to be executed on button click.

The following example demonstrates custom command buttons using the `commands` property and custom click behavior through the `commandClick` event, which is used here to show row details in a dialog:

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