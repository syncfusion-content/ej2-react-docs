---
layout: post
title: Template in React File Upload | Syncfusion
description: Customize the React File Upload's file list and action buttons with templates to change the default appearance and layout of the uploader.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React File Upload

You can customize the default appearance of the React File Upload using a template along with buttons.

## File list template

The **template** property is used to customize the default appearance of each file in the list. It can be represented as an HTML element or a string. The selected or dropped files are displayed as per the template layout provided. The remove and progress bar actions are handled using the [success](https://ej2.syncfusion.com/react/documentation/api/uploader#success), [failure](https://ej2.syncfusion.com/react/documentation/api/uploader#failure), and [progress](https://ej2.syncfusion.com/react/documentation/api/uploader#progress) events when the template is defined.

For example, you can display a file type icon along with the default UI elements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/filelist-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/filelist-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/filelist-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/filelist-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/filelist-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/filelist-template-cs2" %}

## Custom template

You can design your own template by suppressing the default file list including buttons. When you use a custom template to upload or remove the files, pass the custom UI argument as `true` to call the `upload`/`remove` public methods as follows:

* UploaderObj.**upload**(filesData, true);

* UploaderObj.**remove**(filesData, true);

Refer to the following code sample.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/custom-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/custom-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/custom-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/custom-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/custom-template-cs2" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [Customize progress bar](./how-to/customize-progressbar)
* [Customize button with HTML element](./how-to/customize-button-with-html-element)
* [Customize drop area](./how-to/hide-default-drop-area)
