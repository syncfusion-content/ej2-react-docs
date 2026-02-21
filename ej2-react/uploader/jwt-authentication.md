---
layout: post
title: JWT Authentication in React Uploader component | Syncfusion
description: Learn here all about File Upload Using JWT Authentication in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: JWT Authentication  
documentation: ug
domainurl: ##DomainURL##
---

# File Upload Using JWT Authentication

JSON Web Token (JWT) is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authorization, where the client includes a JWT in the request header and the server validates it before processing the request. This approach ensures that only authenticated users can upload or remove files.

This guide demonstrates implementing JWT authentication with the Uploader component in a React application. The server-side implementation uses .NET Core to validate JWT tokens before handling save or remove operations.

## Client-Side Setup

Configure JWT authentication using the `uploading` and `removing` events of the Uploader component. Set the **asyncSettings** property to configure server endpoints for save and remove operations. Store the JWT in a property or variable for access during upload.

The `uploading` and `removing` events provide access to the `currentRequest` object. Use the `setRequestHeader` method to inject the JWT token into the request header for both save and remove actions.

The following code snippet provides the client-side logic for adding a JWT token during the save and remove actions.

```typescript
const Default = () => {
  let asyncSettings = {
    saveUrl:'https://services.syncfusion.com/react/production/api/FileUploader/Save',
    removeUrl:'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
  };

  const token = 'Your.JWT.Token'; // Replace with a valid JWT token

  const onFileUploading = (args) => {
    // Add JWT to request header before file upload
    args.currentRequest.setRequestHeader('Authorization', `Bearer ${token}`);
  };

  const onRemoveFile = (args) => {
    // Add JWT to request header before file removal
    args.postRawFile = false;
    args.currentRequest.setRequestHeader('Authorization', `Bearer ${token}`);
  };
  
  return (
    <div className="control-pane">
      <UploaderComponent
        id="fileUpload"
        asyncSettings={asyncSettings}
        removing={onRemoveFile}
        uploading={onFileUploading}
      ></UploaderComponent>
    </div>
  );
};
export default Default;
```
> Replace `Your.JWT.Token` with a valid JWT issued by your authentication system. For production, implement a token generation and refresh mechanism rather than hardcoding tokens.

## Server-Side Controller (ASP.NET Core)

The server-side controller receives and validates the JWT from request headers. If the token is valid, the server processes the save or remove operation; otherwise, it returns an unauthorized response.

The `Save` method validates JWT authorization before saving files to the `Uploaded Files` directory. The `Remove` method similarly verifies authorization before file deletion. The `IsAuthorized` helper method extracts the JWT from the `Authorization` header and validates it. Replace the validation logic with your actual token verification mechanism. The `SaveFileAsync` method handles file persistence, supporting chunked uploads with append functionality.

```csharp
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

public class HomeController : Controller
{
    private readonly string _uploads = Path.Combine(Directory.GetCurrentDirectory(), "Uploaded Files");

    public async Task<IActionResult> Save(IFormFile UploadFiles)
    {
        if (!IsAuthorized())
        {
            return Unauthorized();
        }

        if (UploadFiles == null || UploadFiles.Length == 0)
        {
            return BadRequest("Invalid file.");
        }

        Directory.CreateDirectory(_uploads);

        var filePath = Path.Combine(_uploads, UploadFiles.FileName);
        var append = UploadFiles.ContentType == "application/octet-stream"; // Handle chunk upload
        await SaveFileAsync(UploadFiles, filePath, append);

        return Ok();
    }

    private bool IsAuthorized()
    {
        var authorizationHeader = Request.Headers["Authorization"].ToString();
        if (string.IsNullOrEmpty(authorizationHeader) || !authorizationHeader.StartsWith("Bearer "))
        {
            return false;
        }
        var token = authorizationHeader["Bearer ".Length..];
        return token == "Your.JWT.Token";
    }

    private async Task SaveFileAsync(IFormFile file, string path, bool append)
    {
        await using var fileStream = new FileStream(path, append ? FileMode.Append : FileMode.Create);
        await file.CopyToAsync(fileStream);
    }

    public IActionResult Remove(string UploadFiles)
    {
        if (!IsAuthorized())
        {
            return Unauthorized();
        }

        try
        {
            var filePath = Path.Combine(_uploads, UploadFiles);
            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
                Response.StatusCode = 200;
                Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "File removed successfully";
            }
            else
            {
                Response.StatusCode = 404;
                Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = "File not found";
            }
        }
        catch (Exception e)
        {
            Response.StatusCode = 500;
            Response.HttpContext.Features.Get<IHttpResponseFeature>().ReasonPhrase = $"Error: {e.Message}";
        }

        return new EmptyResult();
    }
}
```