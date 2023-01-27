---
layout: post
title: Validation in React Treegrid component | Syncfusion
description: Learn here all about Validation in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation in React Treegrid component

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data. TreeGrid uses **Form Validator** component for column validation. You can set validation rules by defining the [`columns.validationRules`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#validationrules).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs15/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs15" %}

## Custom validation

You can define your own custom validation rules for the specific columns by using **Form Validator custom rules**.

In the below demo, custom validation applied for *Priority* column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs16" %}