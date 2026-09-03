---
layout: post
title: Localization in React File Upload | Syncfusion
description: Localize the React File Upload's static text such as Browse and Clear buttons, status messages, and drop area text using the L10n library.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React File Upload

The localization library enables customization of the React File Upload's static text content, including action button labels, file status messages, icon titles, tooltips, and drop area text. Define locale-specific text by creating a locale object and registering it with the L10n (localization) service.

The following keys customize the React File Upload's text content:

| Key | Description |
|------------------------|---------|
| Browse | Browse button label |
| Clear | Clear button label |
| Upload | Upload button label |
| dropFilesHint | Drop area placeholder text |
| uploadFailedMessage | File upload failure message |
| uploadSuccessMessage | File upload success message |
| removedSuccessMessage | File removal success message |
| removedFailedMessage | File removal failure message |
| inProgress | Upload in-progress status message |
| pauseUpload | Upload paused status message |
| fileUploadCancel | Upload cancellation message |
| readyToUploadMessage | File selected and ready status message |
| invalidMaxFileSize | File exceeds maximum size message |
| invalidFileType | Invalid file type message |
| invalidMinFileSize | File below minimum size message |
| remove | Remove icon tooltip |
| cancel | Cancel icon tooltip |
| delete | Delete icon tooltip |
| totalFiles | Total files tooltip |
| size | File size tooltip |

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs22" %}

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
