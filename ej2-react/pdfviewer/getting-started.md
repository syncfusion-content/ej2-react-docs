---
layout: post
title: Getting started with React Pdfviewer component | Syncfusion
description:  Checkout and learn about Getting started with React Pdfviewer component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps required to create a simple React PDF Viewer and demonstrates the basic usage of the PDF Viewer control in a React application.

## Prerequisites

To get started with Syncfusion React UI components, ensure the compatible version of React.
* React supported version >= `15.5.4+`.
* Required node version >= `14.0.0+`(NPM Package Manager).

## Setup for Local Development

1. Create a new React app [`create-react-app`](https://github.com/facebookincubator/create-react-app) and install it using the following command.

   ```
   npm install -g create-react-app
   ```

2. To setup basic `React` sample use following commands.

   <div class='tsx'>

   ```
   create-react-app quickstart --scripts-version=react-scripts-ts

   cd quickstart

   npm install
   ```

   </div>

   <div class='jsx'>

   ```
   create-react-app quickstart

   cd quickstart

   npm install
   ```

   </div>

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install PDF Viewer component, use the following command

```
npm install @syncfusion/ej2-react-pdfviewer --save
```

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

{% raw %}

```js
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print,TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
    return (<div>
        <div className='control-section'>
            <PdfViewerComponent id="container" documentPath="PDF_Succinctly.pdf"
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                Print, TextSelection, TextSearch, FormFields, FormDesigner]}/>
            </PdfViewerComponent>
        </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```
{% endraw %}

## Run the application

Use the following command to run the application in browser with the port number `localhost:8080`.

```
npm start
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pdfviewer/base-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pdfviewer/base-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/base-cs1" %}

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/)

## How to run the PDF Viewer web service

1. Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.
2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.
3. Use the below command to restore the required packages.

   ```
   dotnet restore
   ```

4. Use the below command to run the web service.

   ```
   dotnet run
   ```

5. You can see that the PDF Viewer server instance runs in the local host with the port number `localhost:5001` and navigate to the PDF Viewer Web control `localhost:5001/pdfviewer` which returns the default get response method. We can bind the link to the `serviceUrl` property of PDF Viewer as below.

```js
<PdfViewerComponent id="container" documentPath="PDF_Succinctly.pdf" serviceUrl="https://localhost:5001/pdfviewer" style={{ 'height': '640px' }}>
<Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]}/>
</PdfViewerComponent>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

> You can refer to our [React PDF Viewer](https://www.syncfusion.com/react-ui-components/react-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [React PDF Viewer example](https://ej2.syncfusion.com/react/demos/#/material/pdfviewer/default) to understand how to explains core features of PDF Viewer.