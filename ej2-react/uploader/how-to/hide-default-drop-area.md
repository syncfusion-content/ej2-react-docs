---
layout: post
title: Hide default drop area in React Uploader component | Syncfusion
description: Learn here all about Hide default drop area in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Hide default drop area 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hide default drop area in React Uploader component

You can achieve this behavior by overriding the corresponding uploader styles. Override the following styles to hide the default drop area behavior.

    * .e-upload.e-control
    * .e-upload .e-file-select
    * .e-upload .e-file-drop

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/hide-drop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/hide-drop-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/hide-drop-cs1" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
