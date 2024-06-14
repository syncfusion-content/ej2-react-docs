---
layout: post
title: Async in React Uploader component | Syncfusion
description: Learn here all about Async in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Async 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Async in React Uploader component

The uploader component allows you to upload the files asynchronously. The upload process requires save and remove action URL to manage the upload process in the server.

       * The save action is necessary to handle the upload operation.
       * The remove action is optional, one which handle the removed files from server.

The File can be upload automatically or manually. For more information, you can refer to the **Auto Upload** section from the documentation.

## Multiple file upload

By Default, the uploader component allows you to select and upload multiple files simultaneously.
The selected files are organized in a list for every file selection until you clear it by clicking clear button that is shown in footer. You can add the multiple attributes to original input element of file by enabling the `multiple` file selection.

The following example explains about multiple file upload settings.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs2" %}

## Single file upload

You can select and upload a single file by disabling the multiple file selection property.
The file list item is removed for every selection and it always maintain a single file to upload.You can remove the multiple attributes form the original input element of file by enabling the single file upload property.

The following example explains about single file upload settings.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs4" %}

## Save action

The save action handler upload the files that needs to be specified in the [saveUrl](https://ej2.syncfusion.com/react/documentation/api/uploader/asyncSettingsModel/#saveurl) property.
The save handler receives the submitted files and manages the save process in server. After uploading the files to server location, the color of the selected file name changes to green and the remove icon is changed as bin icon.

    *   When the file is uploaded successfully, the event “success” triggers to handle the
        operation after upload.
    *   When the file is failed to upload, the event “failure” triggers with information,
        which cause this failure

You can cancel the upload process by setting the upload event argument **eventargs.cancel** to true.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs6" %}

### Server-side configuration for save action

This section explains how to handle the server-side action for saving the file in server.

```csharp
[AcceptVerbs("Post")]
public void Save()
{
    try
    {
        if (HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedFile = HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                var fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
                var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
                if (!File.Exists(fileSavePath))
                {
                    httpPostedFile.SaveAs(fileSavePath);
                    HttpResponse Response = HttpContext.Current.Response;
                    Response.Clear();
                    Response.ContentType = "application/json; charset=utf-8";
                    Response.StatusDescription = "File uploaded succesfully";
                    Response.End();
                }
                else
                {
                    HttpResponse Response = HttpContext.Current.Response;
                    Response.Clear();
                    Response.Status = "400 File already exists";
                    Response.StatusCode = 400;
                    Response.StatusDescription = "File already exists";
                    Response.End();
                }
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 400;
        Response.Status = "400 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

### Server-side configuration for saving and returning responses

The following example demonstrates the server-side action for saving files on the server and returning responses in JSON, String, and File formats.

```c#
[AcceptVerbs("Post")]
public IActionResult Save()
{
    // for JSON Data
    try
     {
        // Process uploaded data
        var responseData = new
        {
            Success = true,
            Message = "Files uploaded successfully",
            // Additional data can be added here
        };

        return Json(responseData);
     }
     catch (Exception e)
     {
         var errorResponse = new
         {
            Success = false,
            Message = "File upload failed: " + e.Message
         };

         return Json(errorResponse);
     }

    // for String Data
    try
    {
        // Process string data
        var data = "success";
        // Return the string data
        return Content(data);
    }
    catch (Exception)
    {
        var data = "failed";
        return Content(data);
    }

    // for File Data
    try
    {
        // Example: Retrieve file path for stream.txt
        var filePath = "stream.txt"; // Example file path
        
        // Get full file path
        var fullPath = Path.GetFullPath(filePath);

        // Return the file
        return PhysicalFile(fullPath, "text/plain");
    }
    catch (Exception e)
    {
        // Handle file retrieval failure
        return Content("Failed to retrieve file response: " + e.Message, "text/plain");
    }
}

```

### Client-side configuration for saving and returning responses

The following example demonstrates the client-side action for saving files on the server and returning responses in JSON, String, and File formats.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## Remove action

The remove action is optional. Specify the URL to handle remove process from server. The remove handler receives the posted files and handle the remove operation in server.

    * When the files are removed successfully from server, the success event triggers to denote the process has completed.
    * When remove action fails, the event “failure” triggers with information, which cause failure in remove process.

> You can differentiate the file operation whether the success event triggers from save or remove action in its arguments **eventArgs.operation** .

You can remove the files which is not uploaded yet from locally by clicking the remove icon. In this case, the success or failure events will not be triggered.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs8" %}

### Server-side configuration for remove action

This section explains how to handle the server-side action for removing the file from server.

```csharp
[AcceptVerbs("Post")]
public void Remove()
{
    try
    {
        var fileSave = "";
        if (HttpContext.Current.Request.Form["cancel-uploading"] != null)
        {
            fileSave = HttpContext.Current.Server.MapPath("UploadingFiles");
        }
        else
        {
            fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
        }
        var fileName = HttpContext.Current.Request.Files["UploadFiles"].FileName;
        var fileSavePath = Path.Combine(fileSave, fileName);
        if (File.Exists(fileSavePath))
        {
            File.Delete(fileSavePath);
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = HttpContext.Current.Response;
        Response.Clear();
        Response.Status = "404 File not found";
        Response.StatusCode = 404;
        Response.StatusDescription = "File not found";
        Response.End();
    }
}

```

## Auto upload

By default, the uploader processes the files to upload once the files are selected and added in upload queue.
To upload manually, disable the **autoUpload** property. When you disable this property, you can use the action buttons to call upload all or clear all actions manually.
You can change those buttons text using the **buttons** property in the uploader component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs10" %}

## Sequential upload

By default, the uploader component process multiple files to upload simultaneously. When you enable the [sequentialUpload](https://ej2.syncfusion.com/react/documentation/api/uploader/#sequentialupload) property, the selected files will process sequentially (one after the other) to the server. If the file uploaded successfully or failed, the next file will upload automatically in this sequential upload. This feature helps to reduce the upload traffic and reduce the failure of file upload.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/sequential-upload-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/sequential-upload-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/sequential-upload-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/sequential-upload-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/sequential-upload-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/sequential-upload-cs2" %}

## Preloaded files

The uploader component allows you to preloaded the list of files that are uploaded in the server. The preloaded files are useful to view and remove the files from server that can be achieved by the **files** property. By default, the files are configured with uploaded successfully state on rendering file list.
The following properties are mandatory to configure the preloaded files:

    *   Name
    *   Size
    *   Type

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/basic-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/basic-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/basic-cs12" %}

## Adding additional HTTP headers with upload action

The Uploader component allows you to add the additional headers with `save` and `remove` action requests using the `uploading` and `removing` events, which helps to send validation token on file upload. Access the current request and set the request header within these events.

The following code block shows how to add the additional headers with save and remove action request.

`[Class-component]`

```ts

import { UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public path: object = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
  }

  public addHeaders(args: UploadingEventArgs) {
    (args.currentRequest as XMLHttpRequest).setRequestHeader('custom-header', 'Syncfusion');
  }

  public render(): JSX.Element {
    return (
       <UploaderComponent  ref = {upload => this.uploadObj = upload !}
          asyncSettings={this.path} uploading={this.addHeaders=this.addHeaders.bind(this)} removing={this.addHeaders=this.addHeaders.bind(this)} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));
```

`[Functional-component]`

```ts
import { UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App(){
    let uploadObj: UploaderComponent;
    const path: object = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    }

    function addHeaders(args: UploadingEventArgs) {
      (args.currentRequest as XMLHttpRequest).setRequestHeader('custom-header', 'Syncfusion');
    }

    return (
      <UploaderComponent  ref = {upload => uploadObj != upload }
          asyncSettings={path} uploading={addHeaders=addHeaders.bind(this)} removing={addHeaders=addHeaders.bind(this)} />
    );
}

ReactDOM.render(<App />, document.getElementById('fileupload'));
```

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [How to add confirm dialog to remove the files](./how-to/add-confirm-dialog-to-remove-the-files)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)
* [How to open and edit the uploaded files](./how-to/open-and-edit-the-uploaded-files)
