---
layout: post
title: Error messages in React Form Validator Component | Syncfusion
description: Learn here all about error messages support in Syncfusion Essential React Form Validator component, it's elements and more.
control: Error messages 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Error messages in React Form Validator Component

The `FormValidator` provides default error messages for all default validation rules.
It is tabulated as follows

| Rules | message |
| ------------- | ------------- |
| `required` | This field is required. |
| `email` | Please enter a valid email address. |
| `url` | Please enter a valid URL. |
| `date` | Please enter a valid date. |
| `dateIso` | Please enter a valid date ( ISO ). |
| `number` | Please enter a valid number. |
| `digit` | Please enter only digits. |
| `maxLength` | Please enter no more than {0} characters. |
| `minLength` | Please enter at least {0} characters. |
| `rangeLength` | Please enter a value between {0} and {1} characters long. |
| `range` | Please enter a value between {0} and {1}. |
| `max` | Please enter a value less than or equal to {0}. |
| `min` | Please enter a value greater than or equal to {0}. |
| `regex` | Please enter a correct value. |

## Customizing Error Messages

The default error message for a rule can be customizable by defining it along with concern rule object as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/form-validator/error-messages-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/form-validator/error-messages-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/form-validator/error-messages-cs1" %}
