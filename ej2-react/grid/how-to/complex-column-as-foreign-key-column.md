---
layout: post
title: Complex column as foreign key column in React Grid component | Syncfusion
description: Learn here all about Complex column as foreign key column in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Complex column as foreign key column 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Complex column as foreign key column in React Grid component

The following example shows how to set the complex column as foreign key column.

In the following example, *Employee.EmployeeID* is a complex column and also declared as a foreign column which shows *FirstName* column from foreign data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/foreign-key-cs11/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/foreign-key-cs11/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/foreign-key-cs11/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/foreign-key-cs11/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/foreign-key-cs11" % }