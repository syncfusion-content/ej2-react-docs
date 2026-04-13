---
layout: post
title: Templates in React Query builder component | Syncfusion
description: Learn here all about Templates in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Query Builder component

Templates enable you to define customized headers and custom user interface elements for column values and filtering interactions.

## Header Template

Customize the header section to create personalized user interfaces for managing rules and groups, including custom AND/OR and NOT condition controls. Implement header templates by creating a React component and assigning it when the `actionBegin` event fires with `requestType` as "header-template-create".

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

Replace the default input widgets with custom components for specific columns. Implement templates by defining the following functions:

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

### Using Template

Create customized input widgets by implementing templates as React components. This approach provides maximum flexibility for rendering specialized controls based on your application requirements.

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

Rule Template allows to define your own user interface for columns. To implement [`ruleTemplate`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#ruletemplate), you can create the user interface as `React` component and assign the values through `actionBegin` event.

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