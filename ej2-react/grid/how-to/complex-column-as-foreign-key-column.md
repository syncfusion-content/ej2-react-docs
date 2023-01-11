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
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/foreign-key-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/foreign-key-cs6" %}