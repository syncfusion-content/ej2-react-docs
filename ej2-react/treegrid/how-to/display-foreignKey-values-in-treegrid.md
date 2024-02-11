---
layout: post
title: Display foreignKey values in treegrid in React Treegrid component | Syncfusion
description: Learn here all about Display foreignKey values in treegrid in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Display foreignKey values in treegrid 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display foreignKey values in treegrid in React Treegrid component

Since TreeGrid Databinding concept is of hierarchy relationship, we do not provide in-built support for foreignkey datasource.

To display the foreignKey value at initial rendering, we can use the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event of the treegrid and also by using the [`editType`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edittype) and [`columns.edit`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edit) properties of TreeGrid Column, we can render Dropdownlist with external or foreign dataSource.

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

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.