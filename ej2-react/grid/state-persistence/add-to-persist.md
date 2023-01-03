---
layout: post
title: Add to persist in React Grid component | Syncfusion
description: Learn here all about Add to persist in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Add to persist 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Add to persist in React Grid component

## Persist the column template, header template and header Text

By default, the Grid properties such as column template, header text, header template, column formatter, and value accessor will not persist when [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) is set to true. Because the column template and header text can be customized at the application level.

If you wish to restore all these column properties, then you can achieve it by cloning the grid’s columns property using JavaScript Object’s assign method and storing this along with the persist data manually. While restoring the settings, this column object must be assigned to the grid’s columns property to restore the column settings as demonstrated in the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs32" % }