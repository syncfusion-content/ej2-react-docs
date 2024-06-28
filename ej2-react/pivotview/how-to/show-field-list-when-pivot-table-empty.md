---
layout: post
title: Show field list when pivot table empty in React Pivotview component | Syncfusion
description: Learn here all about Show field list when pivot table empty in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Show field list when pivot table empty 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show field list when pivot table empty in React Pivotview component

When there are no fields in a pivot table's row, column, value, and filter axes, a field list can still be displayed. To do so, use the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#databound) event and call the `onShowFieldList` method as shown below.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs168/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs168/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs168/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs168/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs168" %}