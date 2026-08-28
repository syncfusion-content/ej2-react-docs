---
layout: post
title: How to check if File Upload has files in React | Syncfusion
description: Require at least one file in the React File Upload by setting the required attribute and showing a data-required-message on form submit.
control: Validate file input requirement 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to determine if File Upload has files in React File Upload

Enforce file selection requirement by applying the **required** attribute to the Uploader's underlying input element. This validates that at least one file must be selected before form submission. In the following sample, the `required` attribute is applied to the Uploader input element and a validation message is displayed using the `data-required-message` attribute.

> The validation behavior is provided by the [Syncfusion Form Validator](https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules) when the Uploader is used inside a form that uses form validation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/required-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/required-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/required-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
