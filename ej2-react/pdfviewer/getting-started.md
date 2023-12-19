---
layout: post
title: Getting Started with React PDF Viewer | Syncfusion
description: Learn here all about getting started with React PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React PDF Viewer Component

This section explains the steps required to create a simple Standalone React PDF Viewer and demonstrates the basic usage of the PDF Viewer control in a React application.

## Prerequisites

To get started with Syncfusion React UI components, ensure the compatible version of React.
* React supported version >= `15.5.4+`.
* Required node version >= `14.0.0+`(NPM Package Manager).

## Setup for Local Development

1. Create a new React app [`create-react-app`](https://github.com/facebookincubator/create-react-app) and install it using the following command.

```bash
npm install -g create-react-app
```

2. To setup basic `React` sample use following commands.

{% tabs %}
{% highlight js tabtitle="JSX" %}

create-react-app quickstart
cd quickstart
npm install

{% endhighlight %}
{% highlight js tabtitle="TSX" %}

npx create-react-app quickstart --template cra-template-typescript
cd quickstart 
npm install

{% endhighlight %}
{% endtabs %}

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

* To install PDF Viewer component, use the following command

```
npm install @syncfusion/ej2-react-pdfviewer --save
```
  
* Copy the contents of the ej2-pdfviewer-lib folder from ./node_modules/@syncfusion/ej2-pdfviewer/dist to the public directory using the command:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/ej2-pdfviewer-lib
```

* Confirm that there is an 'ej2-pdfviewer-lib' directory within your public directory.

* Validate that your server has been configured to utilize the Content-Type: application/wasm MIME type. Additional information can be found in the [Troubleshooting](./troubleshooting/troubleshooting) section.

## Adding PDF Viewer component and the CSS reference

* Add an HTML div element to act as the PDF Viewer element `public/index.html` using the following code.

```
   <!DOCTYPE html>
   <html lang="en">
   <head>
   <title>Syncfusion React PDF Viewer</title>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="description" content="Essential JS 2 for React Components" />
   <meta name="author" content="Syncfusion" />
   </head>
   <body>
      <div id='sample'>
         <div id='loader'>Loading....</div>
      </div>
   </body>
   </html>
```

* Add the React PDF Viewer component’s CSS reference as given below in `src/index.css` file.

```css
   @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
   @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
   @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
   @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
   @import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
```

* Add the React PDF Viewer as below in `src/index.js` file to render the PDF Viewer component.


{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>
         
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %} 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
          ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
 <div className='control-section'>
     <PdfViewerComponent 
      id="container" 
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" 
      resourceUrl="https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}>
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
     </PdfViewerComponent>
 </div>
</div>);
}
const rootElement = document.getElementById('sample')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in browser with the port number `localhost:8080`.

```
npm start
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
    <div className='control-section'>
        <PdfViewerComponent 
            id="container" 
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
    <div className='control-section'>
        <PdfViewerComponent 
            id="container" 
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion React PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/material.css" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
        <div id='sample'>
            <div id='loader'>Loading....</div>
        </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/base-cs1-standalone" %}

> You can refer to our [React PDF Viewer](https://www.syncfusion.com/react-components/react-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [React PDF Viewer example](https://ej2.syncfusion.com/react/demos/#/material/pdfviewer/default) to understand how to explains core features of PDF Viewer.

## Limitation over Server-Backed PDF Viewer to Standalone PDF Viewer control

When comparing a Standalone PDF Viewer to a Server-Backed PDF Viewer control, it's crucial to understand the limitations that the Standalone PDF Viewer may have in comparison. These limitations are important to consider

### PNG Image Support

The Standalone PDF Viewer does not have the capability to utilize PNG format for adding images to handwritten annotations ,custom stamp ,signature and initial form fields. It's important to be aware that only certain image formats, such as JPEG, are compatible for these purposes.

### Local File Access

* The Standalone PDF Viewer control does not have the capability to directly access and load local physical files from a user's device. As a result, it is not possible to use a documentPath to load a PDF file directly from a local server within the viewer.

* The Standalone PDF Viewer allows users to export annotations and form fields from the viewer, it's important to be aware that the viewer does not support the direct import of annotations and form fields from a locally specified file path. In other words, you can extract annotations and form fields from the viewer, but you cannot reintroduce them into the viewer from external sources by specifying a file path located on your local device.

N> These limitations are temporary and are expected to be addressed in the near future.