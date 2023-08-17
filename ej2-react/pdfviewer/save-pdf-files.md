---
layout: post
title: Saving PDF files in React Pdfviewer component | Syncfusion
description: This page helps you to learn here all about saving PDF files in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Saving PDF files
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Saving PDF file

After editing the PDF file with various annotation tools, you will need to save the updated PDF to the server, database, or local file system.

## Save PDF file to Server

Need to save the modified PDF back to a server. To achieve this, proceed with the following steps

**Step 1:** Create a Simple PDF Viewer Sample in React

Start by following the steps provided in this [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Modify the `Download()` method to open it in the viewer using URL

```csharp

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  MemoryStream stream = new MemoryStream();

  string documentName = jsonObject["document"];
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.pdf";

  // Save the file on the server
  string serverFilePath = @"Path to where you need to save your file in the server";

  string filePath = Path.Combine(serverFilePath, fileName);

  using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
  {
    //Saving the new file in root path of application
    stream.CopyTo(fileStream);
    fileStream.Close();
  }
  return Content(documentBase);
}

```

**Step 3:**  Set the PDF Viewer Properties in React PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server.Modify the documentPath with the correct PDF Document URL want to load. 

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
          // Replace  correct PDF Document URL want to load
          documentPath="https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf"
          // Replace the "localhost:44396" with the actual URL of your server
          serviceUrl="https://localhost:44396/pdfviewer" 
          style={{ 'height': '640px' }}>
          
              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />

        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

[View sample in GitHub]()

## Download PDF file as a copy

In the built-in toolbar, you have an option to download the updated PDF to the local file system, you can use it to download the PDF file.

{% raw %}

```ts

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

export function App() {

  function downloadClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.download();
  }

return (<div>
    <div className='control-section'>
    <button onClick={downloadClicked}>Download</button>
        <PdfViewerComponent 
          id="container" 
          // Replace PDF_Succinctly.pdf with the actual document name that you want to load
          documentPath:"PDF_Succinctly.pdf"
          // Replace the "localhost:44396" with the actual URL of your server
          serviceUrl="https://localhost:44396/pdfviewer" 
          style={{ 'height': '640px' }}>

              {/* Inject the required services */}
              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, 
                                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}