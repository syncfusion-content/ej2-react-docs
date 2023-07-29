---
layout: post
title: Add custom aggregation type to the menu in React Pivotview component | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Add custom aggregation type to the menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Display string value to pivot table values

End user can display string value to the pivot table's value cell by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview#aggregatecellinfo) event.

In the following example, each cell value of the **Sold** field's actual value has been assigned from its combination data sets obtained from the [`args.cellSets`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#cellsets) in the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview#aggregatecellinfo) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs316/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs316/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs316" %}