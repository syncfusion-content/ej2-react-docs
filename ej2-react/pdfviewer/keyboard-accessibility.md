---
layout: post
title: Keyboard accessibility in React Pdfviewer component | Syncfusion
description: Learn here all about Keyboard accessibility in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Keyboard accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard accessibility in React Pdfviewer component

The react PDF Viewer supports the following keyboard interactions.

|**Action**|**Windows**|**Macintosh**|
|--|--|--|
|**Shortcuts for page navigation**|||
|Navigate to the first page|Home|Function + Left arrow|
|Navigate to the last page|End|Function + Right arrow|
|Navigate to the previous page|Up Arrow|Up Arrow|
|Navigate to the next page|Down Arrow|Down Arrow|
|**Shortcuts for Zooming**|||
|Perform zoom-in operation|CONTROL + =|COMMAND + =|
|Perform zoom-out operation|CONTROL + -|COMMAND + -|
|Retain the zoom level to 1|CONTROL + 0|COMMAND + 0|
|**Shortcut for Text Search**|||
|Open the search toolbar|CONTROL + F|COMMAND + F|
|**Shortcut for Text Selection**|||
|Copy the selected text or annotation or form field|CONTROL + C|COMMAND + C|
|Cut the selected text or annotation of the form field|CONTROL + X|COMMAND + X|
|Paste the selected text or annotation or form field|CONTROL + Y|COMMAND + Y|
|**Shortcuts for the general operation**|||
|Undo the action|CONTROL + Z|COMMAND + Z|
|Redo the action|CONTROL + Y|COMMAND + Y|
|Print the document|CONTROL + P|COMMAND + P|
|Delete the annotations and form fields|Delete|Delete|

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
       ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent

          ref={(scope) => { pdfviewer = scope; }}
          id="container"
          documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                                    ThumbnailView, Print,TextSelection, TextSearch]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}