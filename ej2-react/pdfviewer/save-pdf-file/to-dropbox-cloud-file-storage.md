---
layout: post
title: Save PDF to Dropbox cloud storage in React PdfViewer | Syncfusion
description: Learn here all about how to save PDF files to Dropbox cloud file storage in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Save PDF files to Dropbox cloud file storage
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to Dropbox cloud file storage

PDF Viewer allows to save PDF file to Drop Box using either the Standalone or Server-backed PDF Viewer. Below are the steps and a sample to demonstrate how to save a PDF to Drop Box.

## Using Standalone PDF Viewer

To save a PDF file to Dropbox cloud file storage, you can follow the steps below

**Step 1** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a PDF Viewer sample in React

Follow the instructions provided in this [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in React. This will set up the basic structure of your PDF Viewer application.

**Step 3:** Modify the `src/index.js` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}

var toolItem1 = {
  prefixIcon: 'e-icons e-pv-download-document-icon',
  id: 'download_pdf',
  tooltipText: 'Download file',
  align: 'right'
};

function toolbarClick(args){
  if (args.item && args.item.id === 'download_pdf') {
    saveDocument();
  }
};

return (<div>
  <div className='control-section'>
  {/* Render the PDF Viewer */}
    <PdfViewerComponent
      ref={(scope) => {
        viewer = scope;
      }}
      created={loadDocument}
      id="container"
      resourceUrl="https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}
      toolbarSettings={{ showTooltip : true, toolbarItems: [ 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
          toolbarClick={toolbarClick}
      >

      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                          ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
    </PdfViewerComponent>
  </div>
</div>);

{% endraw %}
{% endhighlight %}
{% endtabs %} 

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to Drop Box using the filesUpload method of the Drop Box instance.

N> Replace **Your Access Token** with the actual Access Token of your Drop Box account.

```typescript
 function saveDocument() {
    viewer.saveAsBlob().then(function (value) {
      var reader = new FileReader();
      reader.onload = async () => {
        if (reader.result) {
          const dbx = new Dropbox({ accessToken: 'Your Access Token' });
          const uint8Array = new Uint8Array(reader.result);
          dbx.filesUpload({ path: '/' + viewer.fileName, contents: uint8Array })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.error(error);
            });
        }
      };
      reader.readAsArrayBuffer(value);
    });
  };
```

N> The **npm install dropbox** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using Server-Backed PDF Viewer

To save a PDF file to Dropbox cloud file storage, you can follow the steps below

**Step 1** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a PDF Viewer sample in React

Follow the instructions provided in this [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in React. This will set up the basic structure of your PDF Viewer application.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp

private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

5. Modify the `Download()` method to save the downloaded PDF files to Dropbox cloud file storage bucket

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public async Task<IActionResult> Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);

  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  string documentId = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentId);
  string fileName = result + "_downloaded.pdf";

  using (var dropBox = new DropboxClient(_accessToken))
  {
    using (var stream = new MemoryStream(documentBytes))
    {
      // Upload the document to Dropbox
      var uploadedFile = await dropBox.Files.UploadAsync(
        _folderName + "/" + fileName,
        WriteMode.Overwrite.Instance,
        body: stream
      );
    }
  }
  return Content(documentBase);
}

```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.

**Step 4:**  Set the PDF Viewer Properties in React PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Dropbox cloud file storage. Ensure that you correctly pass the document name from the files available in your dropbox folder to the documentPath property.

{% tabs %}
{% highlight ts tabtitle="Server-Backed" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          // Replace the "localhost:44396" with the actual URL of your server
          serviceUrl="https://localhost:44396/pdfviewer" 
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, 
                                  ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %} 

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)
