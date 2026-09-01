---
layout: post
title: How to open file dialog from button in React File Upload | Syncfusion
description: Open the file selection dialog from an external button in the React File Upload by invoking click on the uploader's hidden input element.
control: Trigger click event of input file from external button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to trigger the file dialog from a button in React File Upload

Trigger the file input dialog from an external button by programmatically invoking the `click` event on the Uploader's internal hidden `<input type="file">` element. This approach enables custom browse buttons that live outside the Uploader component's own render tree.

> This is required because browsers do not allow opening a file picker without a user gesture, so attaching the `click` invocation to a button's click handler preserves the user-gesture context.

The following sample demonstrates triggering the file selection dialog from an **Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Button**:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/external-click-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/external-click-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/external-click-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
