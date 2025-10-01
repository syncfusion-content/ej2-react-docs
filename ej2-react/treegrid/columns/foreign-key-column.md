---
layout: post
title: Foreign key column in React TreeGrid | Syncfusion
description: Learn here all about Foreign key column in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Foreign key column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display foreignKey values in TreeGrid

The TreeGrid uses hierarchical data binding and does not include built-in support for foreign key data sources.

To display foreign key values during initial render, handle the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event. For editing, configure the [editType](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edittype) and [columns.edit](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edit) properties to render a DropDownList bound to an external or foreign datasource.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/foreignkey-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/foreignkey-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/foreignkey-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/foreignkey-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/foreignkey-cs1" %}