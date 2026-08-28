---
layout: post
title: How to convert image to binary in React File Upload | Syncfusion
description: Convert uploaded images to binary format on the server for the React File Upload by reading the posted file stream with ReadBytes.
control: Convert image into binary format after uploading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to convert image to binary in React File Upload

By default, the Uploader component saves uploaded image files to physical directories on the server. For advanced scenarios requiring binary data manipulation, convert images to binary format server-side before storage. This approach enables scenarios such as database storage, image processing, or custom validation.

To retrieve the binary format of uploaded image files, convert the posted file's input stream into a binary reader and read the data as bytes using the ReadBytes method. The following code snippet demonstrates this server-side implementation:

```csharp

using System;
using System.IO;
using System.Linq;
using System.Web;

[AcceptVerbs("Post")]
public void Save()
{
    try
    {
        if (System.Web.HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                byte[] fileBytes;
                using (BinaryReader br = new BinaryReader(httpPostedFile.InputStream))
                {
                    fileBytes = br.ReadBytes((int)httpPostedFile.InputStream.Length);
                    // bytes will be stored in variable fileBytes
                }
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 200;
                Response.Status = "200 Success";
                Response.End();
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 204;
        Response.Status = "204 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

## See Also

* [How to open and edit the uploaded files](./open-and-edit-the-uploaded-files)
* [How to resize images before uploading it to the server](./resize-images-before-uploading-it-to-the-server)
```

>You can also explore [React File Upload](https://www.syncfusion.com/react-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.