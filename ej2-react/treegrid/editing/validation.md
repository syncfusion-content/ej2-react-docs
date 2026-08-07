---
layout: post
title: React TreeGrid Validation | Syncfusion
description: Learn how to configure validation in React TreeGrid, including required fields, custom rules, and error handling during editing.
control: Validation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation in React TreeGrid

## Column validation

Column validation checks edited or newly added data and displays error messages for invalid fields before saving. TreeGrid uses the Form Validator component for column validation. Configure rules using the [columns.validationRules](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#validationrules) property.

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

Custom validation rules can be defined for specific columns using **Form Validator custom rules**.

In the following example, a custom rule is applied to the **Priority** column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs16/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs16" %}