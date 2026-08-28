---
layout: post
title: How to preview images before upload in React File Upload | Syncfusion
description: Show image previews before or after upload in the React File Upload by reading file data with FileReader in the selected or success events.
control: Preview images before uploading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to preview images before upload in React File Upload

Display image previews before upload to allow users to verify their selection, or after successful server upload for confirmation. Create previews by reading file data using the [selected](https://ej2.syncfusion.com/react/documentation/api/uploader#selected) event (client-side preview) or the [success](https://ej2.syncfusion.com/react/documentation/api/uploader#success) event (post-upload preview). This improves user experience by providing visual feedback during the upload workflow.

For client-side previews, read each file with `FileReader.readAsDataURL(file)` and assign the resulting data URL to the `src` of an image element. For post-upload previews, use the file path returned by the server (typically via `Response.StatusDescription`) and set the image `src` to that URL.

Refer to the following link to explore a complete image preview implementation:

[Image Preview](https://ej2.syncfusion.com/react/demos/#/material/uploader/image-preview)

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
