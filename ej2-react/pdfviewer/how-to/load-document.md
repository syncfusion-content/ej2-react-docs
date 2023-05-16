---
layout: post
title: Load document in React Pdfviewer component | Syncfusion
description: Learn here all about Load document in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Load document 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load document in React Pdfviewer component

The PDF Viewer library allows to switch or load PDF documents dynamically after the initial load operation. To achieve this, load the PDF document as a base64 string or the file name into the PDF Viewer control using the  [**Load()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#load) method dynamically.

The following steps are used to load the PDF document dynamically.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to load the PDF document using a base64 string.

   ```
    <button id='load1'>LoadDocumentFromBase64</button>

    <script>
    // Load PDF document from Base64 string
    function load_1(){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.load('data:application/pdf;base64,'+ AddBase64String, null);
   }
    </script>
   ```

**Step 3:** Use the following code snippet to the load PDF document the using document name.

  ```
   <button id='load2'>LoadDocument</button>

    <script>
    // Load PDF document using file name
   function load_2(){
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.load('PDF_Succinctly.pdf', null);
   }
   </script>
 ```

Find the sample [how to load PDF documents dynamically](https://stackblitz.com/edit/react-qtjtbo?file=public%2Findex.html)

**Step 4:** Use the following code snippet to the load PDF document the using documentPath.

{% tab compileJsx=true%}

```tsx
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;
function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        style={{ 'height': '640px' }}>
        
            <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch ]}/>
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

{% endtab %}

Find the sample [how to load PDF documents using documentPath](https://stackblitz.com/edit/react-nszkto?file=src%2Findex.js)