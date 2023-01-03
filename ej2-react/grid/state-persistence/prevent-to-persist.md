---
layout: post
title: Prevent to persist in React Grid component | Syncfusion
description: Learn here all about Prevent to persist in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Prevent to persist 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Prevent to persist in React Grid component

## Prevent columns from persisting

When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true, the Grid properties such as [Grouping](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettingsModel/), [Paging](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/), [Filtering](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/), [Sorting](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettingsModel/), and [Columns](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>**Note:** When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true, the Grid properties such as column template, column formatter, header text, and value accessor will not persist.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs33" % }