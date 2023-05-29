---
layout: post
title: Convert image into binary format after uploading in React Uploader component | Syncfusion
description: Learn here all about Convert image into binary format after uploading in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Convert image into binary format after uploading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Convert image into binary format after uploading in React Uploader component

By default, the file upload component saves the uploaded image files in physical directories. Also, you can convert the images into binary format at server-side before saving the uploaded images. To retrieve binary format of image files, convert the posted file’s input stream into binary reader and read as bytes using ReadBytes method.

Refer to the below server-side code snippet

```csharp

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

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.