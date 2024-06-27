---
layout: post
title: Drill down in React Pivotview component | Syncfusion
description: Learn here all about Drill down in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Drill down 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drill down in React Pivotview component

## Drill down and drill up

The drill down and drill up action helps to view the bound data in detailed and abstract view respectively. By default, if member(s) has children, then expand and collapse icon will be displayed in the respective row/column header. On clicking the icon, expand or collapse action will be performed automatically through built-in source code. Meanwhile, leaf member(s) does not contain expand and collapse icon.

![output](images/drill.png)

## Drill position

Allows to drill only the current position of the selected member and exclude the drilled data of selected member in other positions. For example, if "FY 2015" and "FY 2016" have "Quarter 1" member as child in next level, and when end user attempts to drill "Quarter 1" under "FY 2016", only it will be expanded and not "Quarter 1" under "FY 2015".

> This feature is built-in and occurs every time when expand or collapse action is done for better performance.

![output](images/drill_position.png)

## Expand all

> This property is applicable only for the relational data source.

Allows to either expand or collapse all headers that are displayed in row and column axes. To display all headers in expanded state, set the property [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) to **true** and to collapse all headers, set the property [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) to **false**. By default, [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) property is set to **false**.

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

Allows to expand or collapse all headers for specific fields (only) in row and column axes. To expand headers for a specific field in row or column axis, set the property [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#expandall) in [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings/#rows) or [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#columns) to **true**. By default, [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldOptionsModel/#expandall) property in [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings/#rows) or [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#columns) is set to **false**.

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

In addition to the previous topic, there is an enhancement to expand all headers expect specific header(s) and similarly to collapse all headers except specific header(s). To achieve this, [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) is used. The required properties of the [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) are explained below:

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#name): It allows to set the field name whose member(s) needs to be specifically drilled.
* [`items`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#items): It allows to set the exact member(s) which needs to be drilled.

> The [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) option always works in vice-versa with respect to the property [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) in pivot table. For example, if [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#expandall) is set to **true**, then the member(s) added in [`items`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#items) collection alone will be in collapsed state.

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

## Expand specific member(s)

End user can also manually expand or collapse specific member(s) in each fields under row and column axes using the [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) from code behind. The required properties of the [`drilledMembers`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#drilledmembers) are explained below:

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#name): It allows to set the field name whose member(s) needs to be specifically drilled.
* [`items`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#items): It allows to set the exact member(s) which needs to be drilled.
* [`delimiter`](https://ej2.syncfusion.com/react/documentation/api/pivotview/drillOptionsModel/#delimiter): It allows to separate next level of member from its parent member.

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

The event [`drill`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#aggregatecellinfo) triggers every time when a field is expanded or collapsed. For instance using this event user can alter delimiter and drill action for the respective item. It has the following parameters:

* `drillInfo` - It holds the current drilled item information.
* `pivotview` - It holds pivot table instance.

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

The event [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionbegin) triggers when the UI actions such as drill down and drill up begin. This allows user to identify the current action being performed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action began. The following are the UI actions and their names:

                | Action | Action Name|
                |------|-------------|
                | [`Expand`](./drill-down/#Drill-down-and-drill-up)| Drill down|
                | [`Collapse`](./drill-down/#Drill-down-and-drill-up)| Drill up|

* `cancel`: It allows user to restrict the current action.

In the below sample, drill down and drill up action can be restricted by setting the **args.cancel** option to **true** in the `actionBegin` event.

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

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action completed. The following are the UI actions and their names:

                | Action | Action Name|
                |------|-------------|
                | [`Expand`](./drill-down/#Drill-down-and-drill-up)| Drill down|
                | [`Collapse`](./drill-down/#Drill-down-and-drill-up)| Drill up|

* `actionInfo`: It holds the unique information about the current UI action. For example, if drill down action is completed, the event argument contains information such as field name and the drill information.

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

The event [`actionFailure`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#actionfailure) triggers when the current UI action fails to achieve the desired result. It has the following parameters:

* `actionName`: It holds the name of the current action failed. The following are the UI actions and their names:

            | Action | Action Name|
            |------|-------------|
            | [`Expand`](./drill-down/#Drill-down-and-drill-up)| Drill down|
            | [`Collapse`](./drill-down/#Drill-down-and-drill-up)| Drill up|

* `errorInfo`: It holds the error information of the current UI action.

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