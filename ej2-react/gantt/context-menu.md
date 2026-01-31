---
layout: post
title: Context menu in React Gantt Chart component | Syncfusion
description: Learn here all about Context menu in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in React Gantt Chart component

The Gantt control allows you to perform quick actions by using context menu. When right-clicking the context menu, the context menu options are shown. To enable this feature, set the [enableContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#enablecontextmenu) to true. The default context menu options are enabled using the [editSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#editsettings) property. The context menu options can be customized using the [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenuitems) property.

To use the context menu, inject the [ContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenumodule) module into the Gantt Chart component.

The default items are listed in the following table.

Items| Description
----|----
`AutoFit`|  Auto-fits the current column.
`AutoFitAll` | Auto-fits all columns.
`SortAscending` | Sorts the current column in ascending order.
`SortDescending` | Sorts the current column in descending order.
`TaskInformation`|  Edits the current task.
`Add` | Adds a new row to the Gantt.
`Indent` | Indent the selected record to one level.
`Outdent` | Outdent the selected record to one level.
`DeleteTask` | Deletes the current task.
`Save` | Saves the edited task.
`Cancel` | Cancels the edited task.
`DeleteDependency` | Deletes the current dependency task link.
`Convert` | Converts current task to milestone or vice-versa.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/contextmenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/contextmenu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/contextmenu-cs1" %}

## Custom context menu items

The custom context menu items can be added by defining the [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenuitems) as a collection of [contextMenuItemModel](https://ej2.syncfusion.com/react/documentation/api/grid/contextMenuItemModel/). Actions for the customized items can be defined in the [contextMenuClick](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenuclick) event and the visibility of customized items can be defined in the [contextMenuOpen](https://ej2.syncfusion.com/react/documentation/api/gantt#contextmenuopen) event.

To create custom context menu items for header area, define the target property as `.e-gridheader`.

The following sample shows context menu item for parent rows to expand or collapse child rows in the content area and a context menu item to hide columns in the header area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customcontextmenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customcontextmenu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customcontextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customcontextmenu-cs1" %}

> You can show an specific item in context menu for header/content area in the Gantt control by defining the `target` property.

## Touch interaction

To perform `long press` action on a row, [context menu](context-menu#context-menu) is opened, and then tap a menu item to trigger its action.