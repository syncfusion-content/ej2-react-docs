---
layout: post
title: Extract text Option in React Pdfviewer component | Syncfusion
description: Learn here all about Extract text Option in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Extract text Option
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Option in Syncfusion ##Platform_Name## Pdfviewer Control

The `extractTextOption` property in the Syncfusion PdfViewer control allows you to optimize memory usage by controlling the level of text extraction. This setting influences the data returned in the `extractTextCompleted` event. You can select one of the following options to determine the kind of text extraction and layout information to retrieve.

### Available Options:

**None:** No text information is extracted or returned. This is useful when you want to optimize memory usage and don't need any text data.

**TextOnly:** Extracts only the plain text from the document. This option excludes any layout or positional information.

**BoundsOnly:** Extracts layout information, such as bounds or coordinates, without including the plain text data.

**TextAndBounds:** Extracts both the plain text and the layout (bounds) information, which is the default behavior.

The following example demonstrates how to configure the `extractTextOption` property to control the level of text extraction:


```html
<body>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
 </script>
```
```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent 
        id="container" 
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib"
        extractTextOption='None'  // Options: 'None', 'TextOnly', 'BoundsOnly', 'TextAndBounds' 
       style={{ height: '680px' }}
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

### Description of Each Option
**extractTextOption.TextAndBounds (default):** This option returns both plain text and its positional data (bounds). Use this option when you need to access both the content of the PDF and its layout for further processing or analysis.

**extractTextOption.TextOnly:** This option returns only the plain text from the PDF. No positional or layout data is included. Note that when using this option, text search functionality will be disabled. In such cases, it is recommended to use findTextAsync for text searching.

**extractTextOption.BoundsOnly:** This option returns only the layout information (bounds) of the text, excluding the actual content. It is useful when the focus is on the position of text elements rather than the text itself.

**extractTextOption.None:** This option does not extract or return any text or layout information. It is used to optimize memory usage when no text extraction is necessary. This setting is only relevant for the `extractTextCompleted` event and cannot be used with the `ExtractText` method.

N> Text Search: When using the `ExtractTextOption.TextOnly` and `extractTextOption.None` option, the findText method will not work. Instead, you should use the findTextAsync method to perform text searches asynchronously.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)