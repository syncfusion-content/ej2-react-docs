---
layout: post
title: Getting started with Standalone React PDF Viewer component| Syncfusion
description: Learn here all about Getting started with Standalone React PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Standalone PDF Viewer component

This section explains the steps required to create a simple Standalone React PDF Viewer and demonstrates the basic usage of the PDF Viewer control in a React application.

## Prerequisites

To get started with Syncfusion React UI components, ensure the compatible version of React.
* React supported version >= `15.5.4+`.
* Required node version >= `14.0.0+`(NPM Package Manager).

## Setup for Local Development

1. Create a new React app [`create-react-app`](https://github.com/facebook/create-react-app) and install it using the following command.

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

N> The following changes apply to React version 18 and above.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib"
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
      resourceUrl="https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib"
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

N> When running the sample, if you encounter the **ERR_OSSL_EVP_UNSUPPORTED error** error, you need to run the following command in your terminal to resolve this issue. This error is related to OpenSSL, which is a cryptographic library used by Node.js for secure communication and encryption tasks. This specific error typically occurs when Node.js is trying to use cryptographic algorithms or routines that are not supported by the current version of OpenSSL being used.

```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %} 
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
            resourceUrl="https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib"
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %} 
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
            resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
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
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/base-cs1-standalone" %}

> You can refer to our [React PDF Viewer](https://www.syncfusion.com/react-components/react-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [React PDF Viewer example](https://ej2.syncfusion.com/react/demos/#/material/pdfviewer/default) to understand how to explains core features of PDF Viewer.
