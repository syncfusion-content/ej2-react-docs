---
layout: post
title: Validation in React Gantt component | Syncfusion
description: Learn here all about Validation Rule in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Validating Tasks
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Validation in React Gantt control

## Column validation

Column validation validates the editing and adding data and it display errors for invalid fields before saving data. This is effective in both inline and dialog editing.
Gantt uses [`Form Validator`](https://ej2.syncfusion.com/react/documentation/form-validator) component for column validation. You can set [`validation rules`](https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules) by defining the [`columns.validationRules`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#validationrules). The value cannot be saved unless the validation rule get satisfied.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs4" %}

## Custom validation

You can define your own custom validation rules for the specific columns by using callback function to it's [`validation rule`](https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules#defining-custom-rules).

In the below demo, custom validation applied for `TaskName` column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs5" %}

## Dependency and resource grid validation

Validation rules can also be implemented for the dependency and resource grid in the add or edit dialog by employing the event [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionbegin).
Within the actionBegin event, validationRules can be configured for columns in the grid of the dependency and resource tabs using the requestType `beforeOpenEditDialog` or `beforeOpenAddDialog`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs6" %}


