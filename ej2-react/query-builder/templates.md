---
layout: post
title: Templates in React Query builder component | Syncfusion
description: Learn here all about Templates in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: Templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Query builder component

Templates allows users to define customized header and own user interface for columns.

## Header Template

Header Template allows to define your own user interface for Header, which includes creating or deleting rules and groups and to customize the AND/OR condition and NOT condition options. To implement header template, you can create the user interface as `React` component and assign the values when requestType is header-template-create in `actionBegin` event.

In the following sample dropdown, splitbutton and button are used as the custom components in the header.
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

Template allows you to define your own input widgets for columns. To implement [`template`](https://ej2.syncfusion.com/react/documentation/api/query-builder/columnsModel/#template), you can define the following functions

* `create`: Creates the custom component.
* `write`: Wire events for the custom component.
* `Destroy`: Destroy the custom component.

In the following sample, dropdown is used as the custom component in the PaymentMode column.

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

Template allows you to define your own input widgets for columns. To implement template, you can create the user interface as `React` component.

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