---
layout: post
title: Extract Text in React Pdfviewer component | Syncfusion
description: Learn about the Extract Text in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Extract Text
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Method in Syncfusion PdfViewer Control

The `extractText` method of the Syncfusion PdfViewer control enables text extraction from one or more pages in a PDF document. This method is useful for retrieving the text content along with its associated data, such as the bounds of each text element.

### extractText Method
The extractText method retrieves text data from the specified page(s) of a PDF document. It can extract text from one page, a range of pages, or even provide detailed text data, depending on the options specified.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex Or isOptions:** This can either be the ending page index for the text extraction (for extracting from multiple pages) or an option specifying text extraction criteria for a single page.

**options (optional):** Specifies additional options, such as extracting plain text `TextOnly` or more detailed text data `TextAndBounds`. You can specify various options for text extraction. These options determine whether you want to extract plain text, text with bounds, or detailed text data.

***TextOnly:*** Extracts only the plain text content without bounds or additional information.

***TextAndBounds:*** Extracts text content along with its bounds (coordinates) within the PDF.

#### Returns:
The method returns a Promise that resolves to an object containing two properties:

**textData:** An array of TextDataSettingsModel objects, each representing the details of the extracted text (including bounds, page text, etc.).

**pageText:** A concatenated string of plain text extracted from the specified page(s).

### Usage of extractText in Syncfusion PdfViewer Control
Here is an example that demonstrates how to use the extractText method along with event handling:

```html
<body>
  <button onclick="extrctText()">extrctText</button>
  <button onclick="extrctsText()">extrctsText</button>
    <div id='sample'>
        <div id='loader'>Loading....</div>
    </div>
</body>

<script>
    // Function to extract text from a specific page (page 1)
    function extrctText(){ 
      var viewer = document.getElementById('container').ej2_instances[0];
	     viewer.extractText(1, 'TextOnly').then((val) => {
        console.log('Extracted Text from Page 1:'); 
        console.log(val);
      });
    }
    // Function to extract text from a range of pages (pages 0 to 2)
    function extrctsText(){              
      var viewer = document.getElementById('container').ej2_instances[0];
	   viewer.extractText(0, 2, 'TextOnly').then((val) => {
        console.log('Extracted Text from Pages 0 to 2:');
        console.log(val);
      });
    }
 </script>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %} 

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

{% endraw %}
{% endhighlight %}
{% endtabs %}

#### Explanation:
**Single Page Extraction:** The first `extractText` call extracts text from page 1 (`startIndex = 1`), using the 'TextOnly' option for plain text extraction.

**Multiple Pages Extraction:** The second extractText call extracts text from pages 0 through 2 (`startIndex = 0, endIndex = 2`), using the `TextOnly` option for plain text extraction.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)