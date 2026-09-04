---
layout: post
title: Form Support in React File Upload | Syncfusion
description: Integrate the React File Upload with HTML forms so selected files submit with the form by nulling saveUrl and removeUrl and disabling autoUpload.
control: Form support 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in React File Upload

The React File Upload component integrates with HTML forms like standard file input elements. To use the React File Upload within a form, set the following configuration:

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
