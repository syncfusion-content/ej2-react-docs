---
layout: post
title: Attachments in React Chat UI component | Syncfusion
description: Checkout and learn about attachments with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# File Attachments in React Chat UI component

The Chat UI component supports message attachments, enabling users to upload and send files (images, documents, and more) alongside messages for richer, more contextual conversations. Enable this functionality using the [enableAttachments](../api/chat-ui#enableAttachments) property and customize the behavior through the [attachmentSettings](../api/chat-ui#attachmentSettings) configuration.

## Enable file attachments

Enable file attachment support by setting the [enableAttachments](../api/chat-ui#enableAttachments) property to `true`. By default, it is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/enableAttachments/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/enableAttachments" %}

## Configure attachment settings

Use the [attachmentSettings](../api/chat-ui#attachmentSettings) property to customize file attachment behavior, including upload endpoints, file type restrictions, and size limits.

### Setting saveUrl and removeUrl

Set the [saveUrl](../api/chat-ui/fileattachmentsettingsmodel#saveurl) and [removeUrl](../api/chat-ui/fileattachmentsettingsmodel#removeurl) properties to specify server endpoints for handling file uploads and removals. The `saveUrl` processes file uploads, while the `removeUrl` handles file deletion requests.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/save-remove-url/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/save-remove-url" %}

### Setting file type

Use the [allowedFileTypes](../api/chat-ui/fileattachmentsettingsmodel#allowedfiletypes) property to specify which file types users can upload. This property accepts file extensions (e.g., '.pdf', '.docx') or MIME types to control the types of files that can be attached.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/allowedFileTypes/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/allowedFileTypes" %}

### Setting file size

Configure the [maxFileSize](../api/chat-ui/fileattachmentsettingsmodel#maxfilesize) property to define the maximum file size allowed for uploads. Specify the size in bytes. The default value is `30000000` bytes (approximately 30 MB). Files exceeding this limit will not be uploaded.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/maxFileSize/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/maxFileSize" %}

### Setting save format

Control the format used to send files to the server using the [saveFormat](../api/chat-ui/fileattachmentsettingsmodel#saveformat) property when path is not set. It does not change how files are uploaded. The default value is `Blob`.

 - `Blob`: Used for fast, memory‑efficient local previews.
 - `Base64`: Reads the file as a Base64 data URL, useful when you need an inline data URL.
 
{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/saveFormat/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/saveFormat" %}

### Setting server path

The [path](../api/chat-ui/fileattachmentsettingsmodel#path) property specifies the public base URL where uploaded files are (or will be) hosted. When this property is set, it takes precedence over the value defined in `saveFormat`. This means that even if saveFormat includes a different location or structure for storing files, the path property will be used it for generating the file URL.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/path/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/path/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
### Enabling drag-and-drop

Toggle drag-and-drop support for attachments via [enableDragAndDrop](../api/chat-ui/fileattachmentsettingsmodel#enabledraganddrop) property. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/drag-and-drop/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/drag-and-drop" %}

### Setting maximum count

Restrict how many files can be attached at once using [maximumCount](../api/chat-ui/fileattachmentsettingsmodel#maximumcount). The default value is `10`. If users select more than the allowed count, the maximum count reached error will be displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/maximumCount/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/maximumCount" %}

## Templates

### Customizing the file preview

Provide a custom UI for previewing selected files using [previewTemplate](../api/chat-ui/fileattachmentsettingsmodel#previewtemplate). Use this to render thumbnails, filenames, progress, remove buttons, or any additional metadata prior to sending.

### Customizing the attachments

Control how attachments appear inside message bubbles with [attachmentTemplate](../api/chat-ui/fileattachmentsettingsmodel#attachmenttemplate). Use this to tailor the display of images, documents, or custom file types once the message is posted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/file-attachments/template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/file-attachments/template/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
       
{% previewsample "page.domainurl/code-snippet/chat-ui/file-attachments/template" %}
