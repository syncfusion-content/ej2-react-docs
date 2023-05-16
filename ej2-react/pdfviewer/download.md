---
layout: post
title: Download in React Pdfviewer component | Syncfusion
description: Learn here all about Download in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Download 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Download in React Pdfviewer component

The PDF Viewer supports downloading the loaded PDF file. You can enable/disable the download using the following code snippet.

![Alt text](./images/download.png)

You can invoke download action using following code snippet.,

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function downloadClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.download();
  }
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
     <button onClick={downloadClicked}>Download</button>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        style={{ 'height': '640px' }}>
              <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, 
                                  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)