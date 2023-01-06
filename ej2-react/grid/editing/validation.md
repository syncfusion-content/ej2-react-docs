---
layout: post
title: Validation in React Grid component | Syncfusion
description: Learn here all about Validation in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation in React Grid component

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data.
Grid uses **Form Validator** component for column validation.
You can set validation rules by defining the [`columns.validationRules`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#validationrules).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs29/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs29/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs29/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs29" % }

## Custom validation

You can define your own custom validation rules for the specific columns by using **Form Validator custom rules**.

In the below demo, custom validation applied for **CustomerID** column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs30/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs30/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs30/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs30/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs30" % }

### Custom validation based on dropdown change

You can apply validation rules and messages to a column based on another column value in edit mode. You can achieve this requirement by using the custom validation feature of Grid.

In the following sample, dropdownlist edit type is used for the **Role** and **Salary** columns. Here, you can apply the custom validation in the **Salary** column based on the value selected in the **Role** column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs31/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs31/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs31/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs31/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs31" % }