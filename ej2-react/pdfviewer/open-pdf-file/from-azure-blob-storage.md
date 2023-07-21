---
layout: post
title: Open PDF files from Azure Blob Storage in React Pdfviewer component | Syncfusion
description: Learn about how to load PDF files from Azure Blob Storage in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Azure Blob Storage
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Azure Blob Storage

To load a PDF file from Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in React

Start by following the steps provided in this [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<PdfViewerController> _logger;

public PdfViewerController(IConfiguration configuration, ILogger<PdfViewerController> logger)
{
  _storageConnectionString = configuration.GetValue<string>("connectionString");
  _storageContainerName = configuration.GetValue<string>("containerName");
  _logger = logger;
}
```

5. Modify the `Load()` method to load the PDF files from AWS S3.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 
  
public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.TryParse(jsonObject["isFileName"], out bool isFileName) && isFileName)
    {
      BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
      string fileName = jsonObject["document"];
      BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
      BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);
      blockBlobClient.DownloadTo(stream);
    }
    else
    {
      byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
      stream = new MemoryStream(bytes);
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
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
  "connectionString": "*Your Connection string from Azure*",
  "containerName": "*Your container name in Azure*"
}
```

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name 

**Step 3:**  Set the PDF Viewer Properties in React PDF viewer component

Set the `serviceUrl` property of the PDF viewer component to the URL of your web service project. Replace `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the documentPath property of the PDF viewer component to the name of the PDF file you want to load from Azure Blob Storage. Ensure that you pass the document name from the bucket to the documentPath property.

{% raw %}

```ts

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

```
{% endraw %}

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

N> replace `PDF_Succinctly.pdf` with the actual document name that you want to load from Azure blob storage container. Make sure to pass the document name from the bucket to the `documentPath` property of the PDF viewer component

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage).