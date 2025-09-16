---
layout: post
title: Drill down in React Pivot Table component | Syncfusion
description: Learn here all about Drill down in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Drill down
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drill down in React Pivot Table component

## Drill down and drill up

The drill-down and drill-up features in the Pivot Table component allow users to expand or collapse hierarchical data for detailed or summarized views. When a field member(s) contains child items, expand and collapse icons automatically appear in the corresponding row or column header. Clicking these icons expands the selected item to display its child members or collapses it to show a summarized view. If a field member(s) does not have any further levels to display, the icons will not appear.

![output](images/drill.png)

## Drill position

The drill-down and drill-up features allow you to expand or collapse data for a specific member in the Pivot Table without affecting the same member in other positions. For example, if both "FY 2015" and "FY 2016" have "Quarter 1" as a child in the next level, drilling down into "Quarter 1" under "FY 2015" will expand only that specific instance. The "Quarter 1" under "FY 2016" will remain unchanged.

> This feature is built-in and works automatically every time you expand or collapse data, making the pivot table faster and more efficient.

![output](images/drill_position.png)

## Expand All

> This property is applicable only for the relational data source.

The Pivot Table component allows users to interactively expand or collapse all field members displayed in the row and column axes. To display all hierarchical members in an expanded state, set the [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) property of [dataSourceSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#dataSourceSettings) to **true**. To collapse all headers, set this property to **false**. By default, [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) is set to **false**, so only the top-level field members are shown until the user expands them manually.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs43/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs43/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs43/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs43/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs43" %}

## Expand all headers for specific fields

> This property is applicable only for the relational data source.

The Pivot Table provides an option to expand or collapse all headers for specific fields in the [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#rows) or [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#columns) axis. To expand all headers for a particular field, set the [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#expandall) property to **true** in the [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#rows) or [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#columns) axis. By default, the [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#expandall) property is set to **false**, meaning the headers are collapsed.

The following code demonstrates how to configure a Pivot Table with the [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#expandall) property enabled for specific fields. In this example, all headers for the **Year** field in the columns and the **Country** field in the rows are expanded.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs44/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs44/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs44/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs44/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs44" %}

## Expand all except specific member(s)

> This option is applicable only for the relational data source.

The Pivot Table component supports expanding or collapsing all headers except for specific field members. This functionality allows users to selectively control which members in the fields are expanded or collapsed, making it easier to focus analysis on relevant data in the Pivot Table. The [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) property is used to configure this behavior. Its key properties include:

- [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#name): Specifies the field name whose members should remain expanded or collapsed.
- [`items`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#items): Lists the exact field members to expand or collapse.

The following example demonstrates how to configure a Pivot Table where all headers are expanded except for the **France** member in the **Country** field, which remains collapsed.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs45/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs45/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs45/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs45/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs45" %}

## Expand or Collapse Specific Members

The Pivot Table component enables users to programmatically expand or collapse specific members in any field placed under the row or column axes. This can be achieved using the [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) property. The following properties of [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) are described below:

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#name): Specifies the field name whose members should be expanded or collapsed.
* [`items`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#items): Defines the exact members to be expanded or collapsed within the specified field.
* [`delimiter`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#delimiter): Sets the character used to separate a child member from its parent when specifying hierarchical members.

The following code demonstrates how to configure the Pivot Table to expand specific members by using the [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) property. In this example, only the **France** member in the **Country** field is expanded while other members remain collapsed.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs46/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs46/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs46/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs46/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs46" %}

## Event

### Drill

The [`drill`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#drill) event is triggered each time a field member in the Pivot Table is expanded or collapsed. This event allows customization of drill actions, such as modifying the delimiter or changing the behavior for specific items. The event provides the following parameters:

* [`drillInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillArgs/#drillinfo): Contains information about the currently drilled field member.
* [`pivotview`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillArgs/#pivotview): A reference to the Pivot Table component instance.
* [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillArgs/#cancel): Specifies whether to prevent the current drill operation. Set this property to true in the event handler to cancel the action.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs47/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs47/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs47/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs47/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs47" %}

### ActionBegin

The [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) event triggers when a user starts a UI action, such as drilling down (expanding) or drilling up (collapsing) data in the pivot table. This event helps you track the action being performed and customize its behavior. It includes the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#datasourcesettings): Contains the current pivot table report settings, including the data source, rows, columns, values, filters, and format settings.
- [`actionName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#actionname): Indicates the name of the action being performed. The table below lists the UI actions and their corresponding names:

| Action   | Action Name |
|----------|-------------|
| **Expand**   | Drill down  |
| **Collapse** | Drill up    |

- [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionBeginEventArgs/#cancel): Allows you to block the current action by setting it to `true`.

In the below sample, drill down and drill up action can be restricted by setting the **args.cancel** option to **true** in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs48/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs48/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs48/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs48/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs48" %}

### ActionComplete

The event [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actioncomplete) triggers when a UI action such as drill down or drill up, is completed. This allows user to identify the current UI actions being completed at runtime. It has the following parameters:

* [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionCompleteEventArgs/#datasourcesettings): It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* [`actionName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionCompleteEventArgs/#actionname): It holds the name of the current action completed. The following are the UI actions and their names:

| Action | Action Name|
|------|-------------|
| **Expand** | Drill down|
| **Collapse** | Drill up|

* [`actionInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionCompleteEventArgs/#actioninfo): It holds the unique information about the current UI action. For example, if drill down action is completed, the event argument contains information such as field name and the drill information.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs49/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs49/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs49/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs49/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs49" %}

### ActionFailure

The [`actionFailure`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionfailure) event is triggered when a UI action does not produce the expected result. It provides details about the failure through the following parameters:

* [`actionName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionFailureEventArgs/#actionname): The name of the action that failed. The table below lists the UI actions and their corresponding names:

| Action | Action Name|
|------|-------------|
| **Expand** | Drill down|
| **Collapse** | Drill up|

* [`errorInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotActionFailureEventArgs/#errorinfo): Contains details about the error that caused the action to fail.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs50/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs50/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs50/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs50/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs50" %}