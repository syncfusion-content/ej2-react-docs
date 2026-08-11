---
layout: post
title: Summary customization in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table customizes summary rows and columns to control the display and calculation of grand totals and subtotals.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Summary customization in React Pivot Table

## Show or hide grand totals

Use the [`showGrandTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showgrandtotals) property in [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) to show or hide grand totals in rows and columns. To hide both, set `showGrandTotals: false`. To hide row or column grand totals separately, set [`showRowGrandTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showrowgrandtotals) or [`showColumnGrandTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showcolumngrandtotals) to **false** in `dataSourceSettings`.

> By default, [`showGrandTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showgrandtotals), [`showRowGrandTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showrowgrandtotals), and [`showColumnGrandTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showcolumngrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) are all **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs288/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs288/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs288" %}

## Show or hide sub-totals

Use the [`showSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showsubtotals) property in [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) to show or hide sub-totals in rows and columns. To hide all sub-totals, set `showSubTotals: false`. To hide row or column sub-totals separately, set [`showRowSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showrowsubtotals) or [`showColumnSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showcolumnsubtotals) to **false** in `dataSourceSettings`.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showsubtotals), [`showRowSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showrowsubtotals), and [`showColumnSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showcolumnsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) are all **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs289/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs289/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs289" %}

## Show/hide sub-totals for specific fields

Hide sub-totals for individual fields by setting `showSubTotals: false` on the specific field entry inside the [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#rows) or [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#columns) array of [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings). This is useful when you want to suppress sub-totals for some fields but not all.

> By default, `showSubTotals` on every field in both the [`rows`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#rows) and [`columns`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#columns) arrays is **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs290/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs290/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs290" %}
## See Also

* [Getting started with the React Pivot Table](./getting-started)
* [Show or hide totals](./show-hide-totals)
* [Aggregation in React Pivot Table](./aggregation)
* [Grouping in React Pivot Table](./grouping)
## Show sub-totals at top or bottom

Allows to show sub-totals either at top or bottom of the header group in rows and columns by using the [`subTotalsPosition`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property. By default, [`subTotalsPosition`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property is set to **Auto**, which means that column sub-totals are displayed at the bottom and row sub-totals are displayed at the top of the header group in the pivot table.

To show sub-totals at top of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings) to **Top**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs291/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs291/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs291" %}

To show sub-totals at bottom of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings) to **Bottom**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs292/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs292/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs292" %}

## Show or hide totals using toolbar

Users can toggle grand totals and sub-totals from the Pivot Table's built-in toolbar. Set the [`showToolbar`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#showtoolbar) property to **true** and include `GrandTotal` and `SubTotal` in the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#toolbar) array. The toolbar then shows "Show/Hide Grand Totals" and "Show/Hide Subtotals" icons that toggle the totals at runtime.

> The `Toolbar` service must be injected into the `PivotViewComponent` via `<Inject services={[Toolbar]} />`.

The grand totals and sub-totals can be dynamically displayed at the top or bottom of the Pivot Table's row and column axes by using the built-in **Grand Totals Position** and **Subtotals Position** options in the grand totals and sub-totals drop-down menus, respectively.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs293/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs293/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs293" %}