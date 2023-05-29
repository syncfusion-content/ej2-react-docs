---
layout: post
title: Localization in React Form validator component | Syncfusion
description: Learn here all about Localization in Syncfusion React Form validator component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Form validator component

The [`Localization`](../common/localization/) library allows users to localize the default error message contents of the `formValidator` to different cultures using the `locale` property.

The FormValidator provides default error messages for all default validation rules. It is tabulated as follows:

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

## Loading translations

To load translation object in your application use `load` function of `L10n` class.

The following example demonstrates the FormValidator in `Arabic` culture with error message for email.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/form-validator/localization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/form-validator/localization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/form-validator/localization-cs1" %}
