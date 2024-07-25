---
layout: post
title: Member filtering in React Pivotview component | Syncfusion
description: Learn here all about Member filtering in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Member filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Member filtering in React Pivotview component

Member filtering allows you to view pivot table with particular records based on filter criteria. You can disable the member filter by setting the [`allowMemberFilter`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#allowmemberfilter) property to **false**. By default, this property is set as **true**.

## Filtering through UI

Filtering can also be performed through UI option available in [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at run time.

## Filtering through code

It can be configured using the `filterSettings` option through code-behind. The settings required to filter at initial rendering are:
* `name`: It allows to set field name.
* `type`: It allows to set filter type as either "Include" or "Exclude" to the field.
* `items`: It allows to set the filter members of the field.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs181/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs181/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs181" %}

### On demand member loading

> This feature is applicable only for the OLAP data source.

Users can load members on demand by setting the [`loadOnDemandInMemberEditor`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#loadondemandinmembereditor) property to **true**. By default, one level is loaded in the member editor. So, the initial loading will be completed quickly, without any performance constraints. After that, based on the user requirement, members can be loaded on demand. By default this property is set to **true**. Search will be applied to only the level elements that are loaded.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs182/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs182/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs182" %}

![output](images/ondemand_member.png)

If the property is set to false, all members will be loaded for all levels at initial loading. So, it will take time to fetch the members at initial loading alone. After that, all operations (like drill, search) are performed using existing members without any performance constraints.

![output](images/initial_member.png)

### Loading members based on level count

> This feature is applicable only for the OLAP data source.

User can load the members based on the level count by using the property [`levelCount`](https://ej2.syncfusion.com/react/documentation/api/pivotview/filterModel/#levelcount) in the [`filterSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#filtersettings). By default this property is set to **1**. Search will be applied to only the level elements that are loaded.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs183/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs183/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs183" %}

![output](images/level-count.png)

## See Also

* [Label Filtering](./label-filtering)
* [Value Filtering](./value-filtering)