---
layout: post
title: Templates in React Query Builder UI | Syncfusion
description: Customize the React Query Builder UI header and per-column inputs with React component templates for rules, operators, and values.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Query Builder UI

Templates enable you to define customized headers and custom user interface elements for column values and filtering interactions.

## Header Template

Customize the header section to create personalized user interfaces for managing rules and groups, including custom AND/OR and NOT condition controls. Implement header templates by creating a React component and assigning it to the [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/query-builder#headertemplate) property on `QueryBuilderComponent`. The template function receives the current header `props` (group state, condition, lock status, and NOT flag) and must return a React node.

The following example demonstrates a custom header using dropdown, split button, and button components:
{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/header-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/header-template-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="template.jsx" %}
{% include code-snippet/query-builder/header-template-cs1/app/template.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="template.tsx" %}
{% include code-snippet/query-builder/header-template-cs1/app/template.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/header-template-cs1" %}

## Column Template

Replace the default input widgets with custom components for specific columns. Implement templates by defining the following functions on the column's `template` object:

* `create`: Instantiate the custom component.
* `write`: Attach event handlers to the custom component.
* `destroy`: Clean up and remove the custom component.

The following example replaces the PaymentMode column input with a custom dropdown component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs21/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs21/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs21" %}

### Using a Separate Template Component

When the custom editor requires external state, context, or other dependencies, define the template as a standalone React component file and instantiate it from inside `write`. This approach provides maximum flexibility for rendering specialized controls, sharing templates across columns, and authoring richer UI based on your application requirements.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/template-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="payment-temp.jsx" %}
{% include code-snippet/query-builder/template-cs1/app/payment-temp.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="payment-temp.tsx" %}
{% include code-snippet/query-builder/template-cs1/app/payment-temp.tsx %}
{% endhighlight %}
{% highlight js tabtitle="transaction-temp.jsx" %}
{% include code-snippet/query-builder/template-cs1/app/transaction-temp.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="transaction-temp.tsx" %}
{% include code-snippet/query-builder/template-cs1/app/transaction-temp.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/template-cs1" %}

## Rule Template

Rule Template allows you to define your own user interface for columns. To implement [`ruleTemplate`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel#ruletemplate), create the UI as a React component and assign the field values through the `actionBegin` event when `requestType` is `'template-initialize'`.

In the following sample, dropdown and slider are used as the custom component and applied `greaterthanorequal` operator to `Age` column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/rule-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/rule-template-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="template.jsx" %}
{% include code-snippet/query-builder/rule-template-cs1/app/template.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="template.tsx" %}
{% include code-snippet/query-builder/rule-template-cs1/app/template.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/rule-template-cs1" %}