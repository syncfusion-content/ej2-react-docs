---
layout: post
title: Custom value to server in React File Manager component | Syncfusion
description: Learn here all about How to pass custom value to server in Syncfusion React File Manager component of Syncfusion Essential JS 2 and more.
control: File Manager 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Pass custom value to server in React File Manager component

The Syncfusion React File Manager component allows seamless backend server interaction by passing custom values. This enhances the functionality and security of file operations, particularly helpful for tasks like authentication, logging, or user role-based processing. In multi-user systems, it ensures file access permissions and actions are user-specific and secure. You can manage user-specific operations such as **Read**, **Delete**, **Rename**, **Create**, **Move**, **Copy**, **Details**, **Search**, **Upload**, **Download**, and **GetImage** using custom headers or query parameters. This guide demonstrates implementing these features using the [`beforeSend`](https://ej2.syncfusion.com/react/documentation/api/file-manager/#beforesend), [`beforeDownload`](https://ej2.syncfusion.com/react/documentation/api/file-manager/#beforedownload) and [`beforeImageLoad`](https://ej2.syncfusion.com/react/documentation/api/file-manager/#beforeimageload) events. Let's explore how to achieve this in [`Physical file system provider`](https://github.com/SyncfusionExamples/ej2-aspcore-file-provider).

## 1. Setting up the File Manager and provider

To create a basic File Manager component, start by following the easy steps in the [`Getting Started`](https://ej2.syncfusion.com/react/documentation/file-manager/getting-started) guide. This will allow you to manage files and folders on your system, whether they are stored physically or in the cloud.

For connecting the File Manager to a physical file system, check out the [`Physical file provider`](https://ej2.syncfusion.com/react/documentation/file-manager/file-system-provider#physical-file-system-provider) section. This part of the documentation will help you configure it correctly.

## 2. Handling File Operations 

After setting the File Manager component with the physical file system provider, you can handle file operations by passing custom values to the server. To pass custom values during the **Read**, **Delete**, **Rename**, **Create**, **Move**, **Copy**, **Details**, **Search** and **Upload** operations, utilize the [`beforeSend`](https://ej2.syncfusion.com/react/documentation/api/file-manager/#beforesend) event of the File Manager component. This event allows you to modify the request before it is sent to the server. You can add custom headers to the request to pass additional information to the server.

The `onBeforeSend` function is designed to enhance security by adding an authorization header to every outgoing AJAX request. Before a request is sent, this function is called, and it attaches the **Authorization** header with the value **User1** to the request. This ensures that the server can verify the request's authenticity and handle it accordingly.

{% raw %}

```ts
function onBeforeSend(args) {
    if (args.ajaxSettings) {
        args.ajaxSettings.beforeSend = function (args) {
            args.httpRequest.setRequestHeader('Authorization', 'User1');
        };
    }
}
<div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/FileManager/FileOperations",
                downloadUrl="http://localhost:{port}/api/FileManager/Download",
                uploadUrl="http://localhost:{port}/api/FileManager/Upload",
                getImageUrl="http://localhost:{port}/api/FileManager/GetImage"
            }} beforeSend={onBeforeSend.bind(this)}>
        </FileManagerComponent>
    </div>
</div>
```
{% endraw %}

In server-side, `FileOperations` and `Upload` methods access the **Authorization** header from the incoming HTTP request and perform the necessary operations.

```typescript

public class FileManagerController : Controller
{
    ...
    [Route("FileOperations")]
    public object FileOperations([FromBody] FileManagerDirectoryContent args)
    {
        var header = HttpContext.Request.Headers["Authorization"];
        ...
    }

    // uploads the file(s) into a specified path
    [Route("Upload")]
    public IActionResult Upload(string path, long size, IList<IFormFile> uploadFiles, string action)
    {
        var header = HttpContext.Request.Headers["Authorization"];
        ...
    }
    ...
}


```

## 3. Handling Download Operation

For the **download** operation, use the [`beforeDownload`](https://ej2.syncfusion.com/react/documentation/api/file-manager/#beforedownload) event, setting [`useFormPost`](https://ej2.syncfusion.com/react/documentation/api/file-manager/beforeDownloadEventArgs/#useformpost) as false to use a fetch request to send the custom header in beforesend event. Here an **Authorization** header is appended to fetch request headers with the value **User1**.

{% raw %}

```ts
function onBeforeDownload(args) {
    args.useFormPost = false;
    if (args.ajaxSettings) {
        args.ajaxSettings.beforeSend = function (args) {
            args.fetchRequest.headers.append('Authorization', 'User1');
        };
    }
}
<div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/FileManager/FileOperations",
                downloadUrl="http://localhost:{port}/api/FileManager/Download",
                uploadUrl="http://localhost:{port}/api/FileManager/Upload",
                getImageUrl="http://localhost:{port}/api/FileManager/GetImage"
            }} beforeDownload={onBeforeDownload.bind(this)}>
        </FileManagerComponent>
    </div>
</div>
```
{% endraw %}

In server-side, `Download` method access the **Authorization** header from the incoming HTTP request and perform the necessary operations.

```typescript
[Route("Download")]
public object Download([FromBody] FileManagerDirectoryContent args)
{
    var header = HttpContext.Request.Headers["Authorization"];
    ...
}

```

## 4. For GetImage Operation

For the **GetImage** operation, use the [`beforeImageLoad`](https://ej2.syncfusion.com/react/documentation/api/file-manager/#beforeimageload) event. Inside this event, set [`useImageAsUrl`](https://ej2.syncfusion.com/react/documentation/api/file-manager/beforeImageLoadEventArgs/#useImageAsUrl) to false to instruct the FileManager not to load the image directly via its URL but instead to use a fetch request. Here, attach the **Authorization** header with the value **User1** within the beforeSend event of the ajaxSettings.

{% raw %}

```ts
function onBeforeImageLoad(args) {
    args.useImageAsUrl = false;
    // Check if ajaxSettings are present in the arguments
    if (args.ajaxSettings) {
        (args.ajaxSettings).beforeSend = function (args) {
        // Append Authorization header with value 'User1' to fetchRequest headers
        args.fetchRequest.headers.append('Authorization', 'User1');
        };
    }
}

<div>
    <div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url="http://localhost:{port}/api/FileManager/FileOperations",
                downloadUrl="http://localhost:{port}/api/FileManager/Download",
                uploadUrl="http://localhost:{port}/api/FileManager/Upload",
                getImageUrl="http://localhost:{port}/api/FileManager/GetImage"
            }} beforeImageLoad={onBeforeImageLoad.bind(this)}>
        </FileManagerComponent>
    </div>
</div>

```
{% endraw %}

In server-side, `GetImage` method access the **Authorization** header from the incoming HTTP request and perform the necessary operations.

```typescript

// gets the image(s) from the given path
[Route("GetImage")]
public object GetImage([FromBody] FileManagerDirectoryContent args)
{
    var header = args.Authorization;
    return this.operation.GetImage(args.Path, args.Id, false, null, null);
}

```

> **Note:** View the complete [Github sample](https://github.com/SyncfusionExamples/How-to-pass-custom-values-from-client-to-server-in-filemanager) which includes all the above event along with service code for passing custom values to server.

