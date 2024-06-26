---
layout: post
title: Display string value to pivot table values in React | Syncfusion
description: Learn here all about how to display string value to pivot table values in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Display string value to pivot table values 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Display string value to pivot table values in React

End user can display string value to the pivot table's value cell by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#aggregatecellinfo) event.

In the following example, each cell value of the **Sold** field's actual value has been assigned from its combination data sets obtained from the [`args.cellSets`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/aggregateEventArgs/#cellsets) in the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#aggregatecellinfo) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs316/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs316/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs316/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs316/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs316" %}