---
layout: post
title: Form support in React Uploader component | Syncfusion
description: Learn here all about Form support in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Form support 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Form support in React Uploader component

The Uploader component integrates with HTML forms like standard file input elements. To use the Uploader within a form, set the following configuration:

* **saveUrl** and **removeUrl** must be `null`
* **autoUpload** must be `false`
* **name** attribute must be set on the input element

When the form is submitted, selected or dropped files are sent as a collection to the form action. The form action handles server-side upload processing. Resetting the form clears both the file list and associated data.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/form-support-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/form-support-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/form-support-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/form-support-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/form-support-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/form-support-cs2" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
