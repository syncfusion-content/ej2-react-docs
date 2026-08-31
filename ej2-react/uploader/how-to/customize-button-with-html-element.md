---
layout: post
title: How to customize the button in React File Upload | Syncfusion
description: Render custom HTML content in the React File Upload's Browse, Upload, and Clear action buttons using the buttons property.
control: Customize button with html element 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the button in React File Upload

Customize the Uploader action buttons (Browse, Upload, Clear) with custom HTML content using the [buttons](https://ej2.syncfusion.com/react/documentation/api/uploader#buttons) property. The `browse`, `upload`, and `clear` button configurations each accept:

* A string (rendered as plain text), or
* An `HTMLElement` (rendered as that HTML content), or
* A query selector string that points to an existing element in the DOM.

This enables you to create branded or themed button styles that match your application design. Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/buttons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/buttons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/buttons-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
