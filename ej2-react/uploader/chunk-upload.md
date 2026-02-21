---
layout: post
title: Chunk upload in React Uploader component | Syncfusion
description: Learn here all about Chunk upload in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Chunk upload 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chunk upload in React Uploader component

The Uploader sends the large file split into small chunks and transmits to the server using AJAX. You can also pause, resume, and retry the failed chunk file.

> * The chunk upload works in asynchronous upload only.
* This feature is available from the Essential<sup style="font-size:70%">&reg;</sup> Studio Vol 2, 2018 release.

To enable the chunk upload, set the size to [chunkSize](https://ej2.syncfusion.com/react/documentation/api/uploader/asyncSettingsModel/#chunksize) option of the upload and it receives the value in `bytes`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/chunk-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/chunk-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/chunk-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/chunk-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/chunk-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/chunk-cs2" %}

The chunk upload functionality divides large files into smaller data chunks for transmission. Chunks are sent to the server in **sequential order**—each chunk must complete successfully before the next one begins, ensuring proper file reassembly on the server. If a chunk fails, subsequent chunks are not sent. The [chunkSuccess](https://ej2.syncfusion.com/react/documentation/api/uploader/#chunksuccess) or [chunkFailure](https://ej2.syncfusion.com/react/documentation/api/uploader/#chunkfailure) event fires when each chunk completes. After all chunks upload successfully, the overall `success` event triggers.

> Chunk upload will work when the selected file size is greater than the specified chunk size. otherwise, it upload the files normally.

## Additional configurations

Fine-tune chunk upload behavior using the following properties:

* **RetryAfterDelay** - When a chunk request fails, the Uploader pauses for 500 milliseconds (default) before retrying. Customize this delay using the [asyncSettings.retryAfterDelay](https://ej2.syncfusion.com/react/documentation/api/uploader/asyncSettingsModel/#retryafterdelay) property by specifying a custom interval in milliseconds.

* **RetryCount** - Controls how many times the component attempts to resend a failed chunk. By default, the [retryCount](https://ej2.syncfusion.com/react/documentation/api/uploader/asyncSettingsModel/#retrycount) is set to 3. After exhausting all retries, the upload aborts and the [failure](https://ej2.syncfusion.com/react/documentation/api/uploader/#failure) event triggers.

The following sample specifies the chunk upload delay with 3000 milliseconds and the retry count is 5. The failure event is triggered as the wrong saveUrl is used.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/retry-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/retry-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/retry-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/retry-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/retry-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/retry-cs2" %}

## Resumable upload

Resume interrupted uploads using the [pause](https://ej2.syncfusion.com/react/documentation/api/uploader/#pause) and [resume](https://ej2.syncfusion.com/react/documentation/api/uploader/#resume) methods or UI controls. This feature supports recovery from network failures or manual pauses. The pause button appears after upload begins.

> Pause and resume functionality is available only when chunk upload is enabled.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/resumable-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/resumable-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/resumable-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/resumable-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/resumable-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/resumable-cs2" %}

## Cancel upload

The uploader component allows you to cancel the uploading file. This can be achieved by clicking the cancel icon or using the [cancel](https://ej2.syncfusion.com/react/documentation/api/uploader/#cancel) method. The [canceling](https://ej2.syncfusion.com/react/documentation/api/uploader/#canceling) event will be fired whenever the file upload request is canceled. While canceling the upload request, the partially uploaded file is removed from the server.

When the request fails, the pause icon is changed to retry icon. By clicking the retry icon, sends the failed chunk request again to the server and upload started from where it is failed. You can retry the canceled upload request again using retry UI or [retry](https://ej2.syncfusion.com/react/documentation/api/uploader/#retry) methods. But, if you retry this, the file upload action again starts from initial.

The following example explains about chunk upload with cancel support.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/cancel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/cancel-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/cancel-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/uploader/cancel-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/uploader/cancel-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/uploader/cancel-cs2" %}

> The retry action has different working behavior for chunk upload and default upload.
* Chunk upload - Retries to upload the failed request where it is failed previously.
* Default upload - Retries to upload the failed file again from initial.

## Server-Side configurations

The server-side implementation entirely depends on the application requirements and logic. The following code snippet provides the server-side logic to handle the chunk upload using the uploader components.

>The `chunk-index` and `total-chunk` values are accessible through the form data using `Request.Form`, which retrieves these details from the incoming request.
* `chunk-index` - Indicates the index of the current chunk being received.
* `total-chunk` - Represents the total number of chunks for the file being uploaded.

```csharp
public string uploads = Path.Combine(Directory.GetCurrentDirectory(), "Uploaded Files"); // Set your desired upload directory path

public async Task<IActionResult> Save(IFormFile UploadFiles)
{
    try
    {
        if (UploadFiles.Length > 0)
        {
            var fileName = UploadFiles.FileName;

            // Create upload directory if it doesn't exist
            if (!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }

            if (UploadFiles.ContentType == "application/octet-stream") //Handle chunk upload
            {
                // Fetch chunk-index and total-chunk from form data
                var chunkIndex = Request.Form["chunk-index"];
                var totalChunk = Request.Form["total-chunk"];

                // Path to save the chunk files with .part extension
                var tempFilePath = Path.Combine(uploads, fileName + ".part");

                using (var fileStream = new FileStream(tempFilePath, chunkIndex == "0" ? FileMode.Create : FileMode.Append))
                {
                    await UploadFiles.CopyToAsync(fileStream);
                }

                // If all chunks are uploaded, move the file to the final destination
                if (Convert.ToInt32(chunkIndex) == Convert.ToInt32(totalChunk) - 1)
                {
                    var finalFilePath = Path.Combine(uploads, fileName);

                    // Move the .part file to the final destination without the .part extension
                    System.IO.File.Move(tempFilePath, finalFilePath);

                    return Ok(new { status = "File uploaded successfully" });
                }

                return Ok(new { status = "Chunk uploaded successfully" });
            }
            else //Handle normal upload
            {
                var filePath = Path.Combine(uploads, fileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await UploadFiles.CopyToAsync(fileStream);
                }

                return Ok(new { status = "File uploaded successfully" });
            }
        }

        return BadRequest(new { status = "No file to upload" });
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { status = "Error", message = ex.Message });
    }
}

// Method to handle file removal (optional if needed)
public async Task<IActionResult> Remove(string UploadFiles)
{
    try
    {
        var filePath = Path.Combine(uploads, UploadFiles);

        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath);
            return Ok(new { status = "File deleted successfully" });
        }
        else
        {
            return NotFound(new { status = "File not found" });
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { status = "Error", message = ex.Message });
    }
}
```

>You can also explore [React File Upload](https://www.syncfusion.com/react-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
